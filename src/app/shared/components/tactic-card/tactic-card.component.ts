import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { Tactic } from '../../../core/models/tactic.model';

@Component({
  selector: 'app-tactic-card',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatProgressBarModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './tactic-card.component.html',
  styleUrls: ['./tactic-card.component.scss']
})
export class TacticCardComponent {
  @Input() tactic!: Tactic;
  @Input() applied: boolean = false;
  @Input() impactScore: number = 0;

  @Output() apply = new EventEmitter<string>();
  @Output() details = new EventEmitter<string>();

  getTacticIcon(): string {
    if (!this.tactic?.category) return 'build';
    const iconMap: Record<string, string> = {
      'escalabilidad': 'trending_up',
      'availability': 'availability',
      'performance': 'speed',
      'security': 'security',
      'cost': 'attach_money',
      'maintainability': 'build',
      'default': 'build'
    };
    return iconMap[this.tactic.category.toLowerCase()] || iconMap['default'];
  }

  getCategoryColor(): string {
    if (!this.tactic?.category) return '#607d8b';
    const colorMap: Record<string, string> = {
      'escalabilidad': '#4caf50',
      'availability': '#2196f3',
      'performance': '#ff9800',
      'security': '#f44336',
      'cost': '#9c27b0',
      'maintainability': '#795548'
    };
    return colorMap[this.tactic.category.toLowerCase()] || '#607d8b';
  }

  getImpactLabel(): string {
    if (this.impactScore >= 80) return 'Alto Impacto';
    if (this.impactScore >= 50) return 'Medio Impacto';
    if (this.impactScore > 0) return 'Bajo Impacto';
    return 'Sin evaluar';
  }

  getImpactColor(): string {
    if (this.impactScore >= 80) return '#4caf50';
    if (this.impactScore >= 50) return '#ff9800';
    if (this.impactScore > 0) return '#f44336';
    return '#9e9e9e';
  }

  onApplyTactic(): void {
    if (this.tactic?.id && !this.applied) {
      this.apply.emit(this.tactic.id);
    }
  }

  onShowDetails(): void {
    if (this.tactic?.id) {
      this.details.emit(this.tactic.id);
    }
  }

  trackImplementationProgress(): number {
    if (!this.tactic?.implementationSteps) return 0;
    const completed = this.tactic.implementationSteps.filter(step => step.completed).length;
    return Math.round((completed / this.tactic.implementationSteps.length) * 100);
  }

  getComplexityLevel(): string {
    if (!this.tactic?.complexity) return 'No especificada';
    const complexityMap: Record<string, string> = {
      'low': 'Baja',
      'medium': 'Media',
      'high': 'Alta'
    };
    return complexityMap[this.tactic.complexity.toLowerCase()] || this.tactic.complexity;
  }
}
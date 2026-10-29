import { Component, inject, OnInit, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CloudArchitectureService } from '../../core/services/cloud-architecture.service';
import { ArchitectureStyleCardComponent } from '../../shared/components/architecture-style-card/architecture-style-card.component';
import { TacticCardComponent } from '../../shared/components/tactic-card/tactic-card.component';
import { ArchitectureStyle } from '../../core/models/architecture-style.model';
import { Tactic } from '../../core/models/tactic.model';

@Component({
  selector: 'app-tactics-application',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ArchitectureStyleCardComponent,
    TacticCardComponent
  ],
  templateUrl: './tactics-application.component.html',
  styleUrls: ['./tactics-application.component.scss']
})
export class TacticsApplicationComponent implements OnInit {
  private cloudService = inject(CloudArchitectureService);

  stylesSignal = this.cloudService.getStylesSignal();
  tacticsSignal = this.cloudService.getTacticsSignal();
  appliedTacticsSignal = this.cloudService.getAppliedTacticsSignal();
  selectedStyleSignal = this.cloudService.getSelectedStyleSignal();

  impactEvaluation = computed(() => {
    const style = this.selectedStyleSignal();
    const tactics = this.appliedTacticsSignal();
    if (!style || tactics.length === 0) {
      return null;
    }
    return this.cloudService.evaluateImpact(style);
  });

  scalabilityScore = computed(() => {
    const impact = this.impactEvaluation();
    return impact ? impact.scalabilityScore : 0;
  });

  availabilityScore = computed(() => {
    const impact = this.impactEvaluation();
    return impact ? impact.availabilityScore : 0;
  });

  selectedStyleId: string | null = null;
  selectedTacticIds: Set<string> = new Set();

  ngOnInit(): void {
    this.cloudService.getArchitectureStyles().subscribe();
    this.cloudService.getTactics().subscribe();
  }

  onStyleSelect(styleId: string): void {
    this.selectedStyleId = styleId;
    this.cloudService.selectArchitectureStyle(styleId);
  }

  onTacticToggle(tacticId: string): void {
    if (this.selectedTacticIds.has(tacticId)) {
      this.selectedTacticIds.delete(tacticId);
    } else {
      this.selectedTacticIds.add(tacticId);
      this.cloudService.applyTactic(tacticId);
    }
  }

  isTacticApplied(tacticId: string): boolean {
    return this.selectedTacticIds.has(tacticId);
  }

  clearAllTactics(): void {
    this.selectedTacticIds.clear();
    this.cloudService.clearAppliedTactics();
  }

  getStyles(): ArchitectureStyle[] {
    return this.stylesSignal() || [];
  }

  getTactics(): Tactic[] {
    return this.tacticsSignal() || [];
  }

  getAppliedTactics(): Tactic[] {
    return this.appliedTacticsSignal() || [];
  }

  hasSelectedStyle(): boolean {
    return this.selectedStyleSignal() !== null;
  }

  getImpactSummary(): string {
    const impact = this.impactEvaluation();
    if (!impact) {
      return 'Seleccione un estilo de arquitectura y aplique tácticas para ver el impacto.';
    }
    return `Escalabilidad: ${impact.scalabilityScore}/100 | Disponibilidad: ${impact.availabilityScore}/100`;
  }
}
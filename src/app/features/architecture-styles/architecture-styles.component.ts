import { Component, OnInit, OnDestroy, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Subject, takeUntil, combineLatest } from 'rxjs';
import { CloudArchitectureService } from '../../core/services/cloud-architecture.service';
import { ArchitectureStyle } from '../../core/models/architecture-style.model';
import { Tactic } from '../../core/models/tactic.model';
import { ArchitectureStyleCardComponent } from '../../shared/components/architecture-style-card/architecture-style-card.component';

@Component({
  selector: 'app-architecture-styles',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    ArchitectureStyleCardComponent
  ],
  templateUrl: './architecture-styles.component.html',
  styleUrls: ['./architecture-styles.component.scss']
})
export class ArchitectureStylesComponent implements OnInit, OnDestroy {
  private readonly cloudService = inject(CloudArchitectureService);
  private readonly snackBar = inject(MatSnackBar);
  private readonly destroy$ = new Subject<void>();

  readonly styles = this.cloudService.getStylesSignal();
  readonly tactics = this.cloudService.getTacticsSignal();
  readonly selectedStyle = this.cloudService.getSelectedStyleSignal();
  readonly appliedTactics = this.cloudService.getAppliedTacticsSignal();

  readonly isLoading = signal<boolean>(true);
  readonly errorMessage = signal<string | null>(null);
  readonly selectedStyleTactics = computed(() => {
    const style = this.selectedStyle();
    const allTactics = this.tactics();
    if (!style || !allTactics.length) return [];
    return allTactics.filter(tactic => 
      style.recommendedTactics?.includes(tactic.id)
    );
  });

  readonly cloudSuitability = computed(() => {
    return (style: ArchitectureStyle) => {
      return style.isSuitableForCloud ? 'Alta' : 'Baja';
    };
  });

  readonly canApplyTactics = computed(() => {
    return this.selectedStyle() !== null;
  });

  ngOnInit(): void {
    this.loadData();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private loadData(): void {
    this.isLoading.set(true);
    this.errorMessage.set(null);

    combineLatest([
      this.cloudService.getArchitectureStyles(),
      this.cloudService.getTactics()
    ])
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: ([styles, tactics]) => {
          this.isLoading.set(false);
          if (styles.length === 0) {
            this.errorMessage.set('No se encontraron estilos de arquitectura disponibles');
          }
        },
        error: (err) => {
          this.isLoading.set(false);
          this.errorMessage.set('Error al cargar los datos: ' + err.message);
          this.showError('Error al cargar los estilos de arquitectura');
        }
      });
  }

  selectStyle(style: ArchitectureStyle): void {
    this.cloudService.selectArchitectureStyle(style.id);
    this.snackBar.open(
      `Estilo ${style.name} seleccionado`,
      'Cerrar',
      { duration: 3000, horizontalPosition: 'end', verticalPosition: 'top' }
    );
  }

  applyTactic(tactic: Tactic): void {
    if (!this.selectedStyle()) {
      this.showError('Por favor selecciona un estilo de arquitectura primero');
      return;
    }

    this.cloudService.applyTactic(tactic.id);
    this.snackBar.open(
      `Táctica '${tactic.name}' aplicada correctamente`,
      'Cerrar',
      { duration: 3000, horizontalPosition: 'end', verticalPosition: 'top' }
    );
  }

  isTacticApplied(tacticId: string): boolean {
    return this.appliedTactics().some(t => t.id === tacticId);
  }

  clearSelection(): void {
    this.cloudService.clearAppliedTactics();
    this.snackBar.open(
      'Selección limpiada correctamente',
      'Cerrar',
      { duration: 2000, horizontalPosition: 'end', verticalPosition: 'top' }
    );
  }

  getSuitabilityClass(isSuitable: boolean): string {
    return isSuitable ? 'suitability-high' : 'suitability-low';
  }

  getComplexityLevel(complexity: string): string {
    const levels: Record<string, string> = {
      'low': 'Baja',
      'medium': 'Media',
      'high': 'Alta'
    };
    return levels[complexity] || complexity;
  }

  private showError(message: string): void {
    this.snackBar.open(message, 'Cerrar', {
      duration: 5000,
      horizontalPosition: 'end',
      verticalPosition: 'top',
      panelClass: ['error-snackbar']
    });
  }

  trackByStyleId(index: number, style: ArchitectureStyle): string {
    return style.id;
  }

  trackByTacticId(index: number, tactic: Tactic): string {
    return tactic.id;
  }
}
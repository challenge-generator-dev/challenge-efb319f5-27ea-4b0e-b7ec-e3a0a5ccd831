// Servicio central para gestionar estilos y tácticas de arquitectura en la nube.
// Proporciona la lógica de negocio para listar, aplicar y evaluar arquitecturas.

import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ArchitectureStyle } from '../models/architecture-style.model';
import { Tactic } from '../models/tactic.model';

@Injectable({
    providedIn: 'root'
})
export class CloudArchitectureService {
    // Signals para mantener el estado reactivo
    private styles = signal<ArchitectureStyle[]>([]);
    private tactics = signal<Tactic[]>([]);
    private appliedTactics = signal<Tactic[]>([]);
    private selectedStyle = signal<ArchitectureStyle | null>(null);

    constructor(private http: HttpClient) {}

    // Obtiene los estilos de arquitectura disponibles (simulando carga desde assets)
    getArchitectureStyles(): Observable<ArchitectureStyle[]> {
        return this.http.get<ArchitectureStyle[]>('assets/data/architecture-styles.json').pipe(
            catchError(() => {
                console.warn('Fallback a estilos por defecto - error al cargar arquitectura-styles.json');
                return of(this.getDefaultArchitectureStyles());
            }),
            map(styles => {
                this.styles.set(styles);
                return styles;
            })
        );
    }

    // Obtiene las tácticas de arquitectura disponibles
    getTactics(): Observable<Tactic[]> {
        return this.http.get<Tactic[]>('assets/data/tactics.json').pipe(
            catchError(() => {
                console.warn('Fallback a tácticas por defecto - error al cargar tactics.json');
                return of(this.getDefaultTactics());
            }),
            map(tactics => {
                this.tactics.set(tactics);
                return tactics;
            })
        );
    }

    // Selecciona un estilo de arquitectura para evaluación
    selectArchitectureStyle(styleId: string): void {
        const style = this.styles().find(s => s.id === styleId);
        if (style) {
            this.selectedStyle.set(style);
        }
    }

    // Aplica una táctica de arquitectura al estilo seleccionado
    applyTactic(tacticId: string): void {
        const tactic = this.tactics().find(t => t.id === tacticId);
        if (tactic && !this.appliedTactics().some(t => t.id === tacticId)) {
            this.appliedTactics.update(tactics => [...tactics, tactic]);
        }
    }

    // Evalúa el impacto combinado de las tácticas aplicadas
    evaluateImpact(context: {
        currentLoad: number;
        expectedGrowth: number;
        costSensitive: boolean;
        highAvailabilityRequired: boolean
    }): {
        totalImpact: number;
        recommendations: string[];
        scalabilityScore: number;
        availabilityScore: number;
        costScore: number;
    } {
        const { currentLoad, expectedGrowth, costSensitive, highAvailabilityRequired } = context;
        let totalImpact = 0;
        let scalabilityScore = 0;
        let availabilityScore = 0;
        let costScore = 0;
        const recommendations: string[] = [];
        const appliedTactics = this.appliedTactics();

        // Evaluar impacto de cada táctica aplicada
        appliedTactics.forEach(tactic => {
            if (tactic.impact.scalability) {
                scalabilityScore += tactic.impact.scalability;
                if (tactic.category === 'scalability' && currentLoad > 1000) {
                    totalImpact += tactic.impact.scalability * 2;
                } else {
                    totalImpact += tactic.impact.scalability;
                }
            }

            if (tactic.impact.availability) {
                availabilityScore += tactic.impact.availability;
                if (highAvailabilityRequired) {
                    totalImpact += tactic.impact.availability * 2;
                    if (tactic.category === 'availability' && tactic.impact.availability >= 4) {
                        recommendations.push(`Táctica crítica para alta disponibilidad: ${tactic.name}`);
                    }
                } else {
                    totalImpact += tactic.impact.availability;
                }
            }

            if (tactic.impact.cost) {
                if (costSensitive) {
                    costScore -= tactic.impact.cost; // Menor costo es mejor
                } else {
                    costScore += tactic.impact.cost;
                }
            }
        });

        // Evaluar el estilo seleccionado
        const selectedStyle = this.selectedStyle();
        if (selectedStyle) {
            const styleSuitability = selectedStyle.isSuitableForCloud({
                highAvailability: highAvailabilityRequired,
                autoScaling: currentLoad > 1000,
                costSensitive
            });

            if (!styleSuitability) {
                recommendations.push(`Advertencia: El estilo '${selectedStyle.name}' puede no ser óptimo para este contexto cloud`);
            }
        }

        // Normalizar puntuaciones
        scalabilityScore = Math.min(Math.round(scalabilityScore / appliedTactics.length), 5);
        availabilityScore = Math.min(Math.round(availabilityScore / appliedTactics.length), 5);
        costScore = Math.min(Math.max(Math.round(costScore / appliedTactics.length), 1), 5);

        return {
            totalImpact: Math.min(totalImpact, 50), // Máximo 50
            recommendations,
            scalabilityScore,
            availabilityScore,
            costScore
        };
    }

    // Limpia las tácticas aplicadas
    clearAppliedTactics(): void {
        this.appliedTactics.set([]);
    }

    // Obtiene estilos por defecto cuando no hay datos
    private getDefaultArchitectureStyles(): ArchitectureStyle[] {
        return [
            {
                id: '1',
                name: 'Monolítica',
                description: 'Aplicación desplegada como una única unidad',
                advantages: ['Simplicidad', 'Fácil de desarrollar'], 
                disadvantages: ['Escalabilidad limitada', 'Difícil de mantener'], 
                useCases: ['Aplicaciones pequeñas'], 
                cloudCompatibility: 'low',
                isSuitableForCloud: () => false
            },
            {
                id: '2',
                name: 'Microservicios',
                description: 'Aplicación dividida en servicios independientes',
                advantages: ['Escalabilidad independiente', 'Despliegues independientes'], 
                disadvantages: ['Complejidad operativa', 'Comunicación entre servicios'], 
                useCases: ['Aplicaciones grandes', 'Sistemas distribuidos'], 
                cloudCompatibility: 'high',
                isSuitableForCloud: () => true
            }
        ];
    }

    // Obtiene tácticas por defecto cuando no hay datos
    private getDefaultTactics(): Tactic[] {
        return [
            {
                id: '1',
                name: 'Autoescalado',
                description: 'Escalar recursos automáticamente basado en la demanda',
                category: 'scalability',
                impact: { scalability: 5, cost: 4 },
                implementationDifficulty: 'medium',
                cloudServicesRequired: ['AWS Auto Scaling', 'Azure Scale Sets'],
                evaluateImpact: () => ({ totalImpact: 9, recommendations: ['Ideal para cargas variables'] })
            },
            {
                id: '2',
                name: 'Balanceo de carga',
                description: 'Distribuir el tráfico entre múltiples instancias',
                category: 'availability',
                impact: { availability: 5, performance: 4 },
                implementationDifficulty: 'medium',
                cloudServicesRequired: ['AWS Elastic Load Balancing', 'Azure Load Balancer'],
                evaluateImpact: () => ({ totalImpact: 9, recommendations: ['Mejorar disponibilidad y rendimiento'] })
            }
        ];
    }

    // Getters para los signals
    getStylesSignal() {
        return this.styles;
    }

    getTacticsSignal() {
        return this.tactics;
    }

    getAppliedTacticsSignal() {
        return this.appliedTactics;
    }

    getSelectedStyleSignal() {
        return this.selectedStyle;
    }
}
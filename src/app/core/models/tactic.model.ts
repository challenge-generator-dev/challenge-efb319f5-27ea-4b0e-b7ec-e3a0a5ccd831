// Modelo que define la estructura de una táctica de arquitectura en la nube.
// Representa acciones concretas para mejorar atributos de calidad.

export interface Tactic {
    id: string;
    name: string;
    description: string;
    category: 'scalability' | 'availability' | 'security' | 'performance' | 'cost';
    impact: {
        scalability?: number; // 1-5
        availability?: number; // 1-5
        performance?: number; // 1-5
        cost?: number; // 1-5 (1 = reduce cost, 5 = increases cost)
    };
    implementationDifficulty: 'low' | 'medium' | 'high';
    cloudServicesRequired: string[];
    // Método para evaluar el impacto global de la táctica
    evaluateImpact(context: { currentLoad: number; expectedGrowth: number }): {
        totalImpact: number;
        recommendations: string[];
    };
}

// Implementación concreta del modelo para ser usada en la aplicación

import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TacticModel {
    // Crea una instancia de Tactic con los valores por defecto
    createDefaultTactic(data: Partial<Tactic> = {}): Tactic {
        return {
            id: data.id || crypto.randomUUID(),
            name: data.name || 'Nueva Táctica',
            description: data.description || 'Descripción de la táctica arquitectónica',
            category: data.category || 'scalability',
            impact: data.impact || {
                scalability: 3,
                availability: 3,
                performance: 3,
                cost: 3
            },
            implementationDifficulty: data.implementationDifficulty || 'medium',
            cloudServicesRequired: data.cloudServicesRequired || [],
            evaluateImpact: (context) => {
                const { currentLoad, expectedGrowth } = context;
                let totalImpact = 0;
                const recommendations: string[] = [];

                // Evaluar impacto en escalabilidad
                if (this.impact.scalability) {
                    if (currentLoad > 1000 && expectedGrowth > 50) {
                        totalImpact += this.impact.scalability * 2;
                        recommendations.push(`Priorizar escalabilidad: carga actual ${currentLoad} con crecimiento esperado ${expectedGrowth}%`);
                    } else {
                        totalImpact += this.impact.scalability;
                    }
                }

                // Evaluar impacto en disponibilidad
                if (this.impact.availability) {
                    totalImpact += this.impact.availability;
                    if (this.impact.availability >= 4) {
                        recommendations.push('Considerar alta disponibilidad para sistemas críticos');
                    }
                }

                // Evaluar impacto en costo
                if (this.impact.cost) {
                    if (this.impact.cost >= 4) {
                        recommendations.push('Evaluar alternativas para reducir costos operativos');
                    }
                }

                return {
                    totalImpact: Math.min(totalImpact, 20), // Máximo 20
                    recommendations
                };
            }
        };
    }
}
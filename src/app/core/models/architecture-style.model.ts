// Modelo que define la estructura de un estilo de arquitectura en la nube.
// Representa la información clave para la toma de decisiones arquitectónicas.

export interface ArchitectureStyle {
    id: string;
    name: string;
    description: string;
    advantages: string[];
    disadvantages: string[];
    useCases: string[];
    cloudCompatibility: 'high' | 'medium' | 'low';
    // Método para evaluar si el estilo es adecuado para un contexto cloud dado
    isSuitableForCloud(scenario: { highAvailability: boolean; autoScaling: boolean; costSensitive: boolean }): boolean;
}

// Implementación concreta del modelo para ser usada en la aplicación

import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ArchitectureStyleModel {
    // Crea una instancia de ArchitectureStyle con los valores por defecto
    createDefaultStyle(data: Partial<ArchitectureStyle> = {}): ArchitectureStyle {
        return {
            id: data.id || crypto.randomUUID(),
            name: data.name || 'Nuevo Estilo',
            description: data.description || 'Descripción del estilo arquitectónico',
            advantages: data.advantages || [],
            disadvantages: data.disadvantages || [],
            useCases: data.useCases || [],
            cloudCompatibility: data.cloudCompatibility || 'medium',
            isSuitableForCloud: (scenario) => {
                const { highAvailability, autoScaling, costSensitive } = scenario;
                if (this.cloudCompatibility === 'high') {
                    return true;
                } else if (this.cloudCompatibility === 'medium') {
                    return !(costSensitive && highAvailability);
                } else {
                    return !highAvailability && !autoScaling;
                }
            }
        };
    }
}
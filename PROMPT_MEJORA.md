# Prompt para Mejorar el Codigo Base

Copia y pega el contenido del bloque de abajo en un asistente de IA (Claude, ChatGPT)
para obtener un ZIP con el proyecto completo y arrancable.

Si preferis trabajar en tu editor con un agente local (Claude Code, Cursor, Copilot), usa `AGENTS.md` en vez de este archivo: dice lo mismo pero para que escriba los archivos en disco.

## Las dos reglas que no se negocian

1. **Completa el boilerplate.** Todo lo que el proyecto necesita para compilar y arrancar: manifiesto de dependencias, punto de entrada, configuracion, capa de interfaz, y las capas del patron arquitectonico declarado. Eso es andamiaje y es tu trabajo.
2. **NO resuelvas el reto.** Los entregables de las fases son el trabajo de la persona. El hueco pedagogico se deja como esta: el proyecto arranca, pero lo que el reto pide implementar NO esta implementado.

Dicho de otra forma: si algo impide compilar, arreglalo. Si algo es logica de negocio incompleta, validaciones ausentes, un secreto hardcodeado o un patron mejorable, dejalo exactamente como esta — es lo que la persona tiene que encontrar.

## Como saber que terminaste

```bash
npm install && npm run build
```

Ese comando corriendo sin errores es la definicion de "listo".

---

```
## Briefing del reto (autoridad)
Este bloque manda sobre los archivos adjuntos. El stack y el rol salen de AQUÍ, no de un topic genérico ni de markdown placeholder.

### Perfil
Chapter Frontend, Especialidad Desarrollador, Tecnología Diseño de arquitectura, Trainee L2

### Brecha de conocimiento
Identifica claramente los estilos y tácticas de arquitectura y los ha aplicado en varios contextos, lo cuál debe incluir la nube., Identifica claramente los estilos y tácticas de arquitectura y los ha aplicado en varios contextos, lo cuál debe incluir la nube.

### Reto
- Tema: Aplicación de estilos y tácticas de arquitectura en diversos contextos, incluyendo cloud
- Seniority: trainee-l2
- Tipo: theoretical
- Título: Fundamentos de Arquitectura en la Nube
- Tiempo estimado: 4 horas

### Fases (trabajo del HUMANO — PROHIBIDO completarlas)
No implementes estos entregables. Dejalos como hueco pedagógico. El asistente solo materializa el proyecto arrancable para que el participante pueda trabajar.
- Fase 1: Identificación de Estilos de Arquitectura — objetivo: Entender y enumerar los principales estilos de arquitectura aplicables a la nube. — entregable (NO resolver): Lista de estilos de arquitectura con sus respectivas ventajas y desventajas.
- Fase 2: Aplicación de Tácticas de Arquitectura — objetivo: Aplicar tácticas de arquitectura específicas para mejorar la escalabilidad y la disponibilidad en la nube. — entregable (NO resolver): Descripción de las tácticas de arquitectura aplicadas y su impacto en la escalabilidad y la disponibilidad.
- Fase 3: Evaluación de Impacto — objetivo: Evaluar el impacto de las tácticas de arquitectura aplicadas en la nube. — entregable (NO resolver): Informe de evaluación del impacto de las tácticas de arquitectura aplicadas.

Eres un asistente experto en análisis, corrección y generación de archivos de cualquier tipo:
código fuente, documentación, hojas de cálculo, documentos Word, configuraciones, entre otros.
Voy a enviarte una cadena de texto que contiene uno o más archivos. Cada archivo está delimitado por un marcador con el siguiente formato:
// === ARCHIVO: ruta/del/archivo.extension ===
o también puede aparecer como:
## === ARCHIVO: ruta/del/archivo.extension ===
Lo que sigue al marcador puede ser:

El contenido real del archivo (código, texto, YAML, etc.)
Una descripción en lenguaje natural de lo que debe contener el archivo


TU TAREA
PASO 0 — ¿Esto es un proyecto o una carcasa?
Antes de extraer archivos, leé el Briefing (si está) y diagnosticá el adjunto.

Es CARCASA si ocurre CUALQUIERA de estas:
- No hay manifiesto de dependencias del stack del briefing (manifest.json de VTEX IO / package.json / pom.xml / build.gradle / requirements.txt / go.mod / *.tf / *.csproj, según corresponda)
- Hay un "binario" que en realidad es un comentario ("no puede ser mostrado como texto plano", placeholder .fig/.docx vacío)
- Los markdowns ya completan entregables de fases posteriores ("se implementó fade-in", lista de áreas ya resuelta)

Si es CARCASA:
- MATERIALIZÁ un proyecto que arranca en el stack del briefing (VTEX IO Store Framework, Angular, Terraform, pytest, Nest, etc.). Incluí manifiesto, punto de entrada y capa de interfaz reales.
- NO copies los markdowns de "solución" como si fueran el producto. Son ruido de generación.
- NO resuelvas las fases del briefing (están marcadas PROHIBIDO). Dejá el hueco pedagógico: el flujo existe, las microinteracciones/calidad/infra que el reto pide NO están hechas.
- Después seguí al PASO 5 (ZIP).

Si es un proyecto REAL (manifiesto + código que compila o arranca):
- Seguí PASO 1 en adelante. 🔴 compilación sí. 🟡 pedagógico no.

PASO 1 — Detección y extracción
Identifica todos los archivos presentes en la cadena. Para cada archivo extrae:

Su ruta completa (ej: src/main/java/com/pragma/Service.java)
Su contenido o descripción

PASO 2 — Clasificación por tipo
Clasifica cada archivo en una de estas categorías:
A) Código fuente (Java, Python, TypeScript, JavaScript, Kotlin, etc.)
B) Configuración / documentación (YAML, properties, Markdown, JSON, txt, etc.)
C) Excel (.xlsx, .xls, .csv)
D) Word (.docx, .doc)
E) Otro tipo de archivo binario o especial
PASO 3 — Clasificación de errores en código fuente

Objetivo prioritario: que el proyecto compile. No corrijas flujo de negocio ni lógica funcional.

Antes de modificar cualquier archivo de código fuente, clasifica cada problema encontrado en una de estas dos categorías:
🔴 ERROR DE COMPILACIÓN — corregir siempre
Son errores que impiden que el proyecto arranque, sin valor pedagógico:

Import faltante o incorrecto
Clase, método o variable referenciada que no existe en ningún archivo del proyecto
Error de sintaxis
Anotación con atributos inválidos
Dependencia ausente en pom.xml, package.json, etc.
Archivo referenciado que no existe y debe ser creado con implementación mínima

→ CORREGIR estos errores.
🟡 PROBLEMA FUNCIONAL O DE CALIDAD — preservar siempre
Son problemas que no impiden compilar. Pueden ser intencionales para el aprendizaje:

Clave secreta hardcodeada ("secret", "password123")
API deprecada que funciona pero tiene reemplazo moderno
Lógica de negocio incorrecta o incompleta
Código redundante o de baja legibilidad
Falta de validaciones en flujo de negocio
Patrones de diseño incorrectos pero funcionales
Concurrencia no segura
Configuración funcional pero no óptima

→ PRESERVAR tal cual. No corregir, no mejorar, no comentar.
PASO 4 — Procesamiento según tipo de archivo
Tipo A — Código fuente
Aplica únicamente las correcciones clasificadas como 🔴 ERROR DE COMPILACIÓN.
No alteres ningún elemento clasificado como 🟡 PROBLEMA FUNCIONAL O DE CALIDAD.
Si falta un archivo referenciado, créalo con la implementación mínima necesaria para compilar.
Tipo B — Configuración / documentación
Extrae el contenido tal cual, sin modificaciones salvo errores evidentes de sintaxis
(ej: YAML mal indentado).
Tipo C — Excel (.xlsx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un archivo Excel funcional con:

Fila de encabezados en negrita con color de fondo distintivo
Columnas con ancho ajustado al contenido
Tipos de dato correctos por columna
Validaciones si la descripción lo indica
Hojas nombradas descriptivamente si hay más de una
Filas de ejemplo si no hay datos reales

Tipo D — Word (.docx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un documento Word funcional con:

Estilos de título (Título 1, Título 2) para jerarquía de secciones
Fuente legible (Calibri o equivalente), tamaño 11-12pt para cuerpo
Márgenes estándar
Tabla de contenido si tiene múltiples secciones
Tablas con encabezados en negrita si aplica

Tipo E — Otro
Genera el archivo con el contenido o estructura más apropiada según la descripción.
PASO 5 — Exportación en ZIP
Empaqueta todos los archivos en un único archivo ZIP descargable respetando exactamente
la estructura de rutas indicada por los marcadores.
El ZIP debe incluir:

Archivos de código con únicamente los errores de compilación corregidos
Archivos de configuración y documentación sin cambios
Archivos nuevos creados para resolver dependencias de compilación faltantes
Archivos Excel y Word generados desde descripción

IMPORTANTE: El ZIP debe estar listo para descargar al finalizar. No preguntes si el usuario
quiere generarlo. Simplemente genera el archivo y proporciona el enlace de descarga; No debes desplegar en el chat el resumen de lo que arreglaste al Zip, solo entregalo.

REGLAS IMPORTANTES

No omitas ningún archivo aunque no tenga errores ni modificaciones
Respeta los nombres y rutas exactas indicadas por los marcadores
Si un archivo no tiene marcador claro, infiere el nombre desde su contenido
Si la cadena contiene solo documentación, placeholders o binarios fake, NO la reproduzcas:
aplicá PASO 0 (materializar el proyecto del briefing). Reproducir la carcasa es un fallo.
No agregues texto después del enlace de descarga del ZIP
No preguntes si el usuario quiere el ZIP: simplemente generalo siempre
Si detectas que falta un archivo de configuración necesario para compilar
(pom.xml, package.json, requirements.txt, build.gradle, etc.), créalo e inclúyelo
inferiendo su contenido desde los imports y frameworks detectados en el código
Nunca corrijas problemas 🟡 aunque parezcan obvios o fáciles de mejorar.
El participante que recibirá este proyecto los debe encontrar y resolver él mismo.


INPUT
Aquí está la cadena con los archivos:

// === ARCHIVO: package.json ===
{
  "name": "pago-rapido-architecture-styles",
  "version": "0.0.1",
  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "watch": "ng build --watch --configuration development",
    "test": "ng test",
    "lint": "ng lint"
  },
  "private": true,
  "dependencies": {
    "@angular/animations": "~20.2.0",
    "@angular/cdk": "~17.3.0",
    "@angular/common": "~20.2.0",
    "@angular/compiler": "~20.2.0",
    "@angular/core": "~20.2.0",
    "@angular/forms": "~20.2.0",
    "@angular/material": "~17.3.0",
    "@angular/platform-browser": "~20.2.0",
    "@angular/platform-browser-dynamic": "~20.2.0",
    "@angular/router": "~20.2.0",
    "rxjs": "~7.8.1",
    "tslib": "^2.6.2",
    "zone.js": "~0.14.4"
  },
  "devDependencies": {
    "@angular-devkit/build-angular": "~20.2.0",
    "@angular/cli": "~20.2.0",
    "@angular/compiler-cli": "~20.2.0",
    "@types/jasmine": "~5.1.0",
    "jasmine-core": "~5.1.0",
    "karma": "~6.4.0",
    "karma-chrome-launcher": "~3.2.0",
    "karma-coverage": "~2.2.0",
    "karma-jasmine": "~5.1.0",
    "karma-jasmine-html-reporter": "~2.1.0",
    "typescript": "~5.4.2"
  }
}

// === ARCHIVO: angular.json ===
{
  "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
  "version": 1,
  "newProjectRoot": "projects",
  "projects": {
    "pago-rapido-architecture-styles": {
      "projectType": "application",
      "schematics": {
        "@schematics/angular:component": {
          "standalone": true,
          "style": "scss"
        },
        "@schematics/angular:application": {
          "strict": true
        }
      },
      "root": "",
      "sourceRoot": "src",
      "prefix": "app",
      "architect": {
        "build": {
          "builder": "@angular-devkit/build-angular:application",
          "options": {
            "outputPath": "dist/pago-rapido-architecture-styles",
            "index": "src/index.html",
            "browser": "src/main.ts",
            "polyfills": [
              "zone.js"
            ],
            "tsConfig": "tsconfig.app.json",
            "assets": [
              "src/favicon.ico",
              "src/assets"
            ],
            "styles": [
              "src/styles.scss",
              "node_modules/@angular/material/prebuilt-themes/indigo-pink.css"
            ],
            "scripts": []
          },
          "configurations": {
            "production": {
              "budgets": [
                {
                  "type": "initial",
                  "maximumWarning": "500kb",
                  "maximumError": "1mb"
                },
                {
                  "type": "anyComponentStyle",
                  "maximumWarning": "2kb",
                  "maximumError": "4kb"
                }
              ],
              "outputHashing": "all"
            },
            "development": {
              "buildOptimizer": false,
              "optimization": false,
              "vendorChunk": true,
              "extractLicenses": false,
              "sourceMap": true,
              "namedChunks": true
            }
          },
          "defaultConfiguration": "production"
        },
        "serve": {
          "builder": "@angular-devkit/build-angular:dev-server",
          "configurations": {
            "production": {
              "browserTarget": "pago-rapido-architecture-styles:build:production"
            },
            "development": {
              "browserTarget": "pago-rapido-architecture-styles:build:development"
            }
          },
          "defaultConfiguration": "development"
        },
        "extract-i18n": {
          "builder": "@angular-devkit/build-angular:extract-i18n",
          "options": {
            "browserTarget": "pago-rapido-architecture-styles:build"
          }
        },
        "test": {
          "builder": "@angular-devkit/build-angular:karma",
          "options": {
            "polyfills": [
              "zone.js",
              "zone.js/testing"
            ],
            "tsConfig": "tsconfig.spec.json",
            "assets": [
              "src/favicon.ico",
              "src/assets"
            ],
            "styles": [
              "src/styles.scss",
              "node_modules/@angular/material/prebuilt-themes/indigo-pink.css"
            ],
            "scripts": []
          }
        },
        "lint": {
          "builder": "@angular-devkit/build-angular:tslint",
          "options": {
            "tsConfig": [
              "tsconfig.app.json",
              "tsconfig.spec.json",
              "tsconfig.json"
            ],
            "exclude": []
          }
        }
      }
    }
  },
  "defaultProject": "pago-rapido-architecture-styles",
  "cli": {
    "analytics": false
  }
}

// === ARCHIVO: tsconfig.json ===
{
  "compileOnSave": false,
  "compilerOptions": {
    "baseUrl": "./",
    "outDir": "./dist/out-tsc",
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "noImplicitOverride": true,
    "noPropertyAccessFromIndexSignature": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "sourceMap": true,
    "declaration": false,
    "downlevelIteration": true,
    "experimentalDecorators": true,
    "moduleResolution": "node",
    "importHelpers": true,
    "target": "ES2022",
    "module": "ES2022",
    "useDefineForClassFields": false,
    "lib": [
      "ES2022",
      "dom",
      "dom.iterable"
    ]
  },
  "angularCompilerOptions": {
    "enableI18nLegacyMessageIdFormat": false,
    "strictInjectionParameters": true,
    "strictInputAccessModifiers": true,
    "strictTemplates": true
  }
}


// === ARCHIVO: src/app/core/models/architecture-style.model.ts ===
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

// === ARCHIVO: src/app/core/models/tactic.model.ts ===
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

// === ARCHIVO: src/app/core/services/cloud-architecture.service.ts ===
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

// === ARCHIVO: src/main.ts ===
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error('Error al iniciar la aplicación PagoRápido:', err));

// === ARCHIVO: src/index.html ===
<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <title>PagoRápido - Arquitectura en la Nube</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="Aplicación de estilos y tácticas de arquitectura en la nube para PagoRápido">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
</head>
<body class="mat-typography">
  <app-root></app-root>
  <noscript>
    <div style="padding: 20px; text-align: center; font-family: sans-serif;">
      <h1>JavaScript requerido</h1>
      <p>Por favor, habilite JavaScript en su navegador para usar esta aplicación.</p>
    </div>
  </noscript>
</body>
</html>

// === ARCHIVO: src/app/app.config.ts ===
import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import { routes } from './app.routes';
import { cloudArchitectureReducer } from './core/store/cloud-architecture.reducer';
import { CloudArchitectureEffects } from './core/store/cloud-architecture.effects';
import { CloudArchitectureService } from './core/services/cloud-architecture.service';
import { ArchitectureStyleModel } from './core/models/architecture-style.model';
import { TacticModel } from './core/models/tactic.model';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withFetch()),
    provideAnimationsAsync(),
    provideStore({
      cloudArchitecture: cloudArchitectureReducer
    }),
    provideEffects([CloudArchitectureEffects]),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
      trace: false,
      traceLimit: 75
    }),
    {
      provide: CloudArchitectureService,
      useClass: CloudArchitectureService,
      deps: [HttpClient]
    },
    {
      provide: ArchitectureStyleModel,
      useClass: ArchitectureStyleModel
    },
    {
      provide: TacticModel,
      useClass: TacticModel
    }
  ]
};

// === ARCHIVO: src/app/features/architecture-styles/architecture-styles.component.ts ===
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

// === ARCHIVO: src/app/features/architecture-styles/architecture-styles.component.html ===
<div class="architecture-styles-container">
  <header class="page-header">
    <h1 class="page-title">Estilos de Arquitectura en la Nube</h1>
    <p class="page-subtitle">
      Selecciona un estilo de arquitectura para explorar tácticas de implementación
    </p>
  </header>

  @if (isLoading()) {
    <div class="loading-container">
      <mat-spinner diameter="50"></mat-spinner>
      <p>Cargando estilos de arquitectura...</p>
    </div>
  } @else if (errorMessage()) {
    <div class="error-container">
      <mat-icon class="error-icon">error_outline</mat-icon>
      <p>{{ errorMessage() }}</p>
      <button mat-raised-button color="primary" (click)="loadData()">
        <mat-icon>refresh</mat-icon>
        Reintentar
      </button>
    </div>
  } @else {
    <section class="styles-section">
      <h2 class="section-title">
        <mat-icon>architecture</mat-icon>
        Estilos de Arquitectura Disponibles
      </h2>
      
      <div class="styles-grid">
        @for (style of styles(); track style.id) {
          <app-architecture-style-card
            [styleData]="style"
            [isSelected]="selectedStyle()?.id === style.id"
            (select)="selectStyle($event)">
          </app-architecture-style-card>
        }
      </div>
    </section>

    @if (selectedStyle()) {
      <section class="tactics-section">
        <div class="section-header">
          <h2 class="section-title">
            <mat-icon>settings_applications</mat-icon>
            Tácticas Recomendadas para {{ selectedStyle()?.name }}
          </h2>
          <button 
            mat-stroked-button 
            color="warn"
            (click)="clearSelection()"
            class="clear-button">
            <mat-icon>clear</mat-icon>
            Limpiar Selección
          </button>
        </div>

        <div class="selected-style-info">
          <mat-card class="style-summary-card">
            <mat-card-header>
              <mat-card-title>{{ selectedStyle()?.name }}</mat-card-title>
              <mat-card-subtitle>
                Complejidad: {{ getComplexityLevel(selectedStyle()?.complexity || 'medium') }}
              </mat-card-subtitle>
            </mat-card-header>
            <mat-card-content>
              <p>{{ selectedStyle()?.description }}</p>
              <div class="suitability-badge">
                <span 
                  class="suitability-label"
                  [ngClass]="getSuitabilityClass(selectedStyle()?.isSuitableForCloud || false)">
                  Idoneidad para Cloud: {{ cloudSuitability()(selectedStyle()!) }}
                </span>
              </div>
            </mat-card-content>
          </mat-card>
        </div>

        @if (selectedStyleTactics().length > 0) {
          <div class="tactics-grid">
            @for (tactic of selectedStyleTactics(); track tactic.id) {
              <mat-card class="tactic-card" [class.applied]="isTacticApplied(tactic.id)">
                <mat-card-header>
                  <mat-card-title>{{ tactic.name }}</mat-card-title>
                  <mat-card-subtitle>{{ tactic.category }}</mat-card-subtitle>
                </mat-card-header>
                <mat-card-content>
                  <p class="tactic-description">{{ tactic.description }}</p>
                  <div class="tactic-metrics">
                    <mat-chip-set>
                      <mat-chip>
                        Impacto: {{ tactic.impact }}
                      </mat-chip>
                    </mat-chip-set>
                  </div>
                </mat-card-content>
                <mat-card-actions align="end">
                  @if (isTacticApplied(tactic.id)) {
                    <button mat-button disabled>
                      <mat-icon>check_circle</mat-icon>
                      Aplicada
                    </button>
                  } @else {
                    <button 
                      mat-raised-button 
                      color="primary"
                      (click)="applyTactic(tactic)">
                      <mat-icon>add</mat-icon>
                      Aplicar
                    </button>
                  }
                </mat-card-actions>
              </mat-card>
            }
          </div>
        } @else {
          <div class="no-tactics-message">
            <mat-icon>info_outline</mat-icon>
            <p>No hay tácticas específicas recomendadas para este estilo de arquitectura.</p>
          </div>
        }
      </section>
    } @else {
      <section class="selection-prompt">
        <mat-card>
          <mat-card-content>
            <mat-icon class="prompt-icon">touch_app</mat-icon>
            <h3>Selecciona un Estilo de Arquitectura</h3>
            <p>Haz clic en uno de los estilos de arriba para ver las tácticas recomendadas y comenzar a aplicar mejoras.</p>
          </mat-card-content>
        </mat-card>
      </section>
    }

    @if (appliedTactics().length > 0) {
      <section class="summary-section">
        <h2 class="section-title">
          <mat-icon>assessment</mat-icon>
          Resumen de Tácticas Aplicadas
        </h2>
        <div class="applied-tactics-list">
          @for (tactic of appliedTactics(); track tactic.id) {
            <mat-chip class="applied-tactic-chip">
              <mat-icon>check</mat-icon>
              {{ tactic.name }}
            </mat-chip>
          }
        </div>
        <div class="impact-evaluation">
          <button 
            mat-raised-button 
            color="accent"
            routerLink="/tactics-application">
            <mat-icon>analytics</mat-icon>
            Evaluar Impacto
          </button>
        </div>
      </section>
    }
  }
</div>


// === ARCHIVO: src/app/features/tactics-application/tactics-application.component.ts ===
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

// === ARCHIVO: src/app/features/tactics-application/tactics-application.component.html ===
<div class="tactics-application-container">
  <header class="page-header">
    <h1>Aplicación de Tácticas de Arquitectura</h1>
    <p class="subtitle">Seleccione un estilo de arquitectura y aplique tácticas para evaluar su impacto en escalabilidad y disponibilidad</p>
  </header>

  <section class="style-selection-section" *ngIf="!hasSelectedStyle()">
    <h2>Seleccione un Estilo de Arquitectura</h2>
    <div class="styles-grid">
      <app-architecture-style-card
        *ngFor="let style of getStyles()"
        [styleData]="style"
        [selected]="selectedStyleId === style.id"
        (selectStyle)="onStyleSelect($event)">
      </app-architecture-style-card>
    </div>
  </section>

  <section class="tactics-section" *ngIf="hasSelectedStyle()">
    <div class="selected-style-info">
      <h2>Estilo Seleccionado: {{ selectedStyleSignal()?.name }}</h2>
      <button class="btn-back" (click)="clearAllTactics(); selectedStyleId = null">
        Cambiar Estilo
      </button>
    </div>

    <div class="tactics-grid">
      <div class="available-tactics">
        <h3>Tácticas Disponibles</h3>
        <p class="hint">Haga clic en las tácticas que desea aplicar</p>
        <app-tactic-card
          *ngFor="let tactic of getTactics()"
          [tactic]="tactic"
          [applied]="isTacticApplied(tactic.id)"
          (toggleTactic)="onTacticToggle($event)">
        </app-tactic-card>
      </div>

      <div class="applied-tactics">
        <h3>Tácticas Aplicadas ({{ getAppliedTactics().length }})</h3>
        <div *ngIf="getAppliedTactics().length === 0" class="empty-state">
          <p>No hay tácticas aplicadas aún</p>
        </div>
        <app-tactic-card
          *ngFor="let tactic of getAppliedTactics()"
          [tactic]="tactic"
          [applied]="true"
          (toggleTactic)="onTacticToggle($event)">
        </app-tactic-card>
      </div>
    </div>

    <div class="impact-evaluation" *ngIf="getAppliedTactics().length > 0">
      <h2>Evaluación de Impacto</h2>
      <div class="score-cards">
        <div class="score-card scalability">
          <h3>Escalabilidad</h3>
          <div class="score-value">{{ scalabilityScore() }}/100</div>
          <div class="score-bar">
            <div class="score-fill" [style.width.%]="scalabilityScore()"></div>
          </div>
        </div>
        <div class="score-card availability">
          <h3>Disponibilidad</h3>
          <div class="score-value">{{ availabilityScore() }}/100</div>
          <div class="score-bar">
            <div class="score-fill" [style.width.%]="availabilityScore()"></div>
          </div>
        </div>
      </div>
      <p class="impact-summary">{{ getImpactSummary() }}</p>
    </div>
  </section>
</div>

// === ARCHIVO: src/app/shared/components/architecture-style-card/architecture-style-card.component.ts ===
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArchitectureStyle } from '../../../core/models/architecture-style.model';

@Component({
  selector: 'app-architecture-style-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './architecture-style-card.component.html',
  styleUrls: ['./architecture-style-card.component.scss']
})
export class ArchitectureStyleCardComponent {
  @Input() styleData!: ArchitectureStyle;
  @Input() selected: boolean = false;
  @Output() selectStyle = new EventEmitter<string>();

  onSelect(): void {
    if (this.styleData?.id) {
      this.selectStyle.emit(this.styleData.id);
    }
  }

  getCloudSuitability(): string {
    if (!this.styleData) return 'N/A';
    const scenario = {
      expectedLoad: 1000,
      requiredAvailability: 99.9,
      isDistributed: true
    };
    return this.styleData.isSuitableForCloud(scenario) ? 'Alta' : 'Baja';
  }

  getCharacteristicsList(): string[] {
    if (!this.styleData?.characteristics) {
      return [];
    }
    return this.styleData.characteristics;
  }

  getAdvantagesList(): string[] {
    if (!this.styleData?.advantages) {
      return [];
    }
    return this.styleData.advantages;
  }

  getDisadvantagesList(): string[] {
    if (!this.styleData?.disadvantages) {
      return [];
    }
    return this.styleData.disadvantages;
  }

  trackByIndex(index: number): number {
    return index;
  }
}

// === ARCHIVO: src/app/shared/components/architecture-style-card/architecture-style-card.component.html ===
<div class="architecture-style-card" [class.selected]="selected" [class.suitable-for-cloud]="style?.isSuitableForCloud('general')">
  <mat-card class="style-card">
    <mat-card-header>
      <div mat-card-avatar class="style-avatar" [style.background-color]="getAvatarColor()">
        <mat-icon>{{ getStyleIcon() }}</mat-icon>
      </div>
      <mat-card-title>{{ style?.name || 'Sin nombre' }}</mat-card-title>
      <mat-card-subtitle>{{ style?.category || 'Categoría no especificada' }}</mat-card-subtitle>
    </mat-card-header>

    <mat-card-content>
      <p class="style-description">{{ style?.description || 'Descripción no disponible' }}</p>

      <div class="style-metrics" *ngIf="style?.metrics">
        <h4>Métricas del Estilo</h4>
        <div class="metric-item">
          <span class="metric-label">Escalabilidad:</span>
          <span class="metric-value">{{ style?.metrics?.scalability || 'N/A' }}</span>
        </div>
        <div class="metric-item">
          <span class="metric-label">Disponibilidad:</span>
          <span class="metric-value">{{ style?.metrics?.availability || 'N/A' }}</span>
        </div>
        <div class="metric-item">
          <span class="metric-label">Complejidad:</span>
          <span class="metric-value">{{ style?.metrics?.complexity || 'N/A' }}</span>
        </div>
      </div>

      <div class="cloud-suitability" *ngIf="style?.isSuitableForCloud">
        <mat-chip-set>
          <mat-chip [class.cloud-friendly]="style.isSuitableForCloud('cloud-native')" [class.cloud-partial]="style.isSuitableForCloud('hybrid')">
            <mat-icon>{{ style.isSuitableForCloud('cloud-native') ? 'cloud_done' : style.isSuitableForCloud('hybrid') ? 'cloud_sync' : 'cloud_off' }}</mat-icon>
            {{ getCloudSuitabilityLabel() }}
          </mat-chip>
        </mat-chip-set>
      </div>

      <div class="use-cases" *ngIf="style?.useCases && style?.useCases?.length > 0">
        <h4>Casos de Uso Recomendados</h4>
        <ul>
          <li *ngFor="let useCase of style?.useCases">{{ useCase }}</li>
        </ul>
      </div>

      <div class="pros-cons" *ngIf="style?.pros || style?.cons">
        <div class="pros" *ngIf="style?.pros && style?.pros?.length > 0">
          <h5><mat-icon>thumb_up</mat-icon> Ventajas</h5>
          <ul>
            <li *ngFor="let pro of style?.pros">{{ pro }}</li>
          </ul>
        </div>
        <div class="cons" *ngIf="style?.cons && style?.cons?.length > 0">
          <h5><mat-icon>thumb_down</mat-icon> Desventajas</h5>
          <ul>
            <li *ngFor="let con of style?.cons">{{ con }}</li>
          </ul>
        </div>
      </div>
    </mat-card-content>

    <mat-card-actions align="end">
      <button mat-button color="primary" (click)="onSelect()" [disabled]="selected">
        <mat-icon>check_circle</mat-icon>
        Seleccionar
      </button>
      <button mat-button (click)="onDetails()">
        <mat-icon>info</mat-icon>
        Detalles
      </button>
    </mat-card-actions>
  </mat-card>
</div>

// === ARCHIVO: src/app/shared/components/tactic-card/tactic-card.component.ts ===
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

// === ARCHIVO: src/app/shared/components/tactic-card/tactic-card.component.html ===
<div class="tactic-card" [class.applied]="applied" [class.not-applied]="!applied">
  <mat-card class="tactic-material-card">
    <mat-card-header>
      <div mat-card-avatar class="tactic-avatar" [style.background-color]="getCategoryColor()">
        <mat-icon>{{ getTacticIcon() }}</mat-icon>
      </div>
      <mat-card-title>{{ tactic?.name || 'Táctica sin nombre' }}</mat-card-title>
      <mat-card-subtitle>
        <mat-chip-set>
          <mat-chip [style.background-color]="getCategoryColor()" [style.color]="'white'">
            {{ tactic?.category || 'Categoría no especificada' }}
          </mat-chip>
        </mat-chip-set>
      </mat-card-subtitle>
    </mat-card-header>

    <mat-card-content>
      <p class="tactic-description">{{ tactic?.description || 'Descripción no disponible' }}</p>

      <div class="tactic-metadata">
        <div class="metadata-item">
          <mat-icon>signal_cellular_alt</mat-icon>
          <span class="metadata-label">Complejidad:</span>
          <span class="metadata-value">{{ getComplexityLevel() }}</span>
        </div>
        <div class="metadata-item" *ngIf="tactic?.estimatedEffort">
          <mat-icon>schedule</mat-icon>
          <span class="metadata-label">Esfuerzo:</span>
          <span class="metadata-value">{{ tactic?.estimatedEffort }}</span>
        </div>
      </div>

      <div class="impact-evaluation" *ngIf="impactScore > 0 || applied">
        <h4>Evaluación de Impacto</h4>
        <div class="impact-header">
          <span class="impact-label">{{ getImpactLabel() }}</span>
          <span class="impact-score">{{ impactScore }}%</span>
        </div>
        <mat-progress-bar 
          mode="determinate" 
          [value]="impactScore"
          [color]="impactScore >= 50 ? 'primary' : 'accent'">
        </mat-progress-bar>
      </div>

      <div class="implementation-progress" *ngIf="tactic?.implementationSteps && tactic?.implementationSteps?.length > 0">
        <h4>Progreso de Implementación</h4>
        <mat-progress-bar 
          mode="determinate" 
          [value]="trackImplementationProgress()">
        </mat-progress-bar>
        <span class="progress-label">
          {{ tactic?.implementationSteps?.filter(s => s.completed)?.length || 0 }} / {{ tactic?.implementationSteps?.length }} pasos completados
        </span>
      </div>

      <div class="benefits-section" *ngIf="tactic?.benefits && tactic?.benefits?.length > 0">
        <h5><mat-icon>check_circle</mat-icon> Beneficios Esperados</h5>
        <ul>
          <li *ngFor="let benefit of tactic?.benefits">{{ benefit }}</li>
        </ul>
      </div>

      <div class="considerations-section" *ngIf="tactic?.considerations && tactic?.considerations?.length > 0">
        <h5><mat-icon>warning</mat-icon> Consideraciones</h5>
        <ul>
          <li *ngFor="let consideration of tactic?.considerations">{{ consideration }}</li>
        </ul>
      </div>

      <div class="related-styles" *ngIf="tactic?.relatedStyles && tactic?.relatedStyles?.length > 0">
        <h5><mat-icon>account_tree</mat-icon> Estilos Relacionados</h5>
        <mat-chip-set>
          <mat-chip *ngFor="let style of tactic?.relatedStyles">
            {{ style }}
          </mat-chip>
        </mat-chip-set>
      </div>
    </mat-card-content>

    <mat-card-actions align="end">
      <button 
        mat-raised-button 
        [color]="applied ? 'warn' : 'primary'" 
        (click)="onApplyTactic()"
        [disabled]="applied">
        <mat-icon>{{ applied ? 'check' : 'add' }}</mat-icon>
        {{ applied ? 'Aplicada' : 'Aplicar' }}
      </button>
      <button mat-button (click)="onShowDetails()">
        <mat-icon>info</mat-icon>
        Detalles
      </button>
    </mat-card-actions>
  </mat-card>
</div>


// === ARCHIVO: src/environments/environment.ts ===
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api',
  cloudServices: {
    compute: 'http://localhost:3001/compute',
    storage: 'http://localhost:3002/storage',
    database: 'http://localhost:3003/database',
    messaging: 'http://localhost:3004/messaging',
    cdn: 'http://localhost:3005/cdn'
  },
  awsConfig: {
    region: 'us-east-1',
    s3Bucket: 'pago-rapido-dev',
    lambdaEndpoint: 'http://localhost:4000/lambda',
    dynamoEndpoint: 'http://localhost:4000/dynamo',
    sqsEndpoint: 'http://localhost:4000/sqs',
    cloudwatchEndpoint: 'http://localhost:4000/cloudwatch'
  },
  azureConfig: {
    subscriptionId: 'dev-subscription-id',
    resourceGroup: 'pago-rapido-dev-rg',
    storageAccount: 'pagorapidodev',
    functionsEndpoint: 'http://localhost:5000/functions',
    cosmosEndpoint: 'http://localhost:5000/cosmos',
    serviceBusEndpoint: 'http://localhost:5000/servicebus'
  },
  gcpConfig: {
    projectId: 'pago-rapido-dev',
    region: 'us-central1',
    gcsBucket: 'pago-rapido-dev',
    cloudFunctionsEndpoint: 'http://localhost:6000/functions',
    firestoreEndpoint: 'http://localhost:6000/firestore',
    pubsubEndpoint: 'http://localhost:6000/pubsub'
  },
  features: {
    enableAnalytics: true,
    enableCaching: true,
    enableLogging: true,
    debugMode: true,
    mockExternalServices: true
  },
  timeouts: {
    apiRequest: 30000,
    cloudOperation: 120000,
    databaseQuery: 10000
  },
  scaling: {
    minInstances: 1,
    maxInstances: 3,
    targetCpuPercent: 70,
    scaleUpCooldown: 300,
    scaleDownCooldown: 600
  },
  monitoring: {
    logLevel: 'debug',
    metricsEnabled: true,
    tracingEnabled: true,
    sampleRate: 1.0
  },
  security: {
    corsOrigins: ['http://localhost:4200'],
    enableHttps: false,
    tokenExpiry: 3600,
    refreshTokenExpiry: 86400
  },
  cache: {
    ttl: 300,
    maxSize: 100,
    strategy: 'lru'
  },
  retryPolicy: {
    maxAttempts: 3,
    backoffMultiplier: 2,
    initialDelay: 1000,
    maxDelay: 10000
  },
  circuitBreaker: {
    failureThreshold: 5,
    timeout: 60000,
    resetTimeout: 30000
  }
};

// === ARCHIVO: src/assets/data/architecture-styles.json ===
{
  "architectureStyles": [
    {
      "id": "monolithic",
      "name": "Arquitectura Monolítica",
      "description": "Aplicación única y autocontenida donde todos los componentes están desplegados y ejecutan dentro de un mismo proceso.",
      "characteristics": [
        "Código fuente unificado",
        "Despliegue como unidad única",
        "Base de datos compartida",
        "Acoplamiento fuerte entre componentes"
      ],
      "pros": [
        "Simplicidad en desarrollo inicial",
        "Fácil depuración y testing",
        "Menor complejidad operativa",
        "Transacciones ACID fáciles de implementar"
      ],
      "cons": [
        "Difícil de escalar horizontalmente",
        "Acoplamiento dificulta mantenibilidad",
        "Cualquier cambio requiere redepliegue completo",
        "Punto único de fallo"
      ],
      "cloudSuitability": {
        "score": 3,
        "reason": "Limited cloud-native benefits, but can be deployed using containers"
      },
      "bestFor": ["Pequeños equipos", "MVP", "Aplicaciones con业务流程 simples"],
      "technologyStack": ["Spring Boot", ".NET Core", "Node.js", "Django"],
      "costEstimate": "Medium",
      "complexity": "Low"
    },
    {
      "id": "microservices",
      "name": "Arquitectura de Microservicios",
      "description": "Estilo arquitectónico que estructura una aplicación como un conjunto de servicios pequeños, autónomos y desplegables de forma independiente.",
      "characteristics": [
        "Servicios débilmente acoplados",
        "Base de datos por servicio",
        "Comunicación mediante APIs",
        "Despliegue independiente",
        "Organización alrededor de capacidades de negocio"
      ],
      "pros": [
        "Escalabilidad independiente por servicio",
        "Tecnologías heterogéneas por servicio",
        "Despliegue independiente",
        "Resistencia a fallos",
        "Equipos pequeños y autónomos"
      ],
      "cons": [
        "Complejidad en operaciones",
        "Gestión de datos distribuidos",
        "Latencia de red entre servicios",
        "Dificultad en debugging distribuido",
        "Mayor overhead en desarrollo inicial"
      ],
      "cloudSuitability": {
        "score": 10,
        "reason": "Ideal for cloud-native development, supports auto-scaling and container orchestration"
      },
      "bestFor": ["Grandes equipos", "Aplicaciones con múltiples dominios", "Alta disponibilidad requerida"],
      "technologyStack": ["Docker", "Kubernetes", "Spring Cloud", "AWS Lambda", "Azure Functions"],
      "costEstimate": "High",
      "complexity": "High"
    },
    {
      "id": "serverless",
      "name": "Arquitectura Serverless",
      "description": "Modelo de ejecución donde el proveedor de nube gestiona la infraestructura, permitiendo a los desarrolladores enfocarse exclusivamente en el código.",
      "characteristics": [
        "No gestión de servidores",
        "Ejecución bajo demanda",
        "Escalado automático",
        "Pago por uso",
        "Funciones como unidad de despliegue"
      ],
      "pros": [
        "Reducción de costos operativos",
        "Escalado automático instantáneo",
        "Mayor productividad",
        "Alta disponibilidad integrada"
      ],
      "cons": [
        "Vendor lock-in",
        "Cold starts",
        "Limitaciones en tiempo de ejecución",
        "Dificultad en debugging",
        "Costos impredecibles a gran escala"
      ],
      "cloudSuitability": {
        "score": 10,
        "reason": "Fully cloud-native, eliminates infrastructure management entirely"
      },
      "bestFor": ["Procesamiento de eventos", "APIs con tráfico variable", "Procesamiento asíncrono"],
      "technologyStack": ["AWS Lambda", "Azure Functions", "Google Cloud Functions", "Cloudflare Workers"],
      "costEstimate": "Low to High",
      "complexity": "Medium"
    },
    {
      "id": "event-driven",
      "name": "Arquitectura Orientada a Eventos",
      "description": "Patrón arquitectónico donde los componentes reaccionan a eventos asíncronos, desacoplando productores y consumidores de eventos.",
      "characteristics": [
        "Comunicación asíncrona",
        "Productores y consumidores independientes",
        "Message brokers",
        "Event sourcing opcional",
        "Procesamiento en tiempo real"
      ],
      "pros": [
        "Bajo acoplamiento",
        "Escalabilidad horizontal",
        "Resiliencia",
        "Tiempo real",
        "Auditoría mediante event log"
      ],
      "cons": [
        "Complejidad en gestión de eventos",
        "Garantía de entrega",
        "Dificultad en testing",
        "Ordenamiento de eventos",
        "Debugging complejo"
      ],
      "cloudSuitability": {
        "score": 9,
        "reason": "Excellent fit for cloud messaging services and event processing"
      },
      "bestFor": ["Procesamiento en tiempo real", "Sistemas de notificación", "Integración de servicios"],
      "technologyStack": ["Apache Kafka", "AWS SQS", "Azure Event Hub", "RabbitMQ", "Google Pub/Sub"],
      "costEstimate": "Medium to High",
      "complexity": "Medium to High"
    },
    {
      "id": "layered",
      "name": "Arquitectura por Capas",
      "description": "Patrón tradicional que organiza la aplicación en capas lógicas con responsabilidades específicas y dependencias unidireccionales.",
      "characteristics": [
        "Separación de responsabilidades",
        "Dependencia unidireccional",
        "Capa de presentación",
        "Capa de negocio",
        "Capa de datos"
      ],
      "pros": [
        "Claridad en estructura",
        "Mantenibilidad",
        "Testabilidad",
        "Separación de Concerns"
      ],
      "cons": [
        "Acoplamiento accidental entre capas",
        "Performance por indirección",
        "No óptimo para sistemas distribuidos"
      ],
      "cloudSuitability": {
        "score": 5,
        "reason": "Can be deployed to cloud but doesn't leverage cloud-native patterns"
      },
      "bestFor": ["Aplicaciones empresariales", "Sistemas con reglas de negocio complejas"],
      "technologyStack": ["Java EE", "ASP.NET MVC", "Express.js", "Laravel"],
      "costEstimate": "Low to Medium",
      "complexity": "Low"
    },
    {
      "id": "hexagonal",
      "name": "Arquitectura Hexagonal",
      "description": "Patrón que aísla el núcleo de negocio mediante puertos y adaptadores, permitiendo reemplazo de componentes externos sin modificar la lógica de dominio.",
      "characteristics": [
        "Dominio centrado",
        "Puertos de entrada y salida",
        "Adaptadores intercambiables",
        "Alta testabilidad",
        "Independencia de frameworks"
      ],
      "pros": [
        "Flexibilidad en tecnología",
        "Testabilidad del dominio",
        "Independencia de infraestructura",
        "Facilita migración"
      ],
      "cons": [
        "Curva de aprendizaje",
        "Sobreingeniería para proyectos pequeños",
        "Complejidad inicial"
      ],
      "cloudSuitability": {
        "score": 8,
        "reason": "Excellent for cloud migration and multi-cloud strategies"
      },
      "bestFor": ["Aplicaciones con evolución esperada", "Multi-cloud", "DDD projects"],
      "technologyStack": ["Any framework with DI", "Ports & Adapters pattern"],
      "costEstimate": "Medium",
      "complexity": "Medium"
    },
    {
      "id": "cqrs",
      "name": "CQRS (Command Query Responsibility Segregation)",
      "description": "Patrón que separa las operaciones de lectura y escritura en modelos distintos, optimizando cada operación independientemente.",
      "characteristics": [
        "Modelos separados para lectura y escritura",
        "Comandos para mutaciones",
        "Queries para lecturas",
        "Eventual consistency",
        "Proyección de datos"
      ],
      "pros": [
        "Optimización de lecturas y escrituras",
        "Escalabilidad independiente",
        "Modelos específicos por caso de uso",
        "Facilita auditoría"
      ],
      "cons": [
        "Complejidad en sincronización",
        "Consistencia eventual",
        "Curva de aprendizaje",
        "Overhead para casos simples"
      ],
      "cloudSuitability": {
        "score": 9,
        "reason": "Great for cloud databases and event-driven systems"
      },
      "bestFor": ["Sistemas con alta carga de lectura", "DDD projects", "Event sourcing"],
      "technologyStack": ["EventStoreDB", "MongoDB", "DynamoDB", "Azure Cosmos DB"],
      "costEstimate": "High",
      "complexity": "High"
    },
    {
      "id": "mesh",
      "name": "Service Mesh",
      "description": "Infraestructura dedicada que maneja la comunicación entre servicios, proporcionando características como observabilidad, seguridad y tráfico management.",
      "characteristics": [
        "Sidecar proxies",
        "Control plane separado",
        "mTLS automático",
        "Traffic splitting",
        "Observabilidad granular"
      ],
      "pros": [
        "Desacoplamiento de lógica de red",
        "Seguridad zero-trust",
        "Control de tráfico avanzado",
        "Observabilidad completa"
      ],
      "cons": [
        "Complejidad operativa",
        "Overhead de recursos",
        "Curva de aprendizaje",
        "Latencia adicional"
      ],
      "cloudSuitability": {
        "score": 10,
        "reason": "Native to Kubernetes and cloud-native ecosystems"
      },
      "bestFor": ["Microservices en producción", "Alta seguridad", "Multi-cluster"],
      "technologyStack": ["Istio", "Linkerd", "Envoy", "Consul Connect"],
      "costEstimate": "High",
      "complexity": "High"
    }
  ]
}

// === ARCHIVO: src/assets/data/tactics.json ===
{
  "tactics": [
    {
      "id": "auto-scaling",
      "name": "Auto-escalamiento",
      "description": "Táctica que ajusta automáticamente la capacidad de cómputo basándose en métricas de demanda como uso de CPU, memoria o solicitudes entrantes.",
      "category": "escalabilidad",
      "impact": {
        "scalability": 10,
        "availability": 8,
        "performance": 7,
        "cost": -3
      },
      "implementation": {
        "cloudServices": [
          "AWS Auto Scaling Groups",
          "Azure Virtual Machine Scale Sets",
          "GCP Managed Instance Groups"
        ],
        "kubernetes": "Horizontal Pod Autoscaler (HPA)",
        "configuration": {
          "metrics": ["CPU", "Memory", "Custom metrics"],
          "minReplicas": 2,
          "maxReplicas": 20,
          "targetCpuUtilization": 70
        }
      },
      "bestPractices": [
        "Definir métricas relevantes para el negocio",
        "Configurar warm-up periods",
        "Establecer límites máximos razonables",
        "Monitorizar costs en tiempo real"
      ],
      "commonPitfalls": [
        "Escalar demasiado agresivo",
        "No considerar costos",
        "Métricas mal configuradas",
        "Cold starts no manejados"
      ],
      "costConsideration": "Auto-escalamiento puede reducir costos al escalar hacia abajo en périodes de baja demanda, pero escalar excesivamente puede incrementar costos"
    },
    {
      "id": "circuit-breaker",
      "name": "Circuit Breaker",
      "description": "Patrón de resiliencia que previene fallos en cascada al detectar falhas excesivas y abrir el circuito, evitando llamadas a servicios no disponibles.",
      "category": "resiliencia",
      "impact": {
        "scalability": 2,
        "availability": 10,
        "performance": 5,
        "cost": 1
      },
      "implementation": {
        "libraries": [
          "Resilience4j",
          "Polly (.NET)",
          "Hystrix (deprecated)",
          "Envoy proxy"
        ],
        "cloudServices": [
          "AWS API Gateway throttling",
          "Azure Circuit Breaker pattern"
        ],
        "states": {
          "closed": "Operación normal, todas las llamadas pasan",
          "open": "Fallo detectado, llamadas retornan inmediatamente sin ejecutar",
          "half-open": "Prueba de recuperación, llamadas limitadas"
        },
        "configuration": {
          "failureThreshold": 50,
          "successThreshold": 2,
          "timeout": 60000
        }
      },
      "bestPractices": [
        "Definir tiempos de recuperación apropiados",
        "Implementar fallback strategies",
        "Monitorear estado del circuit breaker",
        "Configurar thresholds por servicio"
      ],
      "commonPitfalls": [
        "Thresholds muy agresivos",
        "No implementar fallback",
        "No monitorizar cambios de estado",
        "Timeouts demasiado largos"
      ],
      "costConsideration": "Reduce costos al evitar llamadas innecesarias a servicios caídos y prevenir facturación por retries fallidos"
    },
    {
      "id": "load-balancing",
      "name": "Balanceo de Carga",
      "description": "Técnica que distribuye el tráfico entrante entre múltiples instancias de aplicación para optimizar el uso de recursos y maximizar disponibilidad.",
      "category": "escalabilidad",
      "impact": {
        "scalability": 9,
        "availability": 9,
        "performance": 8,
        "cost": 2
      },
      "application": "multi-region",
      "implementation": {
        "cloudServices": [
          "AWS ALB/NLB",
          "Azure Load Balancer",
          "GCP Cloud Load Balancing"
        ],
        "kubernetes": "Ingress Controller, Service",
        "algorithms": [
          "Round Robin",
          "Least Connections",
          "Weighted",
          "IP Hash",
          "Least Response Time"
        ],
        "healthChecks": {
          "interval": 10,
          "timeout": 5,
          "unhealthyThreshold": 3,
          "healthyThreshold": 2
        }
      },
      "bestPractices": [
        "Implementar health checks efectivos",
        "Usar sticky sessions cuando sea necesario",
        "Configurar SSL termination",
        "Habilitar connection draining"
      ],
      "commonPitfalls": [
        "Health checks mal configurados",
        "No considerar stateful services",
        "Single point of failure en el balanceador",
        "No probar failover"
      ],
      "costConsideration": "Balanceadores managed tienen costo por hora y por GB procesado, pero permiten optimizar uso de instancias reduciendo costos totales"
    },
    {
      "id": "caching",
      "name": "Caché",
      "description": "Estrategia de almacenamiento temporal de datos frecuentemente accedidos para reducir latencia y carga en sistemas backend.",
      "category": "rendimiento",
      "impact": {
        "scalability": 6,
        "availability": 3,
        "performance": 10,
        "cost": -4
      },
      "implementation": {
        "layers": [
          "CDN (Edge caching)",
          "Application cache (In-memory)",
          "Distributed cache (Redis, Memcached)",
          "Database query cache"
        ],
        "cloudServices": [
          "Amazon CloudFront",
          "Azure CDN",
          "Google Cloud CDN",
          "Amazon ElastiCache",
          "Azure Cache for Redis"
        ],
        "strategies": [
          "Cache-aside",
          "Write-through",
          "Write-behind",
          "Refresh-ahead"
        ],
        "configuration": {
          "ttl": 3600,
          "maxSize": "2GB",
          "evictionPolicy": "LRU"
        }
      },
      "bestPractices": [
        "Definir TTL apropiados por tipo de dato",
        "Implementar cache invalidation",
        "Usar cache para datos estáticos",
        "Monitorizar hit rate"
      ],
      "commonPitfalls": [
        "Datos stale en cache",
        "Cache invalidation compleja",
        "Cold cache problems",
        "Memory pressure"
      ],
      "costConsideration": "Reduce costos significativamente al reducir carga en bases de datos y APIs, aunque añade costo de infraestructura de cache"
    },
    {
      "id": "multi-region",
      "name": "Arquitectura Multi-Región",
      "description": "Despliegue de aplicaciones en múltiples regiones geográficas para mejorar latencia y disponibilidad ante fallos regionales.",
      "category": "disponibilidad",
      "impact": {
        "scalability": 7,
        "availability": 10,
        "performance": 8,
        "cost": 8
      },
      "implementation": {
        "patterns": [
          "Active-Active",
          "Active-Passive",
          "Geographical routing"
        ],
        "cloudServices": [
          "AWS Global Accelerator",
          "Azure Traffic Manager",
          "Cloud DNS",
          "Amazon Route 53"
        ],
        "dataReplication": {
          "sync": "Synchronous for critical data",
          "async": "Asynchronous for eventual consistency",
          " CDC": "Change Data Capture for databases"
        }
      },
      "bestPractices": [
        "Seleccionar regiones con baja latencia",
        "Implementar failover automatizado",
        "Considerar regulaciones de datos",
        "Testear failover regularmente"
      ],
      "commonPitfalls": [
        "Costos de transferencia de datos",
        "Consistencia de datos",
        "Complejidad operacional",
        "Latencia de replicación"
      ],
      "costConsideration": "Alto costo por replicación de datos y múltiples instancias, pero puede reducir pérdida de negocio por outages"
    },
    {
      "id": "graceful-degradation",
      "name": "Degradación Elegante",
      "description": "Estrategia que permite a la aplicación mantener funcionalidad parcial cuando algunos componentes no están disponibles.",
      "category": "resiliencia",
      "impact": {
        "scalability": 2,
        "availability": 9,
        "performance": 3,
        "cost": -1
      },
      "implementation": {
        "approaches": [
          "Feature flags",
          "Fallback responses",
          "Default values",
          "Circuit breaker integration"
        ],
        "patterns": [
          "Bulkhead",
          "Fallback",
          "Timeout"
        ],
        "implementationExamples": {
          "payment": "Allow offline payments with sync later",
          "recommendations": "Show cached recommendations",
          "search": "Show popular searches when index unavailable"
        }
      },
      "bestPractices": [
        "Identificar funcionalidades críticas vs nice-to-have",
        "Proveer feedback claro al usuario",
        "Monitorear features degradadas",
        "Implementar recovery automático"
      ],
      "commonPitfalls": [
        "No definir comportamiento degradado",
        "Usar defaults incorrectos",
        "No testear escenarios de degradación",
        "Confundir degradación con fallo"
      ],
      "costConsideration": "Reduce costos al evitar fallos en cascada y mantener ingresos mediante funcionalidad parcial"
    },
    {
      "id": "async-messaging",
      "name": "Mensajería Asíncrona",
      "description": "Patrón de comunicación que desacopla productores y consumidores mediante colas de mensajes, permitiendo procesamiento asíncrono y resiliencia.",
      "category": "integracion",
      "impact": {
        "scalability": 8,
        "availability": 8,
        "performance": 6,
        "cost": 2
      },
      "implementation": {
        "messageBrokers": [
          "Apache Kafka",
          "RabbitMQ",
          "AWS SQS",
          "Azure Service Bus",
          "Google Pub/Sub"
        ],
        "patterns": [
          "Point-to-point",
          "Publish-Subscribe",
          "Message routing",
          "Dead letter queue"
        ],
        "guarantees": {
          "at-least-once": "Default for most use cases",
          "exactly-once": "Requires idempotent consumers",
          "at-most-once": "For non-critical notifications"
        }
      },
      "bestPractices": [
        "Diseñar mensajes idempotentes",
        "Implementar dead letter queues",
        "Monitorear queue depth",
        "Usar message batching para alto throughput"
      ],
      "commonPitfalls": [
        "Mensajes duplicados",
        "Ordenamiento no garantizado",
        "Message loss",
        "Complex error handling"
      ],
      "costConsideration": "Costo variable según proveedor y volumen de mensajes, pero puede reducir costos de infraestructura por procesamiento batch"
    },
    {
      "id": "infrastructure-as-code",
      "name": "Infraestructura como Código",
      "description": "Práctica de gestionar y aprovisionar infraestructura mediante código versionado, permitiendo reproducibilidad y automatización.",
      "category": "operaciones",
      "impact": {
        "scalability": 5,
        "availability": 6,
        "performance": 4,
        "cost": -5
      },
      "implementation": {
        "tools": [
          "Terraform",
          "AWS CloudFormation",
          "Azure Resource Manager",
          "Pulumi",
          "Ansible",
          "AWS CDK"
        ],
        "practices": [
          "Version control for infrastructure",
          "Automated testing (Terratest)",
          "Pipeline integration",
          "State management"
        ],
        "modules": {
          "reusability": "Use modules for common patterns",
          "organization": "Separate environments (dev, staging, prod)"
        }
      },
      "bestPractices": [
        "Usar remote state con locking",
        "Implementar review process para cambios",
        "Mantener módulos pequeños y enfocados",
        "Documentar variables y outputs"
      ],
      "commonPitfalls": [
        "State drift",
        "Secrets en código",
        "No testing de cambios",
        "State locking issues"
      ],
      "costConsideration": "Reduce costos operativos mediante automatización y previene costos de errores manuales"
    }
  ]
}

// === ARCHIVO: README.md ===
# PagoRápido Architecture Styles

## Descripción del Proyecto

Este proyecto es una aplicación Angular desarrollada para la empresa fintech PagoRápido, cuyo objetivo es explorar y aplicar diferentes estilos y tácticas de arquitectura en la nube. La herramienta permite a los usuarios seleccionar estilos de arquitectura cloud-native y aplicar tácticas específicas para mejorar la escalabilidad y disponibilidad de sus soluciones.

## Dominio del Sistema

La aplicación modela un sistema de evaluación de arquitecturas cloud que incluye:

- **Estilos de Arquitectura**: Representan patrones arquitectónicos，适合 diferentes escenarios de despliegue en la nube. Cada estilo tiene características que lo hacen más o menos apropiado según el contexto de la aplicación.
- **Tácticas de Arquitectura**: Representan técnicas específicas que pueden aplicarse sobre un estilo base para mejorar atributos de calidad como escalabilidad, disponibilidad, rendimiento y resiliencia.
- **Evaluación de Impacto**: Sistema que permite medir el impacto de las tácticas aplicadas sobre un estilo de arquitectura seleccionado.

## Requisitos del Sistema

- Node.js versión 20.x o superior
- npm versión 10.x o superior
- Angular CLI versión 20.x

## Instalación

```bash
npm install
```

Este comando instalará todas las dependencias definidas en el archivo `package.json`, incluyendo:
- Angular Core y módulos relacionados
- Angular Material para componentes de interfaz
- RxJS para programación reactiva
- Angular CDK para utilidades de componentes

## Ejecución del Proyecto

### Desarrollo

Para iniciar el servidor de desarrollo:

```bash
npm start
```

Este comando ejecuta `ng serve` y expone la aplicación en `http://localhost:4200/`. El servidor soporta hot-reload para reflejar cambios en tiempo real.

### Producción

Para construir la aplicación para producción:

```bash
npm run build
```

Los archivos generados se almacenan en el directorio `dist/pago-rapido-architecture-styles/`.

### Tests

Para ejecutar las pruebas unitarias:

```bash
npm test
```

Este comando ejecuta Karma con Jasmine para las pruebas unitarias del proyecto.

## Estructura del Proyecto

```
pago-rapido-architecture-styles/
├── src/
│   ├── app/
│   │   ├── core/
│   │   │   ├── models/          # Modelos de datos del dominio
│   │   │   │   ├── architecture-style.model.ts
│   │   │   │   └── tactic.model.ts
│   │   │   └── services/        # Servicios de negocio
│   │   │       └── cloud-architecture.service.ts
│   │   ├── features/
│   │   │   ├── architecture-styles/    # Componente de selección de estilos
│   │   │   └── tactics-application/    # Componente de aplicación de tácticas
│   │   └── shared/
│   │       └── components/      # Componentes reutilizables
│   │           ├── architecture-style-card/
│   │           └── tactic-card/
│   ├── assets/
│   │   └── data/                # Datos estáticos de estilos y tácticas
│   │       ├── architecture-styles.json
│   │       └── tactics.json
│   ├── environments/            # Configuraciones de entorno
│   ├── main.ts                  # Punto de entrada de la aplicación
│   └── index.html               # Documento HTML raíz
├── angular.json                 # Configuración del proyecto Angular
├── package.json                 # Dependencias y scripts del proyecto
└── tsconfig.json                # Configuración de TypeScript
```

## Arquitectura de la Aplicación

La aplicación sigue una arquitectura en capas estándar de Angular con las siguientes responsabilidades:

### Capa de Modelos (core/models)
Contiene las interfaces TypeScript que definen la estructura de datos del dominio:
- `ArchitectureStyle`: Define la estructura de un estilo de arquitectura cloud
- `Tactic`: Define la estructura de una táctica de arquitectura

### Capa de Servicios (core/services)
Contiene la lógica de negocio central:
- `CloudArchitectureService`: Gestiona el estado de estilos y tácticas usando Angular Signals

### Capa de Componentes Contenedores (features)
Componentes que orquestan la lógica de pantalla:
- `ArchitectureStylesComponent`: Lista y selecciona estilos de arquitectura
- `TacticsApplicationComponent`: Aplica y evalúa tácticas sobre un estilo

### Capa de Componentes Presentacionales (shared)
Componentes reutilizables para visualización:
- `ArchitectureStyleCard`: Tarjeta visual para mostrar un estilo
- `TacticCard`: Tarjeta visual para mostrar una táctica

## Tecnologías Utilizadas

- **Angular 20**: Framework principal de la aplicación
- **Angular Signals**: Manejo reactivo del estado
- **Angular Material**: Componentes de interfaz de usuario
- **RxJS**: Programación reactiva para manejo de flujos
- **TypeScript 5.4**: Tipado estático para mayor seguridad
- **SCSS**: Preprocesador de CSS para estilos

## Componentes Principales

### CloudArchitectureService

Este servicio es el núcleo de la aplicación y proporciona:
- Obtención de estilos de arquitectura disponibles
- Obtención de tácticas disponibles
- Selección de un estilo de arquitectura
- Aplicación de tácticas sobre el estilo seleccionado
- Evaluación del impacto de las tácticas aplicadas
- Señales reactivas para observar el estado

### ArchitectureStylesComponent

Componente que muestra la lista de estilos de arquitectura disponibles y permite seleccionar uno. Utiliza el servicio para obtener los datos y actualizar el estado.

### TacticsApplicationComponent

Componente que muestra las tácticas disponibles y permite aplicarlas sobre el estilo seleccionado. También incluye funcionalidad de evaluación de impacto.

## Flujo de Uso

1. El usuario accede a la aplicación y ve la lista de estilos de arquitectura disponibles
2. Selecciona un estilo de arquitectura según su escenario cloud
3. Navega a la sección de tácticas y aplica las que considere pertinentes
4. El sistema evalúa el impacto de las tácticas aplicadas
5. El usuario puede limpiar las tácticas aplicadas y comenzar de nuevo

## Datos del Dominio

Los estilos de arquitectura y tácticas se cargan desde archivos JSON estáticos en `src/assets/data/`. Estos archivos contienen definiciones completas de cada elemento del dominio con sus respective attributes y metadatos.

## Configuración de Entorno

El proyecto soporta múltiples configuraciones de entorno a través de los archivos en `src/environments/`. La configuración activa se determina en tiempo de compilación según el target de build.

## Contribución

Este proyecto fue diseñado para demostrar conceptos fundamentales de arquitectura cloud en el contexto de una aplicación Angular moderna. Los componentes siguen el patrón de contenedores y presentacionales para mantener una separación clara de responsabilidades.

## Licencia

Este proyecto es con fines educativos y de demostración para el programa de formación de PagoRápido.

```

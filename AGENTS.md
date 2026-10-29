# AGENTS.md

Instrucciones para el agente de IA que abra este repositorio (Claude Code, Cursor, Codex, Copilot, Gemini). Se cargan solas: no hay que pegar nada en ningun chat.

## Que es este repositorio

Es el codigo base de un reto de aprendizaje de Pragma: **Fundamentos de Arquitectura en la Nube**.

| | |
|---|---|
| Tema | Aplicación de estilos y tácticas de arquitectura en diversos contextos, incluyendo cloud |
| Nivel | trainee-l2 |
| Chapter | Frontend |
| Especialidad | Angular |
| Stack | TypeScript / Angular 20 |
| Patron arquitectonico | capas estándar con servicios cloud-aware |
| Tiempo estimado | 4 horas |

## Receta del stack

Esqueleto obligatorio:

- `package.json, angular.json y tsconfig.json en la raiz`
- `src/main.ts con bootstrapApplication`
- `src/app/app.config.ts con los providers`
- `src/app/core con servicios y modelos`
- `src/app/features con componentes contenedores`
- `src/app/shared con componentes presentacionales`

Trampas conocidas:

- No inventes versiones de npm: una version inexistente hace fallar `npm install` con ETARGET y el proyecto no instala. Usa rango con caret sobre una version que exista.
- El `package.json` tiene que ser JSON valido y UNICO: nada despues de la llave de cierre.
- Angular necesita `angular.json` y `tsconfig.json` ademas del `package.json`, o `ng build` no corre.

Dependencias:

- @angular/core 20.2.0
- @angular/common 20.2.0
- @angular/forms 20.2.0
- @angular/platform-browser 20.2.0
- @angular/platform-browser-dynamic 20.2.0
- @angular/router 20.2.0
- rxjs 7.8.1
- typescript 5.4.2
- zone.js 0.14.4
- @angular/material 17.3.0
- @angular/cdk 17.3.0

## Tu tarea

Dejar este proyecto en estado **verificable**: que el comando de verificacion corra sin errores. Escribi los archivos en disco, en este repositorio. No generes ZIPs ni archivos adjuntos.

En orden:

1. Corre `npm install && npm run build` y mira que falla.
2. Completa lo que falte de la lista de abajo: manifiesto de dependencias, punto de entrada, capa de interfaz y las capas del patron declarado.
3. Arregla SOLO los errores que impiden compilar o arrancar.
4. Volve a correr `npm install && npm run build` hasta que pase.
5. Pará ahí.

## Regla dura: las fases son trabajo del humano

**PROHIBIDO implementar los entregables de las fases.** El valor del reto esta en que la persona los resuelva. Tu trabajo es que tenga un proyecto que arranca; el hueco pedagogico se queda como esta.

No resuelvas nada de esto:

- **Fase 1 — Identificación de Estilos de Arquitectura**: Lista de estilos de arquitectura con sus respectivas ventajas y desventajas.
- **Fase 2 — Aplicación de Tácticas de Arquitectura**: Descripción de las tácticas de arquitectura aplicadas y su impacto en la escalabilidad y la disponibilidad.
- **Fase 3 — Evaluación de Impacto**: Informe de evaluación del impacto de las tácticas de arquitectura aplicadas.

Distincion operativa:

- **Arreglar** (si): import faltante, tipo que no existe, dependencia sin declarar, error de sintaxis, archivo referenciado que no existe.
- **No tocar** (no): logica de negocio incompleta, validaciones ausentes, secretos hardcodeados, APIs deprecadas que funcionan, concurrencia insegura, patrones mejorables. Eso es lo que la persona tiene que encontrar.

## Lo que falta y tenes que completar

No se detectaron huecos: estan los archivos declarados, el boilerplate del stack y ninguna referencia quedo colgando. Igual corre el comando de verificacion — que los archivos existan no garantiza que compilen.

### Presentes (21)

- `package.json`
- `angular.json`
- `tsconfig.json`
- `src/app/core/models/architecture-style.model.ts`
- `src/app/core/models/tactic.model.ts`
- `src/app/core/services/cloud-architecture.service.ts`
- `src/main.ts`
- `src/index.html`
- `src/app/app.config.ts`
- `src/app/features/architecture-styles/architecture-styles.component.ts`
- `src/app/features/architecture-styles/architecture-styles.component.html`
- `src/app/features/tactics-application/tactics-application.component.ts`
- `src/app/features/tactics-application/tactics-application.component.html`
- `src/app/shared/components/architecture-style-card/architecture-style-card.component.ts`
- `src/app/shared/components/architecture-style-card/architecture-style-card.component.html`
- `src/app/shared/components/tactic-card/tactic-card.component.ts`
- `src/app/shared/components/tactic-card/tactic-card.component.html`
- `src/environments/environment.ts`
- `src/assets/data/architecture-styles.json`
- `src/assets/data/tactics.json`
- `README.md`

### Capas del patron declarado

Cada una tiene que existir como directorio real con al menos un archivo. Codigo plano en la raiz no satisface el patron.

- `src/app/core`
- `src/app/features`
- `src/app/shared`
- `src/environments`
- `src/assets`

## Verificacion

```bash
npm install && npm run build
```

Ese comando pasando es la definicion de "terminado" para vos.

## Convenciones que tenes que respetar

- Un solo ecosistema: no declares librerias de otro lenguaje ni mezcles gestores de paquetes.
- Toda libreria que uses tiene que estar declarada en el manifiesto de dependencias.
- Todo import declarado tiene que usarse; todo tipo usado tiene que existir o venir de una dependencia declarada.
- El patron es **capas estándar con servicios cloud-aware**: los contratos (interfaces, puertos) los define la capa interna y los implementa la externa, nunca al revés.
- Los archivos que crees llevan implementacion real, no stubs: sin `TODO`, sin cuerpos vacios, sin `// getters y setters`.

## Contexto del candidato

Sirve para calibrar el nivel del codigo, no para resolver las fases.

- Perfil: Chapter Frontend, Especialidad Desarrollador, Tecnología Diseño de arquitectura, Trainee L2
- Brecha que el reto ataca: Identifica claramente los estilos y tácticas de arquitectura y los ha aplicado en varios contextos, lo cuál debe incluir la nube., Identifica claramente los estilos y tácticas de arquitectura y los ha aplicado en varios contextos, lo cuál debe incluir la nube.

---

*Generado por Challenge Generator — Pragma. `README.md` tiene el enunciado completo del reto para la persona. `PROMPT_MEJORA.md` es la variante para pegar en un chat, si se prefiere ese flujo.*

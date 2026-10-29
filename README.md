# Fundamentos de Arquitectura en la Nube

La empresa Fintech 'PagoRápido' necesita expandir sus servicios a la nube para mejorar la escalabilidad y la disponibilidad. Necesitas identificar y aplicar estilos y tácticas de arquitectura que permitan a 'PagoRápido' aprovechar al máximo las ventajas de la nube.

## Informacion General

| Campo | Valor |
|-------|-------|
| **Tema** | Aplicación de estilos y tácticas de arquitectura en diversos contextos, incluyendo cloud |
| **Nivel** | trainee-l2 |
| **Tipo** | theoretical |
| **Tiempo estimado** | 4 horas |

## Fases del Reto

### Fase 0: Configuración del Proyecto

**Objetivo:** Obtener el proyecto base funcional enviando el Código Base a un asistente de IA, que lo analizará, corregirá errores y generará un ZIP listo para usar.

**Tiempo estimado:** 15-30 minutos

**Instrucciones:**

- Asegúrate de tener instalado para ejecutar el proyecto: Node.js 18+, npm, VS Code o similar.
- Copia todo el contenido del campo **Código Base** de este reto — incluyendo el texto de instrucciones que aparece al inicio.
- Abre un asistente de IA (Claude en claude.ai, ChatGPT o Gemini — se recomienda Claude), pega el contenido copiado en el chat y envíalo.
- El asistente analizará los archivos, corregirá errores y generará un archivo ZIP descargable. Descárgalo y extráelo en la carpeta donde quieras trabajar.
- Ejecuta `npm install && npm run build` (o `npm start`). Si no hay errores, estás listo.

**Entregable:** El proyecto compila/arranca sin errores.

<details>
<summary>Pistas de conocimiento</summary>

- Copia el Código Base completo incluyendo el texto de instrucciones al inicio — esas instrucciones le indican al asistente exactamente qué hacer con los archivos.
- Si el asistente no genera el ZIP automáticamente al terminar el análisis, escríbele: "genera el ZIP ahora".
- Si el proyecto tiene errores al arrancar, comparte el mensaje de error con el mismo asistente para que lo corrija.

</details>

### Fase 1: Identificación de Estilos de Arquitectura

**Objetivo:** Entender y enumerar los principales estilos de arquitectura aplicables a la nube.

**Tiempo estimado:** 1 hora

**Instrucciones:**

- Investiga y enumera al menos tres estilos de arquitectura comunes en la nube.
- Describe brevemente las ventajas y desventajas de cada estilo.

**Entregable:** Lista de estilos de arquitectura con sus respectivas ventajas y desventajas.

<details>
<summary>Pistas de conocimiento</summary>

- Piensa en cómo cada estilo podría impactar en la escalabilidad y la disponibilidad de 'PagoRápido'.

</details>

### Fase 2: Aplicación de Tácticas de Arquitectura

**Objetivo:** Aplicar tácticas de arquitectura específicas para mejorar la escalabilidad y la disponibilidad en la nube.

**Tiempo estimado:** 2 horas

**Instrucciones:**

- Elige uno de los estilos de arquitectura identificados en la fase anterior.
- Identifica y aplica al menos dos tácticas de arquitectura específicas para ese estilo.
- Describe cómo estas tácticas mejorarían la escalabilidad y la disponibilidad de 'PagoRápido'.

**Entregable:** Descripción de las tácticas de arquitectura aplicadas y su impacto en la escalabilidad y la disponibilidad.

<details>
<summary>Pistas de conocimiento</summary>

- Considera tácticas como la replicación de datos, la segmentación de servicios y el uso de caché.

</details>

### Fase 3: Evaluación de Impacto

**Objetivo:** Evaluar el impacto de las tácticas de arquitectura aplicadas en la nube.

**Tiempo estimado:** 1 hora

**Instrucciones:**

- Analiza el impacto de las tácticas de arquitectura aplicadas en la escalabilidad y la disponibilidad de 'PagoRápido'.
- Identifica posibles desafíos y propone soluciones.
- Prepara un informe con tus hallazgos y recomendaciones.

**Entregable:** Informe de evaluación del impacto de las tácticas de arquitectura aplicadas.

<details>
<summary>Pistas de conocimiento</summary>

- Considera factores como el costo, la complejidad y el tiempo de implementación.

</details>

## Dimensiones Evaluadas

- **queEs**: ¿Qué son los estilos y tácticas de arquitectura en la nube?
- **paraQueSirve**: ¿Para qué sirven los estilos y tácticas de arquitectura en la nube?
- **comoSeUsa**: ¿Cómo se aplican los estilos y tácticas de arquitectura en la nube?
- **erroresComunes**: ¿Cuáles son los errores comunes al aplicar estilos y tácticas de arquitectura en la nube?
- **queDecisionesImplica**: ¿Qué decisiones implica la aplicación de estilos y tácticas de arquitectura en la nube?

## Criterios de Evaluacion

- Identificación correcta de estilos de arquitectura aplicables a la nube.
- Aplicación efectiva de tácticas de arquitectura específicas para mejorar la escalabilidad y la disponibilidad.
- Evaluación precisa del impacto de las tácticas de arquitectura aplicadas.
- Propuesta de soluciones efectivas para los desafíos identificados.

## Como trabajar con un asistente de IA

Hay dos caminos, elegi uno:

- **AGENTS.md** (recomendado) — instrucciones nativas del repo. Abri esta carpeta con tu agente local (Claude Code, Cursor, Codex, Copilot, Gemini) y las carga solo. Sabe que archivos faltan y con que comando se verifica, y completa el scaffold escribiendo en disco.
- **PROMPT_MEJORA.md** — para copiar y pegar en un chat (claude.ai, ChatGPT). Devuelve un ZIP con el proyecto. Sirve si no tenes un agente en el IDE.

Ninguno de los dos resuelve las fases del reto: eso es tu trabajo.

## Verificacion

El proyecto esta listo para trabajar cuando este comando corre sin errores:

```bash
npm install && npm run build
```

---

*Reto generado automaticamente por Challenge Generator - Pragma*

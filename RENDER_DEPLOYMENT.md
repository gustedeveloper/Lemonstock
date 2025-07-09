# Despliegue automático de una app React (Vite) en Render como Static Site

## 🎯 Objetivo

Desplegar una aplicación hecha con React + Vite + React Router en Render como Static Site.

## Paso a paso seguido

### 1. Configuración de Vite

**Archivo `vite.config.ts`:**

```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "./",
});
```

El uso de `base: "./"` permite que el proyecto funcione correctamente con rutas relativas, siendo más portable entre diferentes plataformas de hosting.

### 2. Configuración en Render

En la plataforma de Render:

1. **Conectar repositorio** desde GitHub
2. **Seleccionar tipo:** `Static Site`
3. **Configuración:**
   - **Build Command:** `npm install && npm run build`
   - **Publish Directory:** `dist`
   - **Branch:** `main` (o la rama principal)

### 3. Desencadenar el despliegue

Cada vez que se hace un push a la rama `main`, Render detecta automáticamente los cambios y ejecuta el proceso de build y despliegue.

El proceso incluye:

1. Clonación del repositorio
2. Instalación de dependencias (`npm install`)
3. Ejecución del build (`npm run build`)
4. Publicación del contenido de `dist/`

### 4. Resultado

El proyecto queda desplegado en: `https://[nombre-del-proyecto].onrender.com`

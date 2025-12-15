# Motor Music

Proyecto frontend enfocado en la práctica y aplicación de Sass (SCSS) utilizando una arquitectura basada en el patrón **7–1 simplificado** (al ser proyecto pequeño), aplicando metodología **BEM** para el nombre de clases.

- **Objetivo:** Consolidar buenas prácticas de organización y estilos, reutilización de variables y componentes mantenibles.
- **Arquitectura de estilos:** El proyecto utiliza patrón 7–1 simplificado, adaptado al tamaño de la aplicación.

---

## Estructura de archivos SCSS

```txt
scss/
│
├── abstracts/
│   └── _variables.scss
│
├── base/
│   └── _base.scss
│
├── layout/
│   └── _layout.scss
│
├── components/
│   ├── _slider.scss
│   └── _title.scss
│
├── utilities/
│   └── _animations.scss
│
└── main.scss
```

- El archivo **main.scss** actúa como punto único de entrada y es el encargado de importar todos los parciales.

---

## ¿Qué es un parcial?

- Un parcial es un archivo SCSS que:
  - Empieza con `_` (ej: `_variables.scss`) y **no se compila solo**.
  - Contiene una parte específica del CSS (variables, base, layout, componentes, etc.).

---

## Descripción de cada carpeta

### 1. abstracts/
Contiene todos los **helpers globales del proyecto**.

**¿Qué son los helpers globales del proyecto?**

Los helpers globales del proyecto corresponden a utilidades SCSS reutilizables como variables, mixins, funciones y placeholders.  
Estos archivos no generan estilos directamente, sino que proveen soporte a todo el sistema de estilos, permitiendo consistencia visual, reutilización de código y fácil mantenimiento.  
Por esta razón, se ubican en la carpeta `abstracts/` dentro de la arquitectura 7–1.

**Qué va en abstracts:**
- Variables de color
- Tipografías
- Tamaños
- Transiciones
- Variables compuestas (gradientes, backgrounds)

Estos archivos van aquí porque **no generan CSS por sí mismos**, sino que sirven como base reutilizable para todo el proyecto.  
Centralizar estos valores facilita el mantenimiento y la escalabilidad.

---

### 2. base/
Define los estilos base y globales de la aplicación.

**Qué va en base:**
- Estilos para `body`
- Tipografía global
- Estilos por elemento (`h1`, `p`, `a`)
- Reset o normalización básica

Van aquí porque establecen una base consistente para todo el sitio antes de aplicar layouts o componentes específicos.

---

### 3. layout/
Gestiona la estructura general de la página.

**Qué va en layout:**
- Contenedores principales
- Wrappers
- Footer
- Distribución general (flex, tamaños máximos)

Van aquí porque estos estilos definen **cómo se organiza el sitio**, no el comportamiento visual de componentes específicos.

---

### 4. components/
Contiene los componentes reutilizables del proyecto.

**Qué va aquí:**
- Slider
- Botones del slider
- Contenedor del título

Los componentes son bloques independientes, reutilizables y autocontenidos.  
Se implementan siguiendo la metodología BEM, lo que mejora la legibilidad y evita colisiones de estilos.

---

### 5. utilities/
Incluye utilidades de bajo nivel.

**Aquí van:**
- Animaciones (`@keyframes`)
- Helpers visuales
- Clases de estado (si existieran)

Van aquí porque son reglas que no representan componentes ni estructura, pero apoyan el funcionamiento visual del sitio.

---

## main.scss

Este es el archivo principal. No contiene estilos; importa los parciales en el orden correcto.

- Sass requiere un único punto de entrada
- Permite controlar dependencias
- Facilita compilación y mantenimiento

**Ejemplo:**

```scss
@use "abstracts/variables";
@use "base/base";
@use "layout/layout";
@use "components/slider";
@use "utilities/animations";
```

---

## Metodologías aplicadas

- Sass (SCSS)
- Arquitectura 7–1 (simplificada)
- BEM (Block Element Modifier)
- Variables compuestas
- Animaciones con `@keyframes`
- Diseño responsive

---

## Estado del proyecto

Versión inicial funcional (MVP) enfocada en estructura, organización y buenas prácticas de estilos.

---

## Instalación y compilación de Sass

Este proyecto utiliza Sass (SCSS) como preprocesador de estilos.  
Los archivos `.scss` se compilan en un único archivo CSS utilizado por el navegador.

### Requisitos

- Node.js (versión LTS recomendada)
- npm (incluido con Node.js)
- Sass (Dart Sass)

Verificar instalaciones con:

```bash
node -v
npm -v
sass --version
```

### Instalar Sass

**Opción 1: Instalación global (recomendada para proyectos académicos)**

```bash
npm install -g sass
```

**Opción 2: Instalación local en el proyecto**

```bash
npm install --save-dev sass
```

---

## Estructura de compilación

- Archivo de entrada: `scss/main.scss`
- Archivo de salida: `css/styles.css`

### Compilación manual

```bash
sass scss/main.scss css/styles.css
```

### Compilación en modo watch (recomendado)

```bash
sass --watch scss/main.scss:css/styles.css
```

---

## Uso en el proyecto

El archivo CSS generado es enlazado directamente en el HTML:

```html
<link rel="stylesheet" href="./css/styles.css">
```

---

## Importante

- Nunca se enlazan archivos `.scss` directamente en el navegador.
- Solo el archivo CSS compilado se debe utilizar en producción.
- Se editan únicamente archivos `.scss`.
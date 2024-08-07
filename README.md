# Documentación de la Arquitectura y Decisiones de Diseño

## 1. **Resumen del Proyecto**

- **Nombre del Proyecto**: ForecApp
- **Descripción**: Aplicación para buscar ciudades y mostrar sus condiciones climáticas actuales y de los próximos tres días utilizando datos de una API meteorológica. Además guarda información de las últimas tres consultas realizadas.

## 2. **Estructura del Proyecto**

- **Carpeta `src`**:
  - **components/**: Contiene todos los componentes reutilizables.
  - **interfaces/**: Define las interfaces TypeScript para los datos.
  - **views/**: Contiene las vistas de la aplicación.
  - **layots/**: Contiene la única plantilla de la aplicación.
  - **store/**: Configuración de los estados globales del proyecto.
  - **utils/**: Funciones utilitarias y helpers.

## 3. **Decisiones de Diseño**

### 3.1 **Tecnologías Principales**

- **React**: Biblioteca de JavaScript para construir interfaces de usuario.
- **TypeScript**: Superset de JavaScript que añade tipos estáticos.
- **Tailwind CSS**: Framework de CSS para diseñar rápidamente interfaces personalizadas.
- **React Router**: Librería para manejar la navegación y enrutamiento.
- **Redux**: Librería para el manejo del estado de la aplicación.
- **Redux Toolkit**: Se utiliza para simplificar la configuración y el uso de Redux. Se define un slice principal para manejar el estado del pronóstico del tiempo.
- **Axios**: Para realizar las solicirudes HTTP a la API de Open Weather Map.

### 3.2 **Decisiones**

- **React con TypeScript**: TypeScript proporciona seguridad de tipos, lo que ayuda a reducir errores y mejorar la mantenibilidad del código.
- **Redux para el Estado**: Redux facilita la gestión del estado global de la aplicación, especialmente útil para manejar los datos meteorológicos que se comparten entre múltiples componentes.
- **Tailwind CSS**: Permite un diseño rápido y personalizado sin necesidad de escribir CSS tradicional, manteniendo el código limpio y organizado.
- **React Router**: Facilita la navegación y la creación de rutas dinámicas, mejorando la experiencia de usuario.
- **Axios para Solicitudes HTTP**: Proporciona una interfaz más limpia y manejable para realizar solicitudes HTTP en comparación con `fetch`.

## 5. **Instrucciones de Configuración y Ejecución**

- **Instalación**:

```sh
npm install
```

- **Ejecución en Desarrollo**:

```sh
npm start
```

- **Construcción para Producción**:

```sh
npm run build
```

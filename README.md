# Botón Flotante de Seguimiento en GitHub (Implementación con GitHub y jsDelivr)

Este repositorio contiene el código necesario para generar un botón flotante que enlaza a tu perfil de GitHub, el cual puedes integrar fácilmente en cualquier página web con una única línea de código HTML. Funciona utilizando GitHub para almacenar el código y jsDelivr como una Content Delivery Network (CDN) gratuita para servir el script de manera pública.

## 🧩 ¿Cómo Funciona?

La magia detrás de este botón flotante reside en la combinación de GitHub y jsDelivr:

1.  **GitHub: Tu Almacén de Código (`script.js`)**
    * Dentro de este repositorio, el archivo `script.js` contiene todo el código JavaScript necesario para crear y gestionar el botón flotante en tu página web.
    * Actualmente, el script está configurado para redirigir a: `https://github.com/gianmattus-programmer`. **Recuerda modificar esta URL en tu archivo `script.js` para que apunte a tu propio perfil de GitHub.**
    * **Ejemplo simple dentro de `script.js`:**
        ```javascript
        const githubButton = document.createElement("a");
        githubButton.href = "https://github.com/gianmattus-programmer"; // ¡CAMBIA ESTA URL!
        githubButton.innerHTML = '<svg>...</svg><span>Sígueme</span>'; // Incluye el icono de GitHub y texto
        // ... Aquí se agregan estilos (CSS en JS) y comportamiento (event listeners)
        document.body.appendChild(githubButton);
        ```

2.  **jsDelivr: Tu CDN Gratuita**
    * [jsDelivr](https://www.jsdelivr.com/) es una CDN de código abierto que permite servir archivos alojados en repositorios públicos de GitHub de forma rápida y confiable a través de una red global de servidores.
    * jsDelivr interpreta la estructura de tu repositorio y te proporciona una URL pública para acceder directamente a tus archivos.
    * **URL de jsDelivr para este script:**
        ```bash
        https://cdn.jsdelivr.net/gh/gianmattus-programmer/GitHub-Floating-Button/dist/script.js
        ```
    * En esta URL:
        * `cdn.jsdelivr.net`: Es el dominio de jsDelivr.
        * `/gh/`: Indica que se está sirviendo contenido desde GitHub.
        * `gianmattus-programmer`: Es el nombre de usuario de GitHub del propietario del repositorio.
        * `GitHub-Floating-Button`: Es el nombre de este repositorio.
        * `/script.js`: Es el archivo JavaScript dentro del repositorio.

3.  **Integración en tu HTML**
    * Para utilizar este botón flotante en tu página web, simplemente necesitas incluir la siguiente etiqueta `<script>` en cualquier lugar dentro de las etiquetas `<body>` de tu archivo HTML:
        ```html
        <script src="https://cdn.jsdelivr.net/gh/gianmattus-programmer/GitHub-Floating-Button/dist/script.js"></script>
        ```
    * **¿Qué sucede al incluir esta línea?**
        1.  El navegador del visitante de tu web descarga automáticamente el archivo `script.js` desde la CDN de jsDelivr.
        2.  El navegador ejecuta el código JavaScript contenido en `script.js`.
        3.  Este código dinámicamente crea el botón flotante y lo añade a tu página web, sin necesidad de que copies y pegues el código JS directamente en tu HTML.

## 🧠 ¿Por Qué es Útil Esta Aproximación?

* **Reutilización de Código:** Implementa el botón en múltiples páginas web simplemente añadiendo la etiqueta `<script>`. No necesitas duplicar el código en cada página.
* **Actualizaciones Sencillas:** Si realizas cambios o mejoras en el archivo `script.js` dentro de este repositorio en GitHub, todas las páginas web que estén utilizando esta URL de jsDelivr se actualizarán automáticamente con la nueva versión del botón.
* **Profesionalismo:** Utilizar una CDN para servir tu script es una práctica común y profesional, similar a cómo se utilizan librerías de terceros como jQuery o Bootstrap.
* **Rendimiento:** Las CDNs como jsDelivr están optimizadas para entregar contenido rápidamente a usuarios de todo el mundo, mejorando potencialmente el tiempo de carga de tu página.

## 💡 Extras y Posibles Mejoras

* **Minificación del Script:** Para reducir el tamaño del archivo y mejorar aún más el tiempo de carga, puedes minificar el archivo `script.js` y renombrarlo a `script.min.js`.
* **Control de Versiones:** Puedes utilizar las etiquetas de Git para crear versiones de tu script (ej., `v1.0.0`). Luego, puedes referirte a una versión específica en la URL de jsDelivr:
    ```html
    <script src="https://cdn.jsdelivr.net/gh/gianmattus-programmer/GitHub-Floating-Button@v1.0.0/dist/script.js"></script>
    ```
* **Personalización Avanzada:**
    * **Temas:** El botón ya incluye soporte para modo oscuro y alto contraste.
    * **Animaciones:** Incluye animaciones sutiles de flotación y efecto ripple al hacer clic.
    * **Iconografía:** Utiliza el icono oficial de GitHub en SVG.
    * **Posicionamiento:** El botón se posiciona en la esquina inferior derecha por defecto.
    * **Responsive:** Se adapta automáticamente a diferentes tamaños de pantalla.
* **Características Actuales:**
    * Animación de flotación suave
    * Efecto de brillo
    * Efecto ripple al hacer clic
    * Soporte para modo oscuro
    * Modo de alto contraste
    * Diseño responsive
    * Estados de foco para accesibilidad
    * Interacción mejorada para dispositivos táctiles

¡Empieza a utilizar este botón flotante y facilita que tus visitantes te sigan en GitHub! Recuerda modificar la URL del perfil en el archivo `github.js` para que apunte al tuyo.

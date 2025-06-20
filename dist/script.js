document.addEventListener("DOMContentLoaded", function () {
    // Crear elemento del botón
    const githubButton = document.createElement("a");
    githubButton.href = "https://github.com/gianmattus-programmer";
    githubButton.target = "_blank";
    githubButton.className = "github-button";

    // Añadir ícono SVG de GitHub
    githubButton.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path fill="currentColor" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22v3.29c0 .317.192.694.8.576C20.568 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
        </svg>
        <span class="follow-text">Sígueme</span>
    `;

    // Crear estilos CSS
    const style = document.createElement("style");
    style.textContent = `
        /* Estilos del botón principal */
        .github-button {
            position: fixed;
            bottom: 20px;
            right: 20px;
            background-color: #24292e;
            color: white;
            border-radius: 30px;
            width: 50px;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0px;
            text-decoration: none;
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            overflow: hidden;
            z-index: 99999;
            animation: float 3s ease-in-out infinite;
        }

        /* Estilos del ícono SVG */
        .github-button svg {
            width: 24px;
            height: 24px;
            flex-shrink: 0;
            transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Efecto de brillo */
        .github-button::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent);
            transform: rotate(45deg);
            animation: shine 3s infinite;
            pointer-events: none;
        }

        /* Animación del efecto de brillo */
        @keyframes shine {
            0% { transform: translateX(-100%) rotate(45deg); }
            100% { transform: translateX(100%) rotate(45deg); }
        }

        /* Estilos del texto "Sígueme" */
        .follow-text {
            font-family: Arial, sans-serif;
            font-weight: 500;
            font-size: 0;
            max-width: 0;
            overflow: hidden;
            white-space: nowrap;
            transition: all 0.3s ease;
        }

        /* Efectos al pasar el mouse */
        .github-button:hover {
            background-color: #2f363d;
            width: 140px;
            box-shadow: 0 6px 20px rgba(0,0,0,0.3);
            gap: 8px;
        }

        .github-button:hover .follow-text {
            font-size: 14px;
            max-width: 100px;
            padding-right: 8px;
        }

        .github-button:hover svg {
            transform: rotate(360deg);
        }

        /* Animación flotante */
        @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }

        /* Efecto de onda al hacer clic */
        .github-button:active::after {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            background: rgba(255,255,255,0.3);
            border-radius: 50%;
            animation: ripple 0.6s linear;
        }

        /* Animación de la onda */
        @keyframes ripple {
            from { transform: scale(0); opacity: 1; }
            to { transform: scale(2); opacity: 0; }
        }

        /* Diseño responsivo para móviles */
        @media (max-width: 480px) {
            .github-button {
                bottom: 10px;
                right: 10px;
                width: 45px;
                height: 45px;
            }

            .github-button:hover {
                width: 120px;
            }

            .github-button svg {
                width: 20px;
                height: 20px;
            }

            .follow-text {
                font-size: 12px;
            }
        }

        /* Soporte para tema oscuro */
        @media (prefers-color-scheme: dark) {
            .github-button {
                background-color: #1f2428;
                box-shadow: 0 4px 15px rgba(0,0,0,0.4);
            }
            
            .github-button:hover {
                background-color: #2f363d;
            }
        }

        /* Modo de alto contraste */
        @media (forced-colors: active) {
            .github-button {
                border: 2px solid ButtonText;
                background-color: ButtonFace;
            }
            
            .github-button svg {
                forced-color-adjust: none;
            }
        }

        /* Interacción mejorada para dispositivos táctiles */
        @media (hover: none) {
            .github-button {
                width: 140px;
                gap: 8px;
            }

            .follow-text {
                font-size: 14px;
                max-width: 100px;
                padding-right: 8px;
            }
        }

        /* Estados de foco para accesibilidad */
        .github-button:focus {
            outline: 3px solid #58a6ff;
            outline-offset: 2px;
        }

        .github-button:focus:not(:focus-visible) {
            outline: none;
        }
    `;

    // Crear overlay de introducción
    const overlay = document.createElement("div");
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(255,255,255,0.3);
        backdrop-filter: blur(5px);
        z-index: 9998;
        transition: opacity 0.5s ease;
    `;

    // Añadir elementos al DOM
    document.head.appendChild(style);
    document.body.appendChild(overlay);
    document.body.appendChild(githubButton);

    // Animación de introducción
    setTimeout(() => {
        overlay.style.opacity = "0";
        setTimeout(() => overlay.remove(), 500);
        githubButton.style.animation = "float 3s ease-in-out infinite, none";
    }, 1000);

    // Simulación inicial del hover
    setTimeout(() => {
        githubButton.style.cssText = `width: 140px;gap: 8px;`;
        githubButton.querySelector(".follow-text").style.cssText = `
            font-size: 14px;
            max-width: 100px;
            padding-right: 8px;
        `;
    }, 100);
    setTimeout(() => {
        githubButton.style.cssText = "";
        githubButton.querySelector(".follow-text").style.cssText = "";
    }, 2000);
});

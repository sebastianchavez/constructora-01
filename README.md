# Constructora ArgaMax — Landing Page

Template de sitio web corporativo multi-página para empresa constructora. **Listo para usar**, sin build tools, sin dependencias locales.

## Inicio rápido

1. Abre el archivo `index.html` directamente en cualquier navegador moderno, o
2. Recomandado: sirve la carpeta con un servidor estático, por ejemplo:

   ```bash
   # Con Python 3
   python -m http.server 8080

   # Con Node (http-server)
   npx http-server -p 8080

   # Con PHP
   php -S localhost:8080
   ```

3. Visita `http://localhost:8080` en tu navegador.

> Requiere conexión a internet para cargar CDNs (Bootstrap, Bootstrap Icons, Google Fonts, imágenes Unsplash).

---

## Estructura de archivos

```
constructora-01/
├── index.html                    # Inicio (hero + servicios + stats + proyectos + testimonios)
├── nosotros.html                 # Sobre nosotros (misión, historia, equipo, certificaciones)
├── servicios.html                # 6 servicios + proceso de trabajo
├── precios.html                  # 3 paquetes + servicios individuales + FAQ
├── contacto.html                 # Formulario + mapa + horarios + redes sociales
├── politica-privacidad.html      # Política de privacidad
├── terminos-condiciones.html     # Términos y condiciones
│
├── css/
│   └── styles.css                # Estilos personalizados (paleta + animaciones)
│
├── js/
│   ├── main.js                   # Navbar, año dinámico, back-to-top, helpers
│   ├── animations.js             # IntersectionObserver + contadores + carousel
│   └── contact-form.js           # Validación y simulación de envío
│
├── assets/                       # Carpeta para imágenes locales (opcional)
└── README.md                     # Este archivo
```

---

## Stack técnico

| Tecnología | Versión | Carga |
|------------|---------|-------|
| [Bootstrap 5](https://getbootstrap.com/) | 5.3.2 | CDN (jsDelivr) |
| [Bootstrap Icons](https://icons.getbootstrap.com/) | 1.11.1 | CDN (jsDelivr) |
| [Google Fonts (Inter)](https://fonts.google.com/specimen/Inter) | latest | CDN |
| HTML5 | — | nativo |
| CSS3 | — | nativo |
| JavaScript | ES6+ | nativo (vanilla) |

**Sin build tools, sin npm, sin frameworks JS** (React/Vue/etc.). Todo el JS es vanilla.

---

## Paleta de colores

Definida en `css/styles.css` como variables CSS (`:root`):

| Variable | Hex | Uso |
|----------|-----|-----|
| `--color-primary` | `#1a3a5c` | Azul corporativo (navbar, headings, footer) |
| `--color-accent` | `#ff6b35` | Naranja construcción (CTAs, acentos) |
| `--color-primary-dark` | `#122a44` | Variante oscura |
| `--color-primary-light` | `#2c5985` | Variante clara |
| `--color-accent-light` | `#ff8c5e` | Variante acento clara |
| `--color-light` | `#f8f9fa` | Backgrounds alternos |

---

## Características

- **Navbar fija** con efecto shrink al hacer scroll y cierre automático en mobile
- **12 animaciones on-scroll** activadas con `IntersectionObserver` (`reveal`, `reveal-left`, `reveal-right`, `reveal-scale`, delays escalonados)
- **Contadores animados** en la sección de estadísticas (15+, 240+, 350+, 98%)
- **Carousel de testimonios** con autoplay cada 5 segundos
- **Formulario de contacto** completo con validación en tiempo real (nombre, email, teléfono, servicio, presupuesto, mensaje, aceptación de términos)
- **Toast de notificación** tras "enviar" el formulario (simulación sin backend)
- **Mapa de Google Maps** embebido
- **Tabla de horarios** de atención (lun-vie, sábado, domingo)
- **Pricing cards** con paquete destacado ("Estándar") y lista de servicios individuales
- **Acordeón FAQ** en página de precios
- **Timeline** cronológico en página nosotros
- **Back-to-top button** flotante
- **Footer** con 4 columnas + redes sociales + copyright dinámico
- **100% responsive** (mobile-first con breakpoints Bootstrap)
- **SEO básico**: meta description, keywords, HTML semántico

---

## Datos mockeados a personalizar

Toda la información es de ejemplo. Reemplázala en los archivos HTML correspondientes:

### Información general de la empresa

- **Nombre:** `Constructora ArgaMax` (buscar y reemplazar)
- **Dirección:** `Av. Principal 123, San Isidro, Lima - Perú`
- **Teléfonos:** `+51 999 888 777` / `+51 (01) 234-5678`
- **Emails:** `contacto@argamax.com`, `ventas@argamax.com`, `proyectos@argamax.com`, `privacidad@argamax.com`, `legal@argamax.com`
- **Horarios:** Lun-Vie 8:00-18:00 / Sáb 9:00-13:00 / Dom Cerrado
- **Fundación:** `2009`

### Imágenes

Las URLs de Unsplash están embebidas directamente en los HTML. Para reemplazarlas:
- Cambia los `src="https://images.unsplash.com/..."` por rutas locales a las imágenes
- Coloca las imágenes en la carpeta `assets/`
- Ejemplo: `src="assets/hero.jpg"` en lugar de la URL

O simplemente descarga las imágenes y reemplaza las URLs.

### Estadísticas (en `index.html`)

```html
<span class="number" data-count="15">0</span>     <!-- Años -->
<span class="number" data-count="240">0</span>    <!-- Proyectos -->
<span class="number" data-count="350">0</span>    <!-- Clientes -->
<span class="number" data-count="98">0</span>     <!-- Satisfacción % -->
```

### Avatares del equipo (`nosotros.html`)

URLs de `i.pravatar.cc` — reemplaza con fotos reales del equipo.

---

## Mapa (Google Maps)

En `contacto.html` el iframe tiene una URL de ejemplo. Para cambiarlo a tu ubicación real:

1. Ve a [Google Maps](https://maps.google.com)
2. Busca tu dirección
3. Click en "Compartir" → "Insertar un mapa"
4. Copia el HTML del iframe
5. Reemplaza el iframe existente en `contacto.html`

---

## Formulario de contacto

El formulario NO envía datos a ningún backend. Para hacerlo funcional:

**Opción 1 — Backend propio:** Reemplaza la simulación en `js/contact-form.js` (función `handleSubmit`) por una llamada `fetch()` a tu endpoint.

```js
// Ejemplo con fetch
fetch('/api/contacto', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
});
```

**Opción 2 — Servicios externos:** Integra con [Formspree](https://formspree.io/), [EmailJS](https://www.emailjs.com/), [Netlify Forms](https://docs.netlify.com/forms/setup/), etc.

---

## Personalización rápida

### Cambiar colores

Edita las variables CSS en `css/styles.css` (líneas 8-19):

```css
:root {
    --color-primary: #1a3a5c;   /* Azul corporativo */
    --color-accent: #ff6b35;    /* Naranja construcción */
}
```

### Cambiar tipografía

Reemplaza el `<link>` de Google Fonts en el `<head>` de cada HTML y actualiza `font-family` en `css/styles.css`.

### Agregar/quitar páginas

1. Crea el nuevo HTML basándote en uno existente (mantén head, navbar y footer)
2. Agrega el link en la navbar de **todas** las páginas
3. Agrega el link en el footer de **todas** las páginas

---

## Compatibilidad de navegadores

| Navegador | Versión mínima |
|-----------|----------------|
| Chrome | 90+ |
| Firefox | 88+ |
| Safari | 14+ |
| Edge | 90+ |

Requiere `IntersectionObserver` (soportado en todos los navegadores modernos). Si necesitas soportar navegadores muy antiguos, considera incluir un polyfill.

---

## Licencia

Template libre de usar y modificar para proyectos comerciales o personales.

---

## Créditos

- **Imágenes:** [Unsplash](https://unsplash.com/) (licencia libre)
- **Avatares:** [Pravatar](https://i.pravatar.cc/) (placeholders)
- **Iconos:** [Bootstrap Icons](https://icons.getbootstrap.com/) (MIT)
- **Framework CSS:** [Bootstrap](https://getbootstrap.com/) (MIT)

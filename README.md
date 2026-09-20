<div align="center">

# Llantimich · Web

### Tu camino. Tus llantas. Tu confianza.

Sitio web de una llantera multimarca en Morelia, Michoacán.

![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)

**En desarrollo · Publicación de prueba pendiente**

</div>

---

## Acerca del proyecto

Llantimich Web presenta los servicios del negocio y facilita las
consultas por WhatsApp desde computadora, tablet o celular.

El proyecto separa los datos del negocio, los componentes y los
estilos para facilitar su mantenimiento y servir como base para
futuros sitios de negocios locales.

## Características

- **Portada con fotografía de fondo**, degradados y diseño adaptable.
- **Servicios de llantas, alineación, balanceo y frenos** con iconos SVG.
- **Cotización por WhatsApp** con un mensaje específico por servicio.
- **Tarjetas animadas** al entrar en pantalla y al pasar el cursor.
- **Llanta vinculada al scroll** en la transición hacia los servicios.
- **Enlaces a ubicación y redes sociales**.
- **Soporte para movimiento reducido** y estilos de enfoque para teclado.

## Tecnologías

| Tecnología | Uso                            |
| ---------- | ------------------------------ |
| React      | Componentes e interfaz         |
| TypeScript | Tipado del código              |
| Vite       | Desarrollo y compilación       |
| CSS        | Diseño adaptable y animaciones |
| SVG        | Iconos integrados              |

La versión actual funciona como un sitio estático, sin backend
ni base de datos.

## Desarrollo local

Necesitas Node.js y npm en una versión compatible con la versión
de Vite instalada en el proyecto.

### Instalar dependencias

```bash
npm ci
```

### Iniciar el servidor de desarrollo

```bash
npm run dev
```

Abre la dirección que indique la terminal.

### Generar la versión de producción

```bash
npm run build
```

Los archivos compilados se generan en `dist/`.

### Revisar la compilación localmente

```bash
npm run preview
```

Este comando permite revisar el resultado; no publica el sitio
en Internet.

## Organización del proyecto

| Ubicación                          | Contenido                              |
| ---------------------------------- | -------------------------------------- |
| `src/config/business.ts`           | Datos del negocio, servicios y enlaces |
| `src/sections/HeroSection.tsx`     | Encabezado y portada                   |
| `src/sections/ServicesSection.tsx` | Tarjetas de servicios                  |
| `src/components/ScrollWheel.tsx`   | Animación de la llanta                 |
| `src/App.tsx`                      | Composición de la página               |
| `src/App.css`                      | Estilos compartidos                    |
| `src/index.css`                    | Estilos globales                       |
| `public/images/`                   | Logo, fotografías e imágenes           |

Los componentes y secciones tienen sus respectivos archivos CSS.

## Configuración del negocio

La información principal se administra en:

```text
src/config/business.ts
```

Desde este archivo se actualizan el nombre, ciudad, número de
WhatsApp, enlaces y servicios.

El número de WhatsApp se escribe en formato internacional,
solo con dígitos, sin espacios ni el símbolo `+`.

Cada servicio incluye:

- `id`: identificador.
- `title`: nombre.
- `description`: descripción breve.
- `action`: texto del enlace.
- `message`: mensaje preparado para WhatsApp.

## Imágenes

| Archivo                     | Uso                   |
| --------------------------- | --------------------- |
| `public/images/logo.png`    | Identidad del negocio |
| `public/images/portada.jpg` | Fondo de la portada   |
| `public/images/wheel.png`   | Llanta animada        |

Si cambias un nombre o extensión, actualiza también su referencia
en el código.

## Próximos pasos

- [ ] Publicar una versión de prueba.
- [ ] Completar y confirmar dirección y horarios.
- [ ] Revisar enlaces, navegación y presentación en distintos dispositivos.
- [ ] Optimizar imágenes para producción.
- [ ] Completar metadatos y presentación al compartir enlaces.

## Autor

Desarrollado por **Julio César Aguilera Manzo** para Llantimich.

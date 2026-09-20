import { business } from "../config/business";
import "./HeroSection.css";

export function HeroSection() {
    const whatsappUrl =
        `https://wa.me/${business.whatsapp}?text=` +
        encodeURIComponent("Hola, vi su página y quisiera cotizar unas llantas.");

    return (
        <section id="inicio" className="landing" aria-labelledby="landing-title">
            <div className="landing-shell">
                <header className="landing-header">
                    <a
                        className="landing-brand"
                        href="#inicio"
                        aria-label={`${business.name} — Inicio`}
                    >
                        <img src="/images/logo.png" alt={business.name} width="260" height="70" />
                    </a>

                    <nav aria-label="Navegación principal">
                        <a href="#servicios">Servicios</a>
                        <a href="#contacto">Contacto</a>
                    </nav>
                </header>

                <div className="landing-layout">
                    <div className="landing-content">
                        <p className="eyebrow">
                            LLANTERA MULTIMARCA EN {business.city.toUpperCase()}
                        </p>

                        <h1 id="landing-title">
                            Tu camino.
                            <br />
                            Tus llantas.
                            <br />
                            <span>Tu confianza.</span>
                        </h1>

                        <p className="landing-description">{business.description}</p>

                        <div className="hero-actions">
                            <a
                                className="button button-whatsapp"
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <svg
                                    className="whatsapp-icon"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    aria-hidden="true"
                                    focusable="false"
                                >
                                    <path d="M20.52 3.48A11.87 11.87 0 0 0 12.05 0C5.46 0 .1 5.36.1 11.95c0 2.1.55 4.16 1.6 5.98L0 24l6.24-1.64a11.94 11.94 0 0 0 5.8 1.48h.01C18.64 23.84 24 18.48 24 11.9c0-3.19-1.24-6.18-3.48-8.42ZM12.05 21.82a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.7.97.99-3.61-.24-.37a9.9 9.9 0 0 1-1.52-5.27c0-5.48 4.46-9.94 9.95-9.94a9.87 9.87 0 0 1 7.03 2.92 9.87 9.87 0 0 1 2.91 7.03c0 5.48-4.46 9.94-9.94 9.94Zm5.45-7.44c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.8-1.49-1.78-1.66-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37s-1.04 1.02-1.04 2.49 1.07 2.89 1.22 3.09c.15.2 2.1 3.21 5.08 4.5.71.3 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z" />
                                </svg>

                                <span>Cotizar por WhatsApp</span>
                            </a>

                            <a className="button button-secondary" href="#servicios">
                                Explorar servicios
                            </a>
                        </div>

                        <p className="hero-caption">LLANTAS · ALINEACIÓN · BALANCEO</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

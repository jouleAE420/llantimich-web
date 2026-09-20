import { business } from "../../config/business";
import "./VisitSection.css";

function InstagramIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
        >
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
        </svg>
    );
}

function FacebookIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.5 1.6-1.5h1.7V4.9c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.2v2h-2.7v3h2.7v8h3.1Z" />
        </svg>
    );
}

function LocationIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
            <circle cx="12" cy="10" r="2.5" />
        </svg>
    );
}

export function VisitSection() {
    const mapPreviewUrl = "https://www.google.com/maps?q=Llantimich%20Morelia&output=embed";

    return (
        <section id="contacto" className="section visit-section" aria-labelledby="visit-title">
            <div className="visit-heading">
                <p className="visit-kicker">ENCUÉNTRANOS EN MORELIA</p>

                <h2 id="visit-title">
                    Visítanos en <span>Morelia</span>
                </h2>

                <p>
                    Conoce nuestra ubicación, visítanos y consulta lo que necesitas para tu
                    vehículo.
                </p>
            </div>

            <div className="visit-grid">
                <figure className="local-photo">
                    <img
                        src="/images/local.webp"
                        alt="Fachada de Llantimich en Morelia"
                        width="1200"
                        height="900"
                    />
                    <figcaption>
                        <LocationIcon />
                        <span>Llantimich · Morelia, Michoacán</span>
                    </figcaption>
                </figure>

                <div className="visit-map-card">
                    <div className="map-frame">
                        <iframe
                            title="Ubicación de Llantimich en Morelia"
                            src={mapPreviewUrl}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>

                    <div className="visit-actions">
                        <a
                            className="button visit-map-button"
                            href={business.links.maps}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <LocationIcon />
                            Cómo llegar
                        </a>

                        <div className="visit-address">
                            <LocationIcon />
                            <span>{business.address}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="visit-social-panel">
                <div>
                    <p className="social-kicker">Promociones, llantas y novedades</p>
                    <h3>SÍGUENOS EN REDES SOCIALES</h3>
                </div>

                <div className="visit-social-links">
                    <a
                        href={business.links.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram de Llantimich"
                    >
                        <InstagramIcon />
                        <span>Instagram</span>
                    </a>

                    <a
                        href={business.links.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook de Llantimich"
                    >
                        <FacebookIcon />
                        <span>Facebook</span>
                    </a>
                </div>
            </div>
        </section>
    );
}

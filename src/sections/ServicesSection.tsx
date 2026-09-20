import { useEffect, useRef } from "react";
import type { CSSProperties } from "react";
import { business } from "../config/business";
import "./ServicesSection.css";

function ServiceIcon({ id }: { id: string }) {
    return (
        <svg
            viewBox="0 0 48 48"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            focusable="false"
        >
            {id === "llantas" && (
                <>
                    <circle cx="24" cy="24" r="19" />
                    <circle cx="24" cy="24" r="12" />
                    <circle cx="24" cy="24" r="3" />
                    <path d="M24 12v9m0 6v9M12 24h9m6 0h9" />
                    <path d="m15.5 15.5 6 6m5 5 6 6m-17 0 6-6m5-5 6-6" />
                </>
            )}

            {id === "alineacion" && (
                <>
                    <rect x="8" y="12" width="8" height="24" rx="3" />
                    <rect x="32" y="12" width="8" height="24" rx="3" />
                    <path d="M16 20h16M16 28h16M24 8v32" />
                    <path d="m20 11 4-4 4 4m-8 26 4 4 4-4" />
                </>
            )}

            {id === "balanceo" && (
                <>
                    <circle cx="24" cy="24" r="12" />
                    <circle cx="24" cy="24" r="4" />
                    <path d="M8 17A18 18 0 0 1 38 12" />
                    <path d="M38 6v6h-6" />
                    <path d="M40 31A18 18 0 0 1 10 36" />
                    <path d="M10 42v-6h6" />
                    <path d="M24 12v8m0 8v8M12 24h8m8 0h8" />
                </>
            )}

            {id === "frenos" && (
                <>
                    <circle cx="22" cy="24" r="17" />
                    <circle cx="22" cy="24" r="6" />
                    <path d="M35 13h5v22h-5l-4-6V19z" />
                    <path d="M16 13h1m-6 10h1m4 11h1m9 1h1m-1-22h1" />
                </>
            )}

            {!["llantas", "alineacion", "balanceo", "frenos"].includes(id) && (
                <>
                    <circle cx="24" cy="24" r="17" />
                    <path d="m16 24 6 6 11-12" />
                </>
            )}
        </svg>
    );
}

export function ServicesSection() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const section = sectionRef.current;

        if (!section) return;

        const cards = Array.from(section.querySelectorAll<HTMLElement>(".service-tile"));

        const preference = window.matchMedia("(prefers-reduced-motion: reduce)");

        if (preference.matches || !("IntersectionObserver" in window)) {
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;

                    entry.target.classList.remove("is-pending");
                    observer.unobserve(entry.target);
                });
            },
            { threshold: 0.12 },
        );

        cards.forEach((card) => {
            card.classList.add("is-pending");
            observer.observe(card);
        });

        const revealAll = () => {
            if (preference.matches) {
                cards.forEach((card) => {
                    card.classList.remove("is-pending");
                });
                observer.disconnect();
            }
        };

        preference.addEventListener("change", revealAll);

        return () => {
            observer.disconnect();
            preference.removeEventListener("change", revealAll);

            cards.forEach((card) => {
                card.classList.remove("is-pending");
            });
        };
    }, []);

    return (
        <section
            id="servicios"
            className="section services-section"
            ref={sectionRef}
            aria-labelledby="services-title"
        >
            <div className="services-heading">
                <p className="services-kicker">LLANTIMICH · MORELIA</p>

                <h2 id="services-title">
                    Servicios para <span>tu vehículo</span>
                </h2>

                <p className="services-intro">
                    Elige el servicio que necesitas y consulta las opciones para tu vehículo por
                    WhatsApp.
                </p>
            </div>

            <div className="services-grid">
                {business.services.map((service, index) => {
                    const whatsappUrl =
                        `https://wa.me/${business.whatsapp}?text=` +
                        encodeURIComponent(service.message);

                    return (
                        <article
                            className="service-tile"
                            key={service.id}
                            style={
                                {
                                    "--entry-delay": `${(index % 2) * 100}ms`,
                                } as CSSProperties
                            }
                        >
                            <div className="service-panel">
                                <div className="service-panel-top">
                                    <div className="service-icon">
                                        <ServiceIcon id={service.id} />
                                    </div>

                                    <h3>{service.title}</h3>
                                </div>
                                <p className="service-description">{service.description}</p>

                                <a
                                    className="service-link"
                                    href={whatsappUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`${service.action} por WhatsApp`}
                                >
                                    <span>{service.action}</span>

                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        aria-hidden="true"
                                    >
                                        <path d="M7 17 17 7M7 7h10v10" />
                                    </svg>
                                </a>
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
}

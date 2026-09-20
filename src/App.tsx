import { business } from "./config/business";
import { HeroSection } from "./sections/HeroSection";
import { ScrollWheel } from "./components/ScrollWheel";
import { ServicesSection } from "./sections/ServicesSection";
import "./App.css";

function App() {
    return (
        <>
            <main>
                <HeroSection />
                <ScrollWheel />
                <ServicesSection />

                <section id="contacto" className="section contact">
                    <h2>Visítanos en {business.city}</h2>

                    <p>Consulta nuestra ubicación y conoce más del negocio.</p>

                    <div className="contact-links">
                        <a
                            className="button"
                            href={business.links.maps}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Cómo llegar
                        </a>

                        <a
                            href={business.links.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Instagram
                        </a>

                        <a href={business.links.facebook} target="_blank" rel="noopener noreferrer">
                            Facebook
                        </a>
                    </div>
                </section>
            </main>

            <footer className="footer">
                © {new Date().getFullYear()} {business.name}
            </footer>
        </>
    );
}

export default App;

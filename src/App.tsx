import { business } from "./config/business";
import { SiteHeader } from "./components/SiteHeader/SiteHeader";
import { HeroSection } from "./sections/Hero/HeroSection";
import { ScrollWheel } from "./components/ScrollWheel/ScrollWheel";
import { VisitSection } from "./sections/Visit/VisitSection";
import { ServicesSection } from "./sections/Services/ServicesSection";
import "./App.css";

function App() {
    return (
        <>
            <SiteHeader />
            <main>
                <HeroSection />
                <ScrollWheel />
                <ServicesSection />

                <VisitSection />
            </main>

            <footer className="footer">
                © {new Date().getFullYear()} {business.name}
            </footer>
        </>
    );
}

export default App;

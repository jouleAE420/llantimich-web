import { useEffect, useRef } from "react";
import "./ScrollWheel.css";

export function ScrollWheel() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const wheelRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        const track = trackRef.current;
        const wheel = wheelRef.current;
        const image = imageRef.current;

        if (!section || !track || !wheel || !image) return;

        const preference = window.matchMedia("(prefers-reduced-motion: reduce)");

        let frame = 0;

        const clamp = (value: number) => Math.min(1, Math.max(0, value));

        const update = () => {
            frame = 0;

            if (preference.matches) return;

            const rect = section.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            const scroll = Math.max(0, window.scrollY);

            // Posición de la franja dentro del documento.
            const sectionTop = rect.top + scroll;

            // Si ya está visible al abrir, comienza con scroll = 0.
            const startScroll = Math.max(0, sectionTop - viewportHeight * 0.9);

            const travelScroll = Math.max(180, viewportHeight * 0.4);

            const progress = clamp((scroll - startScroll) / travelScroll);

            const size = wheel.offsetWidth;
            const distance = Math.max(0, track.clientWidth - size);
            const x = distance * progress;

            const rotation = size > 0 ? (x / (Math.PI * size)) * 360 : 0;

            const fadeOut = clamp((1 - progress) / 0.16);

            wheel.style.transform = `translate3d(${x}px, 0, 0)`;
            wheel.style.opacity = String(fadeOut);
            image.style.transform = `rotate(${rotation}deg)`;
        };

        const scheduleUpdate = () => {
            if (!frame) {
                frame = window.requestAnimationFrame(update);
            }
        };

        const observer = new ResizeObserver(scheduleUpdate);
        observer.observe(track);

        window.addEventListener("scroll", scheduleUpdate, {
            passive: true,
        });
        window.addEventListener("resize", scheduleUpdate);
        preference.addEventListener("change", scheduleUpdate);

        update();

        return () => {
            window.cancelAnimationFrame(frame);
            observer.disconnect();
            window.removeEventListener("scroll", scheduleUpdate);
            window.removeEventListener("resize", scheduleUpdate);
            preference.removeEventListener("change", scheduleUpdate);
        };
    }, []);

    return (
        <div className="wheel-divider" ref={sectionRef} aria-hidden="true">
            <div className="wheel-divider-track" ref={trackRef}>
                <div className="wheel-divider-tire" ref={wheelRef}>
                    <img ref={imageRef} src="/images/wheel.webp" alt="" draggable={false} />
                </div>
            </div>
        </div>
    );
}

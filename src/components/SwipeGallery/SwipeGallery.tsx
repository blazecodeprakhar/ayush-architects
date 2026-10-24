import { motion, PanInfo } from "framer-motion";
import { useState, useEffect } from "react";
import "./SwipeGallery.css";
import { projects } from "./images";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SwipeGallery = () => {
    // Unbounded active index allows infinite scrolling
    const [active, setActive] = useState(0);
    const [width, setWidth] = useState(0);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const isMobile = width < 768;
    const spacing = isMobile ? 260 : 320;

    // Helper to get consistent index (Python-style modulo)
    const getProjectIndex = (index: number) => {
        const len = projects.length;
        return ((index % len) + len) % len;
    };

    const handleDragEnd = (_e: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
        const offset = info.offset.x;
        const velocity = info.velocity.x;

        if (offset < -50 || velocity < -500) {
            setActive((prev) => prev + 1);
        } else if (offset > 50 || velocity > 500) {
            setActive((prev) => prev - 1);
        }
    };

    // We render a window of cards around the active index
    // [-2, -1, 0, 1, 2] guarantees 5 visible cards. 
    // Since we have 6 projects, keys will be unique.
    const visibleOffsets = [-2, -1, 0, 1, 2];

    return (
        <div className="w-full relative">
            <div className="gallery-wrapper">
                {visibleOffsets.map((offset) => {
                    const projectIndex = getProjectIndex(active + offset);
                    const project = projects[projectIndex];
                    const absOffset = Math.abs(offset);

                    return (
                        <motion.div
                            key={project.id} // Stable key ensures continuous animation
                            className="gallery-card-container"
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            onDragEnd={handleDragEnd}
                            animate={{
                                x: offset * spacing,
                                scale: offset === 0 ? 1 : 0.85,
                                opacity: offset === 0 ? 1 : 0.5,
                                zIndex: 100 - absOffset,
                                rotateY: offset * -5
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 260,
                                damping: 20,
                            }}
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="gallery-card"
                                draggable="false"
                            />
                            <div className={`gallery-overlay text-white ${offset === 0 ? 'active' : ''}`}>
                                <p className="text-xs uppercase tracking-widest opacity-80 mb-1">{project.category}</p>
                                <h3 className="font-serif text-xl font-medium">{project.title}</h3>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* Navigation Buttons */}
            <button
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/80 dark:bg-[#1f1b17]/90 dark:border dark:border-[#312922] backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white dark:hover:bg-[#27211c] transition-colors"
                onClick={() => setActive(active - 1)}
            >
                <ChevronLeft className="w-6 h-6 text-foreground" />
            </button>

            <button
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/80 dark:bg-[#1f1b17]/90 dark:border dark:border-[#312922] backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white dark:hover:bg-[#27211c] transition-colors"
                onClick={() => setActive(active + 1)}
            >
                <ChevronRight className="w-6 h-6 text-foreground" />
            </button>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-2 mt-4">
                {projects.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => {
                            const currentMod = getProjectIndex(active);
                            let diff = idx - currentMod;
                            const len = projects.length;
                            // Shortest path logic
                            if (diff > len / 2) diff -= len;
                            if (diff < -len / 2) diff += len;
                            setActive(active + diff);
                        }}
                        className={`h-2 rounded-full transition-all duration-300 ${idx === getProjectIndex(active) ? "w-6 bg-accent" : "w-2 bg-muted-foreground/30"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default SwipeGallery;

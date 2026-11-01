import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { useState, useEffect } from "react";
import "./SwipeGallery.css";
import { projects } from "./images";
import { ChevronLeft, ChevronRight, Camera } from "lucide-react";

const SwipeGallery = () => {
    // Unbounded active index allows infinite scrolling
    const [active, setActive] = useState(0);
    const [width, setWidth] = useState(0);
    // Track active angle for each project
    const [angles, setAngles] = useState<Record<number, number>>({});

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

    // Visible cards around active index
    const visibleOffsets = [-2, -1, 0, 1, 2];

    return (
        <div className="w-full relative select-none">
            <div className="gallery-wrapper">
                {visibleOffsets.map((offset) => {
                    const projectIndex = getProjectIndex(active + offset);
                    const project = projects[projectIndex];
                    const absOffset = Math.abs(offset);
                    const projectImages = project.images && project.images.length > 0 ? project.images : [project.image];
                    const currentAngle = (angles[project.id] ?? 0) % projectImages.length;
                    const hasMultipleAngles = projectImages.length > 1;

                    return (
                        <motion.div
                            key={project.id} // Stable key ensures continuous animation
                            className="gallery-card-container"
                            drag={offset === 0 ? "x" : false}
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
                            <div className="w-full h-full relative overflow-hidden rounded-[24px]">
                                <AnimatePresence mode="wait">
                                    <motion.img
                                        key={`${project.id}-${currentAngle}`}
                                        src={projectImages[currentAngle]}
                                        alt={`${project.title} - Angle ${currentAngle + 1}`}
                                        initial={{ opacity: 0.6 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0.6 }}
                                        transition={{ duration: 0.25 }}
                                        className="gallery-card"
                                        draggable="false"
                                    />
                                </AnimatePresence>

                                {/* Angle Counter Badge */}
                                {hasMultipleAngles && (
                                    <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-medium tracking-wider text-white z-20 pointer-events-none border border-white/10 flex items-center gap-1 shadow-sm">
                                        <Camera size={11} className="text-accent" />
                                        <span>{currentAngle + 1}/{projectImages.length}</span>
                                    </div>
                                )}

                                {/* Angle Navigation Controls for Active Card */}
                                {hasMultipleAngles && offset === 0 && (
                                    <>
                                        <button
                                            type="button"
                                            onPointerDown={(e) => e.stopPropagation()}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setAngles(prev => ({
                                                    ...prev,
                                                    [project.id]: (currentAngle - 1 + projectImages.length) % projectImages.length
                                                }));
                                            }}
                                            className="absolute left-2.5 top-1/2 -translate-y-1/2 z-30 w-8 h-8 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center backdrop-blur-md transition-all border border-white/20 shadow-md hover:scale-110 active:scale-95"
                                            aria-label="Previous angle"
                                        >
                                            <ChevronLeft size={16} />
                                        </button>
                                        <button
                                            type="button"
                                            onPointerDown={(e) => e.stopPropagation()}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setAngles(prev => ({
                                                    ...prev,
                                                    [project.id]: (currentAngle + 1) % projectImages.length
                                                }));
                                            }}
                                            className="absolute right-2.5 top-1/2 -translate-y-1/2 z-30 w-8 h-8 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center backdrop-blur-md transition-all border border-white/20 shadow-md hover:scale-110 active:scale-95"
                                            aria-label="Next angle"
                                        >
                                            <ChevronRight size={16} />
                                        </button>

                                        {/* Angle Dots */}
                                        <div
                                            onPointerDown={(e) => e.stopPropagation()}
                                            className="absolute bottom-20 left-0 right-0 z-30 flex justify-center gap-1.5 pointer-events-auto"
                                        >
                                            {projectImages.map((_, i) => (
                                                <button
                                                    key={i}
                                                    type="button"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setAngles(prev => ({ ...prev, [project.id]: i }));
                                                    }}
                                                    className={`h-1.5 rounded-full transition-all duration-300 ${
                                                        i === currentAngle ? 'w-5 bg-accent' : 'w-1.5 bg-white/40 hover:bg-white/80'
                                                    }`}
                                                    aria-label={`View angle ${i + 1}`}
                                                />
                                            ))}
                                        </div>
                                    </>
                                )}
                            </div>

                            <div className={`gallery-overlay text-white ${offset === 0 ? 'active' : ''}`}>
                                <p className="text-xs uppercase tracking-widest opacity-80 mb-1">{project.category}</p>
                                <h3 className="font-serif text-xl font-medium">{project.title}</h3>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* Navigation Carousel Buttons */}
            <button
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/80 dark:bg-[#1f1b17]/90 dark:border dark:border-[#312922] backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white dark:hover:bg-[#27211c] transition-colors"
                onClick={() => setActive(active - 1)}
                aria-label="Previous project"
            >
                <ChevronLeft className="w-6 h-6 text-foreground" />
            </button>

            <button
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/80 dark:bg-[#1f1b17]/90 dark:border dark:border-[#312922] backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white dark:hover:bg-[#27211c] transition-colors"
                onClick={() => setActive(active + 1)}
                aria-label="Next project"
            >
                <ChevronRight className="w-6 h-6 text-foreground" />
            </button>

            {/* Pagination Project Dots */}
            <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mt-6 max-w-xl mx-auto px-4">
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
                        aria-label={`Go to slide ${idx + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default SwipeGallery;


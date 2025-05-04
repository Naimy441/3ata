"use client"

import { useRef, useEffect } from 'react';

const ClientsMarquee = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    // Images to display in the marquee
    const images = [
        "at_taqwa.png",
        "north_durham.png",
        "cary.png",
        "marwaas.png",
    ];

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        const content = contentRef.current;

        if (!scrollContainer || !content) return;

        // Get the width of the content for scrolling calculation
        const scrollWidth = content.scrollWidth;
        let scrollPosition = 0;
        let animationFrameId: number;

        const scroll = () => {
            scrollPosition += 0.5; // Adjust speed here

            // Create continuous scrolling effect by resetting position after full width
            if (scrollPosition >= scrollWidth / 2) {
                scrollPosition = 0;
            }

            scrollContainer.scrollLeft = scrollPosition;
            animationFrameId = requestAnimationFrame(scroll);
        };

        animationFrameId = requestAnimationFrame(scroll);

        // Cleanup animation frame on unmount
        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    // Create duplicated images for continuous scrolling effect - add more duplicates for smoother continuous effect
    const allImages = [...images, ...images, ...images, ...images];

    return (
        <div className="relative overflow-hidden max-w-md mx-auto pt-10">
            {/* Left fade gradient */}
            <div className="absolute left-0 top-0 h-full w-12 z-10 bg-gradient-to-r from-purple-50 to-transparent"></div>

            {/* Scrolling content */}
            <div
                ref={scrollRef}
                className="overflow-x-scroll"
                style={{
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                    WebkitOverflowScrolling: 'touch'
                }}
            >
                {/* Hide WebKit Scrollbar */}
                <style jsx>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>

                <div
                    ref={contentRef}
                    className="flex whitespace-nowrap space-x-6 px-8"
                    style={{ minWidth: 'max-content' }}
                >
                    {allImages.map((filename, index) => (
                        <div key={index} className="flex-shrink-0">
                            <img
                                src={`/mosques/${filename}`}
                                alt={`Mosque logo ${index % images.length + 1}`}
                                className="inline-block h-20 md:h-24 object-contain transition-transform hover:scale-105"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Right fade gradient */}
            <div className="absolute right-0 top-0 h-full w-12 z-10 bg-gradient-to-l from-purple-50 to-transparent"></div>
        </div>

    );
};

export default ClientsMarquee;
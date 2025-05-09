"use client"

import { Marquee } from "@/components/magicui/marquee";
import { cn } from "@/lib/utils";

const mosques = [
    { img: "/mosques/at_taqwa.png", name: "At-Taqwa" },
    { img: "/mosques/north_durham.png", name: "North Durham" },
    { img: "/mosques/cary.png", name: "Cary" },
    { img: "/mosques/marwaas.png", name: "Marwaas" },
    // Add more as needed
];

export default function ClientsMarquee() {
    return (
        <div className="relative overflow-hidden max-w-xs md:max-w-sm mx-auto py-4 pt-8 flex items-center justify-center">
            <Marquee pauseOnHover className="[--duration:16s] gap-4">
                {mosques.map((mosque, idx) => (
                    <div key={idx} className="flex flex-col items-center">
                        <img
                            src={mosque.img}
                            alt={mosque.name}
                            className="h-16 md:h-20 object-contain transition-transform hover:scale-105"
                        />
                        <span className="mt-1 text-xs text-center text-gray-700 dark:text-gray-200">{mosque.name}</span>
                    </div>
                ))}
            </Marquee>
            {/* Left and right fade gradients */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-purple-50"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-purple-50"></div>
        </div>
    );
}
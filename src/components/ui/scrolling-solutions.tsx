"use client";

import { motion } from "framer-motion";
import { 
  Bank, 
  FileText, 
  Megaphone, 
  CalendarCheck, 
  Desktop, 
  GlobeHemisphereWest, 
  ChartLine, 
  Briefcase 
} from "@phosphor-icons/react";

const solutions = [
  { text: "Financiamento", icon: Bank },
  { text: "Formalização", icon: FileText },
  { text: "Marketing", icon: Megaphone },
  { text: "Eventos", icon: CalendarCheck },
  { text: "Soluções Digitais", icon: Desktop },
  { text: "Exportação", icon: GlobeHemisphereWest },
  { text: "Investidores", icon: ChartLine },
  { text: "Consultoria", icon: Briefcase },
];

// Combine into a triple-length array for seamless infinite loop
const carouselItems = [...solutions, ...solutions, ...solutions];

export function ScrollingSolutions() {
  return (
    <section className="py-10 bg-white dark:bg-black/20 overflow-hidden border-b border-black/5 dark:border-white/5">
      {/* Label above */}
      <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
        <p className="text-[13px] md:text-sm text-neutral-400 dark:text-neutral-500 font-medium tracking-wide">
          Soluções completas para o crescimento da sua empresa
        </p>
      </div>

      {/* Infinite Scroll Container */}
      <div className="relative flex overflow-hidden mask-fade-edges">
        <motion.div
          className="flex whitespace-nowrap gap-16 md:gap-24 items-center"
          animate={{
            x: ["0%", "-33.33%"],
          }}
          transition={{
            duration: 40,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {carouselItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <div 
                key={i} 
                className="flex items-center gap-3.5 group transition-opacity duration-300"
              >
                <Icon 
                  size={20} 
                  weight="regular"
                  className="text-neutral-400 dark:text-neutral-500 group-hover:text-accent transition-colors duration-300" 
                />
                <span className="text-sm md:text-[15px] font-medium text-neutral-500 dark:text-neutral-400 tracking-tight group-hover:text-neutral-900 dark:group-hover:text-white transition-colors">
                  {item.text}
                </span>
              </div>
            );
          })}
        </motion.div>

        {/* CSS Masking for faded edges */}
        <style jsx>{`
          .mask-fade-edges {
            mask-image: linear-gradient(
              to right,
              transparent,
              black 10%,
              black 90%,
              transparent
            );
          }
        `}</style>
      </div>
    </section>
  );
}

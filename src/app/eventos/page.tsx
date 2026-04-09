"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, CalendarBlank } from "@phosphor-icons/react";

const events = [
  { title: "Smart Business Innovation (SBI)", type: "Conferência e Exposição", date: "Abril 2026", location: "Centro Cultural Moçambique-China", desc: "O maior evento corporativo e institucional para PMEs.", link: "/eventos/sbi-2026", featured: true },
  { title: "Smart Business Expo", type: "Feiras Trimestrais", date: "Mai, Ago, Nov 2026", location: "A Confirmar", desc: "Feiras de negócios e exposição de produtos.", link: "#", featured: false },
  { title: "Maratona Business Leaders", type: "Corrida Empresarial", date: "Dezembro 2026", location: "Maputo", desc: "Networking, saúde e reputação para líderes.", link: "#", featured: false },
  { title: "FACIM", type: "Activações Institucionais", date: "Agosto 2026", location: "Ricatla, Marracuene", desc: "Coordenação de espaços PME na feira internacional.", link: "#", featured: false },
];

export default function Eventos() {
  return (
    <div className="pt-20 pb-16 max-w-6xl mx-auto px-4 md:px-8">
      <div className="mb-10 md:w-2/3">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">Eventos Empresariais</h1>
        <p className="text-sm text-muted-foreground leading-relaxed max-w-[50ch]">
          Eventos de referência em Moçambique, promovendo networking e oportunidades para PMEs.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {events.map((ev, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }}
            className={`border rounded-lg p-5 flex flex-col ${ev.featured ? "border-accent/30 bg-accent/5" : "border-border"}`}
          >
            {ev.featured && <span className="inline-block text-[9px] font-bold bg-accent text-white px-2 py-0.5 rounded w-max mb-2">Destaque</span>}
            <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-1">{ev.type}</div>
            <h3 className="text-sm font-bold mb-1">{ev.title}</h3>
            <p className="text-[11px] text-muted-foreground mb-3 flex-1">{ev.desc}</p>
            <div className="space-y-1 mb-3">
              <div className="text-[10px] flex items-center gap-1.5 text-muted-foreground">
                <CalendarBlank size={12} className="text-accent" /> {ev.date}
              </div>
              <div className="text-[10px] text-muted-foreground">{ev.location}</div>
            </div>
            {ev.link !== "#" ? (
              <Link href={ev.link} className="text-[11px] font-bold text-accent hover:underline inline-flex items-center">
                Ver Página <ArrowUpRight size={10} className="ml-0.5" weight="bold" />
              </Link>
            ) : (
              <span className="text-[11px] text-muted-foreground/50">Mais detalhes em breve</span>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

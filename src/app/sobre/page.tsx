"use client";

import { motion } from "framer-motion";
import { Target, Eye, Lightbulb } from "@phosphor-icons/react";

const timeline = [
  { year: "2018", desc: "Início das feiras e activações com PMEs." },
  { year: "2019", desc: "Consolidação de feiras comunitárias e exposição empresarial." },
  { year: "2020", desc: "Adaptação e reestruturação pós-Covid." },
  { year: "2022", desc: "Início do Smart Business Innovation (SBI)." },
  { year: "2023", desc: "Expansão e consolidação do projecto PME Digital." },
  { year: "2024", desc: "Crescimento institucional e expansão de rede corporativa." },
  { year: "2025", desc: "Consolidação de parceiros e fortalecimento da marca." },
  { year: "2026", desc: "Expansão do ecossistema com Expo trimestral + SBI + Maratona." },
];

const pillars = [
  { icon: Eye, title: "Visão", text: "Ser a plataforma nacional de referência em aceleração e estruturação de PMEs em Moçambique." },
  { icon: Target, title: "Missão", text: "Criar ambientes práticos e integrados onde empreendedores se conectam a financiamento, formalização e crescimento." },
  { icon: Lightbulb, title: "Propósito", text: "Reduzir a distância entre o pequeno negócio e o mercado estruturado." },
];

export default function Sobre() {
  return (
    <div className="pt-20 pb-16 max-w-6xl mx-auto px-4 md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start mb-16">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Quem Somos</h1>
          <div className="text-sm text-muted-foreground leading-relaxed space-y-3 max-w-[55ch]">
            <p>A Smart Business é uma plataforma empresarial moçambicana focada na organização, crescimento e profissionalização de micro, pequenas e médias empresas.</p>
            <p>O nosso Propósito é reduzir a distância entre o pequeno negócio e o mercado estruturado, garantindo que o talento empreendedor se traduza em sucesso sustentável.</p>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.15 }}
          className="aspect-video rounded-lg overflow-hidden relative border border-border bg-[url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1470&auto=format&fit=crop')] bg-cover bg-center"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-16">
        {pillars.map((p, i) => {
          const Icon = p.icon;
          return (
            <motion.div key={p.title} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
              className="border border-border rounded-lg p-5 space-y-2"
            >
              <Icon size={18} className="text-accent" />
              <h3 className="text-sm font-bold">{p.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{p.text}</p>
            </motion.div>
          );
        })}
      </div>

      <h2 className="text-xl font-bold tracking-tight mb-6">Histórico</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {timeline.map((item, i) => (
          <motion.div key={item.year} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }}
            className="border border-border rounded-lg p-4"
          >
            <span className="text-lg font-mono font-bold text-accent">{item.year}</span>
            <p className="text-[11px] text-muted-foreground mt-1 leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

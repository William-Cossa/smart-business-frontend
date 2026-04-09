"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CalendarBlank, MapPin, Ticket, ShieldCheck, PresentationChart, Handshake, ArrowRight } from "@phosphor-icons/react";

export default function SBILandingPage() {
  return (
    <div className="w-full">
      <section className="pt-20 pb-12 border-b border-border">
        <div className="max-w-6xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="space-y-5">
            <div className="inline-flex items-center rounded-md border border-accent/30 bg-accent/10 px-2.5 py-1 text-[10px] font-bold text-accent">
              Evento Oficial
            </div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.1]">
              SBI <span className="text-muted-foreground">2026</span>
            </h1>
            <p className="text-sm text-muted-foreground max-w-[40ch]">
              A maior plataforma de conexão entre PMEs, Governo, Bancos e Grandes Empresas em Moçambique.
            </p>
            <div className="flex flex-wrap gap-2">
              <div className="border border-border rounded-md px-3 py-1.5 flex items-center gap-2 text-[11px]">
                <CalendarBlank size={14} className="text-accent" /> 03 de Abril de 2026
              </div>
              <div className="border border-border rounded-md px-3 py-1.5 flex items-center gap-2 text-[11px]">
                <MapPin size={14} className="text-accent" /> Centro Cultural Moç-China
              </div>
            </div>
            <div className="flex gap-2">
              <button className="h-9 rounded-md bg-accent px-5 text-xs font-bold text-white flex items-center gap-1.5 hover:opacity-90 transition-opacity">
                <Ticket size={14} /> Comprar Bilhete
              </button>
              <button className="h-9 rounded-md border border-border px-5 text-xs font-medium hover:bg-muted transition-colors">
                Reservar Stand
              </button>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.15 }}
            className="aspect-video rounded-lg overflow-hidden relative border border-border bg-[url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-muted border-b border-border">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-xl font-bold tracking-tight mb-6">O que vai encontrar</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { icon: PresentationChart, title: "Conferência", text: "Painéis com decisores e líderes." },
              { icon: Handshake, title: "Funding Desk", text: "Acesso directo a financiamento." },
              { icon: ShieldCheck, title: "Serviços Gov.", text: "Alvarás e NUIT no local." },
              { icon: CalendarBlank, title: "Exposição", text: "PMEs e empresas estruturadas." },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="border border-border rounded-lg p-4 bg-background space-y-2">
                  <Icon size={18} className="text-accent" />
                  <h3 className="text-xs font-bold">{item.title}</h3>
                  <p className="text-[10px] text-muted-foreground">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-xl font-bold tracking-tight mb-4">Participação & Ingressos</h2>
            <div className="space-y-2">
              <div className="border border-border rounded-lg p-4 flex justify-between items-center">
                <div>
                  <h4 className="text-sm font-bold">Entrada Individual</h4>
                  <p className="text-[10px] text-muted-foreground">Acesso a conferências e feira</p>
                </div>
                <div className="text-lg font-mono font-bold text-accent">500 <span className="text-xs text-muted-foreground">MT</span></div>
              </div>
              <div className="border border-accent/30 bg-accent/5 rounded-lg p-4 flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                <div>
                  <h4 className="text-sm font-bold">Empresas Legalizadas</h4>
                  <p className="text-[10px] text-muted-foreground">Exige Alvará, NUIT, Registo</p>
                </div>
                <span className="text-[10px] font-bold bg-accent text-white px-2.5 py-1 rounded w-max">Gratuito</span>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold tracking-tight mb-4">Exposição</h2>
            <div className="space-y-2">
              <div className="border border-border rounded-lg p-4 flex justify-between items-center">
                <div>
                  <h4 className="text-sm font-bold">Stand Externo (Gazebo)</h4>
                  <p className="text-[10px] text-muted-foreground">Área exterior</p>
                </div>
                <div className="text-lg font-mono font-bold">5.000 <span className="text-xs text-muted-foreground">MT</span></div>
              </div>
              <div className="border border-border rounded-lg p-4 flex justify-between items-center">
                <div>
                  <h4 className="text-sm font-bold">Stand Interno Premium</h4>
                  <p className="text-[10px] text-muted-foreground">Pavilhão central</p>
                </div>
                <div className="text-lg font-mono font-bold text-accent">10.000 <span className="text-xs text-muted-foreground">MT</span></div>
              </div>
            </div>
            <div className="mt-4 flex gap-2">
              <button className="flex-1 h-9 rounded-md bg-foreground text-background text-xs font-bold hover:opacity-90 transition-opacity">Inscrever Empresa</button>
              <button className="flex-1 h-9 rounded-md border border-border text-xs font-medium hover:bg-muted transition-colors">Patrocinar</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

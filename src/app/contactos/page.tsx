"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, EnvelopeSimple, WhatsappLogo } from "@phosphor-icons/react";

export default function Contactos() {
  return (
    <div className="pt-20 pb-16 max-w-6xl mx-auto px-4 md:px-8">
      <div className="mb-10 text-center max-w-lg mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">Contactos</h1>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Agende reuniões, solicite propostas ou estruture a sua empresa.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <motion.div initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} className="md:col-span-4 space-y-3">
          {[
            { icon: MapPin, text: "Hotel Oia (Ótia), 3º Andar, Maputo, Moçambique" },
            { icon: Phone, text: "+258 8x xxx xxxx" },
            { icon: EnvelopeSimple, text: "info@smartbusiness.co.mz" },
          ].map((c, i) => {
            const Icon = c.icon;
            return (
              <div key={i} className="border border-border rounded-lg p-4 flex items-start gap-3">
                <div className="w-8 h-8 rounded-md bg-accent/10 flex items-center justify-center shrink-0">
                  <Icon size={14} className="text-accent" weight="fill" />
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed pt-1">{c.text}</p>
              </div>
            );
          })}
          <button className="w-full h-9 rounded-md bg-[#25D366] text-white text-xs font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
            <WhatsappLogo size={14} weight="fill" /> WhatsApp
          </button>
          <button className="w-full h-9 rounded-md bg-foreground text-background text-xs font-bold hover:opacity-90 transition-opacity">
            Agendar Reunião
          </button>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.08 }} className="md:col-span-8 border border-border rounded-lg p-5">
          <h2 className="text-sm font-bold mb-4">Solicitar Proposta Directa</h2>
          <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <input type="text" className="w-full h-9 rounded-md border border-border bg-background px-3 text-xs focus:outline-none focus:border-accent transition-colors" placeholder="Nome ou Empresa" />
              <input type="text" className="w-full h-9 rounded-md border border-border bg-background px-3 text-xs focus:outline-none focus:border-accent transition-colors" placeholder="Email ou Telefone" />
            </div>
            <select className="w-full h-9 rounded-md border border-border bg-background px-3 text-xs focus:outline-none focus:border-accent transition-colors appearance-none text-muted-foreground">
              <option value="">Selecione um serviço...</option>
              <option value="financiamento">Acesso ao Financiamento</option>
              <option value="consultoria">Consultoria Estratégica</option>
              <option value="formalizacao">Formalização de Empresa</option>
              <option value="sbi">Participação no SBI 2026</option>
              <option value="outro">Outros</option>
            </select>
            <textarea rows={3} className="w-full rounded-md border border-border bg-background p-3 text-xs focus:outline-none focus:border-accent transition-colors resize-none" placeholder="Descreva a sua necessidade..." />
            <button className="h-9 px-5 rounded-md bg-accent text-white text-xs font-bold hover:opacity-90 transition-opacity">
              Enviar Solicitação
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}

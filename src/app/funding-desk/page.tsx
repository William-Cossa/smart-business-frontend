"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Handshake, FileText, Bank, RocketLaunch, CheckCircle, ShieldCheck, ChartLineUp, ArrowRight } from "@phosphor-icons/react";

const steps = [
  { num: "01", title: "Candidatura", desc: "Submissão de dados.", icon: FileText },
  { num: "02", title: "Triagem", desc: "Diagnóstico do negócio.", icon: ShieldCheck },
  { num: "03", title: "Documentação", desc: "Dossier completo.", icon: RocketLaunch },
  { num: "04", title: "Financiamento", desc: "Ligação com bancos.", icon: Bank },
];

const benefits = [
  "Acesso a linhas de crédito bancário",
  "Conexão com programas governamentais",
  "Dossiers profissionais preparados",
  "Negociação de condições favoráveis",
  "Acompanhamento pós-aprovação",
];

export default function FundingDesk() {
  return (
    <div className="pt-20 pb-16 max-w-6xl mx-auto px-4 md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start mb-12">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
          <div className="inline-flex items-center rounded-md border border-accent/30 bg-accent/10 px-2.5 py-1 text-[10px] font-bold text-accent">
            Plataforma de Investimento
          </div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            Funding Desk
          </h1>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-[45ch]">
            Ligamos PMEs a bancos, fundos, programas e investidores.
          </p>
          <Link href="/contactos" className="inline-flex h-9 items-center rounded-md bg-accent px-5 text-xs font-bold text-white hover:opacity-90 transition-opacity">
            Candidatar agora
          </Link>
        </motion.div>
        <div className="grid grid-cols-2 gap-2">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.num} className="border border-border rounded-lg p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-mono font-bold text-accent/20">{step.num}</span>
                  <Icon size={16} className="text-accent" />
                </div>
                <h3 className="text-xs font-bold">{step.title}</h3>
                <p className="text-[10px] text-muted-foreground">{step.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="border border-border rounded-lg p-6 space-y-3">
        <h2 className="text-sm font-bold">Vantagens</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1.5">
          {benefits.map((b, i) => (
            <div key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
              <CheckCircle size={14} className="text-accent shrink-0" weight="fill" /> {b}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

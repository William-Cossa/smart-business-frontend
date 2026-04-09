"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight, Briefcase, FileText, ChartLine, Bank, UsersThree,
  Scales, Calculator, ShieldCheck, GlobeHemisphereWest, Megaphone,
  Desktop, PaintBrush, CalendarCheck, Buildings,
} from "@phosphor-icons/react";

const services = [
  { id: "consultoria", title: "Consultoria Estratégica", text: "Planeamento e reestruturação para PMEs.", icon: Briefcase },
  { id: "planos-de-negocio", title: "Planos para Financiamento", text: "Dossiers para aprovação bancária e investimento.", icon: FileText },
  { id: "projecoes", title: "Projecções Financeiras", text: "Modelos económicos para escalabilidade.", icon: ChartLine },
  { id: "acesso-financiamento", title: "Acesso ao Financiamento", text: "Articulação directa com bancos e programas.", icon: Bank },
  { id: "investidores", title: "Captação de Capital", text: "Conexão a investidores anjo e fundos.", icon: UsersThree },
  { id: "formalizacao", title: "Formalização e Licenciamento", text: "Alvarás, registos e regularização legal.", icon: Scales },
  { id: "contabilidade", title: "Contabilidade e Fiscalidade", text: "Gestão fiscal e relatórios financeiros.", icon: Calculator },
  { id: "certificacao", title: "Certificação e Compliance", text: "Garantia de normas (ISO e outras).", icon: ShieldCheck },
  { id: "exportacao", title: "Exportação a Mercados", text: "Legalização e acesso ao mercado global.", icon: GlobeHemisphereWest },
  { id: "marketing", title: "Marketing e Branding", text: "Posicionamento corporativo de marcas.", icon: Megaphone },
  { id: "websites", title: "Soluções Digitais", text: "Desenvolvimento web e ferramentas tech.", icon: Desktop },
  { id: "design", title: "Design Gráfico", text: "Identidade visual premium e materiais.", icon: PaintBrush },
  { id: "eventos", title: "Eventos Empresariais", text: "Produção de feiras e ativações B2B.", icon: CalendarCheck },
  { id: "governo", title: "Articulação Institucional", text: "Lobbying legal e acesso ao Governo.", icon: Buildings },
];

export default function Services() {
  return (
    <div className="pt-20 pb-16 max-w-6xl mx-auto px-4 md:px-8">
      <div className="mb-10 md:w-2/3">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">Nossos Serviços</h1>
        <p className="text-sm text-muted-foreground leading-relaxed max-w-[50ch]">
          Serviços integrados para preparar empresas para crescer, formalizar-se e aceder a financiamento.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {services.map((svc, i) => {
          const Icon = svc.icon;
          return (
            <motion.div key={svc.id} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.03 }}>
              <Link href={`/servicos/${svc.id}`} className="block border border-border rounded-lg p-5 hover:bg-muted transition-colors group h-full">
                <Icon size={18} className="text-accent mb-3" />
                <h3 className="text-sm font-bold mb-1">{svc.title}</h3>
                <p className="text-[11px] text-muted-foreground mb-4">{svc.text}</p>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-accent">{String(i + 1).padStart(2, "0")}</span>
                  <span className="w-7 h-7 rounded-md border border-border flex items-center justify-center group-hover:bg-accent group-hover:border-accent group-hover:text-white transition-all">
                    <ArrowRight size={12} />
                  </span>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

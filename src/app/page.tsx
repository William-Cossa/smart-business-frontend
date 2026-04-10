"use client";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  Briefcase,
  GlobeHemisphereWest,
  Megaphone,
  CalendarBlank,
  Ticket,
  ShieldCheck,
  Star,
  FileText,
  Bank,
  UsersThree,
  Scales,
  Calculator,
  Desktop,
  PaintBrush,
  CalendarCheck,
  Buildings,
  ChartLine,
  Target,
  Eye,
  Lightbulb,
  MapPin,
  Phone,
  EnvelopeSimple,
  WhatsappLogo,
  CheckCircle,
  RocketLaunch,
} from "@phosphor-icons/react";
import { HeroSection } from "@/components/ui/hero-section";
import { ScrollingSolutions } from "@/components/ui/scrolling-solutions";

/* ─── animation ─── */
const fadeIn = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 120, damping: 24 } },
};
// Note: fadeIn kept for other sections

/* ─── data ─── */
const services = [
  { id: "consultoria", title: "Consultoria Estratégica", text: "Planeamento e reestruturação corporativa.", icon: Briefcase, span: "md:col-span-2 md:row-span-2" },
  { id: "planos-de-negocio", title: "Planos para Financiamento", text: "Dossiers para bancos e parceiros.", icon: FileText, span: "" },
  { id: "projecoes", title: "Projecções Financeiras", text: "Modelos de escalabilidade.", icon: ChartLine, span: "" },
  { id: "acesso-financiamento", title: "Acesso ao Financiamento", text: "Articulação com bancos.", icon: Bank, span: "md:col-span-2" },
  { id: "investidores", title: "Captação de Capital", text: "Investidores e fundos.", icon: UsersThree, span: "" },
  { id: "formalizacao", title: "Formalização", text: "Alvarás e licenças.", icon: Scales, span: "md:row-span-2" },
  { id: "contabilidade", title: "Contabilidade", text: "Gestão fiscal.", icon: Calculator, span: "" },
  { id: "certificacao", title: "Certificação", text: "ISO e compliance.", icon: ShieldCheck, span: "md:col-span-2" },
  { id: "exportacao", title: "Exportação", text: "Mercado global.", icon: GlobeHemisphereWest, span: "" },
  { id: "marketing", title: "Marketing", text: "Branding corporativo.", icon: Megaphone, span: "" },
  { id: "websites", title: "Soluções Digitais", text: "Web e automação tech.", icon: Desktop, span: "md:col-span-2 md:row-span-2" },
  { id: "design", title: "Design Gráfico", text: "Identidade visual premium.", icon: PaintBrush, span: "" },
  { id: "eventos", title: "Eventos B2B", text: "Feiras e activações corporativas.", icon: CalendarCheck, span: "md:col-span-2" },
  { id: "governo", title: "Articulação Gov.", text: "Acesso institucional e licenças.", icon: Buildings, span: "" },
];

const stats = [
  { value: "200+", label: "Empresas Apoiadas" },
  { value: "14", label: "Serviços Integrados" },
  { value: "6", label: "Anos de Experiência" },
  { value: "50M+", label: "MT em Financiamento" },
];

const events = [
  { title: "SBI 2026", type: "Conferência e Exposição", date: "Abril 2026", desc: "O maior evento corporativo para PMEs.", link: "/eventos/sbi-2026", featured: true },
  { title: "Smart Business Expo", type: "Feiras Trimestrais", date: "Mai, Ago, Nov", desc: "Exposição de produtos e networking.", link: "#", featured: false },
  { title: "Maratona Business Leaders", type: "Corrida", date: "Dez 2026", desc: "Networking e saúde para líderes.", link: "#", featured: false },
  { title: "FACIM", type: "Activações", date: "Ago 2026", desc: "Coordenação de espaços PME.", link: "#", featured: false },
];

const timeline = [
  { year: "2018", desc: "Início das feiras e activações com PMEs." },
  { year: "2019", desc: "Consolidação de feiras comunitárias." },
  { year: "2020", desc: "Adaptação pós-Covid." },
  { year: "2022", desc: "Início do SBI." },
  { year: "2023", desc: "Projecto PME Digital." },
  { year: "2024", desc: "Expansão de rede corporativa." },
  { year: "2025", desc: "Fortalecimento da marca." },
  { year: "2026", desc: "Expo trimestral + SBI + Maratona." },
];

const testimonials = [
  { quote: "A Smart Business foi essencial para a formalização da nossa empresa. Hoje temos acesso a financiamento bancário.", author: "Director Executivo", company: "PME Agrícola" },
  { quote: "Fomos aprovados pelo banco em menos de 60 dias com o dossier preparado pela equipa.", author: "Empreendedora", company: "Startup Tech" },
  { quote: "O SBI foi o ponto de viragem — fizemos contactos com investidores que mudaram tudo.", author: "Fundador", company: "Logística" },
];

const fundingSteps = [
  { num: "01", title: "Candidatura", desc: "Submissão de dados.", icon: FileText },
  { num: "02", title: "Triagem", desc: "Diagnóstico do negócio.", icon: ShieldCheck },
  { num: "03", title: "Documentação", desc: "Dossier completo.", icon: RocketLaunch },
  { num: "04", title: "Financiamento", desc: "Ligação com bancos.", icon: Bank },
];

const partners = {
  institutional: ["Governo de Moçambique", "APIEX", "IPEME", "IPM", "Ministérios"],
  financial: ["Bancos Comerciais", "Seguradoras", "FinTechs", "Fundos de Investimento"],
};

/* ─── stat counter ─── */
function Stat({ value, label }: { value: string; label: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 8 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="text-center py-6">
      <div className="text-3xl font-bold font-mono text-accent">{value}</div>
      <div className="text-xs text-muted-foreground mt-1">{label}</div>
    </motion.div>
  );
}

/* ─── section title ─── */
function SectionTitle({ label, title, id }: { label: string; title: string; id?: string }) {
  return (
    <div className="mb-8" id={id}>
      <span className="text-accent text-[10px] font-bold tracking-widest uppercase">{label}</span>
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight mt-1">{title}</h2>
    </div>
  );
}

/* ─── page ─── */
export default function Home() {
  return (
    <div className="w-full">

      {/* ━━━ HERO ━━━ */}
      <HeroSection />

      {/* ━━━ SOLUTIONS CAROUSEL ━━━ */}
      <ScrollingSolutions />

      {/* ━━━ STATS ━━━ */}
      <section className="border-y border-border bg-muted">
        <div className="max-w-6xl mx-auto px-4 md:px-8 grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
          {stats.map((s) => <Stat key={s.label} {...s} />)}
        </div>
      </section>

      {/* ━━━ SOBRE ━━━ */}
      <section className="py-16" id="sobre">
        <div className="max-w-6xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <SectionTitle label="Quem Somos" title="Reduzimos a distância entre o seu negócio e o mercado." />
            <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <p>A Smart Business é uma plataforma empresarial focada na organização, crescimento e profissionalização de micro, pequenas e médias empresas.</p>
              <p>Criamos ambientes práticos e acessíveis onde empreendedores se conectam a recursos vitais para escalabilidade e relevância institucional.</p>
            </div>
            <Link href="/sobre" className="inline-flex items-center text-xs font-bold text-accent mt-4 hover:underline">
              Ver história completa <ArrowUpRight size={12} className="ml-1" weight="bold" />
            </Link>
          </div>
          {/* bento-style pillars */}
          <div className="grid grid-cols-2 gap-3">
            <div className="glass rounded-lg p-5 space-y-2 col-span-2">
              <Eye size={22} className="text-accent" />
              <h3 className="text-sm font-bold">Visão</h3>
              <p className="text-[11px] text-muted-foreground leading-relaxed">Ser a plataforma nacional de referência em aceleração e estruturação de PMEs em Moçambique.</p>
            </div>
            <div className="border border-border rounded-lg p-5 space-y-2">
              <Target size={22} className="text-accent" />
              <h3 className="text-sm font-bold">Missão</h3>
              <p className="text-[11px] text-muted-foreground leading-relaxed">Ambientes integrados para empreendedores.</p>
            </div>
            <div className="border border-border rounded-lg p-5 space-y-2">
              <Lightbulb size={22} className="text-accent" />
              <h3 className="text-sm font-bold">Propósito</h3>
              <p className="text-[11px] text-muted-foreground leading-relaxed">Talento traduzido em sucesso sustentável.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ SERVIÇOS – Bento Grid ━━━ */}
      <section className="py-16 bg-muted border-t border-border" id="servicos">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="flex items-end justify-between mb-8">
            <SectionTitle label="Soluções" title="Nossos serviços." />
            <Link href="/servicos" className="text-[11px] font-bold text-accent hover:underline hidden md:inline-flex items-center">
              Ver detalhes <ArrowRight size={12} className="ml-1" weight="bold" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 grid-flow-row-dense">
            {services.map((svc, i) => {
              const Icon = svc.icon;
              const isWide = svc.span.includes("col-span-2");
              return (
                <motion.div key={svc.id} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.03 }}
                  className={svc.span || ""}
                >
                  <Link href={`/servicos/${svc.id}`}
                    className={`block border border-border rounded-lg p-5 hover:bg-background transition-colors group h-full ${isWide ? "glass" : ""}`}
                  >
                    <div className={`flex ${svc.span.includes("row-span-2") ? "flex-col justify-between h-full" : "items-start gap-3"}`}>
                      <Icon size={svc.span.includes("row-span-2") ? 32 : 20} className={`text-accent shrink-0 ${svc.span.includes("row-span-2") ? "" : "mt-0.5"}`} />
                      <div>
                        <h3 className={`${svc.span.includes("row-span-2") ? "text-base mt-4" : "text-xs"} font-bold leading-tight mb-0.5`}>{svc.title}</h3>
                        <p className="text-[11px] text-muted-foreground leading-snug">{svc.text}</p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ━━━ EVENTOS – Bento Grid ━━━ */}
      <section className="py-16 border-t border-border" id="eventos">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <SectionTitle label="Eventos" title="Eventos Empresariais 2026." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {/* Featured event takes 2 cols */}
            <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="md:col-span-2 md:row-span-2 glass rounded-xl p-7 flex flex-col border border-accent/20 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-accent/8 rounded-full blur-[60px] pointer-events-none" />
              <span className="inline-block text-[10px] font-bold bg-accent text-white px-2.5 py-0.5 rounded w-max mb-3 relative z-10">Destaque</span>
              <div className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider mb-1">Conferência e Exposição</div>
              <h3 className="text-xl font-bold mb-2">SBI 2026</h3>
              <p className="text-sm text-muted-foreground mb-5 max-w-[38ch]">O maior evento corporativo para PMEs. Conecte-se com Governo, Bancos e Investidores.</p>
              <div className="flex flex-wrap gap-2 mb-5">
                <div className="glass rounded-md px-3 py-1.5 flex items-center gap-1.5 text-[11px]">
                  <CalendarBlank size={14} className="text-accent" /> Abril 2026
                </div>
                <div className="glass rounded-md px-3 py-1.5 flex items-center gap-1.5 text-[11px]">
                  <Ticket size={14} className="text-accent" /> 500 MT
                </div>
              </div>
              <Link href="/eventos/sbi-2026" className="inline-flex items-center text-xs font-bold text-accent hover:underline mt-auto">
                Ver página do evento <ArrowUpRight size={10} className="ml-0.5" weight="bold" />
              </Link>
            </motion.div>

            {/* Other events */}
            {events.filter((e) => !e.featured).map((ev, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (i + 1) * 0.06 }}
                className="border border-border rounded-lg p-5 flex flex-col"
              >
                <div className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider mb-1">{ev.type}</div>
                <h3 className="text-sm font-bold mb-1">{ev.title}</h3>
                <p className="text-[11px] text-muted-foreground mb-3 flex-1">{ev.desc}</p>
                <div className="text-[11px] font-medium text-muted-foreground flex items-center gap-1.5">
                  <CalendarBlank size={14} className="text-accent" /> {ev.date}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ SBI 2026 HIGHLIGHT ━━━ */}
      <section className="py-16 bg-muted border-t border-border" id="sbi">
        <div className="max-w-6xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-5 gap-6 items-start">
          <div className="md:col-span-3 space-y-4">
            <div className="inline-flex items-center rounded-md border border-accent/30 bg-accent/10 px-2.5 py-1 text-[10px] font-bold text-accent">
              <CalendarBlank size={12} className="mr-1.5" /> SBI 2026
            </div>
            <h2 className="text-2xl font-bold tracking-tight">Smart Business Innovation</h2>
            <p className="text-sm text-muted-foreground max-w-[40ch]">
              Conferência, Feira, Funding Desk e Serviços Governamentais num só evento.
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                { icon: CalendarBlank, text: "03 de Abril de 2026" },
                { icon: MapPin, text: "Centro Cultural Moç-China" },
                { icon: ShieldCheck, text: "Serviços Gov. no local" },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="border border-border rounded-md px-3 py-1.5 flex items-center gap-2 text-[11px]">
                    <Icon size={14} className="text-accent" /> {item.text}
                  </div>
                );
              })}
            </div>
            <Link href="/eventos/sbi-2026" className="inline-flex h-9 items-center rounded-md bg-accent px-5 text-xs font-bold text-white hover:opacity-90 transition-opacity">
              Saiba Mais
            </Link>
          </div>
          {/* bento highlights grid */}
          <div className="md:col-span-2 grid grid-cols-2 gap-2">
            {[
              { title: "Conferência", text: "Painéis de alto nível", num: "1" },
              { title: "Funding Desk", text: "Acesso a financiamento", num: "2" },
              { title: "Exposição", text: "Feira para PMEs", num: "3" },
              { title: "Gov. Services", text: "Alvarás e NUIT", num: "4" },
            ].map((item, i) => (
              <div key={i} className={`rounded-lg p-4 space-y-1.5 ${i === 0 ? "glass col-span-2" : "border border-border"}`}>
                <span className="text-[10px] font-mono font-bold text-accent/40">{item.num}</span>
                <h4 className="text-xs font-bold">{item.title}</h4>
                <p className="text-[11px] text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ FUNDING DESK ━━━ */}
      <section className="py-16 border-t border-border" id="funding">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <SectionTitle label="Investimento" title="Smart Business Funding Desk." />
          <p className="text-sm text-muted-foreground mb-6 max-w-lg -mt-4">
            Ligamos PMEs a bancos, fundos e investidores.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            {fundingSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div key={step.num} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  className={`rounded-lg p-5 space-y-2 ${i === 3 ? "glass border-accent/20" : "border border-border"}`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-mono font-bold text-accent/20">{step.num}</span>
                    <Icon size={20} className="text-accent" />
                  </div>
                  <h3 className="text-sm font-bold">{step.title}</h3>
                  <p className="text-[11px] text-muted-foreground leading-relaxed">{step.desc}</p>
                </motion.div>
              );
            })}
          </div>
          <Link href="/contactos" className="inline-flex h-9 items-center rounded-md bg-accent px-5 text-xs font-bold text-white hover:opacity-90 transition-opacity">
            Quero financiamento
          </Link>
        </div>
      </section>

      {/* ━━━ HISTÓRICO ━━━ */}
      <section className="py-16 bg-muted border-t border-border" id="historico">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <SectionTitle label="Trajectória" title="O nosso histórico." />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {timeline.map((item, i) => (
              <motion.div key={item.year} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }}
                className={`rounded-lg p-5 ${i === 0 || i === timeline.length - 1 ? "glass col-span-2 md:col-span-1" : "border border-border"}`}
              >
                <span className="text-xl font-mono font-bold text-accent">{item.year}</span>
                <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ PARCEIROS ━━━ */}
      <section className="py-16 border-t border-border" id="parceiros">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <SectionTitle label="Rede" title="Parceiros estratégicos." />
          <div className="space-y-8">
            <div>
              <h3 className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-3 border-b border-border pb-2">Institucionais</h3>
              <div className="grid grid-cols-3 md:grid-cols-5 gap-2">
                {partners.institutional.map((p) => (
                  <div key={p} className="border border-border rounded-md p-3 flex items-center justify-center text-center">
                    <span className="text-[10px] font-bold text-muted-foreground">{p}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-3 border-b border-border pb-2">Ecossistema Financeiro</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {partners.financial.map((p) => (
                  <div key={p} className="border border-border rounded-md p-3 flex items-center justify-center text-center">
                    <span className="text-[10px] font-bold text-muted-foreground">{p}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ TESTEMUNHOS ━━━ */}
      <section className="py-16 bg-muted border-t border-border" id="testemunhos">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <SectionTitle label="Testemunhos" title="O que dizem os nossos parceiros." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {testimonials.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className={`rounded-lg p-6 flex flex-col ${i === 0 ? "glass md:col-span-2" : "border border-border bg-background"}`}
              >
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, s) => <Star key={s} size={14} className="text-accent" weight="fill" />)}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">&ldquo;{t.quote}&rdquo;</p>
                <div className="border-t border-border pt-4">
                  <div className="text-xs font-bold">{t.author}</div>
                  <div className="text-[10px] text-muted-foreground">{t.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ CONTACTOS ━━━ */}
      <section className="py-16 border-t border-border" id="contactos">
        <div className="max-w-6xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4 space-y-3">
            <SectionTitle label="Contactos" title="Fale connosco." />
            <div className="space-y-2">
              {[
                { icon: MapPin, text: "Hotel Oia (Ótia), 3º Andar, Maputo" },
                { icon: Phone, text: "+258 8X XXX XXXX" },
                { icon: EnvelopeSimple, text: "info@smartbusiness.co.mz" },
              ].map((c, i) => {
                const Icon = c.icon;
                return (
                  <div key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Icon size={14} className="text-accent shrink-0" weight="fill" /> {c.text}
                  </div>
                );
              })}
            </div>
            <div className="pt-2 space-y-2">
              <button className="w-full h-9 rounded-md bg-[#25D366] text-white text-xs font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                <WhatsappLogo size={14} weight="fill" /> WhatsApp
              </button>
            </div>
          </div>
          <div className="md:col-span-8 glass rounded-lg p-5">
            <h3 className="text-sm font-bold mb-4">Solicitar Proposta</h3>
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
                Enviar
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ━━━ CTA FINAL ━━━ */}
      <section className="py-12 bg-muted border-t border-border relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] bg-accent/6 rounded-full blur-[100px]" />
        </div>
        <div className="max-w-6xl mx-auto px-4 md:px-8 text-center relative z-10">
          <h2 className="text-xl md:text-2xl font-bold tracking-tight mb-2">Pronto para dar o próximo passo?</h2>
          <p className="text-xs text-muted-foreground mb-5">Conecte-se com a nossa equipa e transforme o seu negócio.</p>
          <div className="flex flex-wrap justify-center gap-2">
            <Link href="/funding-desk" className="inline-flex h-9 items-center rounded-md bg-accent px-5 text-xs font-bold text-white hover:opacity-90 transition-opacity">
              Financiamento
            </Link>
            <Link href="/eventos/sbi-2026" className="inline-flex h-9 items-center rounded-md border border-border px-5 text-xs font-medium hover:bg-background transition-colors">
              SBI 2026
            </Link>
            <Link href="/contactos" className="inline-flex h-9 items-center rounded-md border border-border px-5 text-xs font-medium hover:bg-background transition-colors">
              Contactos
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

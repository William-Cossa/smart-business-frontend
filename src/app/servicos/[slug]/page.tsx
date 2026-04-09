"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, CheckCircle } from "@phosphor-icons/react";

const serviceData: Record<string, { title: string; short: string; whatWeDo: string[]; forWho: string[]; results: string[] }> = {
  "consultoria": {
    title: "Consultoria Estratégica",
    short: "Analisamos a maturidade do seu negócio e desenvolvemos estratégias claras para reposicionamento, crescimento e sustentabilidade.",
    whatWeDo: ["Diagnóstico empresarial completo", "Definição de modelo de negócio", "Planeamento estratégico", "Reestruturação organizacional", "Análise de mercado", "Plano de acção com KPIs"],
    forWho: ["Empresas em crescimento", "PMEs em reestruturação", "Negócios em expansão", "Empreendedores iniciais"],
    results: ["Clareza estratégica", "Gestão profissionalizada", "Metas mensuráveis", "Preparação para investimento"],
  },
  "planos-de-negocio": {
    title: "Preparação de Projectos e Dossiers",
    short: "Estruturamos documentação para bancos, fundos e investidores, aumentando a probabilidade de aprovação.",
    whatWeDo: ["Plano de Negócio completo", "Projecções financeiras", "Pitch Deck", "Organização documental", "Carta de solicitação", "Dossier para submissão"],
    forWho: ["PMEs em crescimento", "Startups", "Empresas em expansão", "Crédito bancário"],
    results: ["Dossier profissional", "Credibilidade bancária", "Melhor negociação", "Preparação para investidores"],
  },
  "projecoes": {
    title: "Projecções Financeiras",
    short: "Modelos financeiros robustos que sustentam viabilidade e apoiam decisões de investimento.",
    whatWeDo: ["Projecção de receitas (3-5 anos)", "Análise de viabilidade", "Break-even analysis", "Fluxo de caixa", "Cenários múltiplos", "Dashboards financeiros"],
    forWho: ["Pedidos de financiamento", "Gestores", "Fase de arranque", "Investidores"],
    results: ["Clareza financeira", "Base numérica", "Risco quantificado", "Confiança dos investidores"],
  },
  "acesso-financiamento": {
    title: "Acesso ao Financiamento",
    short: "Ponte directa entre a sua empresa e instituições financeiras, programas e fundos.",
    whatWeDo: ["Mapeamento de fontes", "Preparação de candidaturas", "Articulação com bancos", "Programas governamentais", "Negociação de condições", "Acompanhamento"],
    forWho: ["PMEs com necessidade de capital", "Empresas formalizadas", "Projectos sólidos", "Cooperativas"],
    results: ["Acesso a linhas de crédito", "Candidaturas aprovadas", "Condições negociadas", "Capital para escalar"],
  },
  "investidores": {
    title: "Captação de Capital e Investidores",
    short: "Conexão a investidores-anjo, venture capital e parceiros estratégicos.",
    whatWeDo: ["Pitch Deck", "Valuation", "Identificação de investidores", "Mediação de reuniões", "Propostas de equity", "Due diligence"],
    forWho: ["Startups escaláveis", "PMEs alto crescimento", "Empresas inovadoras", "Impacto social"],
    results: ["Ligação a investidores", "Captação de equity", "Expansão acelerada", "Valorização sustentável"],
  },
  "formalizacao": {
    title: "Formalização e Licenciamento",
    short: "Legalização e regularização completa, desde o alvará até licenças sectoriais.",
    whatWeDo: ["Registo comercial", "NUIT empresarial", "Alvará comercial", "Licenças sectoriais", "INSS e IRPS", "Certidões legais"],
    forWho: ["Negócios informais", "Documentação incompleta", "Novos empreendedores", "Prestadores de serviço"],
    results: ["100% legalizada", "Acesso a financiamento", "Credibilidade", "Emissão de facturas"],
  },
  "contabilidade": {
    title: "Contabilidade e Fiscalidade",
    short: "Gestão contabilística e obrigações fiscais com rigor e transparência.",
    whatWeDo: ["Contabilidade mensal", "Declarações fiscais", "Relatórios financeiros", "Folha salarial", "Reconciliação bancária", "Consultoria fiscal"],
    forWho: ["PMEs sem departamento", "Empresas em crescimento", "Compliance", "Obrigações pendentes"],
    results: ["Conformidade fiscal", "Relatórios claros", "Sem multas", "Base profissional"],
  },
  "certificacao": {
    title: "Certificação e Compliance",
    short: "Certificações de qualidade e conformidade com normas nacionais e internacionais.",
    whatWeDo: ["Diagnóstico de compliance", "Sistemas de gestão", "Preparação ISO", "Segurança e ambiente", "Procedimentos operacionais", "Treino de equipas"],
    forWho: ["Mercados internacionais", "Contratos governamentais", "Requisitos regulatórios", "Procurement corporativo"],
    results: ["Certificação ISO", "Concursos públicos", "Conformidade total", "Vantagem competitiva"],
  },
  "exportacao": {
    title: "Exportação a Mercados",
    short: "Preparação para o mercado global, da legalização à identificação de compradores.",
    whatWeDo: ["Viabilidade de exportação", "Legalização aduaneira", "Mercados-alvo", "Matchmaking", "Catálogo de exportação", "Logística internacional"],
    forWho: ["Produtores agrícolas", "Produtos diferenciados", "PMEs industriais", "Cooperativas"],
    results: ["Mercados internacionais", "Documentação completa", "Contratos estrangeiros", "Receitas em moeda forte"],
  },
  "marketing": {
    title: "Marketing e Branding",
    short: "Marca, posicionamento e presença digital de impacto.",
    whatWeDo: ["Identidade visual", "Branding corporativo", "Redes sociais", "Conteúdo audiovisual", "Marketing digital", "Posicionamento"],
    forWho: ["Sem presença digital", "Marca desactualizada", "Lançamento", "Reestruturar imagem"],
    results: ["Marca profissional", "Presença digital", "Mais visibilidade", "Credibilidade"],
  },
  "websites": {
    title: "Soluções Digitais e Websites",
    short: "Websites, plataformas e ferramentas que digitalizam operações.",
    whatWeDo: ["Website corporativo", "Landing pages", "E-commerce", "Sistemas internos", "Automação", "Pagamentos online"],
    forWho: ["Sem presença web", "Digitalização", "Operações manuais", "Startups tech"],
    results: ["Presença digital", "Operações eficientes", "Vendas online", "Custos reduzidos"],
  },
  "design": {
    title: "Design Gráfico",
    short: "Materiais visuais premium que comunicam profissionalismo.",
    whatWeDo: ["Logotipo e manual", "Materiais corporativos", "Catálogos", "Design social media", "Merchandising", "Apresentações"],
    forWho: ["Sem identidade visual", "Rebranding", "Materiais amadores", "Eventos"],
    results: ["Identidade coesa", "Materiais profissionais", "Imagem profissional", "Diferenciação"],
  },
  "eventos": {
    title: "Eventos Empresariais",
    short: "Eventos corporativos, feiras e activações que conectam a oportunidades.",
    whatWeDo: ["Planeamento e produção", "Feiras e exposições", "Conferências", "Activações de marca", "Logística", "Gestão de patrocínios"],
    forWho: ["Expor produtos", "Eventos B2B", "Lançamento de produtos", "Instituições"],
    results: ["Alto impacto", "Networking", "Visibilidade", "Parcerias"],
  },
  "governo": {
    title: "Articulação Institucional",
    short: "Acesso a canais institucionais e processos governamentais.",
    whatWeDo: ["Lobbying legal", "Reuniões institucionais", "Programas governamentais", "Concursos públicos", "Advocacy", "Câmaras de comércio"],
    forWho: ["Apoio governamental", "Procurement público", "Associações", "Impacto social"],
    results: ["Acesso a decisores", "Programas do Governo", "Advocacy eficaz", "Parcerias públicas"],
  },
};

export default function ServiceDetail() {
  const params = useParams();
  const slug = params?.slug as string;
  const data = serviceData[slug] || { ...serviceData["consultoria"], title: slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()) };

  return (
    <div className="pt-20 pb-16 max-w-6xl mx-auto px-4 md:px-8">
      <Link href="/servicos" className="inline-flex items-center text-xs font-medium text-muted-foreground hover:text-foreground transition-colors mb-8">
        <ArrowLeft size={14} className="mr-1.5" /> Voltar aos Serviços
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-7 space-y-4">
          <motion.h1 initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="text-2xl md:text-3xl font-bold tracking-tight">{data.title}</motion.h1>
          <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }} className="text-sm text-muted-foreground leading-relaxed max-w-[50ch]">{data.short}</motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="pt-4">
            <Link href="/contactos" className="inline-flex h-9 items-center rounded-md bg-accent px-5 text-xs font-bold text-white hover:opacity-90 transition-opacity">
              Quero este serviço
            </Link>
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="md:col-span-5 space-y-3">
          <div className="border border-border rounded-lg p-5 space-y-3">
            <h3 className="text-xs font-bold border-b border-border pb-2">O que fazemos</h3>
            <ul className="space-y-1.5">
              {data.whatWeDo.map((item, i) => (
                <li key={i} className="flex items-start text-xs text-muted-foreground">
                  <CheckCircle size={14} className="text-accent mr-2 mt-0.5 shrink-0" weight="fill" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="border border-border rounded-lg p-5 space-y-3">
            <h3 className="text-xs font-bold border-b border-border pb-2">Para quem é</h3>
            <ul className="space-y-1.5">
              {data.forWho.map((item, i) => (
                <li key={i} className="flex items-start text-xs text-muted-foreground">
                  <span className="w-1 h-1 rounded-full bg-accent mr-2 mt-1.5 shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="border border-accent/30 bg-accent/5 rounded-lg p-5 space-y-3">
            <h3 className="text-xs font-bold border-b border-border pb-2">Resultados Esperados</h3>
            <ul className="space-y-1.5">
              {data.results.map((item, i) => (
                <li key={i} className="flex items-start text-xs font-medium">
                  <CheckCircle size={14} className="text-accent mr-2 mt-0.5 shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

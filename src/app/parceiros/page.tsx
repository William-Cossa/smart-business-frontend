"use client";

import { motion } from "framer-motion";

export default function Parceiros() {
  return (
    <div className="pt-20 pb-16 max-w-6xl mx-auto px-4 md:px-8">
      <div className="mb-10 text-center max-w-lg mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">Rede de Parceiros</h1>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Actuamos em parceria com entidades estratégicas do sector público e privado.
        </p>
      </div>
      <div className="space-y-10">
        <section>
          <h2 className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-3 border-b border-border pb-2">Parceiros Institucionais</h2>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-2">
            {["Governo de Moçambique", "APIEX", "IPEME", "IPM", "Ministérios"].map((p) => (
              <motion.div key={p} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
                className="border border-border rounded-md p-3 flex items-center justify-center text-center aspect-[3/2]"
              >
                <span className="text-[10px] font-bold text-muted-foreground">{p}</span>
              </motion.div>
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-3 border-b border-border pb-2">Ecossistema Financeiro</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {["Bancos Comerciais", "Seguradoras", "FinTechs", "Fundos de Investimento"].map((p) => (
              <motion.div key={p} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
                className="border border-border rounded-md p-3 flex items-center justify-center text-center aspect-[3/1]"
              >
                <span className="text-[10px] font-bold text-muted-foreground">{p}</span>
              </motion.div>
            ))}
          </div>
        </section>
        <section className="border-t border-border pt-8">
          <div className="text-center mb-6">
            <h2 className="text-xl font-bold tracking-tight mb-2">Empresas Atendidas</h2>
            <p className="text-xs text-muted-foreground max-w-[45ch] mx-auto">Apoiamos dezenas de empresas em Moçambique.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 opacity-40">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="h-16 rounded-md border border-border flex items-center justify-center">
                <span className="text-[9px] uppercase tracking-widest font-bold">Logo Cliente</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

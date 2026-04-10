"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { 
  RocketLaunch, 
  Bank, 
  Briefcase, 
  ArrowRight 
} from "@phosphor-icons/react";
import Link from "next/link";

export function TransformationSection() {
  return (
    <section className="relative h-dvh overflow-hidden bg-accent dark:bg-[#0c1424] flex items-center py-8">
      {/* Decorative backdrop */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.15)_0%,transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,rgba(0,0,0,0.2)_0%,transparent_50%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full max-h-full overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-4"
          >
            <div className="space-y-2">
              <span className="text-[9px] font-bold text-white/60 tracking-[0.2em] uppercase block">
                Modelo de Impacto Smart Business
              </span>
              <h2 className="text-xl md:text-3xl font-bold text-white leading-tight">
                Transformamos potencial em <span className="text-white/70">resultados reais e mensuráveis.</span>
              </h2>
            </div>

            <p className="text-sm md:text-base text-white/70 leading-relaxed max-w-xl font-medium">
              Não somos apenas consultores. Somos arquitetos de crescimento, focados 
              em remover as barreiras que impedem o seu negócio de escalar.
            </p>

            <div className="space-y-2.5 pt-1">
              {[
                { 
                  title: "Crescimento Estruturado", 
                  desc: "Organizamos os seus processos para um crescimento sustentável.",
                  icon: RocketLaunch 
                },
                { 
                  title: "Acesso a Capitais", 
                  desc: "Preparamos a sua empresa para ser atrativa a investidores.",
                  icon: Bank 
                },
                { 
                  title: "Profissionalização Premium", 
                  desc: "Elevamos o padrão da sua marca para mercados exigentes.",
                  icon: Briefcase 
                }
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + (i * 0.05) }}
                    className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm group hover:bg-white/10 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <Icon size={18} className="text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-xs mb-0.5">{item.title}</h4>
                      <p className="text-white/60 text-[11px] leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="pt-2">
              <Link 
                href="/contactos" 
                className="inline-flex items-center gap-3 px-6 py-2.5 bg-white text-accent font-bold rounded-lg hover:bg-neutral-50 transition-all shadow-2xl hover:translate-y-[-2px] active:translate-y-0 text-[13px]"
              >
                Solicitar Diagnóstico Gratuito
                <ArrowRight size={16} weight="bold" />
              </Link>
            </div>
          </motion.div>

          {/* Right Visuals */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative lg:h-[450px] items-center justify-center hidden lg:flex"
          >
            {/* Main Image */}
            <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl border border-white/20 aspect-4/5 lg:h-[360px] w-full max-w-[300px]">
              <Image 
                src="/images/collaboration.png" 
                alt="Business Transformation" 
                fill
                className="object-cover"
                sizes="(max-width: 768px) 0vw, 30vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-accent/50 via-transparent to-transparent" />
            </div>

            {/* Floating abstract element */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-2 -left-2 w-36 lg:w-48 z-20 rounded-lg overflow-hidden shadow-2xl border border-white/30 hidden xl:block aspect-4/3"
            >
              <Image 
                src="/images/growth.png" 
                alt="Growth Metrics" 
                fill
                className="object-cover"
                sizes="192px"
              />
            </motion.div>

            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-[80px]" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-black/30 rounded-full blur-[100px]" />
            
            {/* Glass decoration card */}
            <div className="absolute top-1/4 -right-2 z-20 glass p-3 rounded-lg border border-white/20 hidden xl:block animate-pulse">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                <span className="text-[8px] font-bold text-white uppercase tracking-widest">Live Transformation</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

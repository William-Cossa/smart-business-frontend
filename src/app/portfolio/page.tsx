"use client";

import { motion } from "framer-motion";

const galeriaItems = [
  { img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop", cat: "Eventos" },
  { img: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=2070&auto=format&fit=crop", cat: "Reuniões" },
  { img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1632&auto=format&fit=crop", cat: "Projectos" },
  { img: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1470&auto=format&fit=crop", cat: "Formação" },
  { img: "https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=1470&auto=format&fit=crop", cat: "Stands" },
  { img: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1469&auto=format&fit=crop", cat: "SBI" },
];

export default function Portfolio() {
  return (
    <div className="pt-20 pb-16 max-w-6xl mx-auto px-4 md:px-8">
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">Galeria & Portfólio</h1>
        <p className="text-sm text-muted-foreground leading-relaxed max-w-[50ch]">
          Momentos e eventos que marcam o ecossistema empresarial.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        {galeriaItems.map((item, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }}
            className="relative rounded-lg overflow-hidden border border-border group aspect-[4/3]"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={item.img} alt={item.cat} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent flex items-end p-3">
              <span className="text-white text-[10px] font-bold bg-black/40 backdrop-blur-sm px-2 py-1 rounded">{item.cat}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

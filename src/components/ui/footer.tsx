import Link from "next/link";
import { MapPin, Phone, EnvelopeSimple, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { Logo } from "@/components/ui/logo";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-muted pt-12 pb-6">
      <div className="max-w-6xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6">
        <div className="col-span-1 md:col-span-2 space-y-3">
          <div className="inline-block scale-90 origin-left">
            <Logo />
          </div>
          <p className="text-muted-foreground text-xs leading-relaxed max-w-sm">
            Plataforma moçambicana especializada em estruturar micro, pequenas e médias empresas,
            conectando-as a financiamento, formalização e crescimento.
          </p>
        </div>

        <div className="space-y-3">
          <h4 className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider">Acesso Rápido</h4>
          <ul className="space-y-2">
            <li><Link href="/sobre" className="text-xs text-muted-foreground hover:text-accent transition-colors">Sobre Nós</Link></li>
            <li><Link href="/servicos" className="text-xs text-muted-foreground hover:text-accent transition-colors">Serviços</Link></li>
            <li><Link href="/eventos/sbi-2026" className="text-xs text-muted-foreground hover:text-accent transition-colors">SBI 2026</Link></li>
            <li><Link href="/funding-desk" className="text-xs text-accent hover:text-foreground transition-colors flex items-center gap-1">Funding Desk <ArrowUpRight size={10} weight="bold" /></Link></li>
          </ul>
        </div>

        <div className="space-y-3">
          <h4 className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider">Contactos</h4>
          <ul className="space-y-2 text-xs text-muted-foreground">
            <li className="flex items-start gap-2">
              <MapPin size={14} className="text-accent shrink-0 mt-0.5" weight="fill" />
              <span>Hotel Oia (Ótia), 3º Andar, Maputo</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={14} className="text-accent shrink-0" weight="fill" />
              <span>+258 8X XXX XXXX</span>
            </li>
            <li className="flex items-center gap-2">
              <EnvelopeSimple size={14} className="text-accent shrink-0" weight="fill" />
              <span>info@smartbusiness.co.mz</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 mt-10 pt-4 border-t border-border flex flex-col md:flex-row items-center justify-between gap-2">
        <p className="text-[10px] text-muted-foreground">
          © {new Date().getFullYear()} Smart Business. Todos os direitos reservados.
        </p>
        <p className="text-[10px] text-muted-foreground">
          Feito com precisão em Moçambique.
        </p>
      </div>
    </footer>
  );
}

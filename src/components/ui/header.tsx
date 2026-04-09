"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { List, X, ArrowRight, Sun, Moon } from "@phosphor-icons/react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/components/theme-provider";
import { Logo } from "@/components/ui/logo";

const navLinks = [
  { name: "Início", href: "/" },
  { name: "Sobre", href: "/sobre" },
  { name: "Serviços", href: "/servicos" },
  { name: "Eventos", href: "/eventos" },
  { name: "Contactos", href: "/contactos" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-200 ${
          scrolled
            ? "py-2 bg-background/80 backdrop-blur-md border-b border-border"
            : "py-3 bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 md:px-8 flex items-center justify-between">
          <Link href="/" className="shrink-0">
            <Logo />
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={toggle}
              className="w-8 h-8 rounded-md border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              aria-label="Alternar tema"
            >
              {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
            </button>
            <Link
              href="/contactos"
              className="inline-flex h-8 items-center rounded-md bg-accent px-4 text-xs font-medium text-white hover:opacity-90 transition-opacity"
            >
              Agendar Reunião
            </Link>
          </div>

          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggle}
              className="w-8 h-8 rounded-md border border-border flex items-center justify-center text-muted-foreground"
              aria-label="Alternar tema"
            >
              {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
            </button>
            <button
              className="text-foreground p-1"
              onClick={() => setMobileMenuOpen(true)}
            >
              <List size={20} weight="bold" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-0 z-[60] bg-background flex flex-col p-4"
          >
            <div className="flex items-center justify-between mb-8">
              <span className="font-semibold text-sm">Navegação</span>
              <button onClick={() => setMobileMenuOpen(false)} className="p-1">
                <X size={20} />
              </button>
            </div>
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-3 px-3 rounded-md text-sm font-medium hover:bg-muted transition-colors border-b border-border"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/contactos"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4 flex h-10 items-center justify-center rounded-md bg-accent text-sm font-medium text-white"
              >
                Agendar Reunião
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

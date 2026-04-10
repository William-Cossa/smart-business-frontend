"use client";

import { useRef, useEffect, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react";

const textStates = [
  {
    headline: "Negócios não falham por falta de ideias.",
    sub: "Falham por falta de estrutura.",
  },
  {
    headline: "Sem organização,\nfinanciamento,\ne acesso ao mercado",
    sub: "o crescimento não acontece.",
  },
  {
    headline: "A Smart Business transforma negócios em empresas prontas para crescer.",
    sub: "Prepare-se para crescer agora",
  },
  {
    headline: "Estruture, financie\ne escale.",
    sub: "com a Smart Business.",
  },
];

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [phase, setPhase] = useState(0);
  const [videoReady, setVideoReady] = useState(false);

  // Queued-seek state — avoids dropping seeks mid-decode
  const isSeeking = useRef(false);
  const pendingProgress = useRef<number | null>(null);

  /* ─── Mark video ready on metadata load ─── */
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const onMeta = () => setVideoReady(true);
    video.addEventListener("loadedmetadata", onMeta);
    if (video.readyState >= 1) setVideoReady(true);
    return () => video.removeEventListener("loadedmetadata", onMeta);
  }, []);

  /* ─── Queued seek: flush next seek after current one completes ─── */
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !videoReady) return;

    const flushSeek = () => {
      isSeeking.current = false;
      if (pendingProgress.current !== null) {
        const p = pendingProgress.current;
        pendingProgress.current = null;
        doSeek(p);
      }
    };

    video.addEventListener("seeked", flushSeek);
    return () => video.removeEventListener("seeked", flushSeek);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videoReady]);

  const doSeek = (progress: number) => {
    const video = videoRef.current;
    if (!video || !video.duration) return;
    if (isSeeking.current) {
      // Already seeking — store latest and it'll be applied after `seeked`
      pendingProgress.current = progress;
      return;
    }
    isSeeking.current = true;
    video.currentTime = progress * video.duration;
  };

  /* ─── framer-motion scroll progress (0→1 over the scroll container) ─── */
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (p) => {
    // Map video scrubbing to first 80% of scroll
    const videoProgress = Math.min(p / 0.8, 1);
    doSeek(videoProgress);

    // Redistribute phases (for 4 text states)
    if (p < 0.25) setPhase(0);
    else if (p < 0.50) setPhase(1);
    else if (p < 0.75) setPhase(2);
    else setPhase(3);
  });

  /* ─── helpers ─── */
  const textVisible = (i: number) => phase === i;

  return (
    /* 400vh — gives 300vh of actual scroll travel */
    <div ref={containerRef} style={{ height: "400vh" }} className="relative">

      {/* Sticky full-screen frame */}
      <div
        className="sticky top-0 h-screen w-full overflow-hidden flex items-center
                   bg-white dark:bg-linear-to-br dark:from-[#080d1a] dark:via-[#0c1424] dark:to-[#101929]
                   transition-colors duration-500"
      >
        {/* Ambient glow blobs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-100 dark:opacity-100">
          <div className="absolute top-[-15%] left-[-10%] w-[700px] h-[700px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(47,95,163,0.12) 0%, transparent 65%)" }} />
          <div className="absolute bottom-[-20%] right-[5%] w-[500px] h-[500px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(47,95,163,0.08) 0%, transparent 65%)" }} />
        </div>

        {/* ── Main content row ── */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12
                        flex flex-col md:flex-row items-center gap-10 md:gap-20">

          {/* ─── LEFT: Text ─── */}
          <div className="flex-1 min-w-0">
            {/* Badge */}
            <div className="inline-flex items-center rounded-full border border-black/5 dark:border-white/15
                            bg-black/3 dark:bg-white/8 backdrop-blur-sm px-3 py-1 text-[11px] font-medium text-neutral-600 dark:text-white/70 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-accent mr-2 animate-pulse" />
              Transformando Negócios em Moçambique
            </div>

            {/* Animated text states */}
            <div className="relative mb-10" style={{ minHeight: "clamp(150px, 20vw, 210px)" }}>
              {textStates.map((state, i) => (
                <div
                  key={i}
                  className="absolute top-0 left-0 w-full"
                  style={{
                    opacity: textVisible(i) ? 1 : 0,
                    transform: textVisible(i)
                      ? "translateY(0px)"
                      : phase > i
                        ? "translateY(-22px)"
                        : "translateY(22px)",
                    transition:
                      "opacity 0.75s cubic-bezier(0.25,0.46,0.45,0.94), " +
                      "transform 0.75s cubic-bezier(0.25,0.46,0.45,0.94)",
                    pointerEvents: textVisible(i) ? "auto" : "none",
                  }}
                >
                  <h1
                    className="font-bold tracking-tight leading-[1.1] text-neutral-900 dark:text-white mb-4"
                    style={{
                      fontSize: "clamp(2rem, 4.5vw, 3rem)",
                      whiteSpace: "pre-line",
                      textShadow: "0 2px 20px rgba(0,0,0,0.05)",
                    }}
                  >
                    {state.headline}
                  </h1>
                  <p
                    className="text-neutral-500 dark:text-white/60 leading-relaxed font-medium"
                    style={{ fontSize: "clamp(0.95rem, 1.35vw, 1.2rem)" }}
                  >
                    {state.sub}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA — final phase only */}
            <div
              style={{
                opacity: phase === 3 ? 1 : 0,
                transform: phase === 3 ? "translateY(0px)" : "translateY(14px)",
                transition:
                  "opacity 0.8s cubic-bezier(0.25,0.46,0.45,0.94) 0.2s, " +
                  "transform 0.8s cubic-bezier(0.25,0.46,0.45,0.94) 0.2s",
                pointerEvents: phase === 3 ? "auto" : "none",
              }}
            >
              <Link
                href="/contactos"
                className="inline-flex h-12 items-center gap-2.5 rounded-lg bg-accent
                           px-8 text-sm font-bold text-white hover:bg-accent/90
                           transition-colors shadow-xl"
              >
                Solicitar Proposta
                <ArrowRight size={16} weight="bold" />
              </Link>
            </div>
          </div>

          {/* ─── RIGHT: Floating Video Card ─── */}
          <div className="shrink-0 hidden lg:block relative">
            {/* Glow ring */}
            <div
              className="rounded-2xl p-px"
              style={{
                background:
                  "linear-gradient(135deg, rgba(47,95,163,0.55) 0%, rgba(47,95,163,0.08) 50%, rgba(255,255,255,0.05) 100%)",
                boxShadow:
                  "0 32px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(47,95,163,0.18), inset 0 1px 0 rgba(255,255,255,0.05)",
              }}
            >
              {/* Card */}
              <div
                className="rounded-2xl overflow-hidden bg-white/90 dark:bg-neutral-950/90"
                style={{
                  width: "clamp(480px, 40vw, 680px)",
                  backdropFilter: "blur(14px)",
                }}
              >
                {/* 16:9 video well */}
                <div style={{ aspectRatio: "16/9" }} className="relative overflow-hidden bg-black">
                  <video
                    ref={videoRef}
                    src="/hero-transformation-scrub.mp4"
                    muted
                    playsInline
                    preload="auto"
                    className="w-full h-full object-cover"
                  />
                  {/* Inner vignette */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{ boxShadow: "inset 0 0 50px rgba(0,0,0,0.4)" }}
                  />
                </div>

                {/* Card footer */}
                <div className="px-5 py-3 flex items-center justify-between border-t border-black/5 dark:border-white/6">
                  <span className="text-[10px] font-medium font-mono text-neutral-400 dark:text-white/30 tracking-widest uppercase">
                    Smart Business
                  </span>
                  <span className="flex items-center gap-1.5 text-[10px] text-neutral-400 dark:text-white/30">
                    <span
                      className="w-1.5 h-1.5 rounded-full transition-colors duration-500"
                      style={{
                        background: videoReady ? "#22c55e" : "#475569",
                        boxShadow: videoReady ? "0 0 6px #22c55e88" : "none",
                      }}
                    />
                    {videoReady ? "Ready" : "Loading…"}
                  </span>
                </div>
              </div>
            </div>

            {/* "scroll to explore" badge */}
            <div
              className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap
                         rounded-full border border-black/5 dark:border-white/10 
                         bg-white/80 dark:bg-white/8 backdrop-blur-sm shadow-sm
                         px-4 py-1 text-[10px] font-medium text-neutral-400 dark:text-white/45 pointer-events-none"
              style={{
                opacity: phase === 0 ? 1 : 0,
                transition: "opacity 0.6s",
              }}
            >
              scroll to explore ↓
            </div>
          </div>

        </div>

        {/* ─── Mobile: autoplay strip at bottom ─── */}
        <div className="absolute bottom-0 left-0 right-0 h-[38vh] md:hidden overflow-hidden">
          <video
            src="/hero-transformation-scrub.mp4"
            muted playsInline autoPlay loop
            className="w-full h-full object-cover opacity-35"
          />
          <div
            className="absolute inset-0 dark:hidden"
            style={{
              background: "linear-gradient(to bottom, #fff 0%, transparent 45%)"
            }}
          />
          <div
            className="absolute inset-0 hidden dark:block"
            style={{ background: "linear-gradient(to bottom, #080d1a 0%, transparent 45%)" }}
          />
        </div>

      </div>
    </div>
  );
}

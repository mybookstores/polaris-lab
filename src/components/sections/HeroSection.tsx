"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";

export function HeroSection() {
  const { isZh } = useLanguage();

  return (
    <section className="relative overflow-hidden pt-28 pb-10 sm:pt-32 sm:pb-12 lg:pt-36 lg:pb-14">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background" />
      <div className="absolute left-0 top-1/3 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[150px]" />
      <div className="absolute right-0 bottom-1/3 h-[500px] w-[500px] rounded-full bg-secondary/5 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <div className="home-fade-in mb-7 sm:mb-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs text-foreground/80 sm:text-sm">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <span>{isZh ? "北京大学 · 人工智能研究实验室" : "Peking University · AI Research Lab"}</span>
          </span>
        </div>

        <h1 className="home-fade-in home-fade-in-delay-1 mb-5 font-heading text-5xl font-bold leading-[0.92] tracking-tight sm:text-7xl lg:mb-6 lg:text-8xl">
          <span className="text-foreground">Polaris</span>
          <span className="gradient-text">Lab</span>
        </h1>

        <p className="home-fade-in home-fade-in-delay-2 mb-5 font-heading text-xl text-foreground/70 sm:text-3xl lg:mb-6">
          {isZh ? "引领 AI 研究前沿" : "Pioneering AI Research Frontier"}
        </p>

        <p className="home-fade-in home-fade-in-delay-2 mx-auto mb-8 max-w-2xl text-base leading-7 text-muted-foreground sm:mb-10 sm:text-lg sm:leading-8">
          {isZh
            ? "围绕 AI for Science、Social Computing、General AI 与 Physical AI 四大方向，连接基础模型、科学发现与真实世界智能系统。"
            : "Advancing AI for Science, Social Computing, General AI, and Physical AI to connect foundation models, scientific discovery, and real-world intelligent systems."}
        </p>

        <div className="home-fade-in home-fade-in-delay-3 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4">
          <Button size="lg" className="w-full min-w-[180px] gap-2 sm:w-auto" render={<Link href="/research" />}>
            {isZh ? "探索研究方向" : "Explore Research"}
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full min-w-[180px] gap-2 sm:w-auto"
            render={<Link href="/achievements" />}
          >
            {isZh ? "查看研究成果" : "View Achievements"}
          </Button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent sm:h-28" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/40 to-transparent" />
    </section>
  );
}

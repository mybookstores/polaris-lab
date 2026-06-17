"use client";

import Link from "next/link";
import { ArrowRight, BookOpen, Bot, Brain, FlaskConical, Sparkles, Users } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHero } from "@/components/sections/PageHero";
import { SectionShell } from "@/components/sections/SectionShell";
import { useLanguage } from "@/context/LanguageContext";
import { getDirectionPapers, getDirections } from "@/lib/content";

const iconMap = {
  flask: FlaskConical,
  users: Users,
  brain: Brain,
  bot: Bot,
};

export default function ResearchPage() {
  const { isZh } = useLanguage();
  const language = isZh ? "zh" : "en";
  const directions = getDirections(language);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16">
        <PageHero
          badge={isZh ? "研究方向" : "Our Research"}
          badgeIcon={<Sparkles className="mr-1 h-3 w-3" />}
          heading={
            <>
              {isZh ? "AI创新的" : "Four Pillars of "}
              <span className="gradient-text">{isZh ? "四大支柱" : "AI Innovation"}</span>
            </>
          }
          description={
            isZh
              ? "我们的研究围绕科学智能、社会计算、通用人工智能与具身智能四个方向展开，连接基础理论与真实世界应用。"
              : "Our research spans four connected directions across scientific discovery, digital society, foundation models, and embodied intelligence."
          }
        />

        <SectionShell className="py-16" maxWidth="7xl">
          <div className="space-y-16">
            {directions.map((direction, index) => {
              const Icon = iconMap[direction.icon as keyof typeof iconMap];
              const relatedPapers = getDirectionPapers(direction.id).slice(0, 3);

              return (
                <div
                  key={direction.id}
                  className="home-fade-in grid grid-cols-1 items-start gap-8 lg:grid-cols-2"
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="mb-6 flex items-center gap-4">
                      <div
                        className="flex h-14 w-14 items-center justify-center rounded-xl"
                        style={{ backgroundColor: `${direction.color}20` }}
                      >
                        <Icon className="h-7 w-7" style={{ color: direction.color }} />
                      </div>
                      <div className="min-w-0">
                        <h2 className="line-clamp-2 text-2xl font-heading font-bold sm:text-3xl">
                          {direction.name}
                        </h2>
                        <div className="mt-2 flex min-h-10 flex-wrap gap-2">
                          {direction.subdirections.map((sub) => (
                            <Badge key={sub.id} variant="secondary" className="text-xs">
                              {sub.name}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    <p className="mb-6 leading-relaxed text-muted-foreground">
                      {direction.description}
                    </p>

                    <Button
                      variant="ghost"
                      className="group gap-2 px-0"
                      render={<Link href={`/research/${direction.id}`} />}
                    >
                      {isZh ? "探索" : "Explore"} {direction.name}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>

                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <Card className="border border-border/45 bg-card/35 p-6 transition-colors duration-200 hover:bg-card/55">
                      <div className="mb-4 flex items-center gap-2">
                        <BookOpen className="h-5 w-5 text-muted-foreground" />
                        <h3 className="font-heading font-semibold">
                          {isZh ? "代表论文" : "Selected Publications"}
                        </h3>
                      </div>
                      <div className="space-y-4">
                        {relatedPapers.map((paper) => (
                          <div
                            key={paper.id}
                            className="rounded-lg border border-border/35 bg-background/50 p-4 transition-colors hover:bg-background"
                          >
                            <h4 className="mb-2 line-clamp-2 text-sm font-medium">{paper.title}</h4>
                            <div className="flex min-w-0 items-center justify-between gap-3 text-xs text-muted-foreground">
                              <span className="truncate">{paper.authors[0]} et al.</span>
                              <span className="truncate text-right">
                                {paper.venue} {paper.year}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </SectionShell>
      </main>
      <Footer />
    </div>
  );
}

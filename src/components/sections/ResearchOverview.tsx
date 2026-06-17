"use client";

import Link from "next/link";
import { ArrowRight, Bot, Brain, FlaskConical, Sparkles, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { SectionShell } from "@/components/sections/SectionShell";
import { researchDirections } from "@/data";
import { useLanguage } from "@/context/LanguageContext";

const iconMap = {
  flask: FlaskConical,
  users: Users,
  brain: Brain,
  bot: Bot,
};

export function ResearchOverview() {
  const { isZh } = useLanguage();

  return (
    <SectionShell className="py-20 sm:py-24" topDivider>
      <SectionHeader
        align="center"
        badge={isZh ? "研究方向" : "Research Directions"}
        badgeIcon={<Sparkles className="mr-1 h-3 w-3" />}
        heading={
          <>
            {isZh ? "探索 AI 的" : "Exploring the"}{" "}
            <span className="gradient-text">{isZh ? "四大方向" : "Frontiers of AI"}</span>
          </>
        }
        description={
          isZh
            ? "围绕四个相互连接的研究方向，组织问题定义、团队协作与成果产出。"
            : "Our work is organized around four connected directions that shape how we study, build, and deploy intelligent systems."
        }
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
        {researchDirections.map((direction) => {
          const Icon = iconMap[direction.icon as keyof typeof iconMap];
          return (
            <div key={direction.id} className="home-fade-in home-fade-in-delay-1">
              <Link href={`/research/${direction.id}`} className="block h-full cursor-pointer">
                <Card className="group relative h-full border border-border/45 bg-card/35 p-6 transition-colors duration-200 hover:border-primary/25 hover:bg-card/55 sm:p-7">
                  <div
                    className="absolute bottom-0 left-0 top-0 w-1 rounded-l-lg"
                    style={{ backgroundColor: direction.color }}
                  />

                  <div className="relative z-10 flex h-full flex-col pl-4">
                    <div className="mb-3 flex items-center gap-4">
                      <div
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                        style={{ backgroundColor: `${direction.color}15` }}
                      >
                        <Icon className="h-5 w-5" style={{ color: direction.color }} />
                      </div>
                      <h3 className="line-clamp-2 font-heading text-lg font-semibold transition-colors group-hover:text-primary">
                        {direction.name}
                      </h3>
                    </div>

                    <div className="mb-4 flex min-h-14 flex-wrap gap-1.5">
                      {direction.subdirections.slice(0, 4).map((sub) => (
                        <Badge key={sub.id} variant="secondary" className="px-2 py-0.5 text-xs">
                          {sub.name}
                        </Badge>
                      ))}
                    </div>

                    <div className="mt-auto flex items-center text-xs text-muted-foreground transition-colors group-hover:text-primary">
                      <span>{isZh ? "了解更多" : "Learn more"}</span>
                      <ArrowRight className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Card>
              </Link>
            </div>
          );
        })}
      </div>
    </SectionShell>
  );
}

"use client";

import Link from "next/link";
import { ArrowRight, FileText, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { SectionShell } from "@/components/sections/SectionShell";
import { papers, researchDirections } from "@/data";
import { useLanguage } from "@/context/LanguageContext";

export function LatestAchievements() {
  const { isZh } = useLanguage();
  const latestPapers = papers.slice(0, 3);

  const getDirectionColor = (directionId: string) => {
    const direction = researchDirections.find((d) => d.id === directionId);
    return direction?.color || "#3B82F6";
  };

  return (
    <SectionShell className="py-20 sm:py-24" topDivider>
      <SectionHeader
        badge={isZh ? "最新成果" : "Fresh from the Lab"}
        badgeIcon={<Sparkles className="mr-1 h-3 w-3" />}
        heading={isZh ? "近期代表性成果" : "Latest Publications"}
        description={
          isZh
            ? "从近期论文中快速了解实验室在不同研究方向上的持续产出与代表性工作。"
            : "A quick look at recent papers that reflect the lab’s current output across multiple research directions."
        }
        actions={
          <Button variant="ghost" className="gap-2" render={<Link href="/achievements" />}>
            {isZh ? "查看全部" : "View All"}
            <ArrowRight className="h-4 w-4" />
          </Button>
        }
      />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-5">
        {latestPapers.map((paper) => {
          const hasPaperLink = paper.link && paper.link !== "#";

          return (
            <div key={paper.id} className="home-fade-in home-fade-in-delay-1">
              <Card className="group flex h-full flex-col border border-border/45 bg-card/35 p-5 transition-colors duration-200 hover:border-primary/25 hover:bg-card/55">
                <div className="mb-3 flex items-start justify-between gap-3">
                  <Badge
                    variant="secondary"
                    className="text-xs"
                    style={{
                      backgroundColor: `${getDirectionColor(paper.direction)}15`,
                      color: getDirectionColor(paper.direction),
                      borderColor: `${getDirectionColor(paper.direction)}30`,
                    }}
                  >
                    {researchDirections.find((d) => d.id === paper.direction)?.name}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{paper.year}</span>
                </div>

                <h3 className="mb-2 line-clamp-2 font-heading text-base font-medium leading-6 transition-colors group-hover:text-primary">
                  {paper.title}
                </h3>

                <div className="mb-2 line-clamp-1 text-xs uppercase tracking-[0.18em] text-foreground/45">{paper.venue}</div>

                <div className="mb-2 flex min-w-0 items-center gap-1 text-xs text-muted-foreground">
                  <FileText className="h-3.5 w-3.5" />
                  <span className="truncate">{paper.authors.join(", ")}</span>
                </div>

                <p className="mb-4 line-clamp-3 flex-1 text-sm leading-6 text-muted-foreground">
                  {paper.abstract}
                </p>

                <div className="mt-auto flex items-center justify-between border-t border-border/30 pt-3">
                  <span className="text-xs text-muted-foreground">
                    {paper.citations} {isZh ? "次引用" : "citations"}
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 px-2 text-xs"
                    disabled={!hasPaperLink}
                    render={hasPaperLink ? <a href={paper.link} target="_blank" rel="noreferrer" /> : undefined}
                  >
                    {isZh ? "阅读" : "Read"}
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </div>
              </Card>
            </div>
          );
        })}
      </div>
    </SectionShell>
  );
}

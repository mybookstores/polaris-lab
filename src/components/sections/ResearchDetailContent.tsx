"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, BookOpen, Sparkles, Users } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { SectionShell } from "@/components/sections/SectionShell";
import { useLanguage } from "@/context/LanguageContext";
import { getDirectionPapers, getDirectionTeamMembers, getDirectionWithContent } from "@/lib/content";

export function ResearchDetailContent({ slug }: { slug: string }) {
  const { isZh } = useLanguage();
  const language = isZh ? "zh" : "en";
  const direction = getDirectionWithContent(slug, language);

  if (!direction) {
    return null;
  }

  const relatedPapers = getDirectionPapers(slug);
  const relatedMembers = getDirectionTeamMembers(slug);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16">
        <section
          className="relative overflow-hidden py-24"
          style={{
            background: `linear-gradient(135deg, ${direction.color}12, transparent 50%, ${direction.color}08 100%)`,
          }}
        >
          <div className="absolute inset-0 grid-pattern opacity-50" />

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Link
              href="/research"
              className="home-fade-in mb-8 inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              {isZh ? "返回研究方向" : "Back to Research"}
            </Link>

            <div className="home-fade-in max-w-4xl">
              <Badge
                variant="outline"
                className="mb-6 px-4"
                style={{
                  borderColor: `${direction.color}40`,
                  backgroundColor: `${direction.color}10`,
                }}
              >
                <Sparkles className="mr-1 h-3 w-3" style={{ color: direction.color }} />
                {isZh ? "研究方向" : "Research Direction"}
              </Badge>

              <h1 className="mb-6 text-4xl font-heading font-bold tracking-tight sm:text-5xl lg:text-6xl">
                {direction.name}
              </h1>

              <p className="max-w-3xl text-xl text-muted-foreground">
                {direction.description}
              </p>
            </div>
          </div>
        </section>

        <SectionShell className="border-y border-border/50 bg-card/20 py-6" maxWidth="7xl">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              {
                label: isZh ? "重点子方向" : "Focus Areas",
                value: direction.subdirections.length,
              },
              {
                label: isZh ? "代表论文" : "Selected Papers",
                value: relatedPapers.length,
              },
              {
                label: isZh ? "相关成员" : "Researchers",
                value: relatedMembers.length,
              },
            ].map((item, index) => (
              <div
                key={item.label}
                className={`rounded-2xl border border-border/50 bg-background/60 px-5 py-4 ${index > 0 ? "home-fade-in home-fade-in-delay-1" : "home-fade-in"}`}
              >
                <div className="text-2xl font-heading font-bold text-foreground">{item.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{item.label}</div>
              </div>
            ))}
          </div>
        </SectionShell>

        <SectionShell className="py-16" maxWidth="7xl">
          <SectionHeader
            badge={isZh ? "研究重点" : "Focus Areas"}
            badgeIcon={<Sparkles className="mr-1 h-3 w-3" />}
            heading={isZh ? "研究重点" : "Focus Areas"}
            description={
              isZh
                ? "围绕该方向下的关键问题与核心子课题，组织持续研究与成果产出。"
                : "A closer look at the key sub-areas that structure this direction’s ongoing work."
            }
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {direction.subdirections.map((subdirection, index) => (
              <Card
                key={subdirection.id}
                className={`border border-border/45 bg-card/35 p-6 transition-colors duration-200 hover:border-primary/20 hover:bg-card/55 ${index > 0 ? "home-fade-in home-fade-in-delay-1" : "home-fade-in"}`}
              >
                <div className="mb-3 flex items-center gap-3">
                  <div
                    className="h-3 w-3 rounded-full"
                    style={{ backgroundColor: direction.color }}
                  />
                  <h3 className="text-xl font-heading font-semibold">{subdirection.name}</h3>
                </div>
                <p className="text-sm leading-6 text-muted-foreground">
                  {subdirection.description}
                </p>
              </Card>
            ))}
          </div>
        </SectionShell>

        <SectionShell className="py-16" maxWidth="7xl">
          <SectionHeader
            badge={isZh ? "代表论文" : "Selected Publications"}
            badgeIcon={<BookOpen className="mr-1 h-3 w-3" />}
            heading={
              <span className="inline-flex items-center gap-2">
                <span>{isZh ? "代表论文" : "Selected Publications"}</span>
                <Badge variant="secondary">{relatedPapers.length}</Badge>
              </span>
            }
            actions={
              <Button variant="ghost" size="sm" render={<Link href="/achievements" />}>
                {isZh ? "查看全部成果" : "View All"}
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            }
          />

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {relatedPapers.map((paper, index) => {
              const hasPaperLink = paper.link && paper.link !== "#";

              return (
                <Card
                  key={paper.id}
                  className={`flex h-full flex-col border border-border/45 bg-card/35 p-6 transition-colors duration-200 hover:border-primary/20 hover:bg-card/55 ${index > 0 ? "home-fade-in home-fade-in-delay-1" : "home-fade-in"}`}
                >
                  <div className="mb-3 flex items-center gap-2">
                    <Badge variant="secondary" className="text-xs">
                      {paper.venue}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{paper.year}</span>
                  </div>
                  <h3 className="mb-2 line-clamp-2 font-heading font-semibold">{paper.title}</h3>
                  <p className="mb-3 line-clamp-1 text-sm text-muted-foreground">{paper.authors.join(", ")}</p>
                  <p className="flex-1 line-clamp-3 text-sm leading-6 text-muted-foreground">{paper.abstract}</p>
                  <div className="mt-auto flex items-center justify-between border-t border-border/30 pt-4">
                    <span className="text-xs text-muted-foreground">
                      {paper.citations} {isZh ? "次引用" : "citations"}
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 text-xs"
                      disabled={!hasPaperLink}
                      render={hasPaperLink ? <a href={paper.link} target="_blank" rel="noreferrer" /> : undefined}
                    >
                      {isZh ? "阅读论文" : "Read Paper"}
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
        </SectionShell>

        {relatedMembers.length > 0 && (
          <SectionShell className="bg-card/30 py-16" maxWidth="7xl">
            <SectionHeader
              badge={isZh ? "相关研究人员" : "Related Researchers"}
              badgeIcon={<Users className="mr-1 h-3 w-3" />}
              heading={isZh ? "相关研究人员" : "Related Researchers"}
            />

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedMembers.map((member, index) => (
                <Card
                  key={member.id}
                  className={`flex h-full flex-col border border-border/45 bg-card/35 p-6 transition-colors duration-200 hover:border-primary/20 hover:bg-card/55 ${index > 0 ? "home-fade-in home-fade-in-delay-1" : "home-fade-in"}`}
                >
                  <div className="flex items-center gap-4">
                    <Image
                      src={member.avatar}
                      alt={member.name}
                      width={64}
                      height={64}
                      className="h-16 w-16 rounded-full bg-muted object-cover"
                      unoptimized
                    />
                    <div className="min-w-0">
                      <h3 className="line-clamp-1 font-heading font-semibold">{member.name}</h3>
                      <p className="line-clamp-1 text-sm text-muted-foreground">{member.title}</p>
                    </div>
                  </div>
                  <p className="mt-4 line-clamp-2 text-sm leading-6 text-muted-foreground">{member.bio}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {member.research.slice(0, 3).map((item) => (
                      <Badge key={item} variant="outline" className="text-xs">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </SectionShell>
        )}
      </main>
      <Footer />
    </div>
  );
}

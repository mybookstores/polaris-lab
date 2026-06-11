import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { notFound } from "next/navigation";
import { ArrowLeft, BookOpen, Users, ArrowRight, Sparkles } from "lucide-react";
import { researchDirections, papers, teamMembers } from "@/data";
import Link from "next/link";

export async function generateStaticParams() {
  return researchDirections.map((direction) => ({
    slug: direction.id,
  }));
}

export default async function ResearchDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const direction = researchDirections.find((d) => d.id === slug);

  if (!direction) {
    notFound();
  }

  const relatedPapers = papers.filter((p) => p.direction === slug);
  const relatedMembers = teamMembers.filter((m) =>
    m.research.some((r) =>
      direction.subdirections.some((s) => s.name.toLowerCase().includes(r.toLowerCase()))
    )
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16">
        {/* Hero */}
        <section
          className="relative py-24 overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${direction.color}10, transparent 50%, ${direction.color}05 100%)`,
          }}
        >
          <div className="absolute inset-0 grid-pattern opacity-50" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/research"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Research
            </Link>

            <div>
              <Badge
                variant="outline"
                className="mb-6 px-4"
                style={{
                  borderColor: `${direction.color}40`,
                  backgroundColor: `${direction.color}10`,
                }}
              >
                <Sparkles className="w-3 h-3 mr-1" style={{ color: direction.color }} />
                Research Direction
              </Badge>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold tracking-tight mb-6">
                {direction.name}
              </h1>

              <p className="text-xl text-muted-foreground max-w-3xl">
                {getDirectionDescription(slug)}
              </p>
            </div>
          </div>
        </section>

        {/* Subdirections */}
        <section className="py-16 border-b border-border/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-heading font-bold mb-8">Focus Areas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {direction.subdirections.map((sub) => (
                <Card key={sub.id} className="p-6 hover:bg-card/80 transition-colors border-border/50">
                  <h3 className="text-xl font-heading font-semibold mb-3">{sub.name}</h3>
                  <p className="text-muted-foreground text-sm">
                    {getSubdirectionDescription(slug, sub.id)}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Publications */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <BookOpen className="w-6 h-6 text-muted-foreground" />
                <h2 className="text-2xl font-heading font-bold">Publications</h2>
                <Badge variant="secondary">{relatedPapers.length}</Badge>
              </div>
              <Link href="/achievements">
                <Button variant="ghost" size="sm">
                  View All
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {relatedPapers.map((paper) => (
                <Card key={paper.id} className="p-6 hover:bg-card/80 transition-colors border-border/50">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary" className="text-xs">
                      {paper.venue}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{paper.year}</span>
                  </div>
                  <h3 className="font-heading font-semibold mb-2 line-clamp-2">
                    {paper.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {paper.authors.join(", ")}
                  </p>
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {paper.abstract}
                  </p>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-border/50">
                    <span className="text-xs text-muted-foreground">
                      {paper.citations} citations
                    </span>
                    <Button variant="ghost" size="sm" className="h-8 text-xs">
                      Read Paper
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Members */}
        {relatedMembers.length > 0 && (
          <section className="py-16 bg-card/30 border-t border-border/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center gap-3 mb-8">
                <Users className="w-6 h-6 text-muted-foreground" />
                <h2 className="text-2xl font-heading font-bold">Researchers</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedMembers.map((member) => (
                  <Card key={member.id} className="p-6 hover:bg-card/80 transition-colors border-border/50">
                    <div className="flex items-center gap-4">
                      <img
                        src={member.avatar}
                        alt={member.name}
                        className="w-16 h-16 rounded-full bg-muted"
                      />
                      <div>
                        <h3 className="font-heading font-semibold">{member.name}</h3>
                        <p className="text-sm text-muted-foreground">{member.title}</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-4 line-clamp-2">
                      {member.bio}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {member.research.slice(0, 2).map((r) => (
                        <Badge key={r} variant="outline" className="text-xs">
                          {r}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
}

function getDirectionDescription(id: string): string {
  const descriptions: Record<string, string> = {
    "ai-for-science": "Leveraging AI to accelerate scientific breakthroughs in environmental science and materials discovery.",
    "social-computing": "Investigating social dynamics through computational lens. We study social network structures, detect automated bots, and model social phenomena.",
    "general-ai": "Pushing the boundaries of general artificial intelligence through large language models, autonomous agents, and world models.",
    "physical-ai": "Integrating AI with physical systems to create intelligent robots and embodied agents.",
  };
  return descriptions[id] || "";
}

function getSubdirectionDescription(directionId: string, subId: string): string {
  const descriptions: Record<string, Record<string, string>> = {
    "ai-for-science": {
      environment: "Climate modeling, environmental monitoring, and sustainable AI solutions for a greener future.",
      material: "AI-driven materials discovery, property prediction, and design optimization for next-generation materials.",
    },
    "social-computing": {
      socialBot: "Identifying and analyzing social bots across platforms using advanced machine learning techniques.",
      socialScience: "Computational approaches to social phenomena, network analysis, and opinion dynamics modeling.",
    },
    "general-ai": {
      llmPostTraining: "Fine-tuning strategies, alignment techniques, and reinforcement learning from human feedback for LLMs.",
      llmAgent: "Building autonomous agents powered by large language models that can plan, reason, and take actions.",
      llmApplication: "Practical applications built on LLMs including QA systems, code generation, and creative tools.",
      worldModel: "Building internal representations of the world that enable AI systems to reason about physics and causality.",
    },
    "physical-ai": {
      robotics: "Intelligent robotics, dexterous manipulation, and embodied AI for real-world applications.",
    },
  };
  return descriptions[directionId]?.[subId] || "";
}
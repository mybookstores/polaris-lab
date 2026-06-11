"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FlaskConical, Users, Brain, Bot, ArrowRight, Sparkles, BookOpen } from "lucide-react";
import { researchDirections, papers } from "@/data";
import Link from "next/link";

const iconMap = {
  flask: FlaskConical,
  users: Users,
  brain: Brain,
  bot: Bot,
};

export default function ResearchPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16">
        {/* Hero */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 grid-pattern" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[128px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[128px]" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="outline" className="mb-6 px-4">
                <Sparkles className="w-3 h-3 mr-1" />
                Our Research
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold tracking-tight mb-6">
                Four Pillars of <span className="gradient-text">AI Innovation</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our research spans four interconnected directions, each tackling fundamental challenges
                in artificial intelligence and its real-world applications.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Research Directions */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {researchDirections.map((direction, index) => {
                const Icon = iconMap[direction.icon as keyof typeof iconMap];
                const relatedPapers = papers.filter(p => p.direction === direction.id).slice(0, 3);

                return (
                  <motion.div
                    key={direction.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start"
                  >
                    {/* Direction Info */}
                    <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                      <div className="flex items-center gap-4 mb-6">
                        <div
                          className="w-14 h-14 rounded-xl flex items-center justify-center"
                          style={{ backgroundColor: `${direction.color}20` }}
                        >
                          <Icon className="w-7 h-7" style={{ color: direction.color }} />
                        </div>
                        <div>
                          <h2 className="text-2xl sm:text-3xl font-heading font-bold">
                            {direction.name}
                          </h2>
                         <div className="flex flex-wrap gap-2 mt-2">
                            {direction.subdirections.map((sub) => (
                              <Badge
                                key={sub.id}
                                variant="secondary"
                                className="text-xs"
                              >
                                {sub.name}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>

                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {getDirectionDescription(direction.id)}
                      </p>

                      <Link href={`/research/${direction.id}`}>
                        <Button variant="ghost" className="gap-2 px-0 group">
                          Explore {direction.name}
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>

                    {/* Related Papers */}
                    <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                      <Card className="p-6 bg-card/50 border-border/50">
                        <div className="flex items-center gap-2 mb-4">
                          <BookOpen className="w-5 h-5 text-muted-foreground" />
                          <h3 className="font-heading font-semibold">Recent Publications</h3>
                        </div>
                        <div className="space-y-4">
                          {relatedPapers.map((paper) => (
                            <div
                              key={paper.id}
                              className="p-4 rounded-lg bg-background/50 hover:bg-background transition-colors"
                            >
                              <h4 className="font-medium text-sm line-clamp-2 mb-2">
                                {paper.title}
                              </h4>
                              <div className="flex items-center justify-between text-xs text-muted-foreground">
                                <span>{paper.authors[0]} et al.</span>
                                <span>{paper.venue} {paper.year}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </Card>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function getDirectionDescription(id: string): string {
  const descriptions: Record<string, string> = {
    "ai-for-science": "Leveraging AI to accelerate scientific breakthroughs in environmental science and materials discovery. We develop deep learning models that can predict molecular properties, simulate chemical reactions, and optimize experimental designs. Our interdisciplinary team collaborates with domain experts to create AI tools that advance human understanding of the natural world.",
    "social-computing": "Investigating social dynamics through computational lens. We study social network structures, detect automated bots, and model social phenomena using large-scale data analysis. Our research helps understand how information spreads, how communities form, and how to create healthier online spaces.",
    "general-ai": "Pushing the boundaries of general artificial intelligence through large language models, autonomous agents, and world models that can reason and plan. We work on making AI systems more capable, reliable, and aligned with human values.",
    "physical-ai": "Integrating AI with physical systems to create intelligent robots and embodied agents that can perceive, reason, and act in the real world. Our work bridges the gap between digital AI and the physical environment, enabling new applications in manufacturing, healthcare, and daily life.",
  };
  return descriptions[id] || "";
}
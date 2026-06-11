"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, Sparkles } from "lucide-react";
import { papers, researchDirections } from "@/data";

export function LatestAchievements() {
  const latestPapers = papers.slice(0, 3);

  const getDirectionColor = (directionId: string) => {
    const direction = researchDirections.find((d) => d.id === directionId);
    return direction?.color || "#3B82F6";
  };

  return (
    <section className="py-24 bg-card/30 border-y border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between mb-12"
        >
          <div>
            <Badge variant="outline" className="mb-4 px-4">
              <Sparkles className="w-3 h-3 mr-1" />
              Fresh from the Lab
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold tracking-tight">
              Latest <span className="gradient-text">Publications</span>
            </h2>
          </div>
          <Link href="/achievements">
            <Button variant="ghost" className="gap-2">
              View All
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </motion.div>

        {/* Papers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {latestPapers.map((paper, index) => (
            <motion.div
              key={paper.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group h-full p-6 hover:bg-card/80 transition-all duration-300 border-border/50 hover:border-primary/30 flex flex-col">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <Badge
                    variant="secondary"
                    className="text-xs"
                    style={{
                      backgroundColor: `${getDirectionColor(paper.direction)}20`,
                      color: getDirectionColor(paper.direction),
                      borderColor: `${getDirectionColor(paper.direction)}40`,
                    }}
                  >
                    {researchDirections.find((d) => d.id === paper.direction)?.name}
                  </Badge>
                  <span className="text-muted-foreground text-xs">{paper.year}</span>
                </div>

                {/* Title */}
                <h3 className="font-heading font-semibold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                  {paper.title}
                </h3>

                {/* Authors */}
                <div className="flex items-center gap-1 mb-3 text-sm text-muted-foreground">
                  <FileText className="w-4 h-4" />
                  <span className="truncate">{paper.authors.join(", ")}</span>
                </div>

                {/* Venue */}
                <div className="text-xs text-muted-foreground mb-4">
                  {paper.venue}
                </div>

                {/* Abstract */}
                <p className="text-sm text-muted-foreground line-clamp-3 flex-1">
                  {paper.abstract}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-border/50">
                  <span className="text-xs text-muted-foreground">
                    {paper.citations} citations
                  </span>
                  <Button variant="ghost" size="sm" className="h-8 text-xs">
                    Read Paper
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
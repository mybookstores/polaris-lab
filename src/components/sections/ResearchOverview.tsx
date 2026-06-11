"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  FlaskConical,
  Users,
  Brain,
  Bot,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { researchDirections } from "@/data";

const iconMap = {
  flask: FlaskConical,
  users: Users,
  brain: Brain,
  bot: Bot,
};

export function ResearchOverview() {
  return (
    <section className="py-24 relative overflow-hidden">
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 px-4">
            <Sparkles className="w-3 h-3 mr-1" />
            Our Research
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold tracking-tight mb-4">
            Four Pillars of <span className="gradient-text">AI Innovation</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our research spans four interconnected directions, each tackling fundamental challenges
            in artificial intelligence and its applications.
          </p>
        </motion.div>

        {/* Research Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {researchDirections.map((direction, index) => {
            const Icon = iconMap[direction.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={direction.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/research/${direction.id}`}>
                  <Card className="group relative overflow-hidden p-6 hover:bg-card/80 transition-all duration-300 border-border/50 hover:border-primary/30">
                    {/* Glow effect */}
                    <div
                      className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-[80px] opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                      style={{ backgroundColor: direction.color }}
                    />

                    <div className="relative z-10">
                      {/* Icon & Title */}
                      <div className="flex items-center gap-4 mb-4">
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center"
                          style={{ backgroundColor: `${direction.color}20` }}
                        >
                          <Icon
                            className="w-6 h-6"
                            style={{ color: direction.color }}
                          />
                        </div>
                        <div>
                          <h3 className="text-xl font-heading font-semibold group-hover:text-primary transition-colors">
                            {direction.name}
                          </h3>
                        </div>
                      </div>

                      {/* Subdirections */}
                      <div className="flex flex-wrap gap-2 mb-4">
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

                      {/* Arrow */}
                      <div className="flex items-center text-muted-foreground text-sm group-hover:text-primary transition-colors">
                        <span>Explore direction</span>
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
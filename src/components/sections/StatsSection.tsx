"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FileText, Lightbulb, Database, Users } from "lucide-react";
import { stats } from "@/data";

interface StatCardProps {
  value: number;
  label: string;
  icon: React.ElementType;
  color: string;
  delay: number;
}

function StatCard({ value, label, icon: Icon, color, delay }: StatCardProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="text-center p-6 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 transition-colors group"
    >
      <div
        className="w-14 h-14 rounded-xl mx-auto mb-4 flex items-center justify-center transition-transform group-hover:scale-110"
        style={{ backgroundColor: `${color}20` }}
      >
        <Icon className="w-7 h-7" style={{ color }} />
      </div>
      <div className="text-4xl sm:text-5xl font-heading font-bold mb-2" style={{ color }}>
        {count}+
      </div>
      <div className="text-muted-foreground text-sm">{label}</div>
    </motion.div>
  );
}

export function StatsSection() {
  const statsData = [
    { value: stats.papers, label: "Papers Published", icon: FileText, color: "#3B82F6" },
    { value: stats.patents, label: "Patents", icon: Lightbulb, color: "#8B5CF6" },
    { value: stats.datasets, label: "Datasets", icon: Database, color: "#10B981" },
    { value: stats.members, label: "Researchers", icon: Users, color: "#F59E0B" },
  ];

  return (
    <section className="py-16 border-y border-border/50 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {statsData.map((stat, index) => (
            <StatCard
              key={stat.label}
              value={stat.value}
              label={stat.label}
              icon={stat.icon}
              color={stat.color}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
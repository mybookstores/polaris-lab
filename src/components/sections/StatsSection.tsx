"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { stats } from "@/data";

interface StatCardProps {
  value: number;
  label: string;
  suffix?: string;
  delay: number;
}

function StatCard({ value, label, suffix = "", delay }: StatCardProps) {
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
      className="text-center p-6 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 transition-colors"
    >
      <div className="text-4xl sm:text-5xl font-heading font-bold gradient-text mb-2">
        {count}+{suffix}
      </div>
      <div className="text-muted-foreground text-sm">{label}</div>
    </motion.div>
  );
}

export function StatsSection() {
  const statsData = [
    { value: stats.papers, label: "Papers Published" },
    { value: stats.patents, label: "Patents" },
    { value: stats.datasets, label: "Datasets" },
    { value: stats.members, label: "Researchers" },
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
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
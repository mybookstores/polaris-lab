"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Database, FileText, Lightbulb, Users } from "lucide-react";
import { stats } from "@/data";
import { useLanguage } from "@/context/LanguageContext";

interface StatCardProps {
  value: number;
  label: string;
  labelZh: string;
  icon: React.ElementType;
  color: string;
}

function StatCard({ value, label, labelZh, icon: Icon, color }: StatCardProps) {
  const { isZh } = useLanguage();
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = window.setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        window.clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => window.clearInterval(timer);
  }, [isInView, value]);

  return (
    <div
      ref={ref}
      className="home-fade-in rounded-2xl border border-border/35 bg-card/20 px-4 py-7 text-center transition-colors duration-200 hover:bg-card/35 sm:px-5 sm:py-8"
    >
      <div
        className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl sm:mb-5 sm:h-16 sm:w-16"
        style={{ backgroundColor: `${color}15` }}
      >
        <Icon className="h-6 w-6 sm:h-7 sm:w-7" style={{ color }} />
      </div>
      <div className="mb-2 font-heading text-3xl font-bold sm:text-5xl" style={{ color }}>
        {count}+
      </div>
      <div className="mx-auto max-w-[10rem] text-sm tracking-wide text-muted-foreground">
        {isZh ? labelZh : label}
      </div>
    </div>
  );
}

export function StatsSection() {
  const statsData = [
    { value: stats.papers, label: "Papers Published", labelZh: "已发表论文", icon: FileText, color: "#3B82F6" },
    { value: stats.patents, label: "Patents", labelZh: "专利授权", icon: Lightbulb, color: "#8B5CF6" },
    { value: stats.datasets, label: "Datasets", labelZh: "开源数据集", icon: Database, color: "#10B981" },
    { value: stats.members, label: "Researchers", labelZh: "研究人员", icon: Users, color: "#F59E0B" },
  ];

  return (
    <section className="relative py-12 sm:py-14">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/40 to-transparent" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:gap-6">
          {statsData.map((stat) => (
            <StatCard
              key={stat.label}
              value={stat.value}
              label={stat.label}
              labelZh={stat.labelZh}
              icon={stat.icon}
              color={stat.color}
            />
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/40 to-transparent" />
    </section>
  );
}

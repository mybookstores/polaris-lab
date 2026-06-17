"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Sparkles } from "lucide-react";
import { AchievementsContent } from "@/components/sections/AchievementsContent";
import { PageHero } from "@/components/sections/PageHero";
import { useLanguage } from "@/context/LanguageContext";

export default function AchievementsPage() {
  const { isZh } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16">
        <PageHero
          badge={isZh ? "研究成果" : "Our Contributions"}
          badgeIcon={<Sparkles className="mr-1 h-3 w-3" />}
          heading={
            <>
              {isZh ? "研究" : "Research"}
              <span className="gradient-text">{isZh ? "成果" : "Achievements"}</span>
            </>
          }
          description={
            isZh
              ? "探索我们的论文、专利、数据集、刷榜和产品，把已有成果组织成更清晰、更可访问的实验室作品集。"
              : "Explore our publications, patents, datasets, benchmarks, and products in a clearer, more actionable showcase of the lab’s work."
          }
        />

        <AchievementsContent />
      </main>
      <Footer />
    </div>
  );
}

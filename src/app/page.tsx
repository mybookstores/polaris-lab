import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { ResearchOverview } from "@/components/sections/ResearchOverview";
import { LatestAchievements } from "@/components/sections/LatestAchievements";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <StatsSection />
        <ResearchOverview />
        <LatestAchievements />
      </main>
      <Footer />
    </div>
  );
}
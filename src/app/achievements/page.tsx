"use client";

import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  FileText,
  Lightbulb,
  Database,
  Trophy,
  Package,
  Search,
  ExternalLink,
  Award,
  Download,
  Star,
  ArrowUp,
  TrendingUp,
  Sparkles,
  Play,
  Mail,
  MapPin
} from "lucide-react";
import {
  papers,
  patents,
  datasets,
  benchmarks,
  products,
  researchDirections,
} from "@/data";

// Custom SVG icons
const GitHubIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.8451.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.9250-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 00 1.005-.315 3.31.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

export default function AchievementsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDirection, setSelectedDirection] = useState("all");

  const filteredPapers = papers.filter((paper) => {
    const matchesSearch =
      paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      paper.abstract.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDirection =
      selectedDirection === "all" || paper.direction === selectedDirection;
    return matchesSearch && matchesDirection;
  });

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
                Our Contributions
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold tracking-tight mb-6">
                Research<span className="gradient-text">Achievements</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Explore our publications, patents, datasets, benchmarks, and products that contribute
                to the AI community.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Tabs Content */}
        <section className="pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Tabs defaultValue="papers" className="w-full">
              <TabsList className="w-full justify-start overflow-auto mb-8 bg-transparent h-auto p-0 gap-2">
                <TabsTrigger
                  value="papers"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  <FileText className="w-4 h-4 mr-2" />
                  Papers
                </TabsTrigger>
                <TabsTrigger
                  value="patents"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  <Lightbulb className="w-4 h-4 mr-2" />
                  Patents
                </TabsTrigger>
                <TabsTrigger
                  value="datasets"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  <Database className="w-4 h-4 mr-2" />
                  Datasets
                </TabsTrigger>
                <TabsTrigger
                  value="benchmarks"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  <Trophy className="w-4 h-4 mr-2" />
                  Benchmarks
                </TabsTrigger>
                <TabsTrigger
                  value="products"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  <Package className="w-4 h-4 mr-2" />
                  Products
                </TabsTrigger>
              </TabsList>

              {/* Papers Tab */}
              <TabsContent value="papers" className="space-y-6">
                {/* Filters */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      placeholder="Search papers..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Button
                      variant={selectedDirection === "all" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedDirection("all")}
                    >
                      All
                    </Button>
                    {researchDirections.map((d) => (
                      <Button
                        key={d.id}
                        variant={selectedDirection === d.id ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedDirection(d.id)}
                      >
                        {d.name}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Papers Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {filteredPapers.map((paper, index) => (
                    <motion.div
                      key={paper.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <Card className="p-6 hover:bg-card/80 transition-colors border-border/50 h-full">
                        <div className="flex items-center gap-2 mb-3">
                          <Badge
                            variant="secondary"
                            style={{
                              backgroundColor: `${getDirectionColor(paper.direction)}20`,
                              color: getDirectionColor(paper.direction),
                            }}
                          >
                            {researchDirections.find((d) => d.id === paper.direction)?.name}
                          </Badge>
                          <Badge variant="outline">{paper.year}</Badge>
                        </div>
                        <h3 className="font-heading font-semibold mb-2 line-clamp-2">
                          {paper.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          {paper.authors.join(", ")}
                        </p>
                        <p className="text-sm text-muted-foreground mb-4">
                          {paper.venue}
                        </p>
                        <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                          {paper.abstract}
                        </p>
                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/50">
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <Star className="w-3 h-3" />
                            <span>{paper.citations} citations</span>
                          </div>
                          <Button variant="ghost" size="sm" className="h-8">
                            <ExternalLink className="w-3 h-3 mr-1" />
                            Paper
                          </Button>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>

              {/* Patents Tab */}
              <TabsContent value="patents" className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {patents.map((patent, index) => (
                    <motion.div
                      key={patent.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <Card className="p-6 hover:bg-card/80 transition-colors border-border/50">
                        <div className="flex items-center gap-2 mb-4">
                          <div
                            className={`w-3 h-3 rounded-full ${
                              patent.status === "granted" ? "bg-green-500" : "bg-yellow-500"
                            }`}
                          />
                          <Badge variant={patent.status === "granted" ? "default" : "secondary"}>
                            {patent.status === "granted" ? "Granted" : "Pending"}
                          </Badge>
                          <Badge variant="outline">{patent.year}</Badge>
                        </div>
                        <h3 className="font-heading font-semibold mb-2">{patent.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          Patent Number: {patent.number}
                        </p>
                        <div className="flex items-center gap-2 mt-4 text-xs text-muted-foreground">
                          <Lightbulb className="w-3 h-3" />
                          <span>
                            {researchDirections.find((d) => d.id === patent.direction)?.name}
                          </span>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>

              {/* Datasets Tab */}
              <TabsContent value="datasets" className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {datasets.map((dataset, index) => (
                    <motion.div
                      key={dataset.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <Card className="p-6 hover:bg-card/80 transition-colors border-border/50">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-2">
                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                              <Database className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                              <h3 className="font-heading font-semibold">{dataset.name}</h3>
                            </div>
                          </div>
                       </div>
                        <p className="text-sm text-muted-foreground mb-4">{dataset.description}</p>
                        <div className="flex flex-wrap gap-4 text-xs text-muted-foreground mb-4">
                          <span>{dataset.samples} samples</span>
                          <span>{dataset.size}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <Badge
                            variant="secondary"
                            style={{
                              backgroundColor: `${getDirectionColor(dataset.direction)}20`,
                              color: getDirectionColor(dataset.direction),
                            }}
                          >
                            {researchDirections.find((d) => d.id === dataset.direction)?.name}
                          </Badge>
                          <Button variant="outline" size="sm" className="h-8">
                            <Download className="w-3 h-3 mr-1" />
                            Download
                          </Button>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>

              {/* Benchmarks Tab */}
              <TabsContent value="benchmarks" className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {benchmarks.map((benchmark, index) => (
                    <motion.div
                      key={benchmark.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <Card className="p-6 hover:bg-card/80 transition-colors border-border/50">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                              <Trophy className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                              <h3 className="font-heading font-semibold">{benchmark.name}</h3>
                              <p className="text-xs text-muted-foreground">{benchmark.date}</p>
                            </div>
                          </div>
                         <Badge
                            variant="secondary"
                            style={{
                              backgroundColor: `${getDirectionColor(benchmark.direction)}20`,
                              color: getDirectionColor(benchmark.direction),
                            }}
                          >
                            {researchDirections.find((d) => d.id === benchmark.direction)?.name}
                          </Badge>
                        </div>

                        {/* Score comparison */}
                        <div className="space-y-3">
                          {/* Our score */}
                          <div className="flex items-center justify-between p-3 rounded-lg bg-primary/10 border border-primary/20">
                            <div className="flex items-center gap-2">
                              <ArrowUp className="w-4 h-4 text-primary" />
                              <span className="font-medium">Polaris Lab</span>
                            </div>
                            <div className="text-right">
                              <span className="text-2xl font-bold gradient-text">
                                {benchmark.ourScore}
                              </span>
                            </div>
                          </div>

                          {/* Other labs */}
                          <div className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                            <div className="flex items-center gap-2">
                              <TrendingUp className="w-4 h-4 text-muted-foreground" />
                              <span className="text-sm text-muted-foreground">
                                {benchmark.secondLab}
                              </span>
                            </div>
                            <span className="text-lg font-semibold text-muted-foreground">
                              {benchmark.secondScore}
                            </span>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>

              {/* Products Tab */}
              <TabsContent value="products" className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {products.map((product, index) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                     <Card className="overflow-hidden hover:bg-card/80 transition-colors border-border/50">
                        {/* Product Image */}
                        <div className="h-44 bg-card flex items-center justify-center overflow-hidden">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        <div className="p-6">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="font-heading font-semibold">{product.name}</h3>
                            <Badge variant="outline" className="text-xs">
                              {product.tagline}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-4">
                            {product.description}
                          </p>

                          {/* Features */}
                          <div className="flex flex-wrap gap-2 mb-4">
                            {product.features.slice(0, 3).map((feature) => (
                              <Badge key={feature} variant="secondary" className="text-xs">
                                {feature}
                              </Badge>
                            ))}
                          </div>

                          {/* Actions */}
                          <div className="flex gap-2">
                            <Button variant="default" size="sm" className="flex-1">
                              <Play className="w-3 h-3 mr-1" />
                              Demo
                            </Button>
                            <Button variant="outline" size="sm">
                              <ExternalLink className="w-3 h-3" />
                            </Button>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function getDirectionColor(directionId: string): string {
  const direction = researchDirections.find((d) => d.id === directionId);
  return direction?.color || "#3B82F6";
}
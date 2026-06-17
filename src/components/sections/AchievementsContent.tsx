"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  FileText,
  Lightbulb,
  Database,
  Trophy,
  Package,
  Search,
  ExternalLink,
  Download,
  ArrowUp,
  TrendingUp,
  Play,
} from "lucide-react";
import {
  papers,
  patents,
  datasets,
  benchmarks,
  products,
  researchDirections,
} from "@/data";
import { SectionShell } from "@/components/sections/SectionShell";
import {
  type AchievementActionModel,
  buildBenchmarkCardModel,
  buildDatasetCardModel,
  buildPaperCardModel,
  buildPatentCardModel,
  buildProductCardModel,
} from "@/components/sections/achievements-view-model";
import { type ContentLanguage, getDirectionLabel } from "@/lib/content";
import { useLanguage } from "@/context/LanguageContext";

const tabConfig = [
  { value: "papers", icon: FileText, label: { en: "Papers", zh: "论文" } },
  { value: "patents", icon: Lightbulb, label: { en: "Patents", zh: "专利" } },
  { value: "datasets", icon: Database, label: { en: "Datasets", zh: "数据集" } },
  { value: "benchmarks", icon: Trophy, label: { en: "Benchmarks", zh: "刷榜" } },
  { value: "products", icon: Package, label: { en: "Products", zh: "产品" } },
] as const;

function getUnavailableLabel(action: AchievementActionModel, isZh: boolean) {
  if (isZh) {
    return action.kind === "demo" ? "即将上线" : "即将开放";
  }

  return "Coming Soon";
}

function ActionButton({
  action,
  isZh,
  variant = "outline",
  size = "sm",
  className,
  icon,
  iconOnly = false,
  hideWhenUnavailable = false,
}: {
  action: AchievementActionModel;
  isZh: boolean;
  variant?: "default" | "outline" | "secondary" | "ghost" | "destructive" | "link";
  size?: "default" | "xs" | "sm" | "lg" | "icon" | "icon-xs" | "icon-sm" | "icon-lg";
  className?: string;
  icon?: ReactNode;
  iconOnly?: boolean;
  hideWhenUnavailable?: boolean;
}) {
  if (!action.href && hideWhenUnavailable) {
    return null;
  }

  if (!action.href) {
    return (
      <Button variant={variant} size={size} className={className} disabled>
        {icon}
        {iconOnly ? null : getUnavailableLabel(action, isZh)}
      </Button>
    );
  }

  return (
    <Button
      variant={variant}
      size={size}
      className={className}
      render={<a href={action.href} target="_blank" rel="noreferrer" />}
      aria-label={iconOnly ? action.label : undefined}
      title={iconOnly ? action.label : undefined}
    >
      {icon}
      {iconOnly ? null : action.label}
    </Button>
  );
}

export function AchievementsContent() {
  const { isZh } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDirection, setSelectedDirection] = useState("all");
  const language: ContentLanguage = isZh ? "zh" : "en";
  const normalizedQuery = searchQuery.trim().toLowerCase();

  const filteredPapers = papers.filter((paper) => {
    const searchableText = [
      paper.title,
      paper.abstract,
      paper.venue,
      paper.authors.join(" "),
    ]
      .join(" ")
      .toLowerCase();
    const matchesSearch = searchableText.includes(normalizedQuery);
    const matchesDirection =
      selectedDirection === "all" || paper.direction === selectedDirection;

    return matchesSearch && matchesDirection;
  });

  const displayLabel = (label: { en: string; zh: string }) =>
    isZh ? label.zh : label.en;

  const directionOptions = researchDirections.map((direction) => ({
    id: direction.id,
    label: getDirectionLabel(direction.id, language),
  }));

  const paperCards = filteredPapers.map((paper) =>
    buildPaperCardModel(paper, language)
  );
  const patentCards = patents.map((patent) => buildPatentCardModel(patent, language));
  const datasetCards = datasets.map((dataset) => buildDatasetCardModel(dataset, language));
  const benchmarkCards = benchmarks.map((benchmark) =>
    buildBenchmarkCardModel(benchmark, language)
  );
  const productCards = products.map((product) => buildProductCardModel(product, language));

  return (
    <SectionShell className="pb-16" containerClassName="max-w-7xl">
      <Tabs defaultValue="papers" className="w-full">
        <TabsList className="mb-8 h-auto w-full justify-start gap-2 overflow-x-auto bg-transparent p-0 pb-1">
          {tabConfig.map((tab) => {
            const Icon = tab.icon;
            return (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="shrink-0 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <Icon className="mr-2 h-4 w-4" />
                {displayLabel(tab.label)}
              </TabsTrigger>
            );
          })}
        </TabsList>

        <TabsContent value="papers" className="space-y-6">
          <div className="home-fade-in flex flex-col gap-4 sm:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder={isZh ? "搜索论文、作者或会议..." : "Search papers, authors, or venues..."}
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
                {isZh ? "全部" : "All"}
              </Button>
              {directionOptions.map((direction) => (
                <Button
                  key={direction.id}
                  variant={selectedDirection === direction.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedDirection(direction.id)}
                >
                  {direction.label}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {paperCards.length ? (
              paperCards.map((paperCard) => (
                <div key={paperCard.id} className="home-fade-in home-fade-in-delay-1">
                  <Card className="flex h-full flex-col border border-border/45 bg-card/35 p-6 transition-colors duration-200 hover:border-primary/20 hover:bg-card/55">
                    <div className="mb-3 flex items-center gap-2">
                      <Badge
                        variant="secondary"
                        style={{
                          backgroundColor: `${paperCard.direction.color}15`,
                          color: paperCard.direction.color,
                          borderColor: `${paperCard.direction.color}30`,
                        }}
                      >
                        {paperCard.direction.label}
                      </Badge>
                      <Badge variant="outline">{paperCard.year}</Badge>
                    </div>
                    <h3 className="mb-2 line-clamp-2 font-heading text-base font-semibold leading-6">
                      {paperCard.title}
                    </h3>
                    <p className="mb-2 line-clamp-1 text-sm text-muted-foreground">
                      {paperCard.authors}
                    </p>
                    <p className="mb-4 line-clamp-1 text-sm text-muted-foreground">{paperCard.venue}</p>
                    <p className="mb-4 line-clamp-3 text-sm leading-6 text-muted-foreground">
                      {paperCard.abstract}
                    </p>
                    <div className="mt-auto flex items-center justify-between gap-3 border-t border-border/30 pt-4">
                      <div className="text-xs text-muted-foreground">
                        {paperCard.citationsLabel}
                      </div>
                      <ActionButton
                        action={paperCard.primaryAction}
                        isZh={isZh}
                        variant="ghost"
                        size="sm"
                        className="h-8 gap-1.5 px-2 text-xs"
                        icon={<ExternalLink className="h-3 w-3" />}
                      />
                    </div>
                  </Card>
                </div>
              ))
            ) : (
              <Card className="home-fade-in border border-dashed border-border/50 bg-card/20 p-8 text-center lg:col-span-2">
                <h3 className="mb-2 font-heading text-lg font-semibold">
                  {isZh ? "没有找到匹配论文" : "No matching papers"}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {isZh
                    ? "试试更短的关键词，或切换回“全部方向”查看完整成果。"
                    : "Try a shorter keyword or switch back to “All” directions to browse the full list."}
                </p>
              </Card>
            )}
          </div>
        </TabsContent>

        <TabsContent value="patents" className="space-y-6">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {patentCards.map((patentCard) => (
              <div key={patentCard.id} className="home-fade-in home-fade-in-delay-1">
                <Card className="flex h-full flex-col border border-border/45 bg-card/35 p-6 transition-colors duration-200 hover:border-primary/20 hover:bg-card/55">
                  <div className="mb-4 flex items-center gap-2">
                    <div className={`h-3 w-3 rounded-full ${patentCard.dotClassName}`} />
                    <Badge variant={patentCard.statusTone}>{patentCard.statusLabel}</Badge>
                    <Badge variant="outline">{patentCard.year}</Badge>
                  </div>
                  <h3 className="mb-3 line-clamp-2 font-heading text-base font-semibold leading-6">
                    {patentCard.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {isZh ? "专利号：" : "Patent No: "}
                    {patentCard.number}
                  </p>
                  <div className="mt-auto flex items-center gap-2 border-t border-border/30 pt-4 text-xs text-muted-foreground">
                    <Lightbulb className="h-3 w-3" />
                    <span>{patentCard.direction.label}</span>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="datasets" className="space-y-6">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {datasetCards.map((datasetCard) => (
              <div key={datasetCard.id} className="home-fade-in home-fade-in-delay-1">
                <Card className="flex h-full flex-col border border-border/45 bg-card/35 p-6 transition-colors duration-200 hover:border-primary/20 hover:bg-card/55">
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <div className="flex min-w-0 items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <Database className="h-5 w-5 text-primary" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="line-clamp-2 font-heading text-base font-semibold">
                          {datasetCard.name}
                        </h3>
                        <p className="line-clamp-1 text-xs text-muted-foreground">
                          {datasetCard.direction.label}
                        </p>
                      </div>
                    </div>
                    <Badge
                      variant="secondary"
                      style={{
                        backgroundColor: `${datasetCard.direction.color}15`,
                        color: datasetCard.direction.color,
                        borderColor: `${datasetCard.direction.color}30`,
                      }}
                    >
                      {datasetCard.direction.label}
                    </Badge>
                  </div>
                  <p className="mb-4 line-clamp-3 text-sm leading-6 text-muted-foreground">
                    {datasetCard.description}
                  </p>
                  <div className="mb-4 flex flex-wrap gap-4 text-xs text-muted-foreground">
                    <span>{datasetCard.samplesLabel}</span>
                    <span>{datasetCard.size}</span>
                  </div>
                  <div className="mt-auto flex justify-end border-t border-border/30 pt-4">
                    <ActionButton
                      action={datasetCard.primaryAction}
                      isZh={isZh}
                      variant="outline"
                      size="sm"
                      className="h-8 gap-1.5 px-2 text-xs"
                      icon={<Download className="h-3 w-3" />}
                    />
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="benchmarks" className="space-y-6">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {benchmarkCards.map((benchmarkCard) => (
              <div key={benchmarkCard.id} className="home-fade-in home-fade-in-delay-1">
                <Card className="flex h-full flex-col border border-border/45 bg-card/35 p-6 transition-colors duration-200 hover:border-primary/20 hover:bg-card/55">
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <div className="flex min-w-0 items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20">
                        <Trophy className="h-6 w-6 text-primary" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="line-clamp-2 font-heading text-base font-semibold">
                          {benchmarkCard.name}
                        </h3>
                        <p className="text-xs text-muted-foreground">{benchmarkCard.date}</p>
                      </div>
                    </div>
                    <Badge
                      variant="secondary"
                      style={{
                        backgroundColor: `${benchmarkCard.direction.color}15`,
                        color: benchmarkCard.direction.color,
                        borderColor: `${benchmarkCard.direction.color}30`,
                      }}
                    >
                      {benchmarkCard.direction.label}
                    </Badge>
                  </div>

                  <div className="flex flex-1 flex-col space-y-3">
                    <div className="flex items-center justify-between rounded-lg border border-primary/20 bg-primary/10 p-3">
                      <div className="flex items-center gap-2">
                        <ArrowUp className="h-4 w-4 text-primary" />
                        <span className="font-medium">{benchmarkCard.ourLabel}</span>
                      </div>
                      <span className="text-2xl font-bold gradient-text">
                        {benchmarkCard.ourScore}
                      </span>
                    </div>

                    <div className="flex items-center justify-between rounded-lg bg-muted/30 p-3">
                      <div className="flex min-w-0 items-center gap-2">
                        <TrendingUp className="h-4 w-4 text-muted-foreground" />
                        <span className="line-clamp-1 text-sm text-muted-foreground">
                          {benchmarkCard.secondLabel}
                        </span>
                      </div>
                      <span className="text-lg font-semibold text-muted-foreground">
                        {benchmarkCard.secondScore}
                      </span>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="products" className="space-y-6">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {productCards.map((productCard) => (
              <div key={productCard.id} className="home-fade-in home-fade-in-delay-1">
                <Card className="flex h-full flex-col overflow-hidden border border-border/45 bg-card/35 transition-colors duration-200 hover:border-primary/20 hover:bg-card/55">
                  <div className="relative flex h-44 items-center justify-center overflow-hidden bg-card">
                    <Image
                      src={productCard.image}
                      alt={productCard.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-2 flex min-w-0 items-center gap-2">
                      <h3 className="min-w-0 flex-1 line-clamp-2 font-heading font-semibold">{productCard.name}</h3>
                      <Badge variant="outline" className="max-w-[45%] truncate text-xs">
                        {productCard.tagline}
                      </Badge>
                    </div>
                    <p className="mb-4 line-clamp-3 text-sm leading-6 text-muted-foreground">
                      {productCard.description}
                    </p>

                    <div className="mb-4 flex min-h-10 flex-wrap gap-2">
                      {productCard.features.slice(0, 3).map((feature) => (
                        <Badge key={feature} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>

                    <div className="mt-auto flex gap-2 border-t border-border/30 pt-4">
                      <ActionButton
                        action={productCard.primaryAction}
                        isZh={isZh}
                        variant="default"
                        size="sm"
                        className="h-8 flex-1 gap-1.5 px-2 text-xs"
                        icon={<Play className="h-3 w-3" />}
                      />
                      <ActionButton
                        action={productCard.secondaryAction}
                        isZh={isZh}
                        variant="outline"
                        size="sm"
                        className="size-8 shrink-0"
                        icon={<ExternalLink className="h-3 w-3" />}
                        iconOnly
                        hideWhenUnavailable
                      />
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </SectionShell>
  );
}

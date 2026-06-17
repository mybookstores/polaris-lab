import { benchmarks, datasets, papers, patents, products } from "@/data";
import {
  type ContentLanguage,
  getDirectionColor,
  getDirectionLabel,
} from "@/lib/content";

const placeholderUrls = new Set(["#", ""]);

type Paper = (typeof papers)[number];
type Patent = (typeof patents)[number];
type Dataset = (typeof datasets)[number];
type Benchmark = (typeof benchmarks)[number];
type Product = (typeof products)[number];

export interface DirectionMeta {
  id: string;
  label: string;
  color: string;
}

export interface AchievementActionModel {
  kind: "external" | "download" | "demo";
  label: string;
  href?: string;
}

export interface PaperCardModel {
  id: string;
  title: string;
  authors: string;
  year: string;
  venue: string;
  abstract: string;
  citationsLabel: string;
  direction: DirectionMeta;
  primaryAction: AchievementActionModel;
}

export interface PatentCardModel {
  id: string;
  title: string;
  year: string;
  number: string;
  direction: DirectionMeta;
  statusLabel: string;
  statusTone: "default" | "secondary";
  dotClassName: string;
}

export interface DatasetCardModel {
  id: string;
  name: string;
  description: string;
  samplesLabel: string;
  size: string;
  direction: DirectionMeta;
  primaryAction: AchievementActionModel;
}

export interface BenchmarkCardModel {
  id: string;
  name: string;
  date: string;
  direction: DirectionMeta;
  ourLabel: string;
  ourScore: string;
  secondLabel: string;
  secondScore: string;
}

export interface ProductCardModel {
  id: string;
  name: string;
  tagline: string;
  description: string;
  features: readonly string[];
  image: string;
  primaryAction: AchievementActionModel;
  secondaryAction: AchievementActionModel;
}

function resolveHref(href?: string): string | undefined {
  if (!href) {
    return undefined;
  }

  return placeholderUrls.has(href) ? undefined : href;
}

function getDirectionMeta(
  directionId: string,
  language: ContentLanguage
): DirectionMeta {
  return {
    id: directionId,
    label: getDirectionLabel(directionId, language),
    color: getDirectionColor(directionId),
  };
}

export function buildPaperCardModel(
  paper: Paper,
  language: ContentLanguage
): PaperCardModel {
  return {
    id: paper.id,
    title: paper.title,
    authors: paper.authors.join(", "),
    year: String(paper.year),
    venue: paper.venue,
    abstract: paper.abstract,
    citationsLabel:
      language === "zh"
        ? `${paper.citations} 次引用`
        : `${paper.citations} citations`,
    direction: getDirectionMeta(paper.direction, language),
    primaryAction: {
      kind: "external",
      label: language === "zh" ? "阅读论文" : "Open Paper",
      href: resolveHref(paper.link),
    },
  };
}

export function buildPatentCardModel(
  patent: Patent,
  language: ContentLanguage
): PatentCardModel {
  const isGranted = patent.status === "granted";

  return {
    id: patent.id,
    title: patent.title,
    year: String(patent.year),
    number: patent.number,
    direction: getDirectionMeta(patent.direction, language),
    statusLabel: isGranted
      ? language === "zh"
        ? "已授权"
        : "Granted"
      : language === "zh"
        ? "审核中"
        : "Pending",
    statusTone: isGranted ? "default" : "secondary",
    dotClassName: isGranted ? "bg-green-500" : "bg-yellow-500",
  };
}

export function buildDatasetCardModel(
  dataset: Dataset,
  language: ContentLanguage
): DatasetCardModel {
  return {
    id: dataset.id,
    name: dataset.name,
    description: dataset.description,
    samplesLabel:
      language === "zh"
        ? `${dataset.samples} 条样本`
        : `${dataset.samples} samples`,
    size: dataset.size,
    direction: getDirectionMeta(dataset.direction, language),
    primaryAction: {
      kind: "download",
      label: language === "zh" ? "下载数据集" : "Download",
      href: resolveHref(dataset.link),
    },
  };
}

export function buildBenchmarkCardModel(
  benchmark: Benchmark,
  language: ContentLanguage
): BenchmarkCardModel {
  return {
    id: benchmark.id,
    name: benchmark.name,
    date: benchmark.date,
    direction: getDirectionMeta(benchmark.direction, language),
    ourLabel: "Polaris Lab",
    ourScore: benchmark.ourScore,
    secondLabel: benchmark.secondLab,
    secondScore: benchmark.secondScore,
  };
}

export function buildProductCardModel(
  product: Product,
  language: ContentLanguage
): ProductCardModel {
  return {
    id: product.id,
    name: product.name,
    tagline: product.tagline,
    description: product.description,
    features: product.features,
    image: product.image,
    primaryAction: {
      kind: "demo",
      label: language === "zh" ? "立即体验" : "Launch Demo",
      href: resolveHref(product.demo),
    },
    secondaryAction: {
      kind: "external",
      label: language === "zh" ? "了解产品" : "Visit Site",
      href: resolveHref(product.link),
    },
  };
}

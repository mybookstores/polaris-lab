import { notFound } from "next/navigation";
import { researchDirections } from "@/data";
import { ResearchDetailContent } from "@/components/sections/ResearchDetailContent";

export async function generateStaticParams() {
  return researchDirections.map((direction) => ({ slug: direction.id }));
}

export default async function ResearchDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const directionExists = researchDirections.some((direction) => direction.id === slug);

  if (!directionExists) {
    notFound();
  }

  return <ResearchDetailContent slug={slug} />;
}

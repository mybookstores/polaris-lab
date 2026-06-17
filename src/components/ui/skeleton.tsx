"use client";

import { motion } from "framer-motion";

interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className = "" }: SkeletonProps) {
  return (
    <motion.div
      className={`bg-muted/50 rounded-lg animate-pulse ${className}`}
      initial={{ opacity: 0.5 }}
      animate={{ opacity: [0.5, 0.8, 0.5] }}
      transition={{ duration: 1.5, repeat: Infinity }}
    />
  );
}

// 论文卡片骨架屏
export function PaperCardSkeleton() {
  return (
    <div className="p-6 rounded-xl bg-card/50 border border-border/50">
      <div className="flex items-center gap-2 mb-4">
        <Skeleton className="h-5 w-20" />
        <Skeleton className="h-5 w-12" />
      </div>
      <Skeleton className="h-6 w-full mb-3" />
      <Skeleton className="h-4 w-3/4 mb-2" />
      <Skeleton className="h-4 w-1/2 mb-4" />
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-full mb-4" />
      <div className="flex items-center justify-between pt-4 border-t border-border/30">
        <Skeleton className="h-3 w-20" />
        <Skeleton className="h-7 w-16" />
      </div>
    </div>
  );
}

// 团队成员卡片骨架屏
export function TeamMemberSkeleton() {
  return (
    <div className="p-6 rounded-xl bg-card/50 border border-border/50">
      <div className="flex items-start gap-4 mb-4">
        <Skeleton className="w-16 h-16 rounded-full" />
        <div className="flex-1">
          <Skeleton className="h-5 w-28 mb-2" />
          <Skeleton className="h-4 w-36 mb-2" />
          <Skeleton className="h-5 w-16" />
        </div>
      </div>
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-2/3 mb-4" />
      <div className="flex flex-wrap gap-2 mb-4">
        <Skeleton className="h-5 w-16" />
        <Skeleton className="h-5 w-20" />
        <Skeleton className="h-5 w-14" />
      </div>
      <Skeleton className="h-4 w-40" />
    </div>
  );
}

// 统计数据骨架屏
export function StatCardSkeleton() {
  return (
    <div className="p-6 rounded-xl bg-card/50">
      <Skeleton className="w-14 h-14 rounded-xl mx-auto mb-4" />
      <Skeleton className="h-10 w-20 mx-auto mb-2" />
      <Skeleton className="h-4 w-24 mx-auto" />
    </div>
  );
}

// 方向卡片骨架屏
export function DirectionCardSkeleton() {
  return (
    <div className="p-6 rounded-xl bg-card/50 border border-border/50">
      <div className="flex items-center gap-4 mb-4">
        <Skeleton className="w-12 h-12 rounded-xl" />
        <Skeleton className="h-6 w-32" />
      </div>
      <div className="flex flex-wrap gap-2 mb-4">
        <Skeleton className="h-5 w-16" />
        <Skeleton className="h-5 w-20" />
        <Skeleton className="h-5 w-14" />
      </div>
      <Skeleton className="h-4 w-full" />
    </div>
  );
}
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function NotFound() {
  const { isZh } = useLanguage();

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[150px]" />

      {/* 内容 */}
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* 404 大字 */}
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6"
          >
            <span className="text-[150px] sm:text-[200px] font-heading font-bold gradient-text opacity-50">
              404
            </span>
          </motion.div>

          {/* 标题 */}
          <h1 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
            {isZh ? "页面未找到" : "Page Not Found"}
          </h1>

          {/* 描述 */}
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            {isZh
              ? "抱歉，您访问的页面不存在或已被移除。让我带您回到首页吧。"
              : "Sorry, the page you are looking for does not exist or has been removed. Let me take you back to the homepage."}
          </p>

          {/* 按钮 */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button size="lg" className="gap-2 min-w-[160px]">
                <Home className="w-4 h-4" />
                {isZh ? "返回首页" : "Go Home"}
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.history.back()}
              className="gap-2 min-w-[160px]"
            >
              <ArrowLeft className="w-4 h-4" />
              {isZh ? "返回上一页" : "Go Back"}
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
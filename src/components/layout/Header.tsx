"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home", zhLabel: "首页" },
  { href: "/research", label: "Research", zhLabel: "研究方向" },
  { href: "/achievements", label: "Achievements", zhLabel: "研究成果" },
  { href: "/about", label: "About", zhLabel: "关于我们" },
];

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [lang, setLang] = useState<"en" | "zh">("en");

  const isZh = lang === "zh";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-8 h-8">
              <svg viewBox="0 0 32 32" className="w-full h-full">
                <defs>
                  <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="hsl(217, 91%, 60%)" />
                    <stop offset="100%" stopColor="hsl(262, 83%, 58%)" />
                  </linearGradient>
                </defs>
                {/* Polaris star */}
                <path
                  d="M16 2 L18 12 L28 14 L18 16 L16 26 L14 16 L4 14 L14 12 Z"
                  fill="url(#logoGradient)"
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </svg>
            </div>
            <span className="font-heading text-lg font-semibold tracking-tight">
              Polaris<span className="gradient-text">Lab</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200",
                  pathname === item.href
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                {isZh ? item.zhLabel : item.label}
              </Link>
            ))}
          </nav>

          {/* Right side: Language & Mobile menu */}
          <div className="flex items-center gap-2">
            {/* Language Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLang(lang === "en" ? "zh" : "en")}
              className="hidden sm:flex items-center gap-1 text-xs"
            >
              <Globe className="w-4 h-4" />
              {isZh ? "EN" : "中文"}
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="md:hidden">
                <Button variant="ghost" size="icon" onClick={() => setIsOpen(true)}>
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64 bg-background border-l border-border">
                <nav className="flex flex-col gap-2 mt-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "px-4 py-3 text-base font-medium rounded-lg transition-colors duration-200",
                        pathname === item.href
                          ? "text-primary bg-primary/10"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted"
                      )}
                    >
                      {isZh ? item.zhLabel : item.label}
                    </Link>
                  ))}
                  <div className="pt-4 border-t border-border mt-4">
                    <Button
                      variant="ghost"
                      onClick={() => setLang(lang === "en" ? "zh" : "en")}
                      className="w-full justify-start"
                    >
                      <Globe className="w-4 h-4 mr-2" />
                      {isZh ? "Switch to English" : "切换到中文"}
                    </Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
"use client";

import Link from "next/link";
import { MapPin } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useToast } from "@/components/ui/toast";

// Custom SVG icons for GitHub, Twitter and Mail
const GitHubIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.8451.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.9250-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 00 1.005-.315 3.31.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const MailIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);

export function Footer() {
  const { isZh } = useLanguage();
  const { showToast } = useToast();

  const copyEmail = () => {
    navigator.clipboard.writeText("contact@polarislab.ai");
    showToast(isZh ? "邮箱已复制" : "Email copied!", "success", { variant: "email-copy" });
  };

  const footerLinks = [
    { href: "/research", label: isZh ? "研究方向" : "Research", zhLabel: "研究方向" },
    { href: "/achievements", label: isZh ? "研究成果" : "Achievements", zhLabel: "研究成果" },
    { href: "/about", label: isZh ? "关于我们" : "About", zhLabel: "关于我们" },
  ];

  const socialLinks = [
    { icon: GitHubIcon, href: "#", label: "GitHub" },
    { icon: TwitterIcon, href: "#", label: "Twitter" },
  ];

  return (
    <footer className="border-t border-border/50 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="relative w-8 h-8">
                <svg viewBox="0 0 32 32" className="w-full h-full">
                  <defs>
                    <linearGradient id="footerLogoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="hsl(217, 91%, 60%)" />
                      <stop offset="100%" stopColor="hsl(262, 83%, 58%)" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M16 2 L18 12 L28 14 L18 16 L16 26 L14 16 L4 14 L14 12 Z"
                    fill="url(#footerLogoGradient)"
                  />
                </svg>
              </div>
              <span className="font-heading text-lg font-semibold tracking-tight">
                Polaris<span className="gradient-text">Lab</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-md mb-4">
              {isZh
                ? "北京大学Polaris Lab，致力于人工智能前沿研究。从AI for Science到Physical AI，我们不断突破可能的边界。"
                : "Pioneering AI research at Peking University. From AI for Science to Physical AI, we push the boundaries of what is possible."}
            </p>
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <MapPin className="w-4 h-4" />
              <span>{isZh ? "中国北京" : "Beijing, China"}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4">{isZh ? "快速链接" : "Quick Links"}</h4>
            <nav className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                >
                  {isZh ? link.zhLabel : link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-heading font-semibold mb-4">{isZh ? "关注我们" : "Connect"}</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
              <button
                onClick={copyEmail}
                className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                aria-label="Email"
              >
                <MailIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border/50 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2025 Polaris Lab, Peking University. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-foreground transition-colors">
              {isZh ? "隐私政策" : "Privacy Policy"}
            </Link>
            <Link href="#" className="hover:text-foreground transition-colors">
              {isZh ? "使用条款" : "Terms of Use"}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
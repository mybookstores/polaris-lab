import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/context/LanguageContext";
import { ToastProvider } from "@/components/ui/toast";
import { BackToTop } from "@/components/ui/back-to-top";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin", "latin-ext", "cyrillic"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Polaris Lab | AI Research at Peking University",
  description: "Polaris Lab - Pioneering AI research at Peking University. Exploring AI for Science, Social Computing, General AI, and Physical AI.",
  keywords: ["AI", "Artificial Intelligence", "Peking University", "Research", "Machine Learning", "LLM"],
  authors: [{ name: "Polaris Lab" }],
  openGraph: {
    title: "Polaris Lab | AI Research at Peking University",
    description: "Pioneering AI research in Science, Society, Intelligence, and Robotics.",
    type: "website",
    locale: "zh_CN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh" className="dark">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} min-h-screen bg-background text-foreground antialiased`}
      >
        <TooltipProvider>
          <LanguageProvider>
            <ToastProvider>
              {children}
              <BackToTop />
            </ToastProvider>
          </LanguageProvider>
        </TooltipProvider>
      </body>
    </html>
  );
}
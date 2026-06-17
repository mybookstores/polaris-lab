import * as React from "react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const maxWidthClasses = {
  "6xl": "max-w-6xl",
  "7xl": "max-w-7xl",
} as const;

interface PageHeroProps extends Omit<React.ComponentProps<"section">, "title"> {
  badge?: string;
  badgeIcon?: React.ReactNode;
  heading: React.ReactNode;
  description?: React.ReactNode;
  actions?: React.ReactNode;
  align?: "left" | "center";
  maxWidth?: keyof typeof maxWidthClasses;
  contentClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  showPattern?: boolean;
}

export function PageHero({
  badge,
  badgeIcon,
  heading,
  description,
  actions,
  align = "center",
  maxWidth = "7xl",
  className,
  contentClassName,
  titleClassName,
  descriptionClassName,
  showPattern = true,
  ...props
}: PageHeroProps) {
  const isCentered = align === "center";

  return (
    <section className={cn("relative overflow-hidden py-24", className)} {...props}>
      {showPattern ? <div className="absolute inset-0 grid-pattern" /> : null}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
      <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-primary/10 blur-[128px]" />
      <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-secondary/10 blur-[128px]" />

      <div className={cn("relative z-10 mx-auto px-4 sm:px-6 lg:px-8", maxWidthClasses[maxWidth])}>
        <div
          className={cn(
            "home-fade-in",
            isCentered ? "mx-auto max-w-3xl text-center" : "max-w-3xl",
            contentClassName
          )}
        >
          {badge ? (
            <Badge variant="outline" className="mb-6 px-4">
              {badgeIcon}
              {badge}
            </Badge>
          ) : null}

          <h1
            className={cn(
              "mb-6 font-heading text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl",
              titleClassName
            )}
          >
            {heading}
          </h1>

          {description ? (
            <p
              className={cn(
                "text-xl text-muted-foreground",
                isCentered ? "mx-auto max-w-3xl" : null,
                descriptionClassName
              )}
            >
              {description}
            </p>
          ) : null}

          {actions ? (
            <div className={cn("mt-8 flex gap-3", isCentered ? "justify-center" : "justify-start")}>
              {actions}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

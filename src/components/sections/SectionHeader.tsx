import * as React from "react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface SectionHeaderProps extends Omit<React.ComponentProps<"div">, "title"> {
  badge?: string;
  badgeIcon?: React.ReactNode;
  heading: React.ReactNode;
  description?: React.ReactNode;
  actions?: React.ReactNode;
  align?: "left" | "center";
  contentClassName?: string;
  badgeClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

export function SectionHeader({
  badge,
  badgeIcon,
  heading,
  description,
  actions,
  align = "left",
  className,
  contentClassName,
  badgeClassName,
  titleClassName,
  descriptionClassName,
  ...props
}: SectionHeaderProps) {
  const isCentered = align === "center";
  const isSplit = Boolean(actions) && !isCentered;

  return (
    <div
      className={cn(
        "home-fade-in",
        isCentered ? "mx-auto mb-12 max-w-3xl text-center sm:mb-14" : "mb-10",
        isSplit ? "flex flex-col items-start gap-4 sm:mb-12 sm:flex-row sm:items-end sm:justify-between" : null,
        className
      )}
      {...props}
    >
      <div className={cn(isCentered ? "mx-auto max-w-2xl" : "max-w-2xl", contentClassName)}>
        {badge ? (
          <Badge
            variant="outline"
            className={cn(isCentered ? "mb-4 px-4" : "mb-3 px-3", badgeClassName)}
          >
            {badgeIcon}
            {badge}
          </Badge>
        ) : null}

        <h2
          className={cn(
            "font-heading font-bold tracking-tight",
            isCentered ? "mb-4 text-3xl sm:text-4xl" : "mb-3 text-2xl sm:text-3xl",
            titleClassName
          )}
        >
          {heading}
        </h2>

        {description ? (
          <p
            className={cn(
              "leading-7 text-muted-foreground",
              isCentered ? "mx-auto max-w-2xl" : null,
              descriptionClassName
            )}
          >
            {description}
          </p>
        ) : null}
      </div>

      {actions ? <div className={cn(isCentered ? "mt-6" : "self-start sm:self-auto")}>{actions}</div> : null}
    </div>
  );
}

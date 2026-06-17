import * as React from "react";
import { cn } from "@/lib/utils";

const maxWidthClasses = {
  "4xl": "max-w-4xl",
  "6xl": "max-w-6xl",
  "7xl": "max-w-7xl",
} as const;

interface SectionShellProps extends React.ComponentProps<"section"> {
  containerClassName?: string;
  maxWidth?: keyof typeof maxWidthClasses;
  topDivider?: boolean;
  bottomDivider?: boolean;
}

export function SectionShell({
  className,
  containerClassName,
  maxWidth = "6xl",
  topDivider = false,
  bottomDivider = false,
  children,
  ...props
}: SectionShellProps) {
  return (
    <section className={cn("relative", className)} {...props}>
      {topDivider ? (
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/40 to-transparent" />
      ) : null}

      <div
        className={cn(
          "mx-auto px-4 sm:px-6 lg:px-8",
          maxWidthClasses[maxWidth],
          containerClassName
        )}
      >
        {children}
      </div>

      {bottomDivider ? (
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/40 to-transparent" />
      ) : null}
    </section>
  );
}

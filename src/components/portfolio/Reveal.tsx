import type { ReactNode } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      data-visible={visible}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn("reveal", className)}
    >
      {children}
    </div>
  );
}

export function SectionHeading({
  index,
  title,
  kicker,
}: {
  index: string;
  title: string;
  kicker?: string;
}) {
  return (
    <Reveal className="mb-10">
      <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-primary">
        <span>{index}</span>
        <span className="h-px w-10 bg-primary/50" />
        {kicker ? <span className="text-muted-foreground">{kicker}</span> : null}
      </div>
      <h2 className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl">{title}</h2>
    </Reveal>
  );
}
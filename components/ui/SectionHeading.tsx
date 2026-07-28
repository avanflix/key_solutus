import { cn } from "@/lib/utils";
import Reveal from "@/components/ui/Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <Reveal>
        <span className={cn("eyebrow", light && "text-blue-pale")}>{eyebrow}</span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2
          className={cn(
            "mt-4 text-3xl font-semibold leading-[1.15] sm:text-4xl lg:text-[2.75rem]",
            light ? "text-white" : "text-ink"
          )}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.14}>
          <p
            className={cn(
              "mt-5 text-base leading-relaxed sm:text-lg",
              light ? "text-white/75" : "text-slate"
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}

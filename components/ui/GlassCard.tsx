import { cn } from "@/lib/utils";

export default function GlassCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-white/60 bg-white/70 shadow-glass backdrop-blur-xl",
        className
      )}
    >
      {children}
    </div>
  );
}

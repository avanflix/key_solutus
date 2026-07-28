import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  showIcon?: boolean;
}

export default function Button({
  href,
  children,
  variant = "primary",
  className,
  showIcon = true,
}: ButtonProps) {
  const base =
    "group inline-flex items-center gap-2 rounded-full font-heading text-sm font-semibold transition-all duration-300 px-7 py-3.5";

  const variants = {
    primary:
      "bg-ink text-white hover:bg-blue-deep shadow-card hover:shadow-soft hover:-translate-y-0.5",
    secondary:
      "bg-white text-ink border border-gray-line hover:border-blue hover:text-blue-deep hover:-translate-y-0.5",
    ghost: "text-blue-deep hover:text-ink px-0 py-0",
  };

  return (
    <Link href={href} className={cn(base, variants[variant], className)}>
      {children}
      {showIcon && (
        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </Link>
  );
}

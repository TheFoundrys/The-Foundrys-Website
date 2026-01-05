import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export function GlassCard({ children, className, hoverEffect = true, ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass-card p-6 rounded-2xl",
        hoverEffect && "hover:shadow-xl hover:-translate-y-1",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

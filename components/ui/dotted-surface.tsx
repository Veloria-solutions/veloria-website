import { cn } from "@/lib/utils";

interface DottedSurfaceProps {
  className?: string;
  children?: React.ReactNode;
}

export function DottedSurface({ className, children }: DottedSurfaceProps) {
  return (
    <div
      className={cn("relative", className)}
      style={{
        backgroundImage:
          "radial-gradient(circle, rgba(255,255,255,0.13) 1px, transparent 1px)",
        backgroundSize: "22px 22px",
      }}
    >
      {children}
    </div>
  );
}

import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes } from "react";

interface GameButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "solid" | "outline";
}

export function GameButton({
  children,
  variant = "solid",
  className,
  ...props
}: GameButtonProps) {
  return (
    <button
      className={cn(
        "px-6 py-2 rounded-xl font-semibold transition-colors",
        variant === "solid" && "bg-[#B5AC8C] text-white hover:bg-[#A59D7F]",
        variant === "outline" &&
          "border border-[#B5AC8C] text-[#B5AC8C] hover:bg-[#B5AC8C]/10",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

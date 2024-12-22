import { cn } from "@/lib/utils";

interface GameCardProps {
  number: number;
  variant?: "light" | "dark";
}

export function GameCard({ number, variant = "light" }: GameCardProps) {
  return (
    <div
      className={cn(
        "w-20 h-32 rounded-lg relative flex items-center justify-center text-4xl font-medium",
        variant === "light" && "bg-white text-black",
        variant === "dark" && "bg-[#B5AC8C] text-black"
      )}
    >
      <span className="absolute top-2 left-2 text-sm">{number}</span>
      <span>{number}</span>
      <span className="absolute bottom-2 right-2 text-sm">{number}</span>
    </div>
  );
}

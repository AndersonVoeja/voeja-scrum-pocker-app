interface PlayerScoreProps {
  name: string;
  score: number;
}

export function PlayerScore({ name, score }: PlayerScoreProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      <span className="text-white">{name}</span>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-white" />
        <div className="w-12 h-12 rounded-full bg-[#B5AC8C] flex items-center justify-center text-white">
          {score}
        </div>
      </div>
    </div>
  );
}

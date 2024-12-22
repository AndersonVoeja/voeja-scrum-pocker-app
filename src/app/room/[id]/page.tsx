"use client";

import { GameButton } from "@/components/game-button";
import { GameCard } from "@/components/game-card";
import { PlayerScore } from "@/components/player-score";
import Flex from "@/components/ui/flex";
import { cn } from "@/lib/utils";
import React from "react";

function RoomApp() {
  const cards = ;
  const [selectedCard, setSelectedCard] = React.useState<number | null>(null);

  const handleCardClick = (card: number) => {
    setSelectedCard(card);
  };

  return (
    <Flex className="flex-col items-center justify-center min-h-screen">
      <Flex className="grid grid-cols-3 items-center justify-items-center gap-8 mb-12">
        <PlayerScore name="Piter" score={0} />
        <PlayerScore name="Rafael" score={3} />
        <PlayerScore name="Pedro" score={0} />
        <GameButton>Reveal Cards</GameButton>
        <PlayerScore name="Cauan" score={0} />
        <PlayerScore name="Lucas BN" score={3} />
        <PlayerScore name="Lucas" score={0} />
      </Flex>
      <span className="text-white text-2xl font-semibold my-6">
        Choose your card
      </span>
      <div className="flex items-center gap-4">
        {cards.map((card, index) => (
          <>
            <button
              onClick={() => handleCardClick(card)}
              className={cn(
                selectedCard === card
                  ? "scale-110 animate transition-transform"
                  : "bg-white",
                "rounded-lg"
              )}
            >
              <GameCard
                key={index}
                number={card}
                variant={selectedCard === card ? "dark" : "light"}
              />
            </button>
          </>
        ))}
      </div>
    </Flex>
  );
}

export default RoomApp;

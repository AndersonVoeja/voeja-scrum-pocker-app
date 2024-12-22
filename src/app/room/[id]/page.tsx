"use client";

import { GameButton } from "@/components/game-button";
import { GameCard } from "@/components/game-card";
import { PlayerScore } from "@/components/player-score";
import Flex from "@/components/ui/flex";
import { Table } from "@/interface/table";
import { cn } from "@/lib/utils";
import { getTable } from "@/services/table.create";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

function RoomApp() {
  const params = useParams();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;
  console.log(id);
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [roomData, setRoomData] = useState<Table | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchRoomData = async (id: string) => {
      try {
        const data = await getTable(id);
        setRoomData(data);
      } catch (error) {
        console.error("Failed to fetch room data", error);
      }
    };

    fetchRoomData(id);
  }, [id]);

  console.log(roomData);
  const votes = roomData?.votes;

  const handleCardClick = (card: number) => {
    setSelectedCard(card);
  };
  console.log(votes);

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
        {votes &&
          votes.map((card, index) => (
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

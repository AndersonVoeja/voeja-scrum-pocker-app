"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type RoomContextType = {
  roomId: string;
  setRoomId: (id: string) => void;
  votes: number[];
  setVotes: (votes: number[]) => void;
  addVote: (vote: number) => void;
};

const RoomContext = createContext<RoomContextType | undefined>(undefined);

export const RoomProvider = ({ children }: { children: ReactNode }) => {
  const [roomId, setRoomId] = useState<string>("");
  const [votes, setVotes] = useState<number[]>([]);

  const addVote = (vote: number) => {
    setVotes((prevVotes) => [...prevVotes, vote]);
  };

  return (
    <RoomContext.Provider
      value={{ roomId, setRoomId, votes, setVotes, addVote }}
    >
      {children}
    </RoomContext.Provider>
  );
};

export const useRoom = () => {
  const context = useContext(RoomContext);
  if (!context) {
    throw new Error("useRoom must be used within a RoomProvider");
  }
  return context;
};

import NavBar from "@/components/NavBar";
import Flex from "@/components/ui/flex";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const RoomLayout = ({ children }: Props) => {
  return (
    <Flex className="p-20 flex-col">
      <NavBar />
      {children}
    </Flex>
  );
};

export default RoomLayout;

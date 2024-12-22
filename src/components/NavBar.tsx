import React from "react";
import Flex from "./ui/flex";
import Image from "next/image";
import { GameButton } from "./game-button";

const NavBar = () => {
  return (
    <Flex className="w-full flex justify-between items-center">
      <Image src={"/logo.svg"} alt="Logo" width={300} height={200} />
      <GameButton variant="outline">To Share</GameButton>
    </Flex>
  );
};

export default NavBar;

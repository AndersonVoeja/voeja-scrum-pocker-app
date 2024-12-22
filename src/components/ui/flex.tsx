import { cn } from "@/lib/utils";
import React from "react";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  className?: string;
  children: React.ReactNode;
};

const Flex = ({ className, children, ...rest }: Props) => {
  return (
    <div className={cn(`flex ${className}`)} {...rest}>
      {children}
    </div>
  );
};

export default Flex;

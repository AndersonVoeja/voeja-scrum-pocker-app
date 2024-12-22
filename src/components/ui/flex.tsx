import { cn } from "@/lib/utils";
import React from "react";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  className?: string;
  children: React.ReactNode;
};

const SimpleFlex = ({ className, children, ...rest }: Props) => {
  return (
    <div className={cn(`${className}`)} {...rest}>
      {children}
    </div>
  );
};

export default SimpleFlex;

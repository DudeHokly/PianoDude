import React from "react";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

export const SampleComp: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn("", className)}>
      <h1>X</h1>
    </div>
  );
};

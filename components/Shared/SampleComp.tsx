import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  className?: string;
}

export const SampleComponent: React.FC<React.PropsWithChildren<Props>> = ({
  className,
}) => {
  return <div className={cn("", className)}></div>;
};

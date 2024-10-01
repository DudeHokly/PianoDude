import React from "react";
import { cn } from "@/lib/utils";
import { Accessibility } from "lucide-react";

interface Props {
  className?: string;
}

export const SortPopUp: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={cn(
        "inline-flex cursor-pointer bg-red-900 rounded-xl p-1",
        className
      )}
    >
      <Accessibility />
      <b>Сортировка:</b>
      <b>по возростанию цены</b>
    </div>
  );
};

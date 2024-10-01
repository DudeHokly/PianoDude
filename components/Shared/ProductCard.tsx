import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Title } from "./index";
import { Button } from "../ui";
import { Accessibility } from "lucide-react";

interface Props {
  id: number;
  imgUrl: string;
  PianoName: string;
  StrikethroughPrice: number;
  PianoPrice: number;
  className?: string;
}

export const ProductCart: React.FC<Props> = ({
  className,
  id,
  imgUrl,
  PianoName,
  StrikethroughPrice,
  PianoPrice,
}) => {
  return (
    <div
      className={cn(
        "group transform transition duration-500 hover:scale-105",
        className
      )}
    >
      <Link href={`/product/${id}`}>
        <img className="w-[215] h-[215]" src={imgUrl} alt="Пианино" />
      </Link>
      <Title text={PianoName} size="sm" />
      <b>{StrikethroughPrice}</b>
      <p>{PianoPrice}руб</p>
      <div>
        <Button>В корзину</Button>
        <Accessibility />
      </div>
    </div>
  );
};

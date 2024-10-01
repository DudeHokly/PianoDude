import React from "react";
import { cn } from "@/lib/utils";

import { Button } from "../ui";

import { ShoppingCart } from "lucide-react";

import { Container, SortPopUp, Title } from "./index";

interface Props {
  className?: string;
}

const CatigoriesPiano = [
  "Клавишные",
  "Караоке",
  "Звук",
  "Отзывы",
  "Доставка и оплата",
  "Наши статьи",
  "О нас",
];

export const Catigories: React.FC<Props> = ({ className }) => {
  return (
    <Container>
      <Title text="Категории" size="lg" />
      <div className="flex justify-between">
        <div
          className={cn(
            "inline-flex bg-slate-400 rounded-xl gap-2.5 py-1 px-3 ",
            className
          )}
        >
          {CatigoriesPiano.map((i, index) => (
            <a
              className={cn(
                "flex bg-sky-300 rounded-xl p-1 hover:bg-rose-700 cursor-pointer items-center duration-150"
              )}
              key={index}
            >
              <p>{i}</p>
            </a>
          ))}
        </div>
        <div className="flex bg-slate-400 rounded-xl p-1.5 items-center gap-1.5">
          <SortPopUp />
          <Button>
            Корзина | <ShoppingCart />
          </Button>
        </div>
      </div>
    </Container>
  );
};

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
        <div className={cn("inline-flex gap-5", className)}>
          {CatigoriesPiano.map((i, index) => (
            <a className={cn("flex")} key={index}>
              <p>{i}</p>
            </a>
          ))}
        </div>
        <div>
          <SortPopUp />
          <Button>
            Корзина | <ShoppingCart />
          </Button>
        </div>
      </div>
    </Container>
  );
};

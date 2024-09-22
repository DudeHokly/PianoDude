import React from "react";
import { cn } from "@/lib/utils";
import { Title } from "./index";

interface Props {
  className?: string;
}

const FiltersNames = [
  "Цвет",
  "Производитель",
  "Полифония",
  "Количество клавиш",
  "Метроном",
  "Записывающее устройство",
  "Цвет",
  "Bluetooth",
  "Кол-во тембров",
  "Запись",
  "Молоточковая клавиатура",
  "Размеры, мм",
  "Вес товара, г",
  "Вид питания",
  "Гарантийный срок",
  "Звуковые эффекты",
  "Функции",
  "Особенности",
  "Жесткость клавиатуры",
  "Размер клавиш",
  "Интерфейсы",
];

export const Filters: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn("", className)}>
      <Title text="Фильтры" />
      <div className="">
        {FiltersNames.map((i, index) => (
          <a>
            <span>{i}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

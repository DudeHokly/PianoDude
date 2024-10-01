import { cn } from "@/lib/utils";
import { Container } from "./Container";
import { MoonStar, Piano, Search } from "lucide-react";
import { Button } from "../ui/button";

interface Props {
  className?: string;
}

export const Header: React.FC<React.PropsWithChildren<Props>> = ({
  className,
}) => {
  return (
    <header className={cn("pt-3", className)}>
      <Container className="flex items-center justify-between ">
        <div className="flex">
          <h1 className="text-3xl pl-2">PianoDude</h1>
          <Piano />
        </div>

        {/* //SearchInput -- разработать как компонент */}
        <div className="flex w-[600px] relative">
          <input
            type="search"
            id="site-search"
            name="search"
            value=""
            className=" bg-green-700 w-full py-1 rounded-xl"
          />
          <Search className="absolute right-2 top-[50%] translate-y-[-50%] cursor-pointer" />
        </div>
        <div className="flex">
          <div className="pr-4">
            <p>8 800 553535 1478</p>
            <p>dude@gmail.com</p>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline">Войти</Button>
            <MoonStar />
          </div>
        </div>
      </Container>
    </header>
  );
};

import { cn } from "@/lib/utils";
import { Container } from "./Container";
import { Piano } from "lucide-react";
import { Button } from "../ui/button";

interface Props {
  className?: string;
}

export const Header: React.FC<React.PropsWithChildren<Props>> = ({
  className,
}) => {
  return (
    <header className={cn("", className)}>
      <Container className="flex items-center justify-between ">
        <div className="flex">
          <Piano />
          <h1 className="text-3xl pl-2">PianoDude</h1>
        </div>

        {/* //SearchInput -- разработать как компонент */}
        <div>
          <input />
        </div>
        <div className="flex">
          <div className="pr-4">
            <p>8 800 553535 1478</p>
            <p>dude@gmail.com</p>
          </div>
          <div>
            <Button variant="outline">Войти</Button>
          </div>
        </div>
      </Container>
    </header>
  );
};

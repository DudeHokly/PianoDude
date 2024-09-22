import { Container, Filters } from "@/components/Shared";

export default function Home() {
  return (
    <>
      <Container></Container>
      <Container>
        {/*Фильтрация*/}
        <div className="flex gap-[60px]">
          <div className="w-[250px]">
            <Filters />
          </div>
        </div>

        {/*Список товаров*/}
        <div className="flex-1">
          <div className="grid gap-16">Список пианино</div>
        </div>
      </Container>
    </>
  );
}

import { Container, Filters, ProductCart } from "@/components/Shared";

import pianos from "@/public/pianos.json";

export default function Home() {
  return (
    <>
      <Container className="py-6 ">
        {/*Фильтрация*/}
        <div className="flex gap-[60px]">
          <div className="w-[250px]">
            <Filters />
          </div>

          {/*Список товаров*/}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pianos.map((i, index) => (
                <ProductCart
                  id={i.id}
                  imgUrl={i.imgUrl}
                  PianoPrice={i.PianoPrice}
                  PianoName={i.PianoName}
                  StrikethroughPrice={i.StrikethroughPrice}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

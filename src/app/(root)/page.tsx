import Carousel from "@/components/ui/Carousel";
import { Divider, Spacer } from '@nextui-org/react';

export default function Home() {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex flex-col">
        <h1 className="text-[36px] font-semibold">Popular beats</h1>
        <p className="text-default-500">The most popular bits in recent times</p>
        <Spacer y={2}/>
        <Divider/>
      </div>
      <Carousel />
    </section>
  );
}

"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  Button,
  Card,
  CardFooter,
  Image,
  CardBody,
  CardHeader,
} from "@nextui-org/react";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";

export default function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ slidesToScroll: 1 });

  const [isLiked, setLiked] = React.useState(false);

  const changeLiked = () => {
    if (isLiked) {
      setLiked(false);
    } else {
      setLiked(true);
    }
  };

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const array = [1, 2, 3, 4, 5];

  return (
    <div className="embla flex flex-col gap-2" ref={emblaRef}>
      <div className="embla__container">
        {array.map((array) => (
          <Card radius="lg" className="bg-background embla__slide">
            <CardHeader className="absolute z-10 top-1 left-2">
              <Button isIconOnly color="default" variant="light" onClick={changeLiked}>
                {isLiked ? (
                  <Heart size={20} fill="white" />
                ) : (
                  <Heart size={20} />
                )}
              </Button>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <Image
                alt="Card background"
                className="object-cover rounded-xl z-0"
                src="/beat.jpg"
              />
            </CardBody>
            <CardFooter className="flex-col items-start px-4 pb-2">
              <div className="flex justify-between w-full">
                <p className="text-primary">$35</p>
                <p className="text-default-500">145 BPM</p>
              </div>
              <div className="flex flex-col">
                <p className="text-[20px]">Auto</p>
                <p className="text-[16px] text-default-500">1rowvy</p>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="flex gap-2">
        <Button
          isIconOnly
          className="embla__prev rounded-full"
          onClick={scrollPrev}
          variant="bordered"
        >
          <ChevronLeft size={20} />
        </Button>
        <Button
          isIconOnly
          className="embla__next rounded-full"
          onClick={scrollNext}
          variant="bordered"
        >
          <ChevronRight size={20} />
        </Button>
      </div>
    </div>
  );
}

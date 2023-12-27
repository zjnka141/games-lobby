"use client"
import React from "react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./carousel"
import { ILobbyItem } from "@/lib/types"

const CategoriesCarousel = ({ items }: { items: ILobbyItem[] }) => {
  return (
    <div className="w-full relative mt-20">
      <Carousel className="w-full" opts={{ align: "start" }}>
        <CarouselContent className="w-full">
          {items.map((item, index) => (
            <CarouselItem key={index} className="basis-1/3 md:basis-1/6 cursor-pointer">
              <div className="w-20">
                <object
                  type="image/svg+xml"
                  width="100%"
                  height="100%"
                  data={item.animatedSvg.mobile?.original?.src || item.image.original.src}
                ></object>
                <h1>{item.name}</h1>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute -top-10 left-auto right-10" />
        <CarouselNext className="absolute -top-10 right-0" />
      </Carousel>
    </div>
  )
}

export default CategoriesCarousel

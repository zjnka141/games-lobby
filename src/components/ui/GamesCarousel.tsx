"use client"
import React from "react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./carousel"
import GameCard from "./GameCard"
import { IGameTile } from "@/lib/types"

const GamesCarousel = ({ games }: { games: IGameTile[] }) => {
  return (
    <div className="w-[calc(100%+1rem)] md:w-full relative mt-6">
      <Carousel className="w-full" opts={{ align: "start" }}>
        <CarouselContent className="w-11/12 md:w-[calc(100%+1rem)]">
          {games.map((game) => (
            <CarouselItem key={game.id} className="basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
              <div className="h-32 md:h-72">
                <GameCard title={game.gameText} description={game.provider} image={game.image.thumbnail.src} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute -top-10 left-auto right-10 hidden md:flex" />
        <CarouselNext className="absolute -top-10 right-0 hidden md:flex" />
      </Carousel>
    </div>
  )
}

export default GamesCarousel

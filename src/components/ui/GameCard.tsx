import Image from "next/image"
import React from "react"
import { Button } from "./button"

const GameCard = ({ title, description, image }: { title: string; description?: string; image: string }) => {
  return (
    <div className="w-full h-full rounded-xl overflow-hidden group relative select-none">
      <Image src={image} alt="game-thumbnail" width={320} height={320} className="w-full h-full object-cover" />
      <div className="absolute inset-0 -translate-y-1/2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 bg-gray-900/60 px-6 py-4 transition duration-300 text-center grid grid-rows-4">
        <div className="row-span-2">
          <h1 className="line-clamp-2 font-bold text-white text-lg">{title}</h1>
        </div>
        <Button>Play</Button>
        <small className="hidden lg:block self-end text-sm text-gray-300">{description}</small>
      </div>
    </div>
  )
}

export default GameCard

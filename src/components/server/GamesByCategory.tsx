import { getGamesByCategory } from "@/lib/api"
import { ILobbyItem } from "@/lib/types"
import React from "react"
import GamesCarousel from "../ui/GamesCarousel"
import { generateSlug } from "@/lib/utils"
import Link from "next/link"

const GamesByCategory = async ({ item }: { item: ILobbyItem }) => {
  const games = await getGamesByCategory({ category: generateSlug(item.name) })
  if (!games.length) {
    return null
  }
  return (
    <div className="w-full my-10">
      <Link
        href={`/categories/${generateSlug(item.name)}`}
        className="bg-gradient-to-r p-2 pl-4 pr-20 border-l-8 border-neon_green from-black via-black to-transparent w-fit block"
      >
        <h1 className="uppercase text-neon_green text-sm font-medium select-none">{item.name}</h1>
      </Link>
      <GamesCarousel games={games} />
    </div>
  )
}

export default GamesByCategory

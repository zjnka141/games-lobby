import { ILobbyItem } from "@/lib/types"
import { generateSlug } from "@/lib/utils"
import Link from "next/link"
import React from "react"

const CategoriesTopBar = ({ lobbyItems }: { lobbyItems: ILobbyItem[] }) => {
  return (
    <div className="w-full flex overflow-x-auto justify-between gap-2 mt-8 hide-scrollbar">
      {lobbyItems.map((item) => (
        <Link
          key={item.id}
          className="cursor-pointer p-2 text-white rounded-xl shrink-0 select-none hover:-translate-y-1 duration-200 hover:text-cyan-600"
          href={`/categories/${generateSlug(item.name)}`}
        >
          <div className="h-16 pointer-events-none">
            <object type="image/svg+xml" width="100%" height="100%" data={item.image.original.src}></object>
          </div>
          <p className="text-center mt-1 text-sm">{item.name}</p>
        </Link>
      ))}
    </div>
  )
}

export default CategoriesTopBar

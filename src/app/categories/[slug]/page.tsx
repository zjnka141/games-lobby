import GameCard from "@/components/ui/GameCard"
import SearchInput from "@/components/ui/SearchInput"
import { LIMIT, getGamesByCategory, getLobbyItems } from "@/lib/api"
import { cn, generateSlug } from "@/lib/utils"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import React from "react"

interface PageProps {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateStaticParams() {
  const lobbyItems = await getLobbyItems()
  return lobbyItems.map((item) => ({ slug: generateSlug(item.name) }))
}

const page = async ({ params: { slug }, searchParams }: PageProps) => {
  const search = typeof searchParams.search === "string" ? searchParams.search : ""
  const page = typeof searchParams.page === "string" ? Number(searchParams.page) : 1
  const games = await getGamesByCategory({ category: slug, page, search })

  return (
    <div className="container pb-10">
      <Link href="/" className="text-orange-500 flex gap-2 my-8 hover:text-orange-400">
        <ArrowLeft />
        Back To Home
      </Link>
      <SearchInput defaultValue={search} />
      {!!games.length ? (
        <>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-8">
            {games.map((game) => (
              <GameCard
                image={game.image.thumbnail.src}
                title={game.gameText}
                description={game.provider}
                key={game.id}
              />
            ))}
          </div>

          <div className="flex space-x-6 justify-end mt-10">
            <Link
              href={{
                pathname: `/categories/${slug}`,
                query: {
                  ...(search ? { search } : {}),
                  page: page > 1 ? page - 1 : 1,
                },
              }}
              className={cn(
                "rounded border bg-orange-500 px-3 py-1 text-sm text-white hover:bg-orange-400",
                page <= 1 && "pointer-events-none opacity-50"
              )}
            >
              Previous
            </Link>
            <Link
              href={{
                pathname: `/categories/${slug}`,
                query: {
                  ...(search ? { search } : {}),
                  page: page + 1,
                },
              }}
              className={cn(
                "rounded border bg-orange-500 px-3 py-1 text-sm text-white hover:bg-orange-400",
                games.length < LIMIT && "pointer-events-none opacity-50"
              )}
            >
              Next
            </Link>
          </div>
        </>
      ) : (
        <p className="text-white mt-10">No games available</p>
      )}
    </div>
  )
}

export default page

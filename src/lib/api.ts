import { IGameTile, ILobbyItem } from "./types"

export const LIMIT = 15
const BASE_URL = "https://casino.api.stg.kansino.nl/v1/kansino/en"

export const getLobbyItems = async () => {
  const response = await fetch(`${BASE_URL}/config`, { next: { revalidate: 24 * 3600 } })
  const data = await response.json()

  return data.menu.lobby.items as ILobbyItem[]
}

export const getGamesByCategory = async ({
  category,
  page = 1,
  search,
}: {
  category: string
  page?: number
  search?: string
}) => {
  const queryParams = new URLSearchParams({
    pageNumber: page.toString(),
    pageSize: `${LIMIT}`,
  })

  if (search) {
    queryParams.set("search", search)
  } else {
    queryParams.delete("search")
  }

  if (category === "all_games") {
    // Remove gameCategories query in the all games page
    queryParams.delete("gameCategories")
  } else {
    queryParams.set("gameCategories", category)
  }

  const response = await fetch(`${BASE_URL}/games/tiles?${queryParams.toString()}`, { next: { revalidate: 3600 } })
  const data = await response.json()

  return data.items as IGameTile[]
}

import GamesByCategory from "@/components/server/GamesByCategory"
import { getLobbyItems } from "@/lib/api"

export default async function Home() {
  const lobbyItems = await getLobbyItems()
  await new Promise((r) => setTimeout(r, 2000))
  return (
    <main>
      {lobbyItems.map((item) => (
        <GamesByCategory item={item} key={item.id} />
      ))}
    </main>
  )
}

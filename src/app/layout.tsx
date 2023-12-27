import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import { getLobbyItems } from "@/lib/api"
import CategoriesTopBar from "@/components/ui/CategoriesTopBar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Game Lobby",
  description: "The description for the game lobby",
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const lobbyItems = await getLobbyItems()

  return (
    <html lang="en">
      <body className={cn("bg-zinc-800 min-h-screen container py-10 relative w-full", inter.className)}>
        <CategoriesTopBar lobbyItems={lobbyItems} />
        {children}
      </body>
    </html>
  )
}

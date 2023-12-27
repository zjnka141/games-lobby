"use client"

import useDebounceValue from "@/hooks/useDebounceValue"
import { cn } from "@/lib/utils"
import { Search } from "lucide-react"
import { useSearchParams, useRouter, usePathname } from "next/navigation"
import React, { useEffect, useState } from "react"

const SearchInput = ({ defaultValue, className }: { defaultValue: string; className?: string }) => {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [search, setSearch] = useState(defaultValue)
  const pathname = usePathname()
  const debounceSearch = useDebounceValue(search)
  const params = new URLSearchParams(searchParams.toString())
  useEffect(() => {
    if (debounceSearch) {
      params.set("search", debounceSearch)
    } else {
      params.delete("search")
    }
    params.delete("page")
    router.push(`${pathname}?${params.toString()}`)
  }, [debounceSearch])

  return (
    <div className={cn("relative h-12 w-80 border rounded-xl bg-white px-5 pr-10 text-sm", className)}>
      <input
        className="h-full w-full outline-none placeholder:text-grey-black"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Search className="absolute right-4 top-3 text-brand-torea" size={20} />
    </div>
  )
}

export default SearchInput

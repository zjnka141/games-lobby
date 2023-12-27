"use client"

import { Button } from "@/components/ui/button"
import { useEffect } from "react"

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="w-full flex flex-col items-center border border-red-300 rounded-lg p-4 my-4">
      <h2 className="text-red-500 text-center">Something went wrong!</h2>
      <Button
        className="mt-4"
        variant="outline"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </Button>
    </div>
  )
}

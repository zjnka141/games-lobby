import { Loader2 } from "lucide-react"
import React from "react"

const loading = () => {
  return (
    <div className="inset-0 fixed grid place-items-center bg-gray-900/50">
      <Loader2 size={48} className="text-orange-500 animate-spin" />
    </div>
  )
}

export default loading

"use client"

import { useState } from "react"

export default function TestConfigurator() {
  const [count, setCount] = useState(0)
  return (
    <div className="p-4 bg-blue-600 rounded-lg">
      <p className="text-white">Test: {count}</p>
      <button onClick={() => setCount(count + 1)} className="bg-white text-blue-600 px-4 py-2 rounded">
        Click
      </button>
    </div>
  )
}

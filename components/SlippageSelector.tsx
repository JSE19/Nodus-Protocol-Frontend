"use client"

import { useState } from "react"

const PRESETS = [0.1, 0.5, 1.0] // percent

interface SlippageSelectorProps {
  value: number          // percent, e.g. 0.5
  onChange: (v: number) => void
}

export function SlippageSelector({ value, onChange }: SlippageSelectorProps) {
  const [custom, setCustom] = useState("")
  const isCustom = !PRESETS.includes(value)

  function handleCustom(raw: string) {
    setCustom(raw)
    const n = parseFloat(raw)
    if (!isNaN(n) && n > 0 && n <= 50) {
      onChange(n)
    }
  }

  return (
    <div className="space-y-1.5">
      <p className="text-xs font-medium text-gray-500">Slippage tolerance</p>
      <div className="flex items-center gap-2">
        {PRESETS.map((p) => (
          <button
            key={p}
            onClick={() => { setCustom(""); onChange(p) }}
            className={`rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors ${
              value === p && !isCustom
                ? "border-violet-500/50 bg-violet-600/20 text-violet-300"
                : "border-white/10 text-gray-500 hover:border-white/20 hover:text-white"
            }`}
          >
            {p}%
          </button>
        ))}

        <div className={`flex items-center gap-1 rounded-lg border px-2 py-1 transition-colors ${
          isCustom ? "border-violet-500/50" : "border-white/10"
        }`}>
          <input
            type="number"
            min="0.01"
            max="50"
            step="0.1"
            placeholder="Custom"
            value={custom}
            onChange={(e) => handleCustom(e.target.value)}
            className="w-16 bg-transparent text-xs text-white placeholder-gray-600 outline-none"
          />
          <span className="text-xs text-gray-600">%</span>
        </div>
      </div>

      {value > 5 && (
        <p className="text-xs text-yellow-500">
          High slippage — your trade may be front-run.
        </p>
      )}
    </div>
  )
}

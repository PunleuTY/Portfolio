"use client"

import type * as React from "react"

type ThemeProviderProps = {
  children: React.ReactNode
  attribute?: string
  defaultTheme?: string
  enableSystem?: boolean
  forcedTheme?: string
}

export function ThemeProvider({
  children,
  attribute = "class",
  defaultTheme = "dark",
  enableSystem = false,
  forcedTheme = "dark",
}: ThemeProviderProps) {
  return (
    <div className="dark" data-theme="dark">
      {children}
    </div>
  )
}

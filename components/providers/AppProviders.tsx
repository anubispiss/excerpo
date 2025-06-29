"use client"
export function AppProviders({children}: {children: React.ReactNode}) {
  return <ThemeProvider attribute = "class" defaultTheme="system" enableSystem> {children}</ThemeProvider>
}
import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
"use client"

import { AppProvider } from "../context/AppContext"
import { ThemeProvider } from "next-themes"

export default function Providers({ children }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem={true}
      disableTransitionOnChange>
      <AppProvider>
        {children}
      </AppProvider>
    </ThemeProvider>
  )
}

import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Sauntr - The new way to get lost",
  description:
    "Join the waitlist for Sauntr, the travel app that helps spontaneous travelers find places to go and things to do that fit their vibe.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta property="og:image" content="/images/sauntr-logo.png" />
        <meta property="og:title" content="Sauntr - The new way to get lost" />
        <meta
          property="og:description"
          content="Join the waitlist for Sauntr, the travel app that helps spontaneous travelers find places to go and things to do that fit their vibe."
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'
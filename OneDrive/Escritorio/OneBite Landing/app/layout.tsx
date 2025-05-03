import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "OneBite | Experiencias Gastronómicas Exclusivas",
  description:
    "OneBite es tu acceso exclusivo a experiencias gastronómicas únicas. Cenas privadas, menús secretos, eventos multisensoriales. Solo para quienes buscan lo mejor.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${playfair.variable} ${inter.variable} font-sans`}>{children}</body>
    </html>
  )
}

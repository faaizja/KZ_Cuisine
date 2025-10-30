import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { CartProvider } from "@/lib/cart-context"
import { Navigation } from "@/components/navigation"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "KZ's CUISINE - Fine Dining",
  description: "Authentic Pakistani cuisine brought to Canada",
  icons: {
    icon: "/Logo.svg",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[url('/Background.png')] bg-fixed bg-cover bg-center`}>
        <CartProvider>
          <Navigation />
          {children}
        </CartProvider>
      </body>
    </html>
  )
}

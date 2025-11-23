import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { CartProvider } from "@/lib/cart-context"
import { Navigation } from "@/components/navigation"
import Image from "next/image" // Import Next.js Image component

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "KZ's CUISINE - Fine Dining",
  description: "Authentic Pakistani cuisine brought to Canada",
  icons: {
    icon: "../components/logo.svg",
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="relative min-h-screen">
          <Image
            src="/Background.png" 
            alt="Restaurant background"
            fill 
            style={{ objectFit: 'cover' }}
            priority
            className="fixed inset -z-10"
          />

          <div className="relative z-10 min-h-screen flex flex-col">
            <CartProvider>
              <Navigation />
              {children}
            </CartProvider>
          </div>
        </div>
      </body>
    </html>
  )
}
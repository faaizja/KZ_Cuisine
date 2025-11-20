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
      <body className={inter.className}>
        <div className="relative min-h-screen">
          <video
            className="fixed inset-0 -z-10 h-screen w-full object-cover min-h-screen"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/bg-video.mp4" type="video/mp4" />
          </video>

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
"use client"

import Link from "next/link"
import Image from "next/image"
import { useCart } from "@/lib/cart-context"
import { ShoppingBag } from "lucide-react"

export function Navigation() {
  const { itemCount } = useCart()

  return (
    <nav className="border-b border-border bg-background sticky top-0 z-50">
      <div className="container mx-auto px-3 md:px-4 py-3 md:py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 md:gap-3">
          <Image 
            src="/Logo.svg" 
            alt="KZ's Cuisine" 
            width={40} 
            height={40} 
            className="h-8 w-8 md:h-10 md:w-10" 
          />
          <span className="text-lg md:text-xl lg:text-2xl font-bold whitespace-nowrap">
            KZ&apos;S <span className="text-[#D40924]">CUISINE</span>
          </span>
        </Link>

        <div className="flex items-center gap-4 md:gap-8">
          <Link href="/" className="text-xs md:text-sm font-medium hover:text-accent transition-colors">
            About
          </Link>
          <Link href="/menu" className="text-xs md:text-sm font-medium hover:text-accent transition-colors">
            Menu
          </Link>
          <Link
            href="/cart"
            className="relative flex items-center gap-2 text-xs md:text-sm font-medium hover:text-accent transition-colors"
          >
            <ShoppingBag className="w-4 h-4 md:w-5 md:h-5" />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-accent text-background text-xs w-4 h-4 md:w-5 md:h-5 rounded-full flex items-center justify-center font-bold">
                {itemCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  )
}

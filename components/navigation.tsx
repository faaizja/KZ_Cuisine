"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useCart } from "@/lib/cart-context"
import { ShoppingBag } from "lucide-react"
import logo from "../components/logo.svg"

export function Navigation() {
  const { itemCount } = useCart()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="border-b border-border bg-background/90 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-3 md:px-4 py-3 md:py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 md:gap-3">
          <Image
            src={logo}
            alt="KZ's Cuisine"
            width={40}
            height={40}
            className="h-8 w-8 md:h-10 md:w-10"
          />
          <span className="text-lg md:text-xl lg:text-2xl font-bold whitespace-nowrap">
            KZ&apos;S <span className="text-[#D40924]">CUISINE</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-10">
          <Link href="/" className="text-xs md:text-sm font-medium hover:text-accent transition-colors">
            About
          </Link>
          <Link href="/menu" className="text-xs md:text-sm font-medium hover:text-accent transition-colors">
            Menu
          </Link>
          <Link href="/catering-menu" className="text-xs md:text-sm font-medium hover:text-accent transition-colors">
            Catering
          </Link>

{/* 
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
            
          </Link> */}
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          className="md:hidden inline-flex items-center justify-center rounded-md border border-border px-2.5 py-2 text-xs font-medium text-foreground hover:text-accent hover:border-accent transition-colors transition-transform duration-150 active:scale-95"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          <span
            className={`relative block w-5 h-4 transition-all duration-500 ease-out ${
              isOpen ? "rotate-90" : "rotate-0"
            }`}
          >
            <span
              className={`absolute inset-x-0 top-0 h-0.5 bg-foreground rounded-full transition-all duration-500 ${
                isOpen ? "top-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute inset-x-0 top-1.5 h-0.5 bg-foreground rounded-full transition-opacity duration-500 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute inset-x-0 bottom-0 h-0.5 bg-foreground rounded-full transition-all duration-500 ${
                isOpen ? "bottom-1.5 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden origin-top transition-all duration-500 ease-out overflow-hidden border-t border-border bg-background/95 backdrop-blur-md ${
          isOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container mx-auto px-3 pb-3 flex flex-col gap-2 pt-2">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="text-sm font-medium py-1.5 flex items-center justify-between hover:text-accent transition-colors"
          >
            <span>About</span>
          </Link>
          <Link
            href="/menu"
            onClick={() => setIsOpen(false)}
            className="text-sm font-medium py-1.5 flex items-center justify-between hover:text-accent transition-colors"
          >
            <span>Menu</span>
          </Link>
          <Link
            href="/catering-menu"
            onClick={() => setIsOpen(false)}
            className="text-sm font-medium py-1.5 flex items-center justify-between hover:text-accent transition-colors"
          >
            <span>Catering</span>
          </Link>
        </div>
      </div>
    </nav>
  )
}

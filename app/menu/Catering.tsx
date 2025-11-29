"use client"

import Image from "next/image"
import { useCart } from "@/lib/cart-context"
import { Plus } from "lucide-react"

const menuItems = [
  {
    id: "1",
    name: "Package 1 – Chicken Pulao + Chicken Korma",
    description: "Chicken pulao paired with creamy, mildly spiced chicken korma.",
    price: "13/person",
    category: "Main Menu",
    image: "/package2.jpeg",
  },
  {
    id: "2",
    name: "Package 2 – Beef Pulao + Chicken Korma ",
    description: "Beef-flavoured rice served with tender chicken korma.",
    price: "15/person",
    category: "Main Menu",
    image: "/package3.jpeg",
  },
  {
    id: "3",
    name: "Package 3 – Chicken Biryani ",
    description: "Classic chicken biryani made with basmati rice, aromatic spices, and tender chicken pieces.",
    price: "15/person",
    category: "Main Menu",
    image: "/package4.jpeg",
  },
  {
    id: "4",
    name: "Package 4 – Beef Pulao + Mutton Korma",
    description: "Beef-flavoured rice served with rich, slow-cooked mutton korma.",
    price: "17/person",
    category: "Main Menu",
    image: "/package1.jpeg",
  },
  // {
  //  id: "5",
  //   name: "Naan",
  //   description: "Plain Naan",
  //   price: 2.50,
  //   category: "Soft Drinks & Naan",
  //   image: "/placeholder.svg?height=300&width=300", 
  // },
  // {
  //  id: "6",
  //   name: "Soft Drink",
  //   description: "Choose between any soft drink",
  //   price: 2.50,
  //   category: "Soft Drinks & Naan",
  //   image: "/placeholder.svg?height=300&width=300", 
  // }
]

export default function MenuClient() {
  const { addItem } = useCart()

  const categories = ["Main Menu"]

  return (
    <main className="container mx-auto px-4 py-12 md:py-20 min-h-screen">
      <div className="text-center mb-12 md:mb-20">
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black mb-4 md:mb-6 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] animate-fade-in-up animation-delay-1000">
        <span className="text-accent">CATERING MENU</span>
        </h1>
        <p className="text-white/85 text-base md:text-lg lg:text-xl drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
          For 50–200+ guests
        </p>
      </div>

      {categories.map((category) => (
        <section key={category} className="mb-16 md:mb-24">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-10 pb-4 md:pb-6 border-b border-white/20 drop-shadow-[0_1px_6px_rgba(0,0,0,0.8)]">
            {category}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {menuItems
              .filter((item) => item.category === category)
              .map((item) => (
                <div
                  key={item.id}
                  className="border border-white/10 p-4 md:p-6 bg-black/50 backdrop-blur-sm"
                >
                  <div className="aspect-square bg-black/30 mb-4 md:mb-6 overflow-hidden rounded-lg">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      width={300}
                      height={300}
                      className="w-full h-full object-center"
                    />
                  </div>
                  
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 md:mb-3 drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
                    {item.name}
                  </h3>
                  <p className="text-white/75 text-sm md:text-base mb-4 md:mb-6 leading-relaxed drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-xl sm:text-2xl md:text-3xl font-black text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
                      ${item.price}
                    </span>
                    {/* <button
                      onClick={() => addItem(item)}
                      className="btn-primary inline-flex items-center gap-1 md:gap-2 text-sm md:text-base px-3 md:px-4 py-2"
                    >
                      <Plus className="w-3 h-3 md:w-4 md:h-4" /> Add
                    </button> */}
                  </div>
                </div>
              ))}
          </div>
        </section>
      ))}

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/70">
        <div className="container mx-auto px-4 py-10 md:py-14">
          <div className="grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.5fr)] items-start">
            <div className="space-y-4 md:space-y-5">
              <h3 className="text-xl md:text-2xl font-semibold text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
                Visit KZ&apos;s Cuisine
              </h3>

              <div className="space-y-2 text-sm md:text-base text-white/80">
                <p className="font-medium text-white">PurePrep Commissary Kitchen</p>
                <p>Surrey, BC</p>
              </div>

              <div className="space-y-1 text-sm md:text-base text-white/80">
                <p>
                  <span className="font-medium text-white">Phone:</span> <span>(604) 765-0400</span>
                </p>
                <p>
                  <span className="font-medium text-white">Email:</span> <span>kzdcuisines@gmail.com</span>
                </p>
              </div>

              <div className="space-y-1 text-sm md:text-base text-white/80">
                <p className="font-medium text-white">Hours</p>
                <p>Friday – Sunday · 4:30 PM – 9:30 PM</p>
              </div>

              {/* <div className="pt-3">
                <p className="text-xs uppercase tracking-[0.18em] text-white/60 mb-2">Follow Us</p>
                <div className="flex flex-wrap items-center gap-3">
                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-xs md:text-sm text-white/85 transition hover:border-accent hover:text-accent"
                  >
                    <Facebook className="h-4 w-4" />
                    <span>Facebook</span>
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-xs md:text-sm text-white/85 transition hover:border-accent hover:text-accent"
                  >
                    <Instagram className="h-4 w-4" />
                    <span>Instagram</span>
                  </Link>
                </div>
              </div> */}

              
            </div>

            <div className="h-full w-full">
              <div className="aspect-video overflow-hidden rounded-2xl border border-white/15 bg-black/40 shadow-lg backdrop-blur-sm">
                <iframe
                  title="KZ's Cuisine at PurePrep Commissary Kitchen"
                  src="https://www.google.com/maps?q=PurePrep+Commissary+Kitchen&output=embed"
                  className="h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-white/10 pt-4 text-center text-xs text-white/60">
            <p>&copy; {new Date().getFullYear()} KZ&apos;s Cuisine. All rights reserved.</p>
          </div>
        </div>
      </footer>


    </main>
  )
}

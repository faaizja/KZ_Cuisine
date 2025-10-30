"use client"

import Link from "next/link"
import { ArrowRight, Flame, Heart, Users } from "lucide-react"

export default function HomePageClient() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative text-foreground">
        <div className="container mx-auto px-4 py-12 md:py-24 lg:py-32 text-center">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-black tracking-tight mb-6 md:mb-8 text-balance drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
              Authentic Pakistani Taste,
              <br />
              <span className="text-accent drop-shadow-[0_2px_15px_rgba(196,30,58,0.6)]">
                Crafted from Family Tradition
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed text-balance drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              Where heritage meets heat. Experience the real taste of Pakistan, brought to Canada with love.
            </p>
            <Link href="/menu">
              <button className="btn-primary inline-flex items-center gap-2 text-sm md:text-base">
                Explore Menu
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="border-t border-white/10">
        <div className="container mx-auto px-4 py-12 md:py-20 lg:py-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-8 md:mb-12 text-center animate-fade-in drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
              The Story Behind <span className="text-accent">KZ's Cuisine</span>
            </h2>

            <div className="space-y-8 text-lg md:text-xl leading-relaxed text-white/85 animate-fade-in-up drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
              <p>
                Our story began in a small kitchen filled with the aroma of sizzling karahi and slow cooked pulao, a
                recipe passed down through generations. For decades, our father has been perfecting the art of authentic
                Pakistani cooking, blending spices not just by measure, but by heart.
              </p>

              <p>
                When we moved to Canada, we realized something was missing, the true taste of home. Not the fast food
                version, not a simplified fusion, but the real karahi, cooked the traditional way, bursting with bold
                flavours that tell a story of Lahore's streets and family gatherings.
              </p>

              <p>
                At KZ's Cuisine, we're not just serving dishes, we're serving memories. From tender boneless chicken to
                slow cooked mutton and lamb, every plate is a reflection of our roots, our pride, and our passion for
                bringing people together through food.
              </p>

              <p className="text-white font-bold text-xl md:text-2xl lg:text-3xl text-center pt-6 md:pt-8 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                This isn't just food. It's heritage served hot.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="border-t border-white/10">
        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 max-w-6xl mx-auto">
            <div className="text-center p-8">
              <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6 drop-shadow-xl">
                <Flame className="w-10 h-10 text-accent" />
              </div>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
                100% Authentic Recipes
              </h3>
              <p className="text-base md:text-lg lg:text-xl text-white/75 drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
                Traditional Pakistani flavors passed down through generations
              </p>
            </div>

            <div className="text-center p-8 ">
              <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6 drop-shadow-xl">
                <Heart className="w-10 h-10 text-accent" />
              </div>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
                Cooked Fresh to Order
              </h3>
              <p className="text-base md:text-lg lg:text-xl text-white/75 drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
                Every dish prepared with care and attention to detail
              </p>
            </div>

            <div className="text-center p-8  sm:col-span-2 md:col-span-1">
              <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6 drop-shadow-xl">
                <Users className="w-10 h-10 text-accent" />
              </div>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
                Family Owned, Community Driven
              </h3>
              <p className="text-base md:text-lg lg:text-xl text-white/75 drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
                Bringing people together through authentic Pakistani cuisine
              </p>
            </div>

            
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-white/10">
        <div className="container mx-auto px-4 py-12 md:py-20 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            Ready to Experience <span className="text-accent">Authentic Pakistani Flavors?</span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-white/85 mb-8 md:mb-10 max-w-2xl mx-auto drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
            Pre-order now and taste the tradition. One karahi at a time.
          </p>
          <Link href="/menu">
            <button className="btn-primary inline-flex items-center gap-2 text-sm md:text-base">
              View Full Menu
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          </Link>
        </div>
      </section>
    </>
  )
}

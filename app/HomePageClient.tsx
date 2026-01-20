"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowRight, Flame, Heart, Users, Facebook, Instagram } from "lucide-react"

export default function HomePageClient() {
  const [showStoryPopup, setShowStoryPopup] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return

    const timer = window.setTimeout(() => {
      setShowStoryPopup(true)
    }, 800)

    return () => window.clearTimeout(timer)
  }, [])

  const handleClosePopup = () => {
    setShowStoryPopup(false)
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative text-foreground">
        <div className="container mx-auto lg:mt-12 px-4 py-12 md:py-24 lg:py-32">
          <div className="max-w-5xl mx-auto text-center space-y-6 md:space-y-8">
          

            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-balance drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] animate-fade-in-up animation-delay-1000">
              Authentic Pakistani Taste
              <br />
              <span className="text-accent drop-shadow-[0_2px_15px_rgba(196,30,58,0.6)]">
                From Our Family Kitchen to Yours
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed text-balance drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              Karahis and rice platters cooked low and slow. Just like back home, now served fresh in
              Canada.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Link href="/menu">
                <button className="btn-primary inline-flex items-center gap-2 text-sm md:text-base transition-transform duration-200 hover:-translate-y-0.5">
                  Explore Menu
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                </button>
              </Link>

              <p className="text-xs sm:text-sm text-white/70">
                Made-to-order for families, gatherings and weekend cravings.
              </p>
            </div>
          </div>
        </div>
      </section>

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
                <p>Thursday – Saturday · 5 PM – 9 PM</p>
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

      {showStoryPopup && (
        <div className="fixed bottom-5 right-5 z-40 w-[92vw] max-w-md sm:max-w-lg animate-fade-in-up">
          <div className="pointer-events-auto overflow-hidden rounded-3xl border border-accent/40 bg-gradient-to-tr from-black/90 via-black/80 to-accent/20 shadow-[0_0_35px_rgba(212,9,36,0.65)] backdrop-blur-xl">
            <div className="flex gap-4 p-5 sm:p-6">
              <div className="mt-1 flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/25 shadow-[0_0_25px_rgba(212,9,36,0.8)]">
                <Flame className="h-6 w-6 text-accent" />
              </div>

              <div className="flex-1 space-y-2">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.18em] text-accent/80">
                      Story & Values
                    </p>
                    <h3 className="text-sm sm:text-base font-semibold text-white">
                      The Heart Behind KZ&apos;s Cuisine
                    </h3>
                  </div>

                  <button
                    type="button"
                    aria-label="Close story about KZ's Cuisine"
                    onClick={handleClosePopup}
                    className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/25 text-xs text-white/70 transition hover:border-white/60 hover:text-white"
                  >
                    ×
                  </button>
                </div>

                <p className="text-xs sm:text-[13px] text-white/85 leading-relaxed">
                  We&apos;re a family-run Pakistani kitchen built around a stove that&apos;s rarely off — karahis bubbling,
                  rice platters steaming and grills smoking the way it's done back home.
                </p>
                <p className="text-[11px] sm:text-xs text-white/70 leading-relaxed">
                  No shortcuts, no fusion trends. Just slow-cooked, spice-layered dishes meant to be shared with the
                  people you care about.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

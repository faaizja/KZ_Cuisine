export const metadata = {
  title: "KZ's CUISINE - About Us",
  description: "Authentic Pakistani cuisine crafted from family tradition",
}

export default function Home() {
  return (
    <main>
      <HomePageClient />
    </main>
  )
}

// Re-exporting the client component to be imported in this file
import HomePageClient from "./HomePageClient"

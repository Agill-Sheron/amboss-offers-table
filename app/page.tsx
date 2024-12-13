import { Button } from "@/components/ui/button"
import { OffersTable } from "./components/offers-table"
import { NavigationMenu } from "./components/navigation-menu"
import { getOffers } from "./services/offers"

export default async function Home() {

  const offers = await getOffers();

  return (
    <main className="min-h-screen bg-black relative overflow-hidden">
      {/* Background Gradient */}
      <div style={{ 
          position: 'absolute', 
          top: -611, 
          left: '50%', 
          transform: 'translateX(-50%)', 
          width: '877px', 
          height: '819px', 
          opacity: 0.14, 
          background: 'linear-gradient(96deg, #7928CA 0%, #FF0080 100%)', 
          boxShadow: '0px 240px 240px ', 
          borderRadius: 9999, 
          filter: 'blur(240px)'
        }} />

      {/* Header */}
      <NavigationMenu />

      {/* Main Content */}
      <div className="container mx-auto px-12 py-8 relative">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-text-white">Explore Offers ({offers.length})</h1>
          <div className="flex gap-4">
            <Button variant="outline" className="bg-transparent text-text-white font-bold hover:bg-zinc-800 hover:text-text-white">Sell Channels</Button>
            <Button className="bg-white text-black font-semibold hover:bg-white/90">Buy Channels</Button>
          </div>
        </div>

        <OffersTable offers={offers} />
      </div>
    </main>
  )
}

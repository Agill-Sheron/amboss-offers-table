import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { OffersTable } from "./components/offers-table"
import { MagnifyingGlassIcon } from "@radix-ui/react-icons"
import Image from "next/image"

export default function Home() {
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
      <header className="border-b border-zinc-800 relative">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-8">
            <Image
              src="/logo.png"
              alt="AMBOSS"
              width={120}
              height={24}
              className="h-6 w-auto"
              priority
            />
            <nav>
              <ul className="flex gap-6 text-zinc-400">
                <li className="hover:text-zinc-200 cursor-pointer">Products</li>
                <li className="hover:text-zinc-200 cursor-pointer">Marketplace</li>
                <li className="hover:text-zinc-200 cursor-pointer">Stats</li>
                <li className="hover:text-zinc-200 cursor-pointer">Pricing</li>
                <li className="hover:text-zinc-200 cursor-pointer">Communities</li>
              </ul>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
              <Input
                type="search"
                placeholder="Search"
                className="bg-zinc-900 border-zinc-800 text-zinc-300 placeholder:text-zinc-500 pl-9"
              />
            </div>
            <Button variant="ghost" className="text-zinc-300 hover:text-zinc-100 hover:bg-zinc-800">Dashboard</Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 relative">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-zinc-100">Explore Offers (29)</h1>
          <div className="flex gap-4">
            <Button variant="outline" className="border-zinc-800 bg-transparent text-zinc-300 font-bold hover:bg-zinc-800 hover:text-zinc-100">Sell Channels</Button>
            <Button className="bg-white text-black font-semibold hover:bg-white/90">Buy Channels</Button>
          </div>
        </div>

        <OffersTable />
      </div>
    </main>
  )
}

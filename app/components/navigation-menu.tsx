import Image from "next/image";
import { Button } from "@/components/ui/button";
import { LayoutGrid, Search } from "lucide-react"
import { InputWithIcon } from "@/app/components/ui/input-with-icon";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const navigation = [
  { name: 'Products', href: '/products' },
  { name: 'Marketplace', href: '/marketplace' },
  { name: 'Stats', href: '/stats' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Communities', href: '/communities' },
]

export function NavigationMenu() {
  return (
    <header className="border-b relative py-2.5 px-8">
        <div className="container mx-auto flex items-center justify-between" style={{ height: '56px' }}>
            <div className="flex items-center gap-8">
                <Image
                    src="/logo.png"
                    alt="AMBOSS"
                    width={136}
                    height={18}
                    priority
                />
                <nav>
                    <ul className="flex gap-6 text-zinc-400">
                        {navigation.map((item) => (
                        <li key={item.name} className="text-text-light text-sm hover:text-text-white cursor-pointer font-medium">{item.name}</li>
                        ))}
                    </ul>
                </nav>
            </div>
            <div className="flex items-center gap-4">
                <SearchBar />
                <Button variant="outline" className="bg-transparent text-text-white font-semibold hover:bg-zinc-800">
                    <LayoutGrid className="mr-2 h-4 w-4" />
                    Dashboard
                </Button>
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="User Avatar" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>
        </div>
    </header>
  )
}

function SearchBar() {
  return (
    <div className="w-full max-w-sm">
      <InputWithIcon
        type="search"
        placeholder="Search"
        icon={Search}
        iconPosition="right"
        className="text-text-white placeholder:text-text-white focus-visible:ring-0 focus-visible:ring-offset-0"
      />
    </div>
  )
}

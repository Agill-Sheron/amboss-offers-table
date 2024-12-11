"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Avatar } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { InfoCircledIcon } from "@radix-ui/react-icons"

interface Offer {
  id: string
  seller: {
    name: string
    avatar: string
    badges: string[]
    channelCount: number
    btcCap: number
  }
  sellerScore: number
  cost: {
    fixedSats: number
  }
  promises: {
    maxFeeRate: number
    minChannelAge: string
  }
  apr: {
    variable: number
    min: number
    max: number
  }
  sizeLimits: {
    min: number
    max: number
  }
  availableLiquidity: {
    amount: number
    total: number
  }
  history: {
    orders: number
    capacity: number
  }
}

const mockData: Offer[] = [
  {
    id: "1",
    seller: {
      name: "G-Spot-21.69",
      avatar: "/avatars/1.png",
      badges: ["Node Runner", "Fastlast"],
      channelCount: 139,
      btcCap: 12.81
    },
    sellerScore: 95,
    cost: {
      fixedSats: 1278
    },
    promises: {
      maxFeeRate: 650,
      minChannelAge: "~90d"
    },
    apr: {
      variable: 9600,
      min: 4.07,
      max: 3.91
    },
    sizeLimits: {
      min: 0.03,
      max: 0.25
    },
    availableLiquidity: {
      amount: 0.301,
      total: 4.158
    },
    history: {
      orders: 61,
      capacity: 3.697
    }
  },
  // Add more mock data here as needed
]

export function OffersTable() {
  return (
    <div className="rounded-lg border">
      <Table>
        <TableHeader>
            <TableRow>
                <TableHead className="text-text-white text-sm font-medium">Cost</TableHead>
                <TableHead className="text-text-white text-sm font-medium">Promises</TableHead>
                <TableHead className="text-text-white text-sm font-medium">APR</TableHead>
                <TableHead className="text-text-white text-sm font-medium">Size Limits</TableHead>
            </TableRow>
            <TableRow >
                <TableHead className="text-text-light text-sm font-medium">Seller</TableHead>
                <TableHead className="text-text-light text-sm font-medium whitespace-nowrap">
                    <div className="flex items-center gap-1">
                        Seller Score
                        <InfoCircledIcon className="h-4 w-4 "/>
                    </div>
                </TableHead>
                <TableHead className="text-text-light text-sm font-medium whitespace-nowrap">Fixed (sats)</TableHead>
                <TableHead className="text-text-light text-sm font-medium whitespace-nowrap">
                        <span>Max Fee Rate (ppm)</span>
                </TableHead>
                <TableHead className="text-text-light text-sm font-medium whitespace-nowrap">
                    <span>Min Channel Age</span>
                </TableHead>
            
                <TableHead className="text-text-light text-sm font-medium whitespace-nowrap">
                    Variable (ppm)
                </TableHead>
                <TableHead className="text-text-light text-sm font-medium">
                    Min
                </TableHead>
                <TableHead className="text-text-light text-sm font-medium">
                    Max
                </TableHead>
                <TableHead className="text-text-light text-sm font-medium">
                    Min
                </TableHead>
                <TableHead className="text-text-light text-sm font-medium">
                    Max
                </TableHead>
            
                <TableHead className="text-text-light text-sm font-medium">Available Liquidity</TableHead>
                <TableHead className="text-text-light text-sm font-medium">History</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
          {mockData.map((offer) => (
            <TableRow key={offer.id} className="hover:bg-hover">
              <TableCell>
                <div className="flex items-center gap-2">
                  <Avatar>
                    <img src={offer.seller.avatar} alt={offer.seller.name} />
                  </Avatar>
                  <div>
                    <div className="text-sm font-medium text-text-white">{offer.seller.name}</div>
                    <div className="flex gap-1">
                      {offer.seller.badges.map((badge) => (
                        <Badge key={badge} variant="secondary" className="bg-zinc-800 text-xs font-medium text-text-muted">
                          {badge}
                        </Badge>
                      ))}
                    </div>
                    <div className="text-xs font-normal text-text-light">
                      {offer.seller.channelCount} ch / {offer.seller.btcCap} BTC cap
                    </div>
                  </div>
                </div>
              </TableCell>
              <TableCell className="text-sm font-normal text-text-muted">{offer.sellerScore}/100</TableCell>
              <TableCell className="text-sm font-normal text-text-muted">{offer.cost.fixedSats}</TableCell>
              <TableCell className="text-sm font-normal text-text-muted">
                {offer.promises.maxFeeRate}
              </TableCell>
              <TableCell className="text-sm font-normal text-text-muted">
                {offer.promises.minChannelAge}
              </TableCell>
              <TableCell className="text-sm font-normal text-text-muted">
                  {offer.apr.variable}
              </TableCell>
              <TableCell className="text-sm font-normal text-text-muted">
                  {offer.apr.min}%
              </TableCell>
              <TableCell className="text-sm font-normal text-text-muted">
                  {offer.apr.max}%
              </TableCell>
              <TableCell className="text-sm font-normal text-text-muted">
                  {offer.sizeLimits.min}
              </TableCell>
              <TableCell className="text-sm font-normal text-text-muted">
                  {offer.sizeLimits.max}
              </TableCell>
              <TableCell>
                <div>
                  <div className="text-sm font-normal text-text-muted">{offer.availableLiquidity.amount} BTC</div>
                  <div className="text-xs font-normal text-text-light">
                    Total: {offer.availableLiquidity.total} BTC
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <div>
                  <div className="text-sm font-normal text-text-muted">{offer.history.orders} orders</div>
                  <div className="text-xs font-normal text-text-light">
                    {offer.history.capacity} BTC capacity
                  </div>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
} 
"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Info } from "lucide-react"
import { SellerBadge } from "@/app/components/seller-badge"
import { truncate } from "@/lib/utils"
import { Offer } from "@/lib/types"

export function OffersTable({ offers }: { offers: Offer[] }) {

  return (
    <div className="rounded-xl border">
      <Table>
        <TableHeader>
            <TableRow className="h-9 px-5 py-2">           
                <TableHead colSpan={2} />
                <TableHead className="text-text-white text-sm font-medium text-left" colSpan={2}>Cost</TableHead>
                <TableHead className="text-text-white text-sm font-medium text-left" colSpan={2}>Promises</TableHead>
                <TableHead className="text-text-white text-sm font-medium text-left" colSpan={2}>APR</TableHead>
                <TableHead className="text-text-white text-sm font-medium text-left" colSpan={2}>Size Limits</TableHead>
                <TableHead className="text-text-white text-sm font-medium" colSpan={2} />
            </TableRow>
            <TableRow className="h-14 px-5 py-2">
                <TableHead className="text-text-light text-sm font-medium">Seller</TableHead>
                <TableHead className="text-text-light text-sm font-medium whitespace-nowrap">
                    <div className="flex items-center gap-1">
                        Seller Score
                        <Info className="h-4 w-4 "/>
                    </div>
                </TableHead>
                <TableHead className="text-text-light text-sm font-medium whitespace-nowrap">Fixed (sats)</TableHead>
                <TableHead className="text-text-light text-sm font-medium whitespace-nowrap">
                    Variable (ppm)
                </TableHead>         
                <TableHead className="text-text-light text-sm font-medium whitespace-nowrap">
                        <span>Max Fee Rate (ppm)</span>
                </TableHead>
                <TableHead className="text-text-light text-sm font-medium whitespace-nowrap">
                    <span>Min Channel Age</span>
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
          {offers.map((offer: Offer) => (
            <TableRow key={offer.id} className="hover:bg-hover">
              <TableCell>
                <div className="flex items-top gap-3">
                  <Avatar className="w-10 h-10 rounded-lg">
                    <AvatarImage src={offer.seller.avatar} alt={offer.seller.name} />
                    <AvatarFallback>{offer.seller.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col gap-1">
                    <div className="text-sm font-medium text-text-white">
                      {truncate(offer.seller.name, 12)}
                    </div>
                    <div className="flex gap-1">
                      {offer.seller.badges.map((badge) => (
                        <SellerBadge 
                          key={badge} 
                          type={badge as "Node Runner" | "Fastest" | "Operator" | "Fast"} 
                        />
                      ))}
                    </div>
                    <div className="text-xs font-normal text-text-light">
                      {offer.seller.channelCount} ch / {offer.seller.btcCap} BTC cap
                    </div>
                  </div>
                </div>
              </TableCell>
              <TableCell className="text-sm font-normal text-text-white">{offer.sellerScore}<span className="text-text-muted">/100</span></TableCell>
              <TableCell className="text-sm font-normal text-text-white">{offer.cost.fixedSats}</TableCell>
              <TableCell className="text-sm font-normal text-text-white">
                  {offer.cost.variableSats}
              </TableCell>
              <TableCell className="text-sm font-normal text-text-white">
                {offer.promises.maxFeeRate}
              </TableCell>
              <TableCell className="text-sm font-normal text-text-white">
                {offer.promises.minChannelAge}
              </TableCell>
          
              <TableCell className="text-sm font-normal text-text-white">
                  {offer.apr.min}%
              </TableCell>
              <TableCell className="text-sm font-normal text-text-white">
                  {offer.apr.max}%
              </TableCell>
              <TableCell className="text-sm font-normal text-text-white">
                  {offer.sizeLimits.min}
              </TableCell>
              <TableCell className="text-sm font-normal text-text-white">
                  {offer.sizeLimits.max}
              </TableCell>
              <TableCell>
                <div>
                  <div className="text-sm font-normal text-text-white">{offer.availableLiquidity.amount} BTC</div>
                  <div className="text-xs font-normal text-text-muted">
                    Total: {offer.availableLiquidity.total} BTC
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <div>
                  <div className="text-sm font-normal text-text-white">{offer.history.orders} orders</div>
                  <div className="text-xs font-normal text-text-muted">
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
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

type BadgeType = "Node Runner" | "Fastest" | "Operator" | "Fast" | "Builder" | "New"

const badgeStyles: Record<BadgeType, { border: string; text: string }> = {
  "Node Runner": { border: "border-[#A3E635]", text: "text-[#A3E635]" },
  "Fastest": { border: "border-[#E879F9]", text: "text-[#E879F9]" },
  "Operator": { border: "border-[#FACC15]", text: "text-[#FACC15]" },
  "Fast": { border: "border-[#60A5FA]", text: "text-[#60A5FA]" },
  "Builder": { border: "border-red-500", text: "text-red-500" },
  "New": { border: "border-orange-500", text: "text-orange-500" },
}

interface SellerBadgeProps {
  type: BadgeType
  className?: string
}

export function SellerBadge({ type, className }: SellerBadgeProps) {
  const styles = badgeStyles[type]
  
  return (
    <Badge 
      variant="outline" 
      className={cn(
        "bg-transparent border-[2px] rounded-lg",
        "px-1.5 py-0.5",
        styles.border, 
        styles.text,
        "text-xs font-semibold whitespace-nowrap",
        className
      )}
    >
      {type}
    </Badge>
  )
} 
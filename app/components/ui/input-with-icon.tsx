import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"
import { InputHTMLAttributes, forwardRef } from "react"

export interface InputWithIconProps extends InputHTMLAttributes<HTMLInputElement> {
  icon: LucideIcon
  iconPosition?: "left" | "right"
}

const InputWithIcon = forwardRef<HTMLInputElement, InputWithIconProps>(
  ({ className, icon: Icon, iconPosition = "right", ...props }, ref) => {
    return (
      <div className="relative py-2">
        <Input
          className={cn(
            iconPosition === "right" ? "pr-4" : "pl-4",
            "bg-transparent rounded-lg",
            className
          )}
          ref={ref}
          {...props}
        />
        <div
          className={cn(
            "pointer-events-none absolute inset-y-0 flex items-center",
            iconPosition === "right" ? "right-0 pr-4" : "left-0 pl-4"
          )}
        >
          <Icon className="h-4 w-4" />
        </div>
      </div>
    )
  }
)
InputWithIcon.displayName = "InputWithIcon"

export { InputWithIcon } 
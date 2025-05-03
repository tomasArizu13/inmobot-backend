import type React from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Check, ChevronRight } from "lucide-react"
import Link from "next/link"
import { Button } from "./ui/button"

interface MembershipTierCardProps {
  tier: {
    name: string
    color: string
    textColor: string
    points: number
    benefits: string[]
    icon: React.ReactNode
  }
  isCurrentTier: boolean
  progress?: number
}

export default function MembershipTierCard({ tier, isCurrentTier, progress = 0 }: MembershipTierCardProps) {
  return (
    <Card
      className={`overflow-hidden border-none shadow-lg transition-all hover:shadow-xl ${
        isCurrentTier ? `ring-2 ring-${tier.color}` : ""
      }`}
    >
      <div className={`h-2 w-full bg-${tier.color}`}></div>
      <CardHeader className="relative pb-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`flex h-12 w-12 items-center justify-center rounded-full bg-${tier.color}`}>
              {tier.icon}
            </div>
            <div>
              <h3 className="text-xl font-bold">{tier.name}</h3>
              <p className="text-sm text-neutral-500">{tier.points > 0 ? `${tier.points}+ points` : "0 points"}</p>
            </div>
          </div>
          {isCurrentTier && <Badge className={`bg-${tier.color} text-${tier.textColor}`}>Current Tier</Badge>}
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <ul className="space-y-2">
          {tier.benefits.map((benefit, i) => (
            <li key={i} className="flex items-start">
              <Check className={`mr-2 mt-1 h-4 w-4 flex-shrink-0 text-${tier.color}`} />
              <span className="text-sm">{benefit}</span>
            </li>
          ))}
        </ul>
        {isCurrentTier && progress > 0 && progress < 100 && (
          <div className="mt-4 pt-4 border-t border-neutral-200">
            <div className="flex justify-between text-sm mb-1">
              <span>Current: {tier.name}</span>
              <span>Next Tier</span>
            </div>
            <div className="h-2 w-full bg-neutral-200 rounded-full overflow-hidden">
              <div className={`h-full bg-${tier.color} rounded-full`} style={{ width: `${progress}%` }}></div>
            </div>
            <p className="text-sm text-neutral-600 mt-1">{progress}% to next tier</p>
          </div>
        )}
      </CardContent>
      <CardFooter className="bg-neutral-50 p-4">
        <Link href="/rewards/details" className="w-full">
          <Button variant="ghost" className={`w-full text-${tier.color} hover:bg-${tier.color}/10`}>
            View Details
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

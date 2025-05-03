import { Card } from "@/components/ui/card"
import { Crown, Star } from "lucide-react"
import Image from "next/image"

interface MembershipCardProps {
  user: {
    name: string
    memberSince: string
    tier: "Bronze" | "Silver" | "Gold" | "Platinum"
    points: number
    membershipNumber: string
  }
}

export default function MembershipCard({ user }: MembershipCardProps) {
  const getTierColor = () => {
    switch (user.tier) {
      case "Bronze":
        return "from-amber-700 to-amber-800"
      case "Silver":
        return "from-amber-400 to-amber-600"
      case "Gold":
        return "from-amber-300 to-amber-500"
      case "Platinum":
        return "from-neutral-700 to-neutral-900"
      default:
        return "from-amber-700 to-amber-800"
    }
  }

  const getTierIcon = () => {
    switch (user.tier) {
      case "Bronze":
      case "Silver":
        return <Star className="h-8 w-8 text-white" />
      case "Gold":
        return <Star className="h-8 w-8 text-amber-200" />
      case "Platinum":
        return <Crown className="h-8 w-8 text-amber-200" />
      default:
        return <Star className="h-8 w-8 text-white" />
    }
  }

  return (
    <Card className={`relative overflow-hidden border-none shadow-xl w-full max-w-md mx-auto`}>
      <div className={`bg-gradient-to-r ${getTierColor()} p-6 text-white`}>
        <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
          <Image src="/images/onebite-logo-white.png" alt="OneBite Logo" width={128} height={128} />
        </div>

        <div className="flex items-center gap-4 mb-6">
          <div className="bg-white/20 rounded-full p-2">{getTierIcon()}</div>
          <div>
            <h3 className="text-xl font-bold">OneBite {user.tier}</h3>
            <p className="text-sm opacity-80">Member since {user.memberSince}</p>
          </div>
        </div>

        <div className="mb-4">
          <p className="text-sm opacity-80">Member</p>
          <p className="text-xl font-bold">{user.name}</p>
        </div>

        <div className="flex justify-between items-end">
          <div>
            <p className="text-sm opacity-80">Points Balance</p>
            <p className="text-xl font-bold">{user.points.toLocaleString()}</p>
          </div>
          <div>
            <p className="text-sm opacity-80">Member #</p>
            <p className="text-sm font-medium">{user.membershipNumber}</p>
          </div>
        </div>
      </div>
    </Card>
  )
}

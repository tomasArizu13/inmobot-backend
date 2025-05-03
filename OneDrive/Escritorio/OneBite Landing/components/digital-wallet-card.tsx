import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { PlusCircle, Smartphone } from "lucide-react"

interface DigitalWalletCardProps {
  tier: "Bronze" | "Silver" | "Gold" | "Platinum"
}

export default function DigitalWalletCard({ tier }: DigitalWalletCardProps) {
  const getTierColor = () => {
    switch (tier) {
      case "Bronze":
        return "bg-amber-700"
      case "Silver":
        return "bg-amber-500"
      case "Gold":
        return "bg-amber-400"
      case "Platinum":
        return "bg-neutral-800"
      default:
        return "bg-amber-700"
    }
  }

  return (
    <Card className="border-none shadow-md overflow-hidden">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-bold">Digital Membership Card</h3>
          <div className={`h-4 w-4 rounded-full ${getTierColor()}`}></div>
        </div>

        <div className="flex items-center justify-center p-6 bg-neutral-100 rounded-lg mb-6">
          <div className="text-center">
            <Smartphone className="h-12 w-12 mx-auto mb-2 text-neutral-400" />
            <p className="text-neutral-600">Add your OneBite membership card to your digital wallet for easy access</p>
          </div>
        </div>

        <div className="space-y-3">
          <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">
            <PlusCircle className="mr-2 h-4 w-4" />
            Add to Apple Wallet
          </Button>
          <Button className="w-full bg-neutral-800 hover:bg-neutral-900 text-white">
            <PlusCircle className="mr-2 h-4 w-4" />
            Add to Google Wallet
          </Button>
        </div>
      </div>
    </Card>
  )
}

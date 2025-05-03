import { CircleDollarSign, Gift, Trophy, TrendingUp } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function RewardsPreview() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">Earn & Redeem Points</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">How It Works</h3>

            <div className="flex items-start space-x-4">
              <div className="bg-amber-100 p-3 rounded-full">
                <CircleDollarSign className="h-6 w-6 text-amber-600" />
              </div>
              <div>
                <h4 className="font-medium text-lg">Spend & Earn</h4>
                <p className="text-neutral-600">Earn 1 point for every $1 spent at partner restaurants</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-amber-100 p-3 rounded-full">
                <TrendingUp className="h-6 w-6 text-amber-600" />
              </div>
              <div>
                <h4 className="font-medium text-lg">Tier Up</h4>
                <p className="text-neutral-600">Unlock higher tiers with more exclusive benefits</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-amber-100 p-3 rounded-full">
                <Gift className="h-6 w-6 text-amber-600" />
              </div>
              <div>
                <h4 className="font-medium text-lg">Redeem Rewards</h4>
                <p className="text-neutral-600">Use your points for special experiences and discounts</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-amber-100 p-3 rounded-full">
                <Trophy className="h-6 w-6 text-amber-600" />
              </div>
              <div>
                <h4 className="font-medium text-lg">Premium Perks</h4>
                <p className="text-neutral-600">Premium members earn points at 1.5x rate</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Your Rewards Preview</h3>

            <Card className="border-none shadow-md mb-6">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Current Tier: Silver</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-2">
                  <div className="flex justify-between text-sm mb-1">
                    <span>Silver</span>
                    <span>Gold</span>
                  </div>
                  <Progress value={65} className="h-2 bg-neutral-200" indicatorClassName="bg-amber-600" />
                </div>
                <p className="text-sm text-neutral-600">650/1000 points to Gold tier</p>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="border-none shadow-md">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Available Points</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-amber-600">1,250</p>
                  <p className="text-sm text-neutral-600">Points ready to redeem</p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Lifetime Points</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-amber-600">4,650</p>
                  <p className="text-sm text-neutral-600">Total points earned</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

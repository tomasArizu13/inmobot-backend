import { CircleDollarSign, Gift, TrendingUp, Star, Award, Crown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import MembershipTierCard from "@/components/membership-tier-card"
import Link from "next/link"

// Mock data for membership tiers
const membershipTiers = [
  {
    name: "Bronze",
    color: "amber-700",
    textColor: "white",
    points: 0,
    benefits: [
      "Basic restaurant recommendations",
      "Standard reservations",
      "1 point per $1 spent",
      "Access to public events",
    ],
    icon: <Star className="h-6 w-6 text-white" />,
  },
  {
    name: "Silver",
    color: "amber-500",
    textColor: "white",
    points: 1000,
    benefits: [
      "Priority reservations",
      "5% discount on experiences",
      "1 point per $1 spent",
      "Birthday special offer",
      "Early access to select events",
    ],
    icon: <Star className="h-6 w-6 text-white" />,
  },
  {
    name: "Gold",
    color: "amber-400",
    textColor: "amber-950",
    points: 5000,
    benefits: [
      "VIP reservations",
      "10% discount on experiences",
      "1.2 points per $1 spent",
      "Birthday special offer",
      "Quarterly special events",
      "Dedicated concierge (chat support)",
    ],
    icon: <Award className="h-6 w-6 text-amber-950" />,
  },
  {
    name: "Platinum",
    color: "neutral-800",
    textColor: "white",
    points: 10000,
    benefits: [
      "Concierge service 24/7",
      "15% discount on experiences",
      "1.5 points per $1 spent",
      "Birthday special offer",
      "Monthly special events",
      "Chef's table priority access",
      "Exclusive restaurant partnerships",
      "Complimentary upgrades",
    ],
    icon: <Crown className="h-6 w-6 text-white" />,
  },
]

// Mock data for rewards
const availableRewards = [
  {
    id: 1,
    title: "Complimentary Dessert",
    points: 500,
    image: "/images/rewards/dessert.jpg",
    description: "Enjoy a free dessert of your choice at any partner restaurant",
    expires: "No expiration",
  },
  {
    id: 2,
    title: "Wine Pairing Experience",
    points: 1200,
    image: "/images/rewards/wine-pairing.jpg",
    description: "Complimentary wine pairing with your meal at select restaurants",
    expires: "Valid for 6 months after redemption",
  },
  {
    id: 3,
    title: "Private Dining Room",
    points: 3000,
    image: "/images/rewards/private-dining.jpg",
    description: "Access to a private dining room for up to 6 people (food purchased separately)",
    expires: "Valid for 3 months after redemption",
  },
  {
    id: 4,
    title: "Cooking Class",
    points: 2500,
    image: "/images/rewards/cooking-class.jpg",
    description: "Participate in a cooking class with a professional chef",
    expires: "Valid for 6 months after redemption",
  },
  {
    id: 5,
    title: "Premium Membership (1 Month)",
    points: 5000,
    image: "/images/rewards/premium-membership.jpg",
    description: "One month of Premium membership benefits",
    expires: "Activates immediately upon redemption",
  },
  {
    id: 6,
    title: "Chef's Table Experience",
    points: 8000,
    image: "/images/rewards/chefs-table.jpg",
    description: "Exclusive chef's table dining experience for two",
    expires: "Valid for 6 months after redemption",
  },
]

export default function RewardsPage() {
  return (
    <main className="min-h-screen bg-neutral-50 pb-16">
      {/* Hero Section */}
      <section className="bg-amber-600 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">OneBite Rewards Program</h1>
          <p className="text-lg md:text-xl max-w-2xl">
            Earn points with every dining experience and redeem them for exclusive rewards and benefits.
          </p>
        </div>
      </section>

      {/* User Status */}
      <section className="bg-white py-8 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-none shadow-md">
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
                <p className="text-sm text-neutral-600">3,250/5,000 points to Gold tier</p>
              </CardContent>
            </Card>

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

          <div className="mt-6 text-center">
            <Link href="/rewards/program">
              <Button className="bg-amber-600 hover:bg-amber-700 text-white">
                Ver Programa de Recompensas Completo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-8">
        <Tabs defaultValue="tiers" className="w-full">
          <TabsList className="bg-white mb-6">
            <TabsTrigger value="tiers">Membership Tiers</TabsTrigger>
            <TabsTrigger value="rewards">Available Rewards</TabsTrigger>
            <TabsTrigger value="history">Points History</TabsTrigger>
          </TabsList>

          <TabsContent value="tiers" className="mt-0">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-6">Your Membership Journey</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {membershipTiers.map((tier, index) => (
                  <MembershipTierCard
                    key={tier.name}
                    tier={tier}
                    isCurrentTier={tier.name === "Silver"}
                    progress={tier.name === "Silver" ? 65 : 0}
                  />
                ))}
              </div>
            </div>

            <div className="mt-10 bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">How to Earn Points</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-amber-100 p-3 rounded-full">
                    <CircleDollarSign className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Dining</h4>
                    <p className="text-neutral-600">Earn 1 point for every $1 spent at partner restaurants</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-amber-100 p-3 rounded-full">
                    <Gift className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Experiences</h4>
                    <p className="text-neutral-600">Earn 2 points for every $1 spent on culinary experiences</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-amber-100 p-3 rounded-full">
                    <TrendingUp className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Referrals</h4>
                    <p className="text-neutral-600">Earn 500 points for each friend who joins OneBite</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="rewards" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {availableRewards.map((reward) => (
                <Card
                  key={reward.id}
                  className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all h-full flex flex-col"
                >
                  <div className="relative h-40 w-full">
                    <Image src={reward.image || "/placeholder.svg"} alt={reward.title} fill className="object-cover" />
                  </div>
                  <CardContent className="p-4 flex-grow">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-lg">{reward.title}</h3>
                      <span className="font-bold text-amber-600">{reward.points} pts</span>
                    </div>
                    <p className="text-neutral-600 text-sm mb-3">{reward.description}</p>
                    <p className="text-xs text-neutral-500">{reward.expires}</p>
                  </CardContent>
                  <CardContent className="p-4 pt-0">
                    <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">Redeem Reward</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="history" className="mt-0">
            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Points Activity</h3>

                <div className="space-y-4">
                  <div className="border-b border-neutral-200 pb-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-medium">La Maison Gourmet</p>
                        <p className="text-sm text-neutral-500">Dinner reservation</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-green-600">+245 points</p>
                        <p className="text-sm text-neutral-500">May 28, 2025</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-b border-neutral-200 pb-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-medium">Wine Tasting Experience</p>
                        <p className="text-sm text-neutral-500">Event reservation</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-green-600">+320 points</p>
                        <p className="text-sm text-neutral-500">May 15, 2025</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-b border-neutral-200 pb-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-medium">Complimentary Dessert</p>
                        <p className="text-sm text-neutral-500">Reward redemption</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-red-600">-500 points</p>
                        <p className="text-sm text-neutral-500">May 10, 2025</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-b border-neutral-200 pb-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-medium">El Cielo</p>
                        <p className="text-sm text-neutral-500">Lunch reservation</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-green-600">+180 points</p>
                        <p className="text-sm text-neutral-500">May 3, 2025</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-b border-neutral-200 pb-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-medium">Sakura Sushi</p>
                        <p className="text-sm text-neutral-500">Dinner reservation</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-green-600">+210 points</p>
                        <p className="text-sm text-neutral-500">April 22, 2025</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <Button variant="outline">View More Activity</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>
    </main>
  )
}

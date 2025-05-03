import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Award, ChevronRight, Star, Trophy } from "lucide-react"
import MembershipTierCard from "@/components/membership-tier-card"
import RewardsChallenges from "@/components/rewards-challenges"
import RewardsHowItWorks from "@/components/rewards-how-it-works"
import RewardsBenefitsComparison from "@/components/rewards-benefits-comparison"

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
    icon: <Trophy className="h-6 w-6 text-white" />,
  },
]

export default function RewardsProgramPage() {
  return (
    <main className="min-h-screen bg-neutral-50 pb-16">
      {/* Hero Section */}
      <section className="bg-amber-600 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">OneBite Rewards Program</h1>
          <p className="text-lg md:text-xl max-w-2xl">
            Discover how our rewards program gives you access to exclusive dining experiences and premium benefits.
          </p>
        </div>
      </section>

      {/* User Status */}
      <section className="bg-white py-8 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-none shadow-md">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Your Current Level: Silver</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-2">
                  <div className="flex justify-between text-sm mb-1">
                    <span>Silver</span>
                    <span>Gold</span>
                  </div>
                  <Progress value={65} className="h-2 bg-neutral-200" indicatorClassName="bg-amber-600" />
                </div>
                <p className="text-sm text-neutral-600">3,250/5,000 points to reach Gold</p>
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
                <CardTitle className="text-lg">Active Challenges</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-amber-600">3</p>
                <p className="text-sm text-neutral-600">Complete challenges to earn more points</p>
                <Button variant="link" className="text-amber-600 p-0 h-auto mt-1">
                  View challenges <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-8">
        <Tabs defaultValue="how-it-works" className="w-full">
          <TabsList className="bg-white mb-6">
            <TabsTrigger value="how-it-works">How It Works</TabsTrigger>
            <TabsTrigger value="tiers">Membership Levels</TabsTrigger>
            <TabsTrigger value="benefits">Benefits</TabsTrigger>
            <TabsTrigger value="challenges">Challenges</TabsTrigger>
          </TabsList>

          <TabsContent value="how-it-works" className="mt-0">
            <RewardsHowItWorks />
          </TabsContent>

          <TabsContent value="tiers" className="mt-0">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-6">Membership Levels</h2>
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
          </TabsContent>

          <TabsContent value="benefits" className="mt-0">
            <RewardsBenefitsComparison />
          </TabsContent>

          <TabsContent value="challenges" className="mt-0">
            <RewardsChallenges />
          </TabsContent>
        </Tabs>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-white mt-8">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-6">Start Earning Points Today</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join OneBite Premium and accelerate your path to exclusive dining experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/join">
              <Button className="bg-amber-600 hover:bg-amber-700 text-white">Join Premium</Button>
            </Link>
            <Link href="/profile">
              <Button variant="outline">View My Profile</Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

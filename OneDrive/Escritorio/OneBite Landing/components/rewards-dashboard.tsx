"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Award, Calendar, ChevronRight, CircleDollarSign, Gift, Star, Trophy } from "lucide-react"
import Link from "next/link"

// Mock data for user rewards
const userRewards = {
  tier: "Silver",
  points: {
    available: 1250,
    lifetime: 4650,
  },
  progress: {
    current: 3250,
    next: 5000,
    percentage: 65,
  },
  challenges: {
    active: 3,
    completed: 5,
  },
  badges: {
    earned: 8,
    total: 15,
  },
  recentActivity: [
    {
      id: 1,
      type: "earned",
      description: "Reservation at La Maison Gourmet",
      points: 245,
      date: "2 days ago",
    },
    {
      id: 2,
      type: "earned",
      description: "Completed the 'Food Critic' challenge",
      points: 300,
      date: "5 days ago",
    },
    {
      id: 3,
      type: "redeemed",
      description: "Redeemed 'Complimentary Dessert'",
      points: -500,
      date: "1 week ago",
    },
  ],
}

export default function RewardsDashboard() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="border-none shadow-md">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center">
              <Trophy className="h-5 w-5 text-amber-600 mr-2" /> Current Level
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between mb-2">
              <p className="text-2xl font-bold text-amber-600">{userRewards.tier}</p>
              <Badge variant="outline" className="bg-amber-50 text-amber-700">
                {userRewards.progress.current} pts
              </Badge>
            </div>
            <div className="mb-2">
              <div className="flex justify-between text-sm mb-1">
                <span>{userRewards.tier}</span>
                <span>Gold</span>
              </div>
              <Progress
                value={userRewards.progress.percentage}
                className="h-2 bg-neutral-200"
                indicatorClassName="bg-amber-600"
              />
            </div>
            <p className="text-sm text-neutral-600">
              {userRewards.progress.current}/{userRewards.progress.next} points to Gold
            </p>
          </CardContent>
        </Card>

        <Card className="border-none shadow-md">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center">
              <CircleDollarSign className="h-5 w-5 text-amber-600 mr-2" /> Available Points
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-amber-600">{userRewards.points.available}</p>
            <p className="text-sm text-neutral-600">Points ready to redeem</p>
            <Link href="/rewards/redeem">
              <Button variant="link" className="text-amber-600 p-0 h-auto mt-1">
                Redeem points <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="border-none shadow-md">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center">
              <Award className="h-5 w-5 text-amber-600 mr-2" /> Challenges
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold text-amber-600">{userRewards.challenges.active}</p>
                <p className="text-sm text-neutral-600">Active challenges</p>
              </div>
              <div className="text-right">
                <p className="text-xl font-bold text-green-600">{userRewards.challenges.completed}</p>
                <p className="text-sm text-neutral-600">Completed</p>
              </div>
            </div>
            <Link href="/rewards/program?tab=challenges">
              <Button variant="link" className="text-amber-600 p-0 h-auto mt-1">
                View challenges <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="border-none shadow-md">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center">
              <Gift className="h-5 w-5 text-amber-600 mr-2" /> Badges
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold text-amber-600">{userRewards.badges.earned}</p>
                <p className="text-sm text-neutral-600">Badges earned</p>
              </div>
              <div className="text-right">
                <p className="text-xl font-bold text-neutral-600">{userRewards.badges.total}</p>
                <p className="text-sm text-neutral-600">Total</p>
              </div>
            </div>
            <Link href="/rewards/program?tab=challenges">
              <Button variant="link" className="text-amber-600 p-0 h-auto mt-1">
                View collection <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <Card className="border-none shadow-md h-full">
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>History of points earned and redeemed</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {userRewards.recentActivity.map((activity) => (
                  <div key={activity.id} className="flex justify-between items-start pb-4 border-b border-neutral-200">
                    <div>
                      <p className="font-medium">{activity.description}</p>
                      <p className="text-sm text-neutral-500">{activity.date}</p>
                    </div>
                    <div className={`font-medium ${activity.type === "earned" ? "text-green-600" : "text-red-600"}`}>
                      {activity.type === "earned" ? "+" : ""}
                      {activity.points} pts
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-center">
                <Button variant="outline" size="sm">
                  View Complete History
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="border-none shadow-md h-full">
            <CardHeader>
              <CardTitle>Upcoming Challenges</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium">Culinary Explorer</h3>
                    <Badge className="bg-amber-600 text-white">500 pts</Badge>
                  </div>
                  <p className="text-sm text-neutral-600 mb-3">Visit 3 different restaurants in 30 days</p>
                  <div className="flex justify-between text-sm">
                    <span>Progress: 2/3</span>
                    <span className="text-amber-700">15 days remaining</span>
                  </div>
                  <Progress value={66} className="h-2 bg-amber-200 mt-1" indicatorClassName="bg-amber-600" />
                </div>

                <div className="bg-white border border-neutral-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium">Food Critic</h3>
                    <Badge className="bg-amber-600 text-white">300 pts</Badge>
                  </div>
                  <p className="text-sm text-neutral-600 mb-3">Write 5 restaurant reviews</p>
                  <div className="flex justify-between text-sm">
                    <span>Progress: 3/5</span>
                    <span className="text-amber-700">20 days remaining</span>
                  </div>
                  <Progress value={60} className="h-2 bg-neutral-200 mt-1" indicatorClassName="bg-amber-600" />
                </div>

                <Link href="/rewards/program?tab=challenges">
                  <Button variant="ghost" className="w-full text-amber-600 hover:bg-amber-50">
                    View All Challenges
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <Star className="h-5 w-5 text-amber-600 mr-2" /> Personalized Recommendations
        </h3>
        <div className="space-y-4">
          <div className="flex items-start space-x-4 pb-4 border-b border-neutral-200">
            <div className="bg-amber-100 p-3 rounded-full">
              <Calendar className="h-5 w-5 text-amber-600" />
            </div>
            <div>
              <h4 className="font-medium">Premium Wine Tasting</h4>
              <p className="text-sm text-neutral-600 mb-1">
                Based on your preferences, we recommend this exclusive experience
              </p>
              <Button variant="outline" size="sm" className="mt-2">
                View Details
              </Button>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="bg-amber-100 p-3 rounded-full">
              <Gift className="h-5 w-5 text-amber-600" />
            </div>
            <div>
              <h4 className="font-medium">Redeem your points</h4>
              <p className="text-sm text-neutral-600 mb-1">You have enough points to redeem for a dinner for two</p>
              <Button variant="outline" size="sm" className="mt-2">
                Redeem Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

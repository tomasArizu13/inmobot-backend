import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Award, Calendar, Check, Star, Utensils } from "lucide-react"

// Mock data for challenges
const activeChallenges = [
  {
    id: 1,
    title: "Culinary Explorer",
    description: "Visit 3 different restaurants in 30 days",
    progress: 2,
    total: 3,
    reward: 500,
    expires: "15 days remaining",
    icon: <Utensils className="h-5 w-5 text-amber-600" />,
  },
  {
    id: 2,
    title: "Food Critic",
    description: "Write 5 restaurant reviews",
    progress: 3,
    total: 5,
    reward: 300,
    expires: "20 days remaining",
    icon: <Star className="h-5 w-5 text-amber-600" />,
  },
  {
    id: 3,
    title: "Gourmet Adventurer",
    description: "Participate in an exclusive experience",
    progress: 0,
    total: 1,
    reward: 250,
    expires: "30 days remaining",
    icon: <Award className="h-5 w-5 text-amber-600" />,
  },
]

// Mock data for badges
const userBadges = [
  {
    id: 1,
    name: "First Reservation",
    description: "Completed your first reservation",
    image: "/images/badges/first-reservation.png",
    earned: true,
  },
  {
    id: 2,
    name: "Novice Critic",
    description: "Wrote your first review",
    image: "/images/badges/first-review.png",
    earned: true,
  },
  {
    id: 3,
    name: "Urban Explorer",
    description: "Visited 5 different restaurants",
    image: "/images/badges/explorer.png",
    earned: true,
  },
  {
    id: 4,
    name: "Social Gourmet",
    description: "Shared 3 experiences on social media",
    image: "/images/badges/social-sharer.png",
    earned: false,
  },
  {
    id: 5,
    name: "Culinary Adventurer",
    description: "Tried 10 different cuisines",
    image: "/images/badges/cuisine-adventurer.png",
    earned: false,
  },
  {
    id: 6,
    name: "Foodie Master",
    description: "Reached Gold level",
    image: "/images/badges/gold-member.png",
    earned: false,
  },
]

export default function RewardsChallenges() {
  return (
    <div className="space-y-10">
      <div>
        <h2 className="text-2xl font-bold mb-6">Active Challenges</h2>
        <p className="text-lg text-neutral-600 mb-8 max-w-3xl">
          Complete these challenges to earn additional points and unlock exclusive badges.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {activeChallenges.map((challenge) => (
            <Card key={challenge.id} className="border-none shadow-md">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div className="bg-amber-100 p-3 rounded-full">{challenge.icon}</div>
                  <Badge variant="outline" className="bg-amber-50 text-amber-700">
                    {challenge.reward} pts
                  </Badge>
                </div>
                <CardTitle className="mt-3">{challenge.title}</CardTitle>
                <CardDescription>{challenge.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span>
                      {challenge.progress}/{challenge.total}
                    </span>
                  </div>
                  <Progress
                    value={(challenge.progress / challenge.total) * 100}
                    className="h-2 bg-neutral-200"
                    indicatorClassName="bg-amber-600"
                  />
                  <p className="text-xs text-neutral-500">Expires in: {challenge.expires}</p>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full text-amber-600 hover:bg-amber-50">
                  View Details
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-6 text-center">
          <Button variant="outline">View All Challenges</Button>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6">Your Badges</h2>
        <p className="text-lg text-neutral-600 mb-8 max-w-3xl">
          Collect badges as you explore the culinary world with OneBite.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {userBadges.map((badge) => (
            <div
              key={badge.id}
              className={`bg-white rounded-lg p-4 text-center border ${
                badge.earned ? "border-amber-200" : "border-neutral-200 opacity-60"
              }`}
            >
              <div className="relative w-16 h-16 mx-auto mb-3">
                <div
                  className={`w-full h-full rounded-full flex items-center justify-center ${
                    badge.earned ? "bg-amber-100" : "bg-neutral-100"
                  }`}
                >
                  {badge.earned ? (
                    <Award className="h-8 w-8 text-amber-600" />
                  ) : (
                    <Award className="h-8 w-8 text-neutral-400" />
                  )}
                </div>
                {badge.earned && (
                  <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-1">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                )}
              </div>
              <h3 className="font-medium text-sm mb-1">{badge.name}</h3>
              <p className="text-xs text-neutral-500 line-clamp-2">{badge.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Upcoming Challenges</h3>
          <div className="space-y-4">
            <div className="flex items-start space-x-4 pb-4 border-b border-neutral-200">
              <div className="bg-neutral-100 p-3 rounded-full">
                <Calendar className="h-5 w-5 text-neutral-500" />
              </div>
              <div>
                <h4 className="font-medium">Monthly Challenge: Flavor Tour</h4>
                <p className="text-sm text-neutral-600 mb-1">Try 5 restaurants with different cuisines in one month</p>
                <Badge variant="outline" className="bg-neutral-50">
                  Available in 5 days
                </Badge>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-neutral-100 p-3 rounded-full">
                <Award className="h-5 w-5 text-neutral-500" />
              </div>
              <div>
                <h4 className="font-medium">Special Challenge: Gourmet Week</h4>
                <p className="text-sm text-neutral-600 mb-1">Participate in 3 events during the city's gourmet week</p>
                <Badge variant="outline" className="bg-neutral-50">
                  Coming soon
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6">Achievement Levels</h2>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div>
                <h3 className="text-xl font-semibold">Your Current Level: Enthusiast Foodie</h3>
                <p className="text-neutral-600">Level 3 of 10</p>
              </div>
              <Badge className="bg-amber-600 text-white mt-2 md:mt-0">3,250 XP</Badge>
            </div>

            <div className="mb-6">
              <div className="flex justify-between text-sm mb-1">
                <span>Level 3</span>
                <span>Level 4</span>
              </div>
              <Progress value={65} className="h-2 bg-neutral-200" indicatorClassName="bg-amber-600" />
              <p className="text-sm text-neutral-600 mt-1">650 more XP to reach Level 4</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between pb-4 border-b border-neutral-200">
                <div className="flex items-center">
                  <div className="bg-amber-100 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                    <span className="font-bold text-amber-600">1</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Novice Foodie</h4>
                    <p className="text-sm text-neutral-500">0 - 1,000 XP</p>
                  </div>
                </div>
                <Check className="h-5 w-5 text-green-500" />
              </div>

              <div className="flex items-center justify-between pb-4 border-b border-neutral-200">
                <div className="flex items-center">
                  <div className="bg-amber-100 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                    <span className="font-bold text-amber-600">2</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Curious Foodie</h4>
                    <p className="text-sm text-neutral-500">1,000 - 2,000 XP</p>
                  </div>
                </div>
                <Check className="h-5 w-5 text-green-500" />
              </div>

              <div className="flex items-center justify-between pb-4 border-b border-neutral-200">
                <div className="flex items-center">
                  <div className="bg-amber-100 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                    <span className="font-bold text-amber-600">3</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Enthusiast Foodie</h4>
                    <p className="text-sm text-neutral-500">2,000 - 4,000 XP</p>
                  </div>
                </div>
                <Badge className="bg-amber-600 text-white">Current</Badge>
              </div>

              <div className="flex items-center justify-between pb-4 border-b border-neutral-200">
                <div className="flex items-center">
                  <div className="bg-neutral-100 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                    <span className="font-bold text-neutral-400">4</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Explorer Foodie</h4>
                    <p className="text-sm text-neutral-500">4,000 - 6,000 XP</p>
                  </div>
                </div>
                <span className="text-sm text-neutral-500">Next level</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="bg-neutral-100 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                    <span className="font-bold text-neutral-400">5</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Connoisseur Foodie</h4>
                    <p className="text-sm text-neutral-500">6,000 - 8,000 XP</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="text-amber-600">
                  View all levels
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

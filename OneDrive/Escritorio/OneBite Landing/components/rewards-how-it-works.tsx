import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CircleDollarSign, Gift, Star, Trophy, Utensils, Calendar, Award, Heart } from "lucide-react"

export default function RewardsHowItWorks() {
  return (
    <div className="space-y-10">
      <div>
        <h2 className="text-2xl font-bold mb-6">How OneBite Rewards Works</h2>
        <p className="text-lg text-neutral-600 mb-8 max-w-3xl">
          Our rewards program is designed to reward your passion for gastronomy. Earn points with every interaction,
          level up, and unlock exclusive benefits.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="border-none shadow-md">
            <CardHeader className="pb-2">
              <div className="bg-amber-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <CircleDollarSign className="h-6 w-6 text-amber-600" />
              </div>
              <CardTitle>Earn Points</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-neutral-600">
                Accumulate points with every interaction on OneBite: reservations, restaurant visits, reviews, and more.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-md">
            <CardHeader className="pb-2">
              <div className="bg-amber-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Trophy className="h-6 w-6 text-amber-600" />
              </div>
              <CardTitle>Level Up</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-neutral-600">
                As you accumulate points, you progress through membership levels: Bronze, Silver, Gold, and Platinum.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-md">
            <CardHeader className="pb-2">
              <div className="bg-amber-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Gift className="h-6 w-6 text-amber-600" />
              </div>
              <CardTitle>Enjoy Benefits</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-neutral-600">
                Redeem your points for exclusive experiences, discounts, and priority access to special events.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6">How to Earn Points</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Utensils className="mr-2 h-5 w-5 text-amber-600" /> Reservations & Visits
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="bg-amber-100 text-amber-600 text-xs font-medium rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5">
                  1
                </span>
                <div>
                  <p className="font-medium">Book at partner restaurants</p>
                  <p className="text-sm text-neutral-600">100 points for each completed reservation</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-amber-100 text-amber-600 text-xs font-medium rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5">
                  2
                </span>
                <div>
                  <p className="font-medium">Spend at restaurants</p>
                  <p className="text-sm text-neutral-600">1 point for every $1 spent</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-amber-100 text-amber-600 text-xs font-medium rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5">
                  3
                </span>
                <div>
                  <p className="font-medium">Check-in at the restaurant</p>
                  <p className="text-sm text-neutral-600">50 additional points per check-in</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Calendar className="mr-2 h-5 w-5 text-amber-600" /> Experiences & Events
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="bg-amber-100 text-amber-600 text-xs font-medium rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5">
                  1
                </span>
                <div>
                  <p className="font-medium">Event participation</p>
                  <p className="text-sm text-neutral-600">200 points for each event you attend</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-amber-100 text-amber-600 text-xs font-medium rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5">
                  2
                </span>
                <div>
                  <p className="font-medium">Book exclusive experiences</p>
                  <p className="text-sm text-neutral-600">2 points for every $1 spent on experiences</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-amber-100 text-amber-600 text-xs font-medium rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5">
                  3
                </span>
                <div>
                  <p className="font-medium">Participate in tastings and workshops</p>
                  <p className="text-sm text-neutral-600">150 points for each completed workshop</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Star className="mr-2 h-5 w-5 text-amber-600" /> Reviews & Engagement
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="bg-amber-100 text-amber-600 text-xs font-medium rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5">
                  1
                </span>
                <div>
                  <p className="font-medium">Write reviews</p>
                  <p className="text-sm text-neutral-600">75 points for each verified review</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-amber-100 text-amber-600 text-xs font-medium rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5">
                  2
                </span>
                <div>
                  <p className="font-medium">Share on social media</p>
                  <p className="text-sm text-neutral-600">50 points for sharing your experience</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-amber-100 text-amber-600 text-xs font-medium rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5">
                  3
                </span>
                <div>
                  <p className="font-medium">Upload dish photos</p>
                  <p className="text-sm text-neutral-600">25 points for each approved photo</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Award className="mr-2 h-5 w-5 text-amber-600" /> Challenges & Bonuses
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="bg-amber-100 text-amber-600 text-xs font-medium rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5">
                  1
                </span>
                <div>
                  <p className="font-medium">Complete monthly challenges</p>
                  <p className="text-sm text-neutral-600">Up to 500 points per completed challenge</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-amber-100 text-amber-600 text-xs font-medium rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5">
                  2
                </span>
                <div>
                  <p className="font-medium">Refer friends</p>
                  <p className="text-sm text-neutral-600">300 points for each friend who joins</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-amber-100 text-amber-600 text-xs font-medium rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5">
                  3
                </span>
                <div>
                  <p className="font-medium">Loyalty bonuses</p>
                  <p className="text-sm text-neutral-600">Extra points for consistent app usage</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6">How to Redeem Points</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-none shadow-md">
            <CardHeader className="pb-2">
              <div className="bg-amber-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Utensils className="h-6 w-6 text-amber-600" />
              </div>
              <CardTitle>Dining Experiences</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-neutral-600">
                <li className="flex items-center">
                  <Heart className="h-4 w-4 text-amber-600 mr-2" />
                  <span>Exclusive dinners with renowned chefs</span>
                </li>
                <li className="flex items-center">
                  <Heart className="h-4 w-4 text-amber-600 mr-2" />
                  <span>Private menu tastings</span>
                </li>
                <li className="flex items-center">
                  <Heart className="h-4 w-4 text-amber-600 mr-2" />
                  <span>Access to chef's tables</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-none shadow-md">
            <CardHeader className="pb-2">
              <div className="bg-amber-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Gift className="h-6 w-6 text-amber-600" />
              </div>
              <CardTitle>Benefits & Discounts</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-neutral-600">
                <li className="flex items-center">
                  <Heart className="h-4 w-4 text-amber-600 mr-2" />
                  <span>Discounts at premium restaurants</span>
                </li>
                <li className="flex items-center">
                  <Heart className="h-4 w-4 text-amber-600 mr-2" />
                  <span>Dish or drink upgrades</span>
                </li>
                <li className="flex items-center">
                  <Heart className="h-4 w-4 text-amber-600 mr-2" />
                  <span>Access to special menus</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-none shadow-md">
            <CardHeader className="pb-2">
              <div className="bg-amber-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Trophy className="h-6 w-6 text-amber-600" />
              </div>
              <CardTitle>Memberships & Upgrades</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-neutral-600">
                <li className="flex items-center">
                  <Heart className="h-4 w-4 text-amber-600 mr-2" />
                  <span>Upgrade to higher levels</span>
                </li>
                <li className="flex items-center">
                  <Heart className="h-4 w-4 text-amber-600 mr-2" />
                  <span>Extension of premium benefits</span>
                </li>
                <li className="flex items-center">
                  <Heart className="h-4 w-4 text-amber-600 mr-2" />
                  <span>Access to exclusive events</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

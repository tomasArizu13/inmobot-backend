"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import MembershipCard from "@/components/membership-card"
import { CircleDollarSign, Clock, MapPin, Settings, User, Utensils } from "lucide-react"
import Image from "next/image"

// Importar el componente RewardsDashboard
import RewardsDashboard from "@/components/rewards-dashboard"

// Mock user data
const userData = {
  name: "Alex Johnson",
  email: "alex@example.com",
  memberSince: "May 2023",
  tier: "Silver" as const,
  points: 4650,
  membershipNumber: "ONB12345678",
  upcomingReservations: [
    {
      id: 1,
      restaurant: "La Maison Gourmet",
      date: "June 15, 2025",
      time: "7:30 PM",
      guests: 2,
      image: "/images/restaurants/french-restaurant.jpg",
    },
    {
      id: 2,
      restaurant: "Sakura Sushi",
      date: "June 22, 2025",
      time: "8:00 PM",
      guests: 4,
      image: "/images/restaurants/japanese-restaurant.jpg",
    },
  ],
  upcomingExperiences: [
    {
      id: 1,
      title: "Wine Tasting with Master Sommelier",
      date: "July 5, 2025",
      time: "7:00 PM",
      location: "La Maison Gourmet",
      image: "/images/experiences/wine-tasting.jpg",
    },
  ],
  recentActivity: [
    {
      id: 1,
      type: "reservation",
      title: "Dinner at El Cielo",
      date: "May 28, 2025",
      points: 245,
    },
    {
      id: 2,
      type: "experience",
      title: "Cocktail Mixology Class",
      date: "May 15, 2025",
      points: 320,
    },
    {
      id: 3,
      type: "redemption",
      title: "Complimentary Dessert",
      date: "May 10, 2025",
      points: -500,
    },
  ],
}

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <main className="min-h-screen bg-neutral-50 pb-16">
      {/* Hero Section */}
      <section className="bg-amber-600 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">My Profile</h1>
          <p className="text-lg md:text-xl max-w-2xl">Manage your account and track your OneBite journey</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              <MembershipCard user={userData} />

              <Card className="border-none shadow-md">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start">
                      <User className="mr-2 h-4 w-4" />
                      Edit Profile
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Utensils className="mr-2 h-4 w-4" />
                      Make a Reservation
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <CircleDollarSign className="mr-2 h-4 w-4" />
                      View Points History
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Settings className="mr-2 h-4 w-4" />
                      Account Settings
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="overview" className="w-full">
              {/* Agregar una nueva pestaña para recompensas en el TabsList */}
              <TabsList className="bg-white mb-6">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="reservations">Reservations</TabsTrigger>
                <TabsTrigger value="experiences">Experiences</TabsTrigger>
                <TabsTrigger value="rewards">Rewards</TabsTrigger>
                <TabsTrigger value="activity">Activity</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="mt-0 space-y-6">
                <Card className="border-none shadow-md">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Upcoming Reservations</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {userData.upcomingReservations.length > 0 ? (
                      <div className="space-y-4">
                        {userData.upcomingReservations.map((reservation) => (
                          <div key={reservation.id} className="flex gap-4 border-b border-neutral-200 pb-4">
                            <div className="relative h-16 w-16 flex-shrink-0 rounded-md overflow-hidden">
                              <Image
                                src={reservation.image || "/placeholder.svg"}
                                alt={reservation.restaurant}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="flex-grow">
                              <h3 className="font-medium">{reservation.restaurant}</h3>
                              <div className="flex flex-wrap gap-x-4 text-sm text-neutral-600">
                                <div className="flex items-center">
                                  <Clock className="mr-1 h-4 w-4" />
                                  {reservation.date}, {reservation.time}
                                </div>
                                <div className="flex items-center">
                                  <User className="mr-1 h-4 w-4" />
                                  {reservation.guests} {reservation.guests === 1 ? "guest" : "guests"}
                                </div>
                              </div>
                            </div>
                            <Button variant="outline" size="sm">
                              View
                            </Button>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-neutral-600">No upcoming reservations</p>
                    )}
                    <div className="mt-4">
                      <Button variant="outline" className="w-full">
                        View All Reservations
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-md">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Upcoming Experiences</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {userData.upcomingExperiences.length > 0 ? (
                      <div className="space-y-4">
                        {userData.upcomingExperiences.map((experience) => (
                          <div key={experience.id} className="flex gap-4 border-b border-neutral-200 pb-4">
                            <div className="relative h-16 w-16 flex-shrink-0 rounded-md overflow-hidden">
                              <Image
                                src={experience.image || "/placeholder.svg"}
                                alt={experience.title}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="flex-grow">
                              <h3 className="font-medium">{experience.title}</h3>
                              <div className="flex flex-wrap gap-x-4 text-sm text-neutral-600">
                                <div className="flex items-center">
                                  <Clock className="mr-1 h-4 w-4" />
                                  {experience.date}, {experience.time}
                                </div>
                                <div className="flex items-center">
                                  <MapPin className="mr-1 h-4 w-4" />
                                  {experience.location}
                                </div>
                              </div>
                            </div>
                            <Button variant="outline" size="sm">
                              View
                            </Button>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-neutral-600">No upcoming experiences</p>
                    )}
                    <div className="mt-4">
                      <Button variant="outline" className="w-full">
                        View All Experiences
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-md">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Recent Activity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {userData.recentActivity.length > 0 ? (
                      <div className="space-y-4">
                        {userData.recentActivity.map((activity) => (
                          <div
                            key={activity.id}
                            className="flex justify-between items-center border-b border-neutral-200 pb-4"
                          >
                            <div>
                              <h3 className="font-medium">{activity.title}</h3>
                              <p className="text-sm text-neutral-600">{activity.date}</p>
                            </div>
                            <div className={`font-medium ${activity.points > 0 ? "text-green-600" : "text-red-600"}`}>
                              {activity.points > 0 ? `+${activity.points}` : activity.points} points
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-neutral-600">No recent activity</p>
                    )}
                    <div className="mt-4">
                      <Button variant="outline" className="w-full">
                        View All Activity
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="reservations" className="mt-0">
                <Card className="border-none shadow-md">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">Your Reservations</h3>
                    {/* Reservations content would go here */}
                    <p className="text-neutral-600">Detailed reservation content would be displayed here.</p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="experiences" className="mt-0">
                <Card className="border-none shadow-md">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">Your Experiences</h3>
                    {/* Experiences content would go here */}
                    <p className="text-neutral-600">Detailed experiences content would be displayed here.</p>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Agregar el contenido de la pestaña de recompensas */}
              <TabsContent value="rewards" className="mt-0 space-y-6">
                <RewardsDashboard />
              </TabsContent>

              <TabsContent value="activity" className="mt-0">
                <Card className="border-none shadow-md">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">Activity History</h3>
                    {/* Activity content would go here */}
                    <p className="text-neutral-600">Detailed activity history would be displayed here.</p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </main>
  )
}

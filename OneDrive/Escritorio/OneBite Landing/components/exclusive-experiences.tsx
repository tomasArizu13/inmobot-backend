import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Mock data for exclusive experiences
const exclusiveExperiences = [
  {
    id: 1,
    title: "Wine Tasting with Master Sommelier",
    date: "June 15, 2025",
    time: "7:00 PM",
    location: "La Maison Gourmet",
    spots: 8,
    image: "/images/experiences/wine-tasting.jpg",
    premium: true,
  },
  {
    id: 2,
    title: "Chef's Table Experience",
    date: "June 22, 2025",
    time: "8:00 PM",
    location: "El Cielo",
    spots: 6,
    image: "/images/experiences/chefs-table.jpg",
    premium: true,
  },
  {
    id: 3,
    title: "Sushi Making Masterclass",
    date: "July 5, 2025",
    time: "6:30 PM",
    location: "Sakura Sushi",
    spots: 12,
    image: "/images/experiences/sushi-class.jpg",
    premium: false,
  },
]

export default function ExclusiveExperiences() {
  return (
    <section className="py-16 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold">Exclusive Experiences</h2>
          <Link href="/experiences">
            <Button variant="outline">View All</Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {exclusiveExperiences.map((experience) => (
            <Card key={experience.id} className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all">
              <div className="relative h-48 w-full">
                <Image
                  src={experience.image || "/placeholder.svg"}
                  alt={experience.title}
                  fill
                  className="object-cover"
                />
                {experience.premium && (
                  <div className="absolute top-2 right-2 bg-amber-600 text-white text-xs font-bold px-2 py-1 rounded">
                    PREMIUM ONLY
                  </div>
                )}
              </div>
              <CardContent className="pt-4">
                <h3 className="font-bold text-lg mb-2">{experience.title}</h3>
                <div className="space-y-2 mb-3">
                  <div className="flex items-center text-neutral-600">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="text-sm">{experience.date}</span>
                  </div>
                  <div className="flex items-center text-neutral-600">
                    <Clock className="h-4 w-4 mr-2" />
                    <span className="text-sm">{experience.time}</span>
                  </div>
                  <div className="flex items-center text-neutral-600">
                    <Users className="h-4 w-4 mr-2" />
                    <span className="text-sm">{experience.spots} spots available</span>
                  </div>
                </div>
                <Badge variant="outline" className="bg-amber-50 text-amber-700 hover:bg-amber-100">
                  {experience.location}
                </Badge>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">Reserve Spot</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

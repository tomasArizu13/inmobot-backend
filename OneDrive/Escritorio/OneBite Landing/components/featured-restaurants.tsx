import Link from "next/link"
import Image from "next/image"
import { Star, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

// Mock data for featured restaurants
const featuredRestaurants = [
  {
    id: 1,
    name: "La Maison Gourmet",
    cuisine: "French",
    rating: 4.8,
    location: "Downtown",
    image: "/images/restaurants/french-restaurant.jpg",
    premium: true,
  },
  {
    id: 2,
    name: "Sakura Sushi",
    cuisine: "Japanese",
    rating: 4.7,
    location: "Riverside",
    image: "/images/restaurants/japanese-restaurant.jpg",
    premium: true,
  },
  {
    id: 3,
    name: "Trattoria Milano",
    cuisine: "Italian",
    rating: 4.9,
    location: "Arts District",
    image: "/images/restaurants/italian-restaurant.jpg",
    premium: false,
  },
  {
    id: 4,
    name: "El Cielo",
    cuisine: "Spanish",
    rating: 4.6,
    location: "Harbor View",
    image: "/images/restaurants/spanish-restaurant.jpg",
    premium: true,
  },
]

export default function FeaturedRestaurants() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold">Featured Restaurants</h2>
          <Link href="/restaurants">
            <Button variant="outline">View All</Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredRestaurants.map((restaurant) => (
            <Card key={restaurant.id} className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all">
              <div className="relative h-48 w-full">
                <Image
                  src={restaurant.image || "/placeholder.svg"}
                  alt={restaurant.name}
                  fill
                  className="object-cover"
                />
                {restaurant.premium && (
                  <div className="absolute top-2 right-2 bg-amber-600 text-white text-xs font-bold px-2 py-1 rounded">
                    PREMIUM
                  </div>
                )}
              </div>
              <CardContent className="pt-4">
                <h3 className="font-bold text-lg mb-1">{restaurant.name}</h3>
                <p className="text-neutral-500 mb-2">{restaurant.cuisine}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-amber-500 mr-1 fill-amber-500" />
                    <span>{restaurant.rating}</span>
                  </div>
                  <div className="flex items-center text-neutral-500">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{restaurant.location}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full text-amber-600 hover:text-amber-700 hover:bg-amber-50">
                  View Details
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

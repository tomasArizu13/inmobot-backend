import { Search, Filter, MapPin, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import Link from "next/link"

// Mock data for restaurants
const restaurants = [
  {
    id: 1,
    name: "La Maison Gourmet",
    cuisine: "French",
    rating: 4.8,
    reviews: 124,
    priceRange: "$$$",
    location: "Downtown",
    address: "123 Main St",
    description: "Elegant French cuisine with a modern twist in a sophisticated setting.",
    image: "/placeholder.svg?height=300&width=400",
    premium: true,
    benefits: ["Priority Reservations", "Complimentary Dessert"],
  },
  {
    id: 2,
    name: "Sakura Sushi",
    cuisine: "Japanese",
    rating: 4.7,
    reviews: 98,
    priceRange: "$$",
    location: "Riverside",
    address: "456 River Ave",
    description: "Authentic Japanese sushi and sashimi prepared by master chefs.",
    image: "/placeholder.svg?height=300&width=400",
    premium: true,
    benefits: ["Chef's Special Omakase", "20% Off Sake"],
  },
  {
    id: 3,
    name: "Trattoria Milano",
    cuisine: "Italian",
    rating: 4.9,
    reviews: 156,
    priceRange: "$$$",
    location: "Arts District",
    address: "789 Gallery Blvd",
    description: "Family-owned Italian restaurant serving traditional recipes from Northern Italy.",
    image: "/placeholder.svg?height=300&width=400",
    premium: false,
    benefits: [],
  },
  {
    id: 4,
    name: "El Cielo",
    cuisine: "Spanish",
    rating: 4.6,
    reviews: 87,
    priceRange: "$$$",
    location: "Harbor View",
    address: "321 Harbor Dr",
    description: "Modern Spanish tapas and paella with panoramic views of the harbor.",
    image: "/placeholder.svg?height=300&width=400",
    premium: true,
    benefits: ["Exclusive Tasting Menu", "Complimentary Sangria"],
  },
  {
    id: 5,
    name: "Spice Route",
    cuisine: "Indian",
    rating: 4.5,
    reviews: 112,
    priceRange: "$$",
    location: "Midtown",
    address: "555 Spice St",
    description: "Authentic Indian cuisine featuring regional specialties and house-made spice blends.",
    image: "/placeholder.svg?height=300&width=400",
    premium: false,
    benefits: [],
  },
  {
    id: 6,
    name: "The Capital Grill",
    cuisine: "Steakhouse",
    rating: 4.8,
    reviews: 203,
    priceRange: "$$$$",
    location: "Financial District",
    address: "888 Wall St",
    description: "Premium dry-aged steaks and an extensive wine list in an upscale setting.",
    image: "/placeholder.svg?height=300&width=400",
    premium: true,
    benefits: ["Private Dining Room Access", "Complimentary Wine Tasting"],
  },
]

// Cuisine filters
const cuisines = ["All", "French", "Japanese", "Italian", "Spanish", "Indian", "Steakhouse"]

export default function RestaurantsPage() {
  return (
    <main className="min-h-screen bg-neutral-50 pb-16">
      {/* Hero Section */}
      <section className="bg-amber-600 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Discover Exceptional Restaurants</h1>
          <p className="text-lg md:text-xl max-w-2xl">
            Explore our curated selection of premium dining establishments, from Michelin-starred venues to hidden gems.
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="bg-white py-6 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" />
              <Input placeholder="Search restaurants, cuisines, or locations..." className="pl-10 w-full" />
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filters
            </Button>
            <Button className="bg-amber-600 hover:bg-amber-700 text-white">Search</Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-8">
        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-between items-center mb-6">
            <TabsList className="bg-white">
              {cuisines.map((cuisine) => (
                <TabsTrigger key={cuisine} value={cuisine.toLowerCase() === "all" ? "all" : cuisine.toLowerCase()}>
                  {cuisine}
                </TabsTrigger>
              ))}
            </TabsList>
            <div className="hidden md:block">
              <span className="text-neutral-500">Sort by:</span>
              <select className="ml-2 p-2 border rounded-md bg-white">
                <option>Recommended</option>
                <option>Rating: High to Low</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>
          </div>

          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {restaurants.map((restaurant) => (
                <Link href={`/restaurants/${restaurant.id}`} key={restaurant.id}>
                  <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all h-full">
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
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-bold text-lg">{restaurant.name}</h3>
                        <Badge variant="outline" className="bg-neutral-100">
                          {restaurant.priceRange}
                        </Badge>
                      </div>
                      <p className="text-neutral-500 mb-2">{restaurant.cuisine}</p>
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-amber-500 mr-1 fill-amber-500" />
                          <span>{restaurant.rating}</span>
                          <span className="text-neutral-400 text-sm ml-1">({restaurant.reviews})</span>
                        </div>
                        <div className="flex items-center text-neutral-500">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span className="text-sm">{restaurant.location}</span>
                        </div>
                      </div>
                      <p className="text-neutral-600 text-sm line-clamp-2 mb-3">{restaurant.description}</p>
                      {restaurant.premium && restaurant.benefits.length > 0 && (
                        <div className="mt-2">
                          <p className="text-xs font-medium text-amber-700 mb-1">Premium Benefits:</p>
                          <div className="flex flex-wrap gap-1">
                            {restaurant.benefits.map((benefit, index) => (
                              <Badge key={index} variant="secondary" className="bg-amber-50 text-amber-700 text-xs">
                                {benefit}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </TabsContent>

          {/* Other tabs content would be similar but filtered by cuisine */}
          {cuisines
            .filter((c) => c !== "All")
            .map((cuisine) => (
              <TabsContent key={cuisine} value={cuisine.toLowerCase()} className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {restaurants
                    .filter((r) => r.cuisine === cuisine)
                    .map((restaurant) => (
                      <Link href={`/restaurants/${restaurant.id}`} key={restaurant.id}>
                        <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all h-full">
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
                          <CardContent className="p-4">
                            <div className="flex justify-between items-start mb-2">
                              <h3 className="font-bold text-lg">{restaurant.name}</h3>
                              <Badge variant="outline" className="bg-neutral-100">
                                {restaurant.priceRange}
                              </Badge>
                            </div>
                            <p className="text-neutral-500 mb-2">{restaurant.cuisine}</p>
                            <div className="flex items-center justify-between mb-3">
                              <div className="flex items-center">
                                <Star className="h-4 w-4 text-amber-500 mr-1 fill-amber-500" />
                                <span>{restaurant.rating}</span>
                                <span className="text-neutral-400 text-sm ml-1">({restaurant.reviews})</span>
                              </div>
                              <div className="flex items-center text-neutral-500">
                                <MapPin className="h-4 w-4 mr-1" />
                                <span className="text-sm">{restaurant.location}</span>
                              </div>
                            </div>
                            <p className="text-neutral-600 text-sm line-clamp-2 mb-3">{restaurant.description}</p>
                            {restaurant.premium && restaurant.benefits.length > 0 && (
                              <div className="mt-2">
                                <p className="text-xs font-medium text-amber-700 mb-1">Premium Benefits:</p>
                                <div className="flex flex-wrap gap-1">
                                  {restaurant.benefits.map((benefit, index) => (
                                    <Badge
                                      key={index}
                                      variant="secondary"
                                      className="bg-amber-50 text-amber-700 text-xs"
                                    >
                                      {benefit}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            )}
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                </div>
              </TabsContent>
            ))}
        </Tabs>
      </section>
    </main>
  )
}

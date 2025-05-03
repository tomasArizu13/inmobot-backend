import { Search, Filter, Calendar, Clock, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import Link from "next/link"

// Mock data for experiences
const experiences = [
  {
    id: 1,
    title: "Wine Tasting with Master Sommelier",
    type: "Tasting",
    date: "June 15, 2025",
    time: "7:00 PM",
    duration: "2 hours",
    location: "La Maison Gourmet",
    address: "123 Main St, Downtown",
    price: 120,
    spots: 8,
    description:
      "Join Master Sommelier Jean Pierre for an exclusive tasting of premium French wines paired with gourmet appetizers.",
    image: "/placeholder.svg?height=300&width=400",
    premium: true,
  },
  {
    id: 2,
    title: "Chef's Table Experience",
    type: "Dining",
    date: "June 22, 2025",
    time: "8:00 PM",
    duration: "3 hours",
    location: "El Cielo",
    address: "321 Harbor Dr, Harbor View",
    price: 180,
    spots: 6,
    description:
      "Enjoy a multi-course tasting menu prepared right before your eyes by award-winning Chef Miguel Rodriguez.",
    image: "/placeholder.svg?height=300&width=400",
    premium: true,
  },
  {
    id: 3,
    title: "Sushi Making Masterclass",
    type: "Workshop",
    date: "July 5, 2025",
    time: "6:30 PM",
    duration: "2.5 hours",
    location: "Sakura Sushi",
    address: "456 River Ave, Riverside",
    price: 95,
    spots: 12,
    description:
      "Learn the art of sushi making from Chef Tanaka, including proper rice preparation, fish selection, and rolling techniques.",
    image: "/placeholder.svg?height=300&width=400",
    premium: false,
  },
  {
    id: 4,
    title: "Farm-to-Table Dinner",
    type: "Dining",
    date: "July 12, 2025",
    time: "7:30 PM",
    duration: "3 hours",
    location: "Green Acres Farm",
    address: "789 Country Rd, Countryside",
    price: 150,
    spots: 20,
    description:
      "Experience a seasonal dinner prepared with ingredients harvested the same day, served in a picturesque farm setting.",
    image: "/placeholder.svg?height=300&width=400",
    premium: true,
  },
  {
    id: 5,
    title: "Cocktail Mixology Class",
    type: "Workshop",
    date: "July 18, 2025",
    time: "8:00 PM",
    duration: "2 hours",
    location: "The Speakeasy",
    address: "101 Bourbon St, Downtown",
    price: 85,
    spots: 15,
    description:
      "Master the art of craft cocktails with award-winning mixologist Sarah Johnson. Learn techniques and take home recipes.",
    image: "/placeholder.svg?height=300&width=400",
    premium: false,
  },
  {
    id: 6,
    title: "Chocolate Tasting & Pairing",
    type: "Tasting",
    date: "July 25, 2025",
    time: "7:00 PM",
    duration: "1.5 hours",
    location: "Cacao Artisans",
    address: "222 Sweet Ave, Arts District",
    price: 75,
    spots: 18,
    description:
      "Discover the world of artisanal chocolate with expert chocolatier Marcus Brown. Includes wine and spirit pairings.",
    image: "/placeholder.svg?height=300&width=400",
    premium: true,
  },
]

// Experience type filters
const experienceTypes = ["All", "Dining", "Tasting", "Workshop"]

export default function ExperiencesPage() {
  return (
    <main className="min-h-screen bg-neutral-50 pb-16">
      {/* Hero Section */}
      <section className="bg-amber-600 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Exclusive Culinary Experiences</h1>
          <p className="text-lg md:text-xl max-w-2xl">
            Discover unique dining events, tastings, and workshops curated for true food enthusiasts.
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="bg-white py-6 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" />
              <Input placeholder="Search experiences, restaurants, or locations..." className="pl-10 w-full" />
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Date
            </Button>
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
              {experienceTypes.map((type) => (
                <TabsTrigger key={type} value={type.toLowerCase() === "all" ? "all" : type.toLowerCase()}>
                  {type}
                </TabsTrigger>
              ))}
            </TabsList>
            <div className="hidden md:block">
              <span className="text-neutral-500">Sort by:</span>
              <select className="ml-2 p-2 border rounded-md bg-white">
                <option>Date: Soonest</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Availability</option>
              </select>
            </div>
          </div>

          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {experiences.map((experience) => (
                <Link href={`/experiences/${experience.id}`} key={experience.id}>
                  <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all h-full flex flex-col">
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
                      <Badge className="absolute top-2 left-2 bg-white text-neutral-800">{experience.type}</Badge>
                    </div>
                    <CardContent className="p-4 flex-grow">
                      <h3 className="font-bold text-lg mb-2">{experience.title}</h3>
                      <div className="space-y-2 mb-3">
                        <div className="flex items-center text-neutral-600">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span className="text-sm">{experience.date}</span>
                        </div>
                        <div className="flex items-center text-neutral-600">
                          <Clock className="h-4 w-4 mr-2" />
                          <span className="text-sm">
                            {experience.time} • {experience.duration}
                          </span>
                        </div>
                        <div className="flex items-center text-neutral-600">
                          <MapPin className="h-4 w-4 mr-2" />
                          <span className="text-sm">{experience.location}</span>
                        </div>
                      </div>
                      <p className="text-neutral-600 text-sm line-clamp-2 mb-3">{experience.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-lg">${experience.price}</span>
                        <span className="text-sm text-neutral-500">{experience.spots} spots left</span>
                      </div>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">Reserve Spot</Button>
                    </CardFooter>
                  </Card>
                </Link>
              ))}
            </div>
          </TabsContent>

          {/* Other tabs content would be similar but filtered by type */}
          {experienceTypes
            .filter((t) => t !== "All")
            .map((type) => (
              <TabsContent key={type} value={type.toLowerCase()} className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {experiences
                    .filter((e) => e.type === type)
                    .map((experience) => (
                      <Link href={`/experiences/${experience.id}`} key={experience.id}>
                        <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all h-full flex flex-col">
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
                            <Badge className="absolute top-2 left-2 bg-white text-neutral-800">{experience.type}</Badge>
                          </div>
                          <CardContent className="p-4 flex-grow">
                            <h3 className="font-bold text-lg mb-2">{experience.title}</h3>
                            <div className="space-y-2 mb-3">
                              <div className="flex items-center text-neutral-600">
                                <Calendar className="h-4 w-4 mr-2" />
                                <span className="text-sm">{experience.date}</span>
                              </div>
                              <div className="flex items-center text-neutral-600">
                                <Clock className="h-4 w-4 mr-2" />
                                <span className="text-sm">
                                  {experience.time} • {experience.duration}
                                </span>
                              </div>
                              <div className="flex items-center text-neutral-600">
                                <MapPin className="h-4 w-4 mr-2" />
                                <span className="text-sm">{experience.location}</span>
                              </div>
                            </div>
                            <p className="text-neutral-600 text-sm line-clamp-2 mb-3">{experience.description}</p>
                            <div className="flex justify-between items-center">
                              <span className="font-bold text-lg">${experience.price}</span>
                              <span className="text-sm text-neutral-500">{experience.spots} spots left</span>
                            </div>
                          </CardContent>
                          <CardFooter className="p-4 pt-0">
                            <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">Reserve Spot</Button>
                          </CardFooter>
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

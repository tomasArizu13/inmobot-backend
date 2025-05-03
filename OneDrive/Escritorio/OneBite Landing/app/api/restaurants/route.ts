import { NextResponse } from "next/server"
import type { Restaurant } from "@/lib/types"

// Mock data for restaurants
const restaurants: Restaurant[] = [
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

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const cuisine = searchParams.get("cuisine")
  const location = searchParams.get("location")
  const premium = searchParams.get("premium")

  let filteredRestaurants = [...restaurants]

  if (cuisine) {
    filteredRestaurants = filteredRestaurants.filter(
      (restaurant) => restaurant.cuisine.toLowerCase() === cuisine.toLowerCase(),
    )
  }

  if (location) {
    filteredRestaurants = filteredRestaurants.filter((restaurant) =>
      restaurant.location.toLowerCase().includes(location.toLowerCase()),
    )
  }

  if (premium === "true") {
    filteredRestaurants = filteredRestaurants.filter((restaurant) => restaurant.premium)
  }

  return NextResponse.json(filteredRestaurants)
}

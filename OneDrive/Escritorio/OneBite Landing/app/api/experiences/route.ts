import { NextResponse } from "next/server"
import type { Experience } from "@/lib/types"

// Mock data for experiences
const experiences: Experience[] = [
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

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const type = searchParams.get("type")
  const date = searchParams.get("date")
  const premium = searchParams.get("premium")

  let filteredExperiences = [...experiences]

  if (type) {
    filteredExperiences = filteredExperiences.filter(
      (experience) => experience.type.toLowerCase() === type.toLowerCase(),
    )
  }

  if (date) {
    // Simple date filtering - in a real app, you'd use proper date comparison
    filteredExperiences = filteredExperiences.filter((experience) => experience.date.includes(date))
  }

  if (premium === "true") {
    filteredExperiences = filteredExperiences.filter((experience) => experience.premium)
  }

  return NextResponse.json(filteredExperiences)
}

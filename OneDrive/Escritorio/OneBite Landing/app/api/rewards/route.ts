import { NextResponse } from "next/server"
import type { Reward } from "@/lib/types"

// Mock data for rewards
const rewards: Reward[] = [
  {
    id: 1,
    title: "Complimentary Dessert",
    points: 500,
    image: "/placeholder.svg?height=200&width=300",
    description: "Enjoy a free dessert of your choice at any partner restaurant",
    expires: "No expiration",
  },
  {
    id: 2,
    title: "Wine Pairing Experience",
    points: 1200,
    image: "/placeholder.svg?height=200&width=300",
    description: "Complimentary wine pairing with your meal at select restaurants",
    expires: "Valid for 6 months after redemption",
  },
  {
    id: 3,
    title: "Private Dining Room",
    points: 3000,
    image: "/placeholder.svg?height=200&width=300",
    description: "Access to a private dining room for up to 6 people (food purchased separately)",
    expires: "Valid for 3 months after redemption",
  },
  {
    id: 4,
    title: "Cooking Class",
    points: 2500,
    image: "/placeholder.svg?height=200&width=300",
    description: "Participate in a cooking class with a professional chef",
    expires: "Valid for 6 months after redemption",
  },
  {
    id: 5,
    title: "Premium Membership (1 Month)",
    points: 5000,
    image: "/placeholder.svg?height=200&width=300",
    description: "One month of Premium membership benefits",
    expires: "Activates immediately upon redemption",
  },
  {
    id: 6,
    title: "Chef's Table Experience",
    points: 8000,
    image: "/placeholder.svg?height=200&width=300",
    description: "Exclusive chef's table dining experience for two",
    expires: "Valid for 6 months after redemption",
  },
]

export async function GET() {
  return NextResponse.json(rewards)
}

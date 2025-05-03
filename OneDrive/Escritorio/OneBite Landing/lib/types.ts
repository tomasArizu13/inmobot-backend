// User types
export interface User {
  id: string
  name: string
  email: string
  isPremium: boolean
  tier: "Bronze" | "Silver" | "Gold" | "Platinum"
  points: {
    available: number
    lifetime: number
  }
  preferences: {
    cuisines: string[]
    dietaryRestrictions: string[]
    priceRange: string
  }
}

// Restaurant types
export interface Restaurant {
  id: number
  name: string
  cuisine: string
  rating: number
  reviews: number
  priceRange: string
  location: string
  address: string
  description: string
  image: string
  premium: boolean
  benefits: string[]
}

// Experience types
export interface Experience {
  id: number
  title: string
  type: "Dining" | "Tasting" | "Workshop"
  date: string
  time: string
  duration: string
  location: string
  address: string
  price: number
  spots: number
  description: string
  image: string
  premium: boolean
}

// Reward types
export interface Reward {
  id: number
  title: string
  points: number
  image: string
  description: string
  expires: string
}

// Tier types
export interface Tier {
  name: "Bronze" | "Silver" | "Gold" | "Platinum"
  points: number
  benefits: string[]
}

// Points activity types
export interface PointsActivity {
  id: number
  title: string
  description: string
  points: number
  date: string
  type: "earned" | "redeemed"
}

// Reservation types
export interface Reservation {
  id: number
  restaurantId: number
  restaurantName: string
  date: string
  time: string
  partySize: number
  status: "confirmed" | "pending" | "cancelled"
  specialRequests?: string
}

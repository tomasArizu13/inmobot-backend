"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <header className="bg-white border-b border-neutral-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="font-bold text-xl">
            OneBite
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/restaurants" className="text-neutral-700 hover:text-amber-600 transition-colors">
              Restaurantes
            </Link>
            <Link href="/experiences" className="text-neutral-700 hover:text-amber-600 transition-colors">
              Experiencias
            </Link>
            <Link href="/rewards" className="text-neutral-700 hover:text-amber-600 transition-colors">
              Recompensas
            </Link>
            <Link href="/about" className="text-neutral-700 hover:text-amber-600 transition-colors">
              Nosotros
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-neutral-700 hover:text-amber-600 transition-colors"
            >
              <Search className="h-5 w-5" />
            </button>
            <Link href="/join">
              <Button className="bg-amber-600 hover:bg-amber-700 text-white font-medium">Join Premium</Button>
            </Link>
            <Link href="/restaurants">
              <Button variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-50">
                Explore Free
              </Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center space-x-2">
            <Link href="/join">
              <Button size="sm" className="bg-amber-600 hover:bg-amber-700 text-white">
                Join Premium
              </Button>
            </Link>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between py-4 border-b">
                    <span className="font-bold text-xl">OneBite</span>
                    <SheetTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <X className="h-5 w-5" />
                        <span className="sr-only">Close menu</span>
                      </Button>
                    </SheetTrigger>
                  </div>
                  <nav className="flex flex-col space-y-4 py-6">
                    <Link href="/restaurants" className="text-lg font-medium">
                      Restaurantes
                    </Link>
                    <Link href="/experiences" className="text-lg font-medium">
                      Experiencias
                    </Link>
                    <Link href="/rewards" className="text-lg font-medium">
                      Recompensas
                    </Link>
                    <Link href="/about" className="text-lg font-medium">
                      Nosotros
                    </Link>
                  </nav>
                  <div className="mt-auto space-y-4 py-6 border-t">
                    <Link href="/join" className="block">
                      <Button className="w-full bg-amber-600 hover:bg-amber-700">Join Premium</Button>
                    </Link>
                    <Link href="/restaurants" className="block">
                      <Button variant="outline" className="w-full border-amber-600 text-amber-600 hover:bg-amber-50">
                        Explore Free
                      </Button>
                    </Link>
                    <Link href="/login" className="block">
                      <Button variant="ghost" className="w-full">
                        Iniciar Sesión
                      </Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="py-3 border-t border-neutral-200">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" />
              <Input placeholder="Buscar restaurantes, cocinas o experiencias..." className="pl-10 w-full" autoFocus />
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 transform -translate-y-1/2"
                onClick={() => setIsSearchOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

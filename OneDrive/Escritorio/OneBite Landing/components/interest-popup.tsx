"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function InterestPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    // Verificar si el popup ya fue cerrado anteriormente
    const popupDismissed = localStorage.getItem("interestPopupDismissed")

    if (!popupDismissed) {
      // Mostrar el popup después de 5 segundos
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 5000)

      return () => clearTimeout(timer)
    }
  }, [])

  const handleDismiss = () => {
    setIsVisible(false)
    setIsDismissed(true)
    // Guardar en localStorage para no mostrar de nuevo en esta sesión
    localStorage.setItem("interestPopupDismissed", "true")
  }

  if (!isVisible || isDismissed) return null

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-sm bg-white rounded-lg shadow-lg border border-neutral-200 p-4 animate-fade-in">
      <button onClick={handleDismiss} className="absolute top-2 right-2 text-neutral-500 hover:text-neutral-700">
        <X className="h-4 w-4" />
      </button>
      <div className="mb-3">
        <h3 className="font-bold text-lg mb-1">¿Te interesa OneBite Premium?</h3>
        <p className="text-neutral-600 text-sm">
          Únete a nuestra lista de espera y sé de los primeros en acceder a experiencias gastronómicas exclusivas.
        </p>
      </div>
      <div className="flex justify-end">
        <Link href="/join">
          <Button className="bg-amber-600 hover:bg-amber-700 text-white">Registrarme</Button>
        </Link>
      </div>
    </div>
  )
}

"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { submitInterestForm } from "@/app/actions/interest-form"
import { CheckCircle2, Loader2 } from "lucide-react"

export default function InterestForm() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      await submitInterestForm({ email, name })
      setIsSubmitted(true)
    } catch (err) {
      setError("Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.")
    } finally {
      setIsLoading(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-6">
        <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-bold mb-2">¡Gracias por tu interés!</h3>
        <p className="text-neutral-600 mb-4">
          Hemos recibido tu solicitud. Te enviaremos una invitación exclusiva pronto.
        </p>
        <Button
          variant="outline"
          onClick={() => {
            setIsSubmitted(false)
            setEmail("")
            setName("")
          }}
        >
          Registrar otro email
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Nombre completo</Label>
        <Input
          id="name"
          type="text"
          placeholder="Tu nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="tu@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="flex items-start space-x-2 pt-2">
        <Checkbox id="terms" required />
        <Label htmlFor="terms" className="text-sm font-normal">
          Me gustaría recibir novedades, ofertas exclusivas y actualizaciones de OneBite
        </Label>
      </div>
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <Button type="submit" className="w-full bg-amber-600 hover:bg-amber-700 text-white" disabled={isLoading}>
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Enviando...
          </>
        ) : (
          "Unirme a la lista de espera"
        )}
      </Button>
    </form>
  )
}

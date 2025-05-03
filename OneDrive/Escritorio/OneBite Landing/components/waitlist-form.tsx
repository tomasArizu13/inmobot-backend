"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { submitWaitlistForm } from "@/app/actions/waitlist"
import { useFormState } from "react-dom"
import { CheckCircle2, Loader2 } from "lucide-react"

const initialState = {
  success: false,
  message: "",
}

export default function WaitlistForm() {
  const formRef = useRef<HTMLDivElement>(null)
  const [state, formAction] = useFormState(submitWaitlistForm, initialState)
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("appear")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = formRef.current?.querySelectorAll(".fade-in")
    elements?.forEach((el) => observer.observe(el))

    return () => {
      elements?.forEach((el) => observer.unobserve(el))
    }
  }, [])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setIsSubmitting(true)
    // The formAction will handle the submission
  }

  useEffect(() => {
    if (state.success) {
      setIsSubmitting(false)
    }
  }, [state])

  return (
    <section ref={formRef} id="waitlist" className="section-padding bg-neutral-50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <h2 className="heading-lg text-center fade-in mb-4">Únete a nuestra lista de espera exclusiva</h2>
          <p className="subtitle text-center mx-auto fade-in mb-12 animate-delay-200">
            Sé de los primeros en acceder a OneBite y vive experiencias gastronómicas únicas
          </p>

          {state.success ? (
            <div className="bg-white p-8 rounded-lg shadow-md text-center fade-in">
              <CheckCircle2 className="h-16 w-16 text-amber-800 mx-auto mb-4" />
              <h3 className="text-2xl font-serif mb-4">¡Gracias por unirte!</h3>
              <p className="text-neutral-700 mb-6">
                Tu solicitud ha sido recibida. Te contactaremos pronto con más información sobre OneBite.
              </p>
            </div>
          ) : (
            <form
              action={formAction}
              onSubmit={handleSubmit}
              className="bg-white p-8 rounded-lg shadow-md fade-in animate-delay-300"
            >
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                  Nombre completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-800 focus:border-transparent"
                  placeholder="Tu nombre"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-800 focus:border-transparent"
                  placeholder="tu@email.com"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="reason" className="block text-sm font-medium text-neutral-700 mb-1">
                  ¿Por qué te gustaría formar parte de OneBite?
                </label>
                <textarea
                  id="reason"
                  name="reason"
                  rows={4}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-800 focus:border-transparent"
                  placeholder="Cuéntanos un poco sobre ti y tu interés en experiencias gastronómicas exclusivas..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin mr-2 h-5 w-5" />
                    Enviando...
                  </>
                ) : (
                  "Unirme a la lista de espera"
                )}
              </button>

              <p className="text-xs text-neutral-500 mt-4 text-center">
                Al unirte, aceptas recibir comunicaciones de OneBite. Puedes darte de baja en cualquier momento.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

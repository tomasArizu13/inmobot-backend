"use client"

import { useEffect, useRef } from "react"
import { UserPlus, Search, CalendarCheck, TrendingUp } from "lucide-react"

export default function HowItWorks() {
  const howItWorksRef = useRef<HTMLDivElement>(null)

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

    const elements = howItWorksRef.current?.querySelectorAll(".fade-in")
    elements?.forEach((el) => observer.observe(el))

    return () => {
      elements?.forEach((el) => observer.unobserve(el))
    }
  }, [])

  const steps = [
    {
      icon: <UserPlus className="h-8 w-8 text-white" />,
      title: "Suscribite",
      description: "Completa el formulario y únete a nuestra lista de espera para ser de los primeros en acceder.",
    },
    {
      icon: <Search className="h-8 w-8 text-white" />,
      title: "Explorá experiencias",
      description: "Descubre eventos exclusivos, cenas privadas y menús especiales en los mejores restaurantes.",
    },
    {
      icon: <CalendarCheck className="h-8 w-8 text-white" />,
      title: "Reservá",
      description: "Selecciona la experiencia que deseas vivir y reserva tu lugar con prioridad exclusiva.",
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-white" />,
      title: "Sumá puntos",
      description: "Acumula puntos por cada experiencia que vivas, canjeables por beneficios exclusivos.",
    },
  ]

  return (
    <section ref={howItWorksRef} id="how-it-works" className="section-padding bg-neutral-900 text-white">
      <div className="container-custom">
        <h2 className="heading-lg text-center fade-in mb-4">Cómo funciona</h2>
        <p className="subtitle text-center mx-auto fade-in text-white/80 mb-16 animate-delay-200">
          Un proceso simple para vivir experiencias extraordinarias
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className={`fade-in animate-delay-${(index + 3) * 100}`}>
              <div className="flex flex-col items-center text-center">
                <div className="bg-amber-800 rounded-full p-4 mb-6">{step.icon}</div>
                <h3 className="text-xl font-serif mb-3">{step.title}</h3>
                <p className="text-white/80">{step.description}</p>

                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
                    <div className="w-8 h-0.5 bg-amber-800"></div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

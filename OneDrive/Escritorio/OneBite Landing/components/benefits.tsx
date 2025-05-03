"use client"

import { useEffect, useRef } from "react"
import { WineIcon as GlassWine, Award, Users, Star } from "lucide-react"

export default function Benefits() {
  const benefitsRef = useRef<HTMLDivElement>(null)

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

    const elements = benefitsRef.current?.querySelectorAll(".fade-in")
    elements?.forEach((el) => observer.observe(el))

    return () => {
      elements?.forEach((el) => observer.unobserve(el))
    }
  }, [])

  const benefits = [
    {
      icon: <GlassWine className="h-8 w-8 text-amber-800" />,
      title: "Acceso a menús exclusivos",
      description:
        "Disfruta de menús especiales creados por chefs reconocidos, disponibles solo para miembros de OneBite.",
    },
    {
      icon: <Users className="h-8 w-8 text-amber-800" />,
      title: "Eventos privados",
      description:
        "Participa en eventos exclusivos con chefs y bodegas premium como Luigi Bosca, donde podrás degustar y aprender.",
    },
    {
      icon: <Star className="h-8 w-8 text-amber-800" />,
      title: "Sistema de puntos",
      description: "Acumula puntos como millas por cada experiencia que vivas, canjeables por beneficios exclusivos.",
    },
    {
      icon: <Award className="h-8 w-8 text-amber-800" />,
      title: "Comunidad selecta",
      description:
        "Forma parte de una comunidad de amantes de la gastronomía que comparten tu pasión por las experiencias culinarias de alto nivel.",
    },
  ]

  return (
    <section ref={benefitsRef} id="benefits" className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="heading-lg text-center fade-in mb-4">Beneficios de ser parte</h2>
        <p className="subtitle text-center mx-auto fade-in mb-16 animate-delay-200">
          Descubre por qué OneBite es la membresía gastronómica más exclusiva
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`bg-neutral-50 p-8 rounded-lg shadow-sm border border-neutral-100 fade-in animate-delay-${(index + 3) * 100}`}
            >
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-serif mb-3">{benefit.title}</h3>
              <p className="text-neutral-700">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

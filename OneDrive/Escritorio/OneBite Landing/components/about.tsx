"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export default function About() {
  const aboutRef = useRef<HTMLDivElement>(null)

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

    const elements = aboutRef.current?.querySelectorAll(".fade-in")
    elements?.forEach((el) => observer.observe(el))

    return () => {
      elements?.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <section ref={aboutRef} id="about" className="section-padding bg-neutral-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="heading-lg fade-in mb-6">
              ¿Qué es <span className="gold-gradient">OneBite</span>?
            </h2>
            <p className="fade-in text-lg leading-relaxed mb-6 animate-delay-200">
              OneBite es un club gastronómico donde cada salida es una experiencia curada. Cenas privadas, menús
              secretos, eventos multisensoriales. Solo para quienes buscan lo mejor.
            </p>
            <p className="fade-in text-lg leading-relaxed animate-delay-300">
              Nos asociamos con los mejores restaurantes y chefs para ofrecerte experiencias exclusivas que no
              encontrarás en ningún otro lugar.
            </p>
          </div>
          <div className="relative h-[400px] md:h-[500px] fade-in animate-delay-400">
            <Image
              src="/images/portada.png"
              alt="Experiencia OneBite"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
            <div className="absolute -bottom-6 -left-6 bg-amber-800 text-white p-4 rounded shadow-lg">
              <p className="font-serif text-xl">Experiencias exclusivas</p>
              <p className="text-sm text-white/80">Solo por invitación</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

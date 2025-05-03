"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)

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

    const elements = heroRef.current?.querySelectorAll(".fade-in")
    elements?.forEach((el) => observer.observe(el))

    return () => {
      elements?.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with overlay */}
      {/* <div className="absolute inset-0 z-0">
        <Image
          src="/images/portada2.png"
          alt="Experiencia gastronómica exclusiva"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div> */}
      <picture>
  <source
    media="(max-width: 768px)"
    srcSet="/images/portada-mobile.png"
  />
  <img
    src="/images/portada-desktop.png"
    alt="Experiencia gastronómica exclusiva"
    className="object-cover w-full h-full absolute inset-0 z-0"
  />
</picture>

      {/* Content */}
      <div className="container-custom relative z-10 text-white pt-20">
        <div className="max-w-3xl">
          <h1 className="heading-xl fade-in mb-6">
            Comer ya no es <span className="gold-gradient">suficiente</span>. <br />
            Vivilo.
          </h1>
          <p className="subtitle fade-in text-white/90 mb-8 animate-delay-200">
            OneBite es tu acceso exclusivo a experiencias gastronómicas únicas.
          </p>
          <div className="fade-in animate-delay-300">
            <Link href="#waitlist" className="btn-primary inline-block">
              Accede a experiencias exclusivas
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 fade-in animate-delay-500">
        <div className="flex flex-col items-center">
          <span className="text-white text-sm mb-2">Descubre más</span>
          <div className="w-0.5 h-8 bg-amber-500 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

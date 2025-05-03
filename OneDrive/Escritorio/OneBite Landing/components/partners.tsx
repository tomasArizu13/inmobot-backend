"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export default function Partners() {
  const partnersRef = useRef<HTMLDivElement>(null)

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

    const elements = partnersRef.current?.querySelectorAll(".fade-in")
    elements?.forEach((el) => observer.observe(el))

    return () => {
      elements?.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <section ref={partnersRef} id="partners" className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="heading-md text-center fade-in mb-12">En colaboración con</h2>

        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
          <div className="fade-in animate-delay-200">
            <Image
              src="/images/luigi-bosca-logo.png"
              alt="Luigi Bosca"
              width={180}
              height={60}
              className="opacity-80 hover:opacity-100 transition-opacity"
            />
          </div>
          <div className="fade-in animate-delay-300">
            <Image
              src="/images/partner-logo-2.png"
              alt="Partner"
              width={180}
              height={60}
              className="opacity-80 hover:opacity-100 transition-opacity"
            />
          </div>
          <div className="fade-in animate-delay-400">
            <Image
              src="/images/partner-logo-3.png"
              alt="Partner"
              width={180}
              height={60}
              className="opacity-80 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronDown } from "lucide-react"

export default function FAQ() {
  const faqRef = useRef<HTMLDivElement>(null)

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

    const elements = faqRef.current?.querySelectorAll(".fade-in")
    elements?.forEach((el) => observer.observe(el))

    return () => {
      elements?.forEach((el) => observer.unobserve(el))
    }
  }, [])

  const faqs = [
    {
      question: "¿Cuándo lanza OneBite?",
      answer:
        "OneBite lanzará oficialmente en el tercer trimestre de 2024. Los miembros de la lista de espera tendrán acceso anticipado y beneficios exclusivos durante el lanzamiento.",
    },
    {
      question: "¿Cuánto cuesta la membresía?",
      answer:
        "Ofrecemos diferentes niveles de membresía, comenzando desde $29.99 mensuales. Cada nivel ofrece beneficios exclusivos y acceso a diferentes tipos de experiencias. Los detalles completos se compartirán con los miembros de la lista de espera antes del lanzamiento.",
    },
    {
      question: "¿Qué tipo de restaurantes incluyen?",
      answer:
        "OneBite colabora con restaurantes premium y de alta cocina, desde establecimientos con estrellas Michelin hasta joyas gastronómicas ocultas seleccionadas por nuestros expertos culinarios. Nuestra red incluye una variedad de cocinas y experiencias para satisfacer los paladares más exigentes.",
    },
    {
      question: "¿Cómo funciona el sistema de puntos?",
      answer:
        "Por cada experiencia que vivas a través de OneBite, acumularás puntos que podrás canjear por beneficios exclusivos como upgrades en tus reservas, acceso a eventos privados, o descuentos en experiencias premium. El valor de los puntos varía según el tipo de experiencia y tu nivel de membresía.",
    },
    {
      question: "¿OneBite está disponible en mi ciudad?",
      answer:
        "Inicialmente, OneBite estará disponible en las principales ciudades de Argentina, con planes de expansión a otras ciudades latinoamericanas en los próximos meses. Los miembros de la lista de espera serán los primeros en saber cuando lleguemos a nuevas ubicaciones.",
    },
  ]

  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section ref={faqRef} id="faq" className="section-padding bg-neutral-50">
      <div className="container-custom">
        <h2 className="heading-lg text-center fade-in mb-4">Preguntas frecuentes</h2>
        <p className="subtitle text-center mx-auto fade-in mb-12 animate-delay-200">
          Todo lo que necesitas saber sobre OneBite
        </p>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className={`mb-4 fade-in animate-delay-${(index + 3) * 100}`}>
              <button
                onClick={() => toggleFaq(index)}
                className="flex justify-between items-center w-full text-left p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all"
              >
                <h3 className="text-lg font-serif">{faq.question}</h3>
                <ChevronDown
                  className={`h-5 w-5 text-amber-800 transition-transform ${openIndex === index ? "transform rotate-180" : ""}`}
                />
              </button>
              {openIndex === index && (
                <div className="p-6 bg-white border-t border-neutral-100">
                  <p className="text-neutral-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

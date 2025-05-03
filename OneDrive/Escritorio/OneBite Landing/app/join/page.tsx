import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import InterestForm from "@/components/interest-form"
import Image from "next/image"

export default function JoinPage() {
  return (
    <main className="min-h-screen bg-neutral-50">
      <section className="relative w-full h-[300px] bg-black text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{ backgroundImage: "url('/images/premium-dining.jpg')" }}
        />
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Únete a OneBite Premium</h1>
          <p className="text-lg md:text-xl max-w-2xl">
            Acceso exclusivo a experiencias gastronómicas premium y recomendaciones seleccionadas para verdaderos
            entusiastas de la comida.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Beneficios Premium</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-amber-100 p-3 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-amber-600"
                  >
                    <path d="M12 17.8 5.8 21 7 14.1 2 9.3l7-1L12 2l3 6.3 7 1-5 4.8 1.2 6.9-6.2-3.2Z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Acceso Prioritario</h3>
                  <p className="text-neutral-600">
                    Reservas prioritarias en los mejores restaurantes, incluso en horarios de alta demanda.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-amber-100 p-3 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-amber-600"
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Experiencias Exclusivas</h3>
                  <p className="text-neutral-600">
                    Acceso a eventos privados, cenas con chefs reconocidos y experiencias gastronómicas únicas.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-amber-100 p-3 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-amber-600"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="m16 8-8 8" />
                    <path d="m8 8 8 8" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Descuentos Especiales</h3>
                  <p className="text-neutral-600">
                    Descuentos exclusivos en restaurantes seleccionados y experiencias premium.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-amber-100 p-3 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-amber-600"
                  >
                    <path d="M6 19V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2Z" />
                    <path d="M12 11h4" />
                    <path d="M12 7h4" />
                    <path d="M12 15h4" />
                    <path d="M8 11h.01" />
                    <path d="M8 7h.01" />
                    <path d="M8 15h.01" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Recomendaciones Personalizadas</h3>
                  <p className="text-neutral-600">
                    Recomendaciones a medida según tus preferencias gastronómicas y experiencias previas.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <Card className="border-none shadow-lg">
              <CardHeader className="bg-amber-600 text-white">
                <CardTitle className="text-2xl">¿Querés ser parte del club gastronómico más exclusivo?</CardTitle>
                <CardDescription className="text-white/90">
                  Dejanos tu mail y te enviaremos una invitación anticipada.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <InterestForm />
              </CardContent>
              <CardFooter className="flex flex-col text-sm text-neutral-500 border-t pt-6">
                <p>
                  Al registrarte, aceptas recibir comunicaciones de marketing de OneBite. Puedes darte de baja en
                  cualquier momento.
                </p>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Lo que dicen nuestros miembros</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-md text-left">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-neutral-200 overflow-hidden mr-4">
                    <Image
                      src="/images/testimonials/user1.jpg"
                      alt="Usuario"
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold">Martina López</h3>
                    <p className="text-sm text-neutral-500">Miembro Platinum</p>
                  </div>
                </div>
                <p className="text-neutral-600">
                  "OneBite ha transformado completamente mi experiencia gastronómica. Las recomendaciones son siempre
                  acertadas y he descubierto lugares increíbles que nunca hubiera encontrado por mi cuenta."
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md text-left">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-neutral-200 overflow-hidden mr-4">
                    <Image
                      src="/images/testimonials/user2.jpg"
                      alt="Usuario"
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold">Carlos Rodríguez</h3>
                    <p className="text-sm text-neutral-500">Miembro Gold</p>
                  </div>
                </div>
                <p className="text-neutral-600">
                  "Las experiencias exclusivas valen cada centavo. He participado en cenas con chefs reconocidos y
                  eventos que no están disponibles para el público general. ¡Totalmente recomendado!"
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md text-left">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-neutral-200 overflow-hidden mr-4">
                    <Image
                      src="/images/testimonials/user3.jpg"
                      alt="Usuario"
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold">Laura Fernández</h3>
                    <p className="text-sm text-neutral-500">Miembro Silver</p>
                  </div>
                </div>
                <p className="text-neutral-600">
                  "El programa de recompensas es genial. He acumulado puntos rápidamente y los he canjeado por
                  experiencias increíbles. Además, el acceso prioritario a reservas me ha salvado en muchas ocasiones."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}

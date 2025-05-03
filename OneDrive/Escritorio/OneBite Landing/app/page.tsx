import Hero from "@/components/hero"
import About from "@/components/about"
import Benefits from "@/components/benefits"
import HowItWorks from "@/components/how-it-works"
import WaitlistForm from "@/components/waitlist-form"
import Partners from "@/components/partners"
import FAQ from "@/components/faq"
import Footer from "@/components/footer"

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <About />
      <Benefits />
      <HowItWorks />
      <WaitlistForm />
      <Partners />
      <FAQ />
      <Footer />
    </main>
  )
}

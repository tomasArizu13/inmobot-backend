import Link from "next/link"
import { Instagram, Facebook, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-serif mb-4">OneBite</h3>
            <p className="text-neutral-400 mb-4 max-w-md">
              Experiencias gastronómicas exclusivas para los amantes de la buena comida. Cenas privadas, menús secretos
              y eventos multisensoriales.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-amber-500 transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-amber-500 transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-amber-500 transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-serif mb-4">Enlaces</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-neutral-400 hover:text-white transition-colors">
                  Sobre nosotros
                </Link>
              </li>
              <li>
                <Link href="#benefits" className="text-neutral-400 hover:text-white transition-colors">
                  Beneficios
                </Link>
              </li>
              <li>
                <Link href="#how-it-works" className="text-neutral-400 hover:text-white transition-colors">
                  Cómo funciona
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-neutral-400 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif mb-4">Contacto</h4>
            <ul className="space-y-2">
              <li className="text-neutral-400">info@onebite.com</li>
              <li className="text-neutral-400">Buenos Aires, Argentina</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-12 pt-8 text-center text-neutral-400">
          <p>&copy; {new Date().getFullYear()} OneBite. Todos los derechos reservados.</p>
          <div className="mt-2 flex justify-center space-x-4 text-sm">
            <Link href="/terminos" className="hover:text-white transition-colors">
              Términos y condiciones
            </Link>
            <Link href="/privacidad" className="hover:text-white transition-colors">
              Política de privacidad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

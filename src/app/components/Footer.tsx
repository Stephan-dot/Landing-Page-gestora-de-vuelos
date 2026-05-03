import { Plane, Facebook, Instagram, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Plane className="w-6 h-6 text-blue-400" />
              <span className="font-semibold text-lg">VuelosSurinam</span>
            </div>
            <p className="text-gray-400 text-sm">
              Tu aliado confiable para viajar a Surinam y Guyana desde Cuba.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("inicio");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="hover:text-white transition-colors"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("beneficios");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="hover:text-white transition-colors"
                >
                  Beneficios
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("destinos");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="hover:text-white transition-colors"
                >
                  Destinos
                </button>
              </li>
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h3 className="font-semibold mb-4">Destinos</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Paramaribo, Surinam</li>
              <li>Georgetown, Guyana</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>damarisbrizuelaflyallways@gmail.com</span>
              </li>
              <li>+5352390740</li>
            </ul>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} VuelosSurinam. Todos los derechos reservados.</p>
          <p className="mt-2">
            Servicio informativo y promocional. No vendemos boletos directamente.
          </p>
        </div>
      </div>
    </footer>
  );
}

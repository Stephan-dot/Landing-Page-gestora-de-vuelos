import { Plane, Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Plane className="w-6 h-6 text-blue-600" />
            <span className="font-semibold text-lg text-gray-900">VuelosSurinam</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("beneficios")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Beneficios
            </button>
            <button
              onClick={() => scrollToSection("destinos")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Destinos
            </button>
            <button
              onClick={() => scrollToSection("informacion")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Información
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Contactar Ahora
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-900" />
            ) : (
              <Menu className="w-6 h-6 text-gray-900" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-gray-700 hover:text-blue-600 transition-colors text-left"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection("beneficios")}
                className="text-gray-700 hover:text-blue-600 transition-colors text-left"
              >
                Beneficios
              </button>
              <button
                onClick={() => scrollToSection("destinos")}
                className="text-gray-700 hover:text-blue-600 transition-colors text-left"
              >
                Destinos
              </button>
              <button
                onClick={() => scrollToSection("informacion")}
                className="text-gray-700 hover:text-blue-600 transition-colors text-left"
              >
                Información
              </button>
              <button
                onClick={() => scrollToSection("contacto")}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Contactar Ahora
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

const agentImage = new URL("../../assets/IMG-20260318-WA0018.jpg", import.meta.url).href;
export function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contacto");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="inicio"
      className="pt-16 bg-gradient-to-br from-blue-50 to-white min-h-screen flex items-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Content */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Vuelos Seguros y Confiables a Paramaribo y Georgetown
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Gestiona tu boleto con mayor seguridad y transparencia. Atención personalizada para que tu viaje sea un éxito desde el primer momento.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold"
              >
                Reservar Vuelo
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById("beneficios");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors text-lg font-semibold"
              >
                Ver Requisitos
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <img
              src={agentImage}
              alt="Avión volando"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

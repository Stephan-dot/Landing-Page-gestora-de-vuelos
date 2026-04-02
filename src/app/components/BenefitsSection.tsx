import { ShieldCheck, Headphones, Globe } from "lucide-react";

export function BenefitsSection() {
  const benefits = [
    {
      icon: ShieldCheck,
      title: "100% Confiable",
      description: "Experiencia de más de 5 años en la gestión de vuelos. Servicio de calidad que satisface tus necesidades.",
    },
    {
      icon: Headphones,
      title: "Atención Personalizada",
      description: "Te acompañamos en cada paso del viaje con asesoría dedicada de inicio a fin. Resolvemos todas tus dudas.",
    },
    {
      icon: Globe,
      title: "Equipaje Garantizado",
      description: "Asesoría con requisitos y normativas del equipaje. Nos aseguramos de que lleves todo lo que necesitas contigo.",
    },
  ];

  return (
    <section id="beneficios" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ¿Por qué viajar con nosotros?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Te ofrecemos el mejor servicio para garantizar tu tranquilidad en cada etapa de tu viaje a Surinam o Guyana.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <Icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

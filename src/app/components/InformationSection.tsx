import { Clock, FileText, Plane, Luggage } from "lucide-react";
const Image = new URL("../../assets/copilot_image_1777662119727.jpeg", import.meta.url).href;
export function InformationSection() {
  const infoItems = [
    {
      icon: Clock,
      title: "Frecuencia y Horarios",
      description: "Contamos con vuelos regulares hacia Paramaribo y Georgetown. Consulta disponibilidad de fechas y horarios directamente con nuestra gestora para encontrar la mejor opción para tu viaje.",
    },
    {
      icon: FileText,
      title: "Política de Equipaje",
      description: "Equipaje de mano: 10 kg máximo. Equipaje documentado: hasta 23 kg según la aerolínea. Te asesoramos detalladamente con los requisitos de cada aerolínea para evitar inconvenientes.",
    },
    {
      icon: Plane,
      title: "Requisitos de Viaje",
      description: "Pasaporte vigente (mínimo 6 meses). Visados según nacionalidad y destino. Certificados de vacunación requeridos. Te proporcionamos información actualizada sobre documentación necesaria.",
    },
    {
      icon: Luggage,
      title: "Servicios Adicionales",
      description: "Asesoría completa pre-viaje. Recomendaciones de alojamiento y transporte. Información sobre clima y mejor época para viajar. Soporte continuo durante tu gestión.",
    },
  ];

  return (
    <section id="informacion" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <img
              src={Image}
              alt="Destino tropical"
              className="rounded-2xl shadow-xl w-full h-auto"
            />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Todo lo que necesitas saber
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Información clave para preparar tu viaje de Cuba a Surinam o Guyana sin ningún tipo de complicación.
            </p>

            <div className="space-y-6">
              {infoItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-blue-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

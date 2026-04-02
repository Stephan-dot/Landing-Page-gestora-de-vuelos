import { MapPin, Building2, Users, Palmtree } from "lucide-react";

export function DestinationsSection() {
  const destinations = [
    {
      name: "Paramaribo, Surinam",
      image: "https://images.unsplash.com/photo-1643295048057-407be1b37114?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQYXJhbWFyaWJvJTIwU3VyaW5hbSUyMGNpdHlzY2FwZXxlbnwxfHx8fDE3NzM4NjU4OTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Capital de Surinam, conocida por su arquitectura colonial holandesa, diversidad cultural y el casco histórico declarado Patrimonio de la Humanidad por la UNESCO.",
      highlights: [
        "Centro histórico UNESCO",
        "Arquitectura colonial",
        "Cultura multicultural",
        "Gastronomía única",
      ],
    },
    {
      name: "Georgetown, Guyana",
      image: "https://images.unsplash.com/photo-1570299437488-d430e1e677c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDYXJpYmJlYW4lMjBjb2xvbmlhbCUyMGJ1aWxkaW5nc3xlbnwxfHx8fDE3NzM4NjU4OTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Capital de Guyana, famosa por sus edificios de madera coloniales, el mercado Stabroek, jardines botánicos y su vibrante mezcla de culturas caribeñas y sudamericanas.",
      highlights: [
        "Mercado Stabroek",
        "Jardines botánicos",
        "Edificios coloniales",
        "Cultura caribeña",
      ],
    },
  ];

  return (
    <section id="destinos" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nuestros Destinos
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubre dos increíbles capitales sudamericanas llenas de historia, cultura y belleza natural.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {destinations.map((destination, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-white px-4 py-2 rounded-full flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-blue-600" />
                  <span className="font-semibold text-gray-900">{destination.name}</span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{destination.description}</p>
                <div className="grid grid-cols-2 gap-3">
                  {destination.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

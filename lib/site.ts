export const site = {
  name: "BRUMA Café",
  tagline: "Café de especialidad, tostado con calma.",
  city: "Madrid",
  url: "https://bruma-cafe.example.com",
  category: "Cafetería de especialidad",
  businessType: "CafeOrCoffeeShop",
  email: "hola@ejemplo.com",
  services: [
  { slug: "cafe-especialidad", nav: "Café de especialidad en Madrid", title: "Café de especialidad en Madrid", description: "Espresso, filtro y cafés de temporada preparados con recetas ajustadas a cada origen.", body: "El café de especialidad pone el foco en la calidad del grano, su trazabilidad y la precisión de la preparación. En BRUMA Café trabajamos con cafés rotativos para ofrecer perfiles diferentes a lo largo del año. Cada lote se prueba y se ajusta para espresso o métodos de filtro, buscando dulzor, claridad y equilibrio en taza." },
  { slug: "desayunos-brunch", nav: "Desayunos y brunch en Madrid", title: "Desayunos y brunch en Madrid", description: "Tostadas, opciones dulces y platos de brunch pensados para acompañar nuestro café de especialidad.", body: "Un buen desayuno funciona mejor cuando cada elemento tiene sentido: pan de calidad, ingredientes sencillos y recetas que no compiten con el café. Nuestra propuesta de brunch combina opciones saladas y dulces con bebidas de espresso, filtro, chocolate y alternativas sin café." },
  { slug: "cafe-para-llevar", nav: "Café para llevar en Madrid", title: "Café para llevar en Madrid", description: "Café preparado al momento para llevar, con espresso, bebidas con leche y opciones de filtro.", body: "El café para llevar no tiene por qué perder precisión. Mantenemos las mismas recetas y controles de extracción que en sala, adaptando tamaño y bebida para conservar equilibrio. Es una opción práctica para quienes quieren un café bien preparado de camino al trabajo o durante una pausa." }
  ]
} as const;

export function absoluteUrl(path = "") {
  return `${site.url}${path.startsWith('/') ? path : `/${path}`}`;
}

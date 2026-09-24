export type MenuItem = {
  slug: string;
  title: string;
  category: string;
  price: string;
  image: string;
  description: string;
  alt: string;
};

export type Service = {
  slug: string;
  nav: string;
  title: string;
  description: string;
  body: string;
  secondary: string;
  bullets: readonly string[];
};

export const site = {
  name: "BRUMA Café",
  tagline: "Café de especialidad, tostado con calma.",
  city: "Madrid",
  url: "https://bruma-cafe.example.com",
  category: "Cafetería de especialidad",
  businessType: "CafeOrCoffeeShop",
  email: "hola@ejemplo.com",
  services: [
    {
      slug: "brunch-en-madrid",
      nav: "Brunch en Madrid",
      title: "Brunch en Madrid",
      description: "Brunch en Madrid con café de especialidad, opciones dulces y saladas y una propuesta pensada para disfrutar sin prisa.",
      body: "BRUMA plantea el brunch como una experiencia alrededor de la mesa y del café. La propuesta combina elaboraciones dulces y saladas con espresso, bebidas con leche y cafés de filtro, de forma que cada elección pueda acompañarse con una bebida preparada al momento.",
      secondary: "Esta página trabaja una intención de búsqueda concreta: personas que buscan brunch en Madrid y quieren conocer qué tipo de experiencia, café y opciones encontrarán. El contenido puede ampliarse con carta real, horarios, ubicación, fotografías y preguntas frecuentes cuando el negocio disponga de esa información.",
      bullets: ["Café de especialidad preparado al momento.", "Opciones dulces y saladas para brunch.", "Bebidas de espresso y filtro.", "Contenido local preparado para ampliar con carta y ubicación reales."]
    },
    {
      slug: "desayunos-en-madrid",
      nav: "Desayunos en Madrid",
      title: "Desayunos en Madrid",
      description: "Desayunos en Madrid con café de especialidad, tostadas y propuestas dulces y saladas para empezar el día.",
      body: "La propuesta de desayunos de BRUMA está pensada para quienes buscan una cafetería en Madrid donde el café tenga el mismo protagonismo que la comida. Se combinan bebidas de espresso y filtro con opciones de desayuno que pueden adaptarse a una carta real de temporada.",
      secondary: "A nivel SEO, la página responde a una búsqueda diferente de la de brunch: desayunos en Madrid. Separar ambas intenciones permite crear contenidos más útiles y enlazarlos entre sí sin repetir exactamente el mismo texto o atacar la misma palabra clave desde varias URLs.",
      bullets: ["Desayunos acompañados de café de especialidad.", "Alternativas dulces y saladas.", "Espresso, bebidas con leche y filtro.", "Página preparada para integrar horarios y carta real."]
    },
    {
      slug: "cafe-especialidad",
      nav: "Café de especialidad en Madrid",
      title: "Café de especialidad en Madrid",
      description: "Café de especialidad en Madrid: espresso, filtro y cafés de temporada preparados con recetas ajustadas a cada origen.",
      body: "El café de especialidad pone el foco en la calidad del grano, su trazabilidad y la precisión de la preparación. En BRUMA Café trabajamos con una propuesta demo de cafés rotativos para explicar cómo puede estructurarse una web de cafetería orientada a búsquedas locales.",
      secondary: "La página está planteada para crecer con información real sobre tostadores, orígenes, procesos, variedades, métodos y carta. Esa información específica suele aportar más valor SEO que repetir de forma artificial la misma palabra clave en todos los párrafos.",
      bullets: ["Espresso y bebidas con leche.", "Cafés de temporada.", "Recetas adaptadas a cada origen.", "Contenido preparado para incorporar trazabilidad real."]
    },
    {
      slug: "cafe-para-llevar",
      nav: "Café para llevar en Madrid",
      title: "Café para llevar en Madrid",
      description: "Café para llevar en Madrid preparado al momento, con espresso, bebidas con leche y opciones de filtro.",
      body: "El café para llevar puede mantener la misma atención a la extracción que una bebida servida en sala. Esta página está orientada a una intención práctica y local: encontrar una cafetería en Madrid donde pedir café para llevar.",
      secondary: "Cuando se utilice en un proyecto real conviene incorporar datos verificables como dirección, horarios, formatos disponibles y métodos de pedido. Así la página responde mejor a la búsqueda y evita contenido genérico que no ayuda al usuario.",
      bullets: ["Bebidas preparadas al momento.", "Espresso y opciones con leche.", "Alternativas de filtro cuando formen parte de la carta.", "Estructura local preparada para dirección y horarios reales."]
    },
    {
      slug: "cafe-filtro-en-madrid",
      nav: "Café de filtro en Madrid",
      title: "Café de filtro en Madrid",
      description: "Café de filtro en Madrid con métodos manuales y recetas pensadas para mostrar claridad, aroma y dulzor en taza.",
      body: "El café de filtro permite trabajar perfiles más limpios y aromáticos y comunicar mejor las diferencias entre orígenes. Esta página sirve como ejemplo de una URL específica para una búsqueda de producto o método dentro de una estrategia SEO local de cafetería.",
      secondary: "En una web real, el contenido debería indicar qué métodos se ofrecen —por ejemplo V60, batch brew o Aeropress— únicamente si forman parte de la carta. También puede incorporar fichas de origen, notas de cata y recomendaciones de preparación.",
      bullets: ["Contenido centrado en métodos de filtro.", "Espacio para explicar origen y notas de cata.", "Enlazado con café de especialidad y brunch.", "Preparado para incorporar métodos reales de la cafetería."]
    }
  ] as const satisfies readonly Service[],
  menuItems: [
    {
      slug: "cappuccino-bruma",
      title: "Cappuccino BRUMA",
      category: "Café de especialidad",
      price: "2,90 €",
      image: "/menu/cappuccino.png",
      description: "Espresso doble, leche texturizada y cacao fino. La taza clásica de la casa para desayunos y media mañana.",
      alt: "Cappuccino servido en taza cerámica sobre una mesa de cafetería"
    },
    {
      slug: "tostada-aguacate",
      title: "Tostada de aguacate",
      category: "Brunch en Madrid",
      price: "8,90 €",
      image: "/menu/avocado-toast.png",
      description: "Pan de masa madre, aguacate aliñado, huevo poché y brotes frescos. Una de las propuestas estrella del brunch.",
      alt: "Tostada de aguacate con huevo poché y brotes frescos"
    },
    {
      slug: "croissant-artesano",
      title: "Croissant artesano",
      category: "Desayunos",
      price: "3,20 €",
      image: "/menu/croissant.png",
      description: "Croissant de mantequilla acompañado de mermelada y mantequilla. Perfecto para un desayuno clásico en Madrid.",
      alt: "Croissant de mantequilla con mermelada y mantequilla en una mesa de cafetería"
    },
    {
      slug: "iced-latte",
      title: "Iced Latte",
      category: "Café para llevar",
      price: "3,80 €",
      image: "/menu/iced-latte.png",
      description: "Leche fría, espresso y hielo. Refrescante, visual y fácil de llevar, ideal para búsquedas de café para llevar en Madrid.",
      alt: "Iced latte en vaso alto con hielo en una cafetería"
    },
    {
      slug: "pancakes-bruma",
      title: "Pancakes BRUMA",
      category: "Brunch en Madrid",
      price: "9,50 €",
      image: "/menu/pancakes.png",
      description: "Tortitas esponjosas con frutos rojos y sirope. Una opción visual y muy reconocible para la carta de brunch.",
      alt: "Torre de tortitas con frutos rojos y sirope"
    },
    {
      slug: "tarta-queso",
      title: "Tarta de queso",
      category: "Postres",
      price: "5,50 €",
      image: "/menu/cheesecake.png",
      description: "Porción de tarta de queso cremosa con frutos rojos. Funciona tanto en mesa como en una carta de meriendas.",
      alt: "Tarta de queso con coulis de frutos rojos en cafetería"
    }
  ] as const satisfies readonly MenuItem[]
} as const;

export function absoluteUrl(path = "") {
  return `${site.url}${path.startsWith('/') ? path : `/${path}`}`;
}

export function getService(slug: string) {
  return site.services.find((service) => service.slug === slug);
}


export const menuCategories = [...new Set(site.menuItems.map((item) => item.category))] as readonly string[];

export function getMenuItemsByCategory(category: string) {
  return site.menuItems.filter((item) => item.category === category);
}

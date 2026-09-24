import type { Metadata } from "next";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import MenuGallery from "@/components/MenuGallery";
import { absoluteUrl, site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Carta y precios de ${site.name} en ${site.city}`,
  description: `Consulta la carta con precios de ${site.name}: café de especialidad, brunch, desayunos y postres en ${site.city}.`,
  alternates: { canonical: "/carta" },
  openGraph: {
    title: `Carta y precios de ${site.name} en ${site.city}`,
    description: `Una carta visual con precios de café, brunch, desayunos y postres en ${site.city}.`,
    url: absoluteUrl("/carta"),
    type: "website"
  }
};

export default function CartaPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Menu",
    name: `Carta de ${site.name}`,
    hasMenuSection: site.menuItems.map((item) => ({
      "@type": "MenuSection",
      name: item.category,
      hasMenuItem: {
        "@type": "MenuItem",
        name: item.title,
        description: item.description,
        offers: {
          "@type": "Offer",
          priceCurrency: "EUR",
          price: item.price.replace(" €", "").replace(",", ".")
        }
      }
    }))
  };

  return <>
    <NavBar />
    <main>
      <section className="subhero menu-subhero">
        <div className="shell narrow">
          <p className="eyebrow">CARTA · FOTOS · PRECIOS</p>
          <h1>Una carta visual que ayuda a elegir.</h1>
          <p className="lead">Mostrar platos, bebidas y precios ayuda tanto a la conversión como al SEO local. Esta página funciona como apoyo para búsquedas de brunch, desayunos y café de especialidad en Madrid.</p>
          <div className="hero-actions">
            <Link className="button primary" href="/contacto">Reservar o consultar</Link>
            <Link className="button ghost" href="/servicios/brunch-en-madrid">Ver servicio de brunch</Link>
          </div>
        </div>
      </section>

      <section className="section shell menu-section">
        <Reveal>
          <div className="menu-head">
            <div>
              <p className="eyebrow">MENÚ DESTACADO</p>
              <h2 className="display">Fotos de carta con precios claros.</h2>
            </div>
            <p className="section-intro">Puedes sustituir estas fotografías por imágenes reales del negocio y ajustar los precios cuando lo necesites. Mantener una carta visible hace la web más útil y refuerza búsquedas relacionadas con brunch, desayunos y café en Madrid.</p>
          </div>
        </Reveal>

        <MenuGallery />
      </section>

      <section className="section shell menu-note">
        <Reveal>
          <p className="eyebrow">UTILIDAD SEO</p>
          <h2>La carta también aporta contexto local.</h2>
          <p className="section-intro">Cuando una cafetería muestra fotos propias, productos reconocibles y precios orientativos, la página responde mejor a búsquedas con intención comercial. Además, ayuda a enlazar desde páginas como “Brunch en Madrid” o “Desayunos en Madrid” hacia un contenido realmente útil.</p>
        </Reveal>
      </section>
    </main>
    <Footer />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  </>;
}

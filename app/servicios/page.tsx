import type { Metadata } from "next";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { absoluteUrl, site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Servicios de cafetería en ${site.city}`,
  description: `Descubre los servicios de ${site.name}: brunch, desayunos, café de especialidad, café para llevar y café de filtro en ${site.city}.`,
  alternates: { canonical: "/servicios" },
  openGraph: {
    title: `Servicios de cafetería en ${site.city}`,
    description: `Brunch, desayunos y café de especialidad en ${site.city}, organizados en páginas específicas para cada búsqueda.`,
    url: absoluteUrl("/servicios")
  }
};

export default function ServiciosPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Servicios de ${site.name}`,
    itemListElement: site.services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: service.title,
      url: absoluteUrl(`/servicios/${service.slug}`)
    }))
  };

  return <>
    <NavBar />
    <main>
      <section className="subhero services-hero">
        <div className="shell">
          <p className="eyebrow">SERVICIOS · SEO LOCAL</p>
          <h1>Lo que buscas,<br/><em>en su propia página.</em></h1>
          <p className="lead">Una arquitectura SEO clara para separar intenciones de búsqueda y ayudar a que cada servicio tenga una URL, un contenido y unos metadatos propios.</p>
        </div>
      </section>

      <section className="section shell services-index">
        <Reveal>
          <div className="services-index-head">
            <p className="eyebrow">CAFETERÍA EN MADRID</p>
            <h2 className="display">Servicios pensados para búsquedas reales.</h2>
          </div>
        </Reveal>
        <div className="seo-service-list">
          {site.services.map((service, index) => <Link className="seo-service-row" key={service.slug} href={`/servicios/${service.slug}`}>
            <span className="seo-service-num">0{index + 1}</span>
            <div><h2>{service.title}</h2><p>{service.description}</p></div>
            <b aria-hidden="true">↗</b>
          </Link>)}
        </div>
      </section>

      <section className="section services-seo-note">
        <div className="shell narrow">
          <Reveal>
            <p className="eyebrow">ESTRATEGIA</p>
            <h2>Una URL para cada intención. Sin páginas duplicadas.</h2>
            <p>“Brunch en Madrid” y “Desayunos en Madrid” pueden estar relacionadas, pero no siempre responden exactamente a la misma necesidad. Esta demo separa las páginas, las conecta mediante enlazado interno y deja espacio para añadir carta, horarios, ubicación, preguntas frecuentes y contenido real del negocio.</p>
          </Reveal>
        </div>
      </section>
    </main>
    <Footer />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  </>;
}

import type { Metadata } from "next";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { absoluteUrl, getService, site } from "@/lib/site";

export function buildServiceMetadata(slug: string): Metadata {
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.description,
    alternates: { canonical: `/servicios/${service.slug}` },
    openGraph: {
      title: service.title,
      description: service.description,
      url: absoluteUrl(`/servicios/${service.slug}`),
      type: "website"
    }
  };
}

export default function SeoServicePage({ slug }: { slug: string }) {
  const service = getService(slug);
  if (!service) return null;
  const related = site.services.filter((item) => item.slug !== service.slug).slice(0, 3);
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    areaServed: { "@type": "City", name: site.city },
    url: absoluteUrl(`/servicios/${service.slug}`),
    provider: { "@type": site.businessType, name: site.name, url: site.url }
  };

  return <>
    <NavBar />
    <main>
      <section className="subhero service-subhero">
        <div className="shell narrow">
          <p className="eyebrow">SERVICIOS · {site.city.toUpperCase()}</p>
          <h1>{service.title}</h1>
          <p className="lead">{service.description}</p>
          <div className="hero-actions">
            <Link className="button primary" href="/contacto">Consultar</Link>
            <Link className="button ghost" href="/servicios">Ver todos los servicios</Link>
          </div>
        </div>
      </section>

      <section className="content-section shell narrow service-content">
        <Reveal>
          <p className="eyebrow">UNA PÁGINA · UNA INTENCIÓN DE BÚSQUEDA</p>
          <h2>{service.title}: una página pensada para responder a esa búsqueda</h2>
          <p>{service.body}</p>
          <p>{service.secondary}</p>
        </Reveal>

        <Reveal>
          <div className="seo-points">
            {service.bullets.map((bullet, index) => <div key={bullet}><span>0{index + 1}</span><p>{bullet}</p></div>)}
          </div>
        </Reveal>

        <Reveal>
          <h2>Cómo reforzar el posicionamiento local</h2>
          <p>Para un proyecto real, esta URL debería complementarse con información verificable del negocio: dirección, horario, carta, precios cuando proceda, fotografías propias, reseñas y detalles concretos de la experiencia. También conviene enlazarla desde la Home, la página de servicios y otros contenidos relacionados.</p>
          <p>El objetivo no es repetir “{service.title}” continuamente, sino cubrir la intención de búsqueda con una página clara, específica y útil para quien está buscando ese servicio en {site.city}.</p>
        </Reveal>

        <aside className="related">
          <span>Otros servicios SEO</span>
          {related.map((item) => <Link key={item.slug} href={`/servicios/${item.slug}`}>{item.title} →</Link>)}
        </aside>
      </section>
    </main>
    <Footer />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  </>;
}

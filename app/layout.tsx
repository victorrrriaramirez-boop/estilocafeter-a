import type { Metadata } from "next";
import "./globals.css";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} | ${site.category} en ${site.city}`, template: `%s | ${site.name}` },
  description: "Café de especialidad, desayunos y brunch en un espacio pensado para disfrutar sin prisa. Seleccionamos cafés con trazabilidad y ajustamos cada receta a su origen.",
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "es_ES", siteName: site.name, title: `${site.name} | ${site.category} en ${site.city}`, description: "Café de especialidad, desayunos y brunch en un espacio pensado para disfrutar sin prisa. Seleccionamos cafés con trazabilidad y ajustamos cada receta a su origen.", url: site.url },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>;
}

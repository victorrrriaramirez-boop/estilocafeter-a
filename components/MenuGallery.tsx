import Image from "next/image";
import { site } from "@/lib/site";

type Props = {
  compact?: boolean;
};

export default function MenuGallery({ compact = false }: Props) {
  const items = compact ? site.menuItems.slice(0, 6) : site.menuItems;

  return (
    <div className="menu-grid">
      {items.map((item) => (
        <article className="menu-card" key={item.slug}>
          <div className="menu-card-media">
            <Image
              src={item.image}
              alt={item.alt}
              width={1448}
              height={1086}
              className="menu-image"
            />
            <span className="menu-category">{item.category}</span>
          </div>
          <div className="menu-card-body">
            <div className="menu-card-head">
              <h3>{item.title}</h3>
              <strong>{item.price}</strong>
            </div>
            <p>{item.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

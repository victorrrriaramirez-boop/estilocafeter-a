"use client";
import Link from "next/link";
import { useState } from "react";
import { site } from "@/lib/site";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  return <header className="nav-wrap">
    <nav className="nav shell" aria-label="Principal">
      <Link href="/" className="brand" onClick={()=>setOpen(false)}>{site.name}</Link>
      <button className="menu-btn" aria-expanded={open} aria-controls="main-menu" onClick={()=>setOpen(v=>!v)}>Menú</button>
      <div id="main-menu" className={`nav-links ${open ? "open" : ""}`}>
        <Link href="/servicios" onClick={()=>setOpen(false)}>Servicios</Link>
        <Link href="/carta" onClick={()=>setOpen(false)}>Carta</Link>
        <Link href="/#story" onClick={()=>setOpen(false)}>Proceso</Link>
        <Link href="/#receta" onClick={()=>setOpen(false)}>La receta</Link>
        <Link className="nav-cta" href="/contacto" onClick={()=>setOpen(false)}>Contacto</Link>
      </div>
    </nav>
  </header>
}

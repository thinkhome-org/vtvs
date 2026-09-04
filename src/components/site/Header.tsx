"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { site } from "@/content/site";

export function Header() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  function openMenu() {
    dialogRef.current?.showModal();
  }

  function closeMenu() {
    dialogRef.current?.close();
  }

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link href="/" className="site-logo" aria-label="Daně VTVS — domů">
          <Image
            src={site.logo.src}
            alt={site.logo.alt}
            width={site.logo.width}
            height={site.logo.height}
            priority
          />
        </Link>

        <button className="nav-toggle" type="button" onClick={openMenu}>
          Menu
        </button>

        <Nav onNavigate={closeMenu} />
      </div>

      <dialog ref={dialogRef} className="nav-dialog" aria-label="Menu">
        <button className="nav-dialog-close" type="button" onClick={closeMenu}>
          Zavřít
        </button>
        <Nav onNavigate={closeMenu} />
      </dialog>
    </header>
  );
}

function Nav({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <nav className="site-nav" aria-label="Hlavní navigace">
      <ul>
        {site.nav.map((item) => (
          <li key={item.label}>
            <Link href={item.href} onClick={onNavigate}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="site-lang">
        <span className="lang-active">CZ</span>
        <span className="lang-sep">/</span>
        <a href="#en">EN</a>
      </div>
    </nav>
  );
}

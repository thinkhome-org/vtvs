"use client";

import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useRef, useState } from "react";
import { site } from "@/content/site";

export function Header() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const [overImage, setOverImage] = useState(false);

  function openMenu() {
    dialogRef.current?.showModal();
  }

  function closeMenu() {
    dialogRef.current?.close();
  }

  useLayoutEffect(() => {
    function update() {
      const photo = document.querySelector(".hero-photo");
      const header = headerRef.current;
      if (!photo || !header) {
        setOverImage(false);
        return;
      }

      const headerH = header.getBoundingClientRect().height;
      const rect = photo.getBoundingClientRect();
      setOverImage(rect.top < headerH && rect.bottom > 0);
    }

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <>
      <div className="nav-veil" aria-hidden="true">
        <div className="nav-veil-stack">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>

      <header ref={headerRef} className={overImage ? "site-header is-over-image" : "site-header"}>
        <div className="site-header__inner">
          <Lang />

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
          <Lang />
        </dialog>
      </header>
    </>
  );
}

function Lang() {
  return (
    <div className="site-lang">
      <span className="lang-active">CZ</span>
      <span className="lang-sep">/</span>
      <a href="#en">EN</a>
    </div>
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
    </nav>
  );
}

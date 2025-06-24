"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/posts", label: "Posts" },
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" }
];

export default function Navigation() {
  const pathname = usePathname();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <nav className="nav" aria-label="Main Navigation">
      <div className="nav-links">
        {navLinks.map(link => (
          <Link
            key={link.href}
            href={link.href}
            className={
              "nav-link" + (pathname === link.href || (link.href === "/" && pathname === "") ? " active" : "")
            }
            aria-current={pathname === link.href ? "page" : undefined}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}

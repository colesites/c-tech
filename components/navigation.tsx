"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/#home", label: "Home" },
  { href: "/#products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/#community", label: "Community" },
  { href: "/#contact", label: "Contact" },
] as const;

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const portalTarget =
    typeof window !== "undefined" ? (document.body as HTMLElement) : null;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const desktopLinkClasses = cn(
    "text-sm font-medium transition-colors",
    scrolled
      ? "text-muted-foreground hover:text-foreground"
      : "text-white/70 hover:text-white"
  );

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div
              className={cn(
                "relative w-10 h-10 rounded-lg flex items-center justify-center transition-colors",
                scrolled ? "bg-primary" : "bg-white"
              )}
            >
              <span
                className={cn(
                  "font-bold text-xl transition-colors",
                  scrolled ? "text-primary-foreground" : "text-black"
                )}
              >
                C
              </span>
            </div>
            <span
              className={cn(
                "font-bold text-xl transition-colors",
                scrolled ? "text-foreground" : "text-white"
              )}
            >
              C Technology
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={desktopLinkClasses}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="https://chat.whatsapp.com/F9QPZuDZDmR4xXYMARe7d7"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                scrolled
                  ? "text-primary-foreground bg-primary hover:bg-primary/90"
                  : "text-black bg-white hover:bg-white/90"
              )}
            >
              Join Community
            </Link>
          </div>

          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
            className={cn(
              "md:hidden inline-flex items-center justify-center rounded-lg p-2 transition-colors",
              scrolled
                ? "text-foreground hover:bg-foreground/10"
                : "text-white hover:bg-white/10"
            )}
          >
            {menuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {portalTarget &&
          menuOpen &&
          createPortal(
            <div
              className="md:hidden fixed inset-0 z-1000 flex flex-col bg-black/95 backdrop-blur-2xl"
              role="dialog"
              aria-modal="true"
            >
              <button
                type="button"
                aria-label="Close navigation menu"
                onClick={() => setMenuOpen(false)}
                className="absolute right-6 top-6 inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/15 text-white transition-colors hover:bg-white/10"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="px-6 pt-24 pb-10 flex-1 flex flex-col gap-10 overflow-y-auto">
                <div className="flex flex-col gap-4">
                  <p className="text-xs uppercase tracking-[0.45em] text-white/40">
                    Navigate
                  </p>
                  <div className="flex flex-col gap-3">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                        className="rounded-2xl border border-white/10 px-4 py-4 text-xl font-semibold text-white transition-all duration-200 hover:border-white/40 hover:bg-white/5"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="rounded-3xl border border-white/10 bg-linear-to-br from-white/10 via-white/5 to-transparent p-6">
                  <p className="text-sm text-white/70">
                    Building community-first tools for developers in Africa and
                    beyond. Stay in the loop as we launch new experiences.
                  </p>
                  <Link
                    href="https://chat.whatsapp.com/F9QPZuDZDmR4xXYMARe7d7"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMenuOpen(false)}
                    className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-white px-5 py-4 text-base font-semibold text-black transition-transform duration-200 hover:scale-[1.02]"
                  >
                    Join Community
                  </Link>
                </div>
              </div>

              <div className="px-6 pb-6 text-sm text-white/40">
                © {new Date().getFullYear()} C Technology. All rights reserved.
              </div>
            </div>,
            portalTarget
          )}
      </div>
    </nav>
  );
}

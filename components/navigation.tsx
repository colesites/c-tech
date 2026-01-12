"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
            <div className={cn(
              "relative w-10 h-10 rounded-lg flex items-center justify-center transition-colors",
              scrolled ? "bg-primary" : "bg-white"
            )}>
              <span className={cn(
                "font-bold text-xl transition-colors",
                scrolled ? "text-primary-foreground" : "text-black"
              )}>C</span>
            </div>
            <span className={cn(
              "font-bold text-xl transition-colors",
              scrolled ? "text-foreground" : "text-white"
            )}>C Technology</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="#home"
              className={cn(
                "text-sm font-medium transition-colors",
                scrolled
                  ? "text-muted-foreground hover:text-foreground"
                  : "text-white/70 hover:text-white"
              )}
            >
              Home
            </Link>
            <Link
              href="#products"
              className={cn(
                "text-sm font-medium transition-colors",
                scrolled
                  ? "text-muted-foreground hover:text-foreground"
                  : "text-white/70 hover:text-white"
              )}
            >
              Products
            </Link>
            <Link
              href="/about"
              className={cn(
                "text-sm font-medium transition-colors",
                scrolled
                  ? "text-muted-foreground hover:text-foreground"
                  : "text-white/70 hover:text-white"
              )}
            >
              About
            </Link>
            <Link
              href="#community"
              className={cn(
                "text-sm font-medium transition-colors",
                scrolled
                  ? "text-muted-foreground hover:text-foreground"
                  : "text-white/70 hover:text-white"
              )}
            >
              Community
            </Link>
            <Link
              href="#contact"
              className={cn(
                "text-sm font-medium transition-colors",
                scrolled
                  ? "text-muted-foreground hover:text-foreground"
                  : "text-white/70 hover:text-white"
              )}
            >
              Contact
            </Link>
          </div>

          <div className="flex items-center space-x-4">
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
        </div>
      </div>
    </nav>
  );
}

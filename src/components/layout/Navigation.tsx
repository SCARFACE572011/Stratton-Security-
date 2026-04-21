"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronDown, Shield } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SITE_CONFIG, NAV_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-[#06101e]/97 backdrop-blur-md border-b border-[#1a3050] shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
            : "bg-gradient-to-b from-[rgba(4,12,26,0.85)] to-transparent"
        )}
      >
        {/* Top bar */}
        <div
          className={cn(
            "transition-all duration-300 overflow-hidden",
            isScrolled ? "h-0 opacity-0" : "h-8 opacity-100"
          )}
        >
          <div className="container-wide flex items-center justify-between h-8">
            <p className="text-[0.6875rem] text-[#7a9ab8] tracking-widest uppercase font-[var(--font-sans)]">
              Licensed &amp; Insured Security Professionals
            </p>
            <a
              href={`tel:${SITE_CONFIG.phoneE164}`}
              className="flex items-center gap-1.5 text-[0.6875rem] text-[#c49a2a] tracking-wide font-medium hover:text-[#e0b84a] transition-colors"
            >
              <Phone size={11} />
              {SITE_CONFIG.phone}
            </a>
          </div>
        </div>

        {/* Main nav */}
        <div className="container-wide">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2.5 group"
              aria-label="Stratton Security Group — Home"
            >
              <div className="w-8 h-8 flex items-center justify-center border border-[#c49a2a] rounded-sm transition-all duration-200 group-hover:bg-[#c49a2a]/10">
                <Shield size={16} className="text-[#c49a2a]" strokeWidth={2} />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-[var(--font-display)] text-[0.95rem] font-700 tracking-[0.06em] text-[#edf2f7] uppercase">
                  Stratton
                </span>
                <span className="font-[var(--font-sans)] text-[0.5625rem] text-[#7a9ab8] tracking-[0.2em] uppercase">
                  Security Group
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav
              ref={dropdownRef}
              className="hidden lg:flex items-center gap-1"
              aria-label="Main navigation"
            >
              {NAV_ITEMS.map((item) => (
                <div key={item.label} className="relative">
                  {item.children ? (
                    <button
                      onClick={() =>
                        setActiveDropdown(activeDropdown === item.label ? null : item.label)
                      }
                      className={cn(
                        "flex items-center gap-1 px-3.5 py-2 text-[0.8125rem] font-medium tracking-wide transition-colors rounded-sm uppercase",
                        isActive(item.href) ? "text-[#edf2f7]" : "text-[#b8cce0] hover:text-[#edf2f7]"
                      )}
                      aria-expanded={activeDropdown === item.label}
                      aria-current={isActive(item.href) ? "page" : undefined}
                    >
                      {item.label}
                      <ChevronDown
                        size={13}
                        className={cn(
                          "transition-transform duration-200",
                          activeDropdown === item.label && "rotate-180"
                        )}
                      />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className={cn(
                        "px-3.5 py-2 text-[0.8125rem] font-medium tracking-wide transition-colors rounded-sm uppercase block relative",
                        isActive(item.href) ? "text-[#edf2f7]" : "text-[#b8cce0] hover:text-[#edf2f7]"
                      )}
                      aria-current={isActive(item.href) ? "page" : undefined}
                    >
                      {item.label}
                      {isActive(item.href) && (
                        <span className="absolute bottom-0 left-3.5 right-3.5 h-px bg-[#c49a2a]" />
                      )}
                    </Link>
                  )}

                  {/* Dropdown */}
                  <AnimatePresence>
                    {item.children && activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 6, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 6, scale: 0.98 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                        className="absolute top-full left-0 mt-1 w-64 bg-[#0b1a2e] border border-[#1a3050] rounded-sm shadow-[0_16px_40px_rgba(0,0,0,0.5)] overflow-hidden"
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            onClick={() => setActiveDropdown(null)}
                            className="block px-4 py-2.5 text-[0.8125rem] text-[#9fb5cb] hover:text-[#edf2f7] hover:bg-[#1a3050] transition-colors border-b border-[#1a3050]/50 last:border-0"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <a
                href={`tel:${SITE_CONFIG.phoneE164}`}
                className="hidden md:flex items-center gap-2 btn-secondary text-xs px-3 py-2"
              >
                <Phone size={13} />
                {SITE_CONFIG.phone}
              </a>
              <Link href="/contact" className="hidden md:inline-flex btn-primary text-xs px-4 py-2.5">
                Get a Quote
              </Link>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 text-[#9fb5cb] hover:text-[#edf2f7] transition-colors"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 bg-[#06101e] flex flex-col overflow-y-auto"
          >
            {/* Mobile header */}
            <div className="flex items-center justify-between p-4 border-b border-[#1a3050]">
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-2.5"
              >
                <Shield size={16} className="text-[#c49a2a]" />
                <span className="font-[var(--font-display)] text-sm font-700 tracking-[0.06em] text-[#edf2f7] uppercase">
                  Stratton Security Group
                </span>
              </Link>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 text-[#9fb5cb]"
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>

            {/* Mobile links */}
            <nav className="flex-1 py-4" aria-label="Mobile navigation">
              {NAV_ITEMS.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 + 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "flex items-center justify-between px-5 py-3.5 text-[1rem] font-medium hover:bg-[#0b1a2e] transition-colors border-b border-[#1a3050]/40 uppercase tracking-wide",
                      isActive(item.href)
                        ? "text-[#c49a2a] border-l-2 border-l-[#c49a2a] pl-[calc(1.25rem-2px)]"
                        : "text-[#b8cce0] hover:text-[#edf2f7]"
                    )}
                    aria-current={isActive(item.href) ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="bg-[#040c1a]">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="flex items-center px-8 py-2.5 text-[0.875rem] text-[#7a9ab8] hover:text-[#b8cce0] transition-colors border-b border-[#1a3050]/30 last:border-0"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </nav>

            {/* Mobile CTAs */}
            <div className="p-5 border-t border-[#1a3050] space-y-3">
              <a
                href={`tel:${SITE_CONFIG.phoneE164}`}
                className="flex items-center justify-center gap-2 w-full py-3.5 border border-[#1a3050] text-[#b8cce0] text-sm font-medium uppercase tracking-wide hover:border-[#c49a2a] hover:text-[#c49a2a] transition-colors rounded-sm"
              >
                <Phone size={15} />
                {SITE_CONFIG.phone}
              </a>
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center w-full btn-primary"
              >
                Request a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

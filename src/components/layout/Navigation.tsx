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
            ? "bg-[#050810]/95 backdrop-blur-md border-b border-[#1a2030]"
            : "bg-transparent"
        )}
      >
        <div className="container-wide">
          <div className={cn("flex items-center justify-between transition-all duration-300", isScrolled ? "h-14" : "h-20")}>
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2.5 group"
              aria-label="Stratton Security Group — Home"
            >
              <div className="w-8 h-8 flex items-center justify-center border border-[#c49a2a]/60 transition-all duration-200 group-hover:bg-[#c49a2a]/10">
                <Shield size={16} className="text-[#c49a2a]" strokeWidth={2} />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-[var(--font-display)] text-[0.95rem] font-700 tracking-[0.06em] text-white uppercase">
                  Stratton
                </span>
                <span className="font-[var(--font-sans)] text-[0.5625rem] text-[#a0b0c0] tracking-[0.2em] uppercase">
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
                        "flex items-center gap-1 px-3.5 py-2 text-[0.8125rem] font-medium tracking-wide transition-colors uppercase",
                        isActive(item.href) ? "text-white" : "text-[#c8d4e0] hover:text-white"
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
                        "px-3.5 py-2 text-[0.8125rem] font-medium tracking-wide transition-colors uppercase block relative",
                        isActive(item.href) ? "text-white" : "text-[#c8d4e0] hover:text-white"
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
                        className="absolute top-full left-0 mt-1 w-64 bg-[#050810] border border-[#1a2030] shadow-[0_16px_40px_rgba(0,0,0,0.7)] overflow-hidden"
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            onClick={() => setActiveDropdown(null)}
                            className="block px-4 py-2.5 text-[0.8125rem] text-[#a0b0c0] hover:text-white hover:bg-[#0a0f1a] transition-colors border-b border-[#1a2030]/50 last:border-0"
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
                className="lg:hidden p-2 text-[#c8d4e0] hover:text-white transition-colors"
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
            className="fixed inset-0 z-50 bg-[#050810] flex flex-col overflow-y-auto"
          >
            {/* Mobile header */}
            <div className="flex items-center justify-between p-4 border-b border-[#1a2030]">
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-2.5"
              >
                <Shield size={16} className="text-[#c49a2a]" />
                <span className="font-[var(--font-display)] text-sm font-700 tracking-[0.06em] text-white uppercase">
                  Stratton Security Group
                </span>
              </Link>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 text-[#a0b0c0]"
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
                      "flex items-center justify-between px-5 py-4 text-[1rem] font-medium hover:bg-[#0a0f1a] transition-colors border-b border-[#1a2030]/40 uppercase tracking-wide",
                      isActive(item.href)
                        ? "text-[#c49a2a] border-l-2 border-l-[#c49a2a] pl-[calc(1.25rem-2px)]"
                        : "text-[#c8d4e0] hover:text-white"
                    )}
                    aria-current={isActive(item.href) ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="bg-[#050810]">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="flex items-center px-8 py-3 text-[0.875rem] text-[#606878] hover:text-[#a0b0c0] transition-colors border-b border-[#1a2030]/30 last:border-0"
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
            <div className="p-5 border-t border-[#1a2030] space-y-3">
              <a
                href={`tel:${SITE_CONFIG.phoneE164}`}
                className="flex items-center justify-center gap-2 w-full py-3.5 border border-[#1a2030] text-[#a0b0c0] text-sm font-medium uppercase tracking-wide hover:border-[#c49a2a] hover:text-[#c49a2a] transition-colors"
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

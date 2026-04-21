"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Phone, MessageSquare } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export default function MobileStickyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 md:hidden transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      aria-label="Quick contact"
    >
      <div className="flex border-t border-[#1a3050] bg-[#040c1a]">
        <a
          href={`tel:${SITE_CONFIG.phoneE164}`}
          className="flex-1 flex items-center justify-center gap-2 py-3.5 text-[0.75rem] font-600 uppercase tracking-wide text-[#edf2f7] border-r border-[#1a3050] hover:bg-[#0b1a2e] transition-colors"
        >
          <Phone size={15} className="text-[#c49a2a]" />
          Call Now
        </a>
        <Link
          href="/contact"
          className="flex-1 flex items-center justify-center gap-2 py-3.5 text-[0.75rem] font-600 uppercase tracking-wide bg-[#c49a2a] text-[#040c1a] hover:bg-[#e0b84a] transition-colors"
        >
          <MessageSquare size={15} />
          Get a Quote
        </Link>
      </div>
    </div>
  );
}

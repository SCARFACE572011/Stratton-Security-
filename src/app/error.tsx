"use client";

import Link from "next/link";
import { useEffect } from "react";
import { Home, Phone, RefreshCw } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body className="min-h-screen bg-[#040c1a] flex items-center justify-center p-6" style={{ fontFamily: "sans-serif" }}>
        <div className="max-w-xl w-full text-center">
          <div
            className="inline-block text-[0.6875rem] tracking-[0.2em] uppercase mb-6 px-3 py-1.5 border"
            style={{ color: "#c49a2a", borderColor: "rgba(196,154,42,0.3)" }}
          >
            Error · Something went wrong
          </div>

          <h1
            style={{ fontSize: "clamp(2.5rem,7vw,5rem)", fontWeight: 800, color: "#edf2f7", textTransform: "uppercase", lineHeight: 0.95, letterSpacing: "-0.01em" }}
            className="mb-6"
          >
            Service
            <br />
            <span style={{ WebkitTextStroke: "1px rgba(196,154,42,0.6)", color: "transparent" }}>
              Interrupted
            </span>
          </h1>

          <p style={{ color: "#9fb5cb", fontSize: "1rem", lineHeight: 1.6, marginBottom: "2rem" }}>
            An unexpected error occurred. Please try again or contact us directly.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", justifyContent: "center", marginBottom: "2.5rem" }}>
            <button
              onClick={reset}
              style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.75rem 1.5rem", background: "#c49a2a", color: "#06101e", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", border: "none", cursor: "pointer" }}
            >
              <RefreshCw size={13} />
              Try Again
            </button>
            <Link
              href="/"
              style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.75rem 1.5rem", border: "1px solid rgba(255,255,255,0.12)", color: "#9fb5cb", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.08em", textDecoration: "none" }}
            >
              <Home size={13} />
              Return Home
            </Link>
            <a
              href={`tel:${SITE_CONFIG.phoneE164}`}
              style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.75rem 1.5rem", border: "1px solid rgba(255,255,255,0.12)", color: "#9fb5cb", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.08em", textDecoration: "none" }}
            >
              <Phone size={13} />
              {SITE_CONFIG.phone}
            </a>
          </div>

          {error.digest && (
            <p style={{ fontSize: "0.6875rem", color: "#2a3d50", letterSpacing: "0.1em" }}>
              Error ID: {error.digest}
            </p>
          )}
        </div>
      </body>
    </html>
  );
}

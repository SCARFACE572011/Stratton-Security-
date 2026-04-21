import { ImageResponse } from "next/og";
import { SITE_CONFIG } from "@/lib/constants";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const SECTORS = [
  "Commercial Real Estate", "Retail & Shopping Centers",
  "Hotels & Hospitality", "Healthcare & Medical",
  "Education & Campuses", "Industrial & Warehousing",
  "Government & Municipal", "Financial Services",
  "Auto Dealerships", "Luxury Estates",
  "Construction Sites", "Logistics & Distribution",
  "Transit & Transportation", "Condominiums & HOAs",
];

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#040c1a",
          padding: "56px 72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(to right, transparent, #c49a2a 20%, #c49a2a 80%, transparent)" }} />
        <div style={{ position: "absolute", inset: 0, opacity: 0.025, backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)", backgroundSize: "80px 80px" }} />

        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div style={{ width: "40px", height: "40px", border: "1px solid #c49a2a", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c49a2a" strokeWidth="1.5">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </div>
          <span style={{ fontSize: "14px", fontWeight: 700, color: "#edf2f7", letterSpacing: "0.1em", textTransform: "uppercase" }}>STRATTON SECURITY GROUP</span>
        </div>

        {/* Content */}
        <div style={{ display: "flex", gap: "56px", alignItems: "flex-start" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", flex: "0 0 400px" }}>
            <div style={{ fontSize: "12px", color: "#c49a2a", letterSpacing: "0.2em", textTransform: "uppercase" }}>14+ INDUSTRY VERTICALS</div>
            <div style={{ fontSize: "56px", fontWeight: 800, color: "#edf2f7", lineHeight: 0.9, textTransform: "uppercase", letterSpacing: "-0.02em" }}>
              PROTECTING
            </div>
            <div style={{ fontSize: "56px", fontWeight: 800, lineHeight: 0.9, textTransform: "uppercase", letterSpacing: "-0.02em", WebkitTextStroke: "1px rgba(196,154,42,0.7)", color: "transparent" }}>
              EVERY SECTOR
            </div>
            <div style={{ fontSize: "16px", color: "#9fb5cb", lineHeight: 1.5, marginTop: "8px" }}>
              Tailored security programs for every industry across Los Angeles and Southern California.
            </div>
          </div>

          {/* Sector grid */}
          <div style={{ display: "flex", flexDirection: "column", gap: "6px", paddingTop: "24px", flex: 1 }}>
            {SECTORS.map((s) => (
              <div key={s} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#c49a2a", flexShrink: 0 }} />
                <span style={{ fontSize: "12px", color: "#7a9ab8" }}>{s}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", gap: "28px" }}>
            {[`CA PPO #${SITE_CONFIG.licenseNumber}`, "24/7 · 365", "Los Angeles, CA"].map((item) => (
              <span key={item} style={{ fontSize: "11px", color: "#4a6880", letterSpacing: "0.08em", textTransform: "uppercase" }}>{item}</span>
            ))}
          </div>
          <span style={{ fontSize: "12px", color: "#7a9ab8" }}>strattonsecuritygroup.com/industries</span>
        </div>

        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(to right, transparent, #c49a2a 20%, #c49a2a 80%, transparent)", opacity: 0.5 }} />
      </div>
    ),
    size,
  );
}

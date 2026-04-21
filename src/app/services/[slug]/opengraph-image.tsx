import { ImageResponse } from "next/og";
import { SERVICES, SITE_CONFIG } from "@/lib/constants";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  const title = service?.title ?? "Security Services";
  const description = service?.shortDescription ?? "Professional security services across Los Angeles.";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#06101e",
          padding: "56px 72px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top accent */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(to right, transparent, #c49a2a 20%, #c49a2a 80%, transparent)" }} />

        {/* Background grid */}
        <div style={{ position: "absolute", inset: 0, opacity: 0.025, backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)", backgroundSize: "80px 80px" }} />

        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div style={{ width: "40px", height: "40px", border: "1px solid #c49a2a", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c49a2a" strokeWidth="1.5">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            <span style={{ fontSize: "14px", fontWeight: 700, color: "#edf2f7", letterSpacing: "0.1em", textTransform: "uppercase" }}>STRATTON SECURITY GROUP</span>
          </div>
        </div>

        {/* Content */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div style={{ fontSize: "12px", color: "#c49a2a", letterSpacing: "0.2em", textTransform: "uppercase" }}>SERVICE LINE</div>
          <div style={{ fontSize: "64px", fontWeight: 800, color: "#edf2f7", lineHeight: 0.95, textTransform: "uppercase", letterSpacing: "-0.01em", maxWidth: "800px" }}>
            {title}
          </div>
          <div style={{ fontSize: "18px", color: "#9fb5cb", lineHeight: 1.5, maxWidth: "720px" }}>
            {description.length > 120 ? description.slice(0, 120) + "…" : description}
          </div>
        </div>

        {/* Bottom */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", gap: "28px" }}>
            {[`CA PPO #${SITE_CONFIG.licenseNumber}`, "24/7 · 365", "Los Angeles, CA"].map((item) => (
              <span key={item} style={{ fontSize: "11px", color: "#4a6880", letterSpacing: "0.08em", textTransform: "uppercase" }}>{item}</span>
            ))}
          </div>
          <span style={{ fontSize: "12px", color: "#7a9ab8" }}>strattonsecuritygroup.com/services</span>
        </div>

        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(to right, transparent, #c49a2a 20%, #c49a2a 80%, transparent)", opacity: 0.5 }} />
      </div>
    ),
    size,
  );
}

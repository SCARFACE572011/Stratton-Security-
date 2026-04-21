import { ImageResponse } from "next/og";
import { SITE_CONFIG } from "@/lib/constants";

export const runtime = "edge";
export const alt = "Stratton Security Group — Excellence In Protection";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

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
          background: "#06101e",
          padding: "60px 72px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Top accent line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "3px",
            background: "linear-gradient(to right, transparent, #c49a2a 20%, #c49a2a 80%, transparent)",
          }}
        />

        {/* Background grid overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.03,
            backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Radial glow */}
        <div
          style={{
            position: "absolute",
            left: "-100px",
            top: "-100px",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(196,154,42,0.08) 0%, transparent 70%)",
          }}
        />

        {/* Logo row */}
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          {/* Shield icon */}
          <div
            style={{
              width: "44px",
              height: "44px",
              border: "1px solid #c49a2a",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c49a2a" strokeWidth="1.5">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            <span style={{ fontSize: "18px", fontWeight: 700, color: "#edf2f7", letterSpacing: "0.1em", textTransform: "uppercase" }}>
              STRATTON
            </span>
            <span style={{ fontSize: "11px", color: "#7a9ab8", letterSpacing: "0.22em", textTransform: "uppercase" }}>
              SECURITY GROUP
            </span>
          </div>
        </div>

        {/* Main headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <div style={{ fontSize: "11px", color: "#c49a2a", letterSpacing: "0.2em", textTransform: "uppercase" }}>
            PROFESSIONAL SECURITY SERVICES · LOS ANGELES
          </div>
          <div style={{ fontSize: "72px", fontWeight: 800, color: "#edf2f7", lineHeight: 0.9, textTransform: "uppercase", letterSpacing: "-0.01em" }}>
            Excellence
          </div>
          <div style={{ fontSize: "72px", fontWeight: 800, color: "transparent", lineHeight: 0.9, textTransform: "uppercase", letterSpacing: "-0.01em", WebkitTextStroke: "1.5px rgba(196, 154, 42, 0.7)" }}>
            In Protection
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", gap: "32px" }}>
            {[`CA PPO #${SITE_CONFIG.licenseNumber}`, "24/7 · 365", "Licensed · Bonded · Insured"].map((item) => (
              <span key={item} style={{ fontSize: "12px", color: "#4a6880", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                {item}
              </span>
            ))}
          </div>
          <span style={{ fontSize: "13px", color: "#7a9ab8" }}>
            strattonsecuritygroup.com
          </span>
        </div>

        {/* Bottom accent line */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "2px",
            background: "linear-gradient(to right, transparent, #c49a2a 20%, #c49a2a 80%, transparent)",
            opacity: 0.5,
          }}
        />
      </div>
    ),
    size,
  );
}

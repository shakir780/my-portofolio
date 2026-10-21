import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name}, ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// The social card shown when the site is shared on LinkedIn, WhatsApp, X, etc.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#14161c",
          color: "#f1f2f5",
        }}
      >
        <div style={{ fontSize: 28, color: "#8fb8ff", letterSpacing: 2 }}>PORTFOLIO</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 88, fontWeight: 700, letterSpacing: -3 }}>{site.name}</div>
          <div style={{ fontSize: 56, color: "#9aa0ad", letterSpacing: -1.5 }}>{site.role}</div>
          <div style={{ marginTop: 36, fontSize: 30, color: "#9aa0ad", maxWidth: 900, lineHeight: 1.4 }}>
            {site.tagline}
          </div>
        </div>
        <div style={{ fontSize: 26, color: "#9aa0ad" }}>{site.url.replace("https://", "")}</div>
      </div>
    ),
    size,
  );
}

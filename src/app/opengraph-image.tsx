import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Aethelis — Private Wealth Management";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logoData = await readFile(join(process.cwd(), "public", "logo.png"));
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0c0b09",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            background:
              "radial-gradient(circle at 20% 20%, rgba(195,160,92,0.14), transparent 55%), radial-gradient(circle at 85% 80%, rgba(107,122,138,0.1), transparent 55%)",
          }}
        />
        <img
          src={logoSrc}
          alt=""
          width={120}
          height={120}
          style={{ position: "relative" }}
        />
        <div
          style={{
            position: "relative",
            marginTop: 28,
            fontSize: 58,
            fontWeight: 500,
            letterSpacing: "-0.01em",
            color: "#f3efe6",
          }}
        >
          Aethelis
        </div>
        <div
          style={{
            position: "relative",
            marginTop: 16,
            fontSize: 24,
            color: "#a79d8a",
          }}
        >
          Private wealth management
        </div>
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            height: 6,
            background: "#c3a05c",
          }}
        />
      </div>
    ),
    { ...size },
  );
}

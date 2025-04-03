import { ImageResponse } from "next/og"

export const runtime = "edge"

export const alt = "Sauntr - The new way to get lost"
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 48,
        background: "linear-gradient(to bottom, #FFD4E5, #FFE8C2, #B4E7F8)",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 48,
        position: "relative",
      }}
    >
      {/* Sun */}
      <div
        style={{
          position: "absolute",
          top: "80px",
          right: "120px",
          width: "120px",
          height: "120px",
          borderRadius: "100%",
          background: "#FF9F68",
          opacity: 0.8,
        }}
      />

      {/* Geometric shapes */}
      <div
        style={{
          position: "absolute",
          bottom: "80px",
          left: "25%",
          width: "240px",
          height: "60px",
          background: "#FF85A1",
          opacity: 0.3,
          borderRadius: "8px",
          transform: "rotate(12deg)",
        }}
      />

      <div
        style={{
          position: "absolute",
          bottom: "160px",
          right: "40px",
          width: "180px",
          height: "80px",
          background: "#FFD700",
          opacity: 0.3,
          borderRadius: "8px",
          transform: "rotate(3deg)",
        }}
      />

      {/* Horizon line */}
      <div
        style={{
          position: "absolute",
          bottom: "25%",
          left: 0,
          right: 0,
          height: "4px",
          background: "#0B4B23",
          opacity: 0.3,
        }}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 48,
          background: "rgba(255, 255, 255, 0.3)",
          backdropFilter: "blur(8px)",
          padding: "48px",
          borderRadius: "16px",
          border: "1px solid rgba(255, 255, 255, 0.4)",
        }}
      >
        <div
          style={{
            fontSize: 96,
            fontWeight: "bold",
            color: "#0B4B23",
            marginBottom: 24,
          }}
        >
          Sauntr
        </div>
        <div
          style={{
            fontSize: 36,
            color: "#0B4B23",
          }}
        >
          The new way to get lost.
        </div>
      </div>
    </div>,
    { ...size },
  )
}


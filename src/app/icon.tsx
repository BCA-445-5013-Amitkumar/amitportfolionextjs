import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 16,
          background:
            "radial-gradient(circle at 25% 20%, rgba(79, 224, 255, 0.36), transparent 35%), linear-gradient(180deg, #09111f 0%, #0a1326 100%)",
          border: "2px solid rgba(79, 224, 255, 0.35)",
          boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.04)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 48,
            height: 48,
            borderRadius: 14,
            color: "#f6fbff",
            fontSize: 28,
            fontWeight: 800,
            letterSpacing: "-0.08em",
            background: "linear-gradient(135deg, rgba(79, 224, 255, 0.22), rgba(46, 169, 255, 0.08))",
            textShadow: "0 0 16px rgba(79, 224, 255, 0.45)",
          }}
        >
          A
        </div>
      </div>
    ),
    size,
  );
}
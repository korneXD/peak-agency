import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#2b1e12",
        }}
      >
        <svg width="108" height="108" viewBox="0 0 48 48" fill="none">
          <path
            d="M13 32L20.5 18.5L25 26L28.5 20L35 32H13Z"
            fill="#f8f2e6"
          />
        </svg>
      </div>
    ),
    { ...size },
  );
}

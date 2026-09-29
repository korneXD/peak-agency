import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
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
          borderRadius: 18,
        }}
      >
        <svg width="38" height="38" viewBox="0 0 48 48" fill="none">
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

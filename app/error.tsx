"use client";
import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    // Optionally log error
  }, [error]);
  return (
    <div style={{ minHeight: "60vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <h2 style={{ color: "var(--primary-dark)", fontFamily: "Bebas Neue, cursive", fontSize: "2em" }}>Something went wrong!</h2>
      <button
        style={{
          background: "var(--primary)",
          color: "#fff",
          border: "none",
          borderRadius: "1em",
          padding: "0.7em 2em",
          fontFamily: "Bebas Neue, cursive",
          fontSize: "1.1em",
          marginTop: "1em",
          cursor: "pointer"
        }}
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import RevealEffects from "../components/RevealEffects";

export const metadata: Metadata = {
  title: "Mike Mungu — LOVE ISN’T ENOUGH",
  description: "Mike Mungu electronic press kit — singer, songwriter and producer from Kampala, Uganda.",
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return (
    <html lang="en">
      <body>{children}<RevealEffects /></body>
    </html>
  );
}

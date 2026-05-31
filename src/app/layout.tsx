import type { Metadata } from "next";
import "@/globals.css";

export const metadata: Metadata = {
  title: "Fira | CODE.PINK - Informatics Portfolio",
  description:
    "Safira Muztasyifa Syah's futuristic informatics portfolio. Available for internships.",
  keywords: ["portfolio", "developer", "informatics", "computer science"],
  authors: [{ name: "Fira" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#0c1227" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="bg-cosmic-dark text-white antialiased">{children}</body>
    </html>
  );
}

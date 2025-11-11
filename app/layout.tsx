import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cheminformatics Algorithm Generator | Crowe Algorithm",
  description: "Generate optimized algorithms for compound discovery, molecular analysis, and drug development workflows. Design QSAR models, virtual screening pipelines, and structure optimization algorithms.",
  keywords: "cheminformatics, drug discovery, algorithm generator, QSAR, molecular similarity, virtual screening, compound screening, pharmacophore",
  authors: [{ name: "Crowe Algorithm" }],
  openGraph: {
    title: "Cheminformatics Algorithm Generator",
    description: "Design and generate optimized algorithms for compound discovery and molecular analysis",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

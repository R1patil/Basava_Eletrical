import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Basava_Electrical | Industrial & Commercial Electrical Contracting",
  description:
    "Certified Electrical Engineering & Contracting by Basava_Electrical. Specializing in multi-story roof slab conduit piping, heavy motor stator rewinding, underground power trenches, and IS-compliant switchgear in Rabakavi Banahatti.",
  keywords: [
    "Basava_Electrical",
    "Electrical Contractor Banahatti",
    "Roof Slab Conduit Layout",
    "Motor Rewinding Bagalkot",
    "Underground Power Cable Trenching",
    "Industrial Electrical Engineering",
    "Havells Style Electrical Contracting",
  ],
  authors: [{ name: "Basava_Electrical" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/logo.jpg" />
      </head>
      <body className="min-h-screen bg-[#0b0f19] text-[#f3f4f6] antialiased selection:bg-[#00d2ff] selection:text-[#0b0f19]">
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Poppins, Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const notoDevanagari = Noto_Sans_Devanagari({
  variable: "--font-noto-devanagari",
  subsets: ["devanagari"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Vyapari Ekta Parishad (V.E.P.)",
  description: "Vyapari Ekta Parishad is a collective platform dedicated to protecting the legitimate interests of traders, raising their concerns, and strengthening unity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hi" className={`${poppins.variable} ${notoDevanagari.variable} scroll-smooth`}>
      <body className="antialiased min-h-screen bg-[#ECE9DE] text-[#1F1D1C]">
        <div className="max-w-[1280px] mx-auto w-full min-h-screen flex flex-col bg-[#ECE9DE]">
          {children}
        </div>
      </body>
    </html>
  );
}

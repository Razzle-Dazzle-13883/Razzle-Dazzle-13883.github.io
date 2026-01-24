import type { Metadata } from "next";
import { Space_Grotesk, Noto_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ParticleField, FloatingOrbs } from "@/components/InteractiveEffects";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const notoSans = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-noto-sans",
  weight: ["400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Razzle Dazzle 13883 | FTC Robotics Team",
  description: "Inspiring Innovation Through Robotics - FTC Robotics Team 13883 from Apex, North Carolina",
  icons: {
    icon: "/images/razzledazzlelogo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${notoSans.variable}`}>
      <body className="relative flex size-full min-h-screen flex-col bg-[#0d0a0b] overflow-x-hidden" style={{ fontFamily: "'Space Grotesk', 'Noto Sans', sans-serif" }}>
        <ParticleField />
        <FloatingOrbs />
        <div className="layout-container flex h-full grow flex-col relative z-10">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

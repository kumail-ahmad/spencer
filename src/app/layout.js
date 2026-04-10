import { Geist, Geist_Mono, Kdam_Thmor_Pro } from "next/font/google";
import "./globals.css";
// import "./bones/registry"; 
import Providers from "@/components/Providers";
import Crosshair from "@/components/ui/Crosshair";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});
const kdamThmor = Kdam_Thmor_Pro({
  subsets: ["latin"],
  weight: "400", // Kdam Thmor Pro is a single-weight font
  display: "swap",
});
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata = {
  title: "Spencer | Portfolio | K$",
  description: "Portfolio | Kumail Ahmad ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

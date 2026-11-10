
import { Geist, Geist_Mono, Kdam_Thmor_Pro } from "next/font/google";
import "./globals.css";
// import "./bones/registry";
import Providers from "@/components/Providers";
import Crosshair from "@/components/ui/Crosshair";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const kdamThmor = Kdam_Thmor_Pro({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata = {
  metadataBase: new URL("https://mainlykumail.tech"),

  title: {
    default: "Kumail Ahmad | Computer Science Student & Web Developer",
    template: "%s | Kumail Ahmad",
  },

  description:
    "Kumail Ahmad is a Computer Science Engineering student at the Islamic University of Science and Technology (IUST), Kashmir, and a web developer interested in software engineering, full-stack development, and building modern digital solutions.",

  applicationName: "Kumail Ahmad Portfolio",

  authors: [
    {
      name: "Kumail Ahmad",
      url: "https://mainlykumail.tech",
    },
  ],

  creator: "Kumail Ahmad",
  publisher: "Kumail Ahmad",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Kumail Ahmad | Computer Science Student & Web Developer",
    description:
      "Explore the portfolio, technical projects, and software development work of Kumail Ahmad, a Computer Science Engineering student at IUST, Kashmir.",
    url: "https://mainlykumail.tech",
    siteName: "Kumail Ahmad",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kumail Ahmad - Computer Science Student and Web Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Kumail Ahmad | Web Developer",
    description:
      "Computer Science Engineering student and web developer building modern digital solutions.",
    images: ["/og-image.png"],
  },

  icons: {
    icon: "/K.ico",
    shortcut: "/K.ico",
    apple: "/K.ico",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
}

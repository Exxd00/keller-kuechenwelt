import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { MobileCTA } from "@/components/layout/mobile-cta";
import { CookieBanner } from "@/components/cookie-banner";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://keller-kuechenwelt.de"),
  title: {
    default: "Keller Küchenwelt – Küchenstudio in Nürnberg | Traumküchen nach Maß",
    template: "%s | Keller Küchenwelt Nürnberg",
  },
  description:
    "Ihr Küchenstudio in Nürnberg – Individuelle Küchenplanung, hochwertige Marken wie LEICHT, NOBILIA & Miele. Persönliche Beratung, 3D-Planung & Komplettservice. Jetzt Termin buchen!",
  keywords: [
    "Küchenstudio Nürnberg",
    "Küchenplanung Nürnberg",
    "Küche kaufen Nürnberg",
    "Einbauküche Nürnberg",
    "Küchenmontage Nürnberg",
    "LEICHT Küchen",
    "NOBILIA Küchen",
    "Miele Geräte",
  ],
  authors: [{ name: "Keller Küchenwelt" }],
  creator: "Keller Küchenwelt",
  publisher: "Keller Küchenwelt",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://keller-kuechenwelt.de",
    siteName: "Keller Küchenwelt",
    title: "Keller Küchenwelt – Küchenstudio in Nürnberg",
    description:
      "Ihr Küchenstudio in Nürnberg – Individuelle Küchenplanung, hochwertige Marken und persönliche Beratung für Ihre Traumküche.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Keller Küchenwelt - Küchenstudio Nürnberg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Keller Küchenwelt – Küchenstudio in Nürnberg",
    description:
      "Ihr Küchenstudio in Nürnberg – Individuelle Küchenplanung, hochwertige Marken und persönliche Beratung für Ihre Traumküche.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://keller-kuechenwelt.de",
  },
  verification: {
    google: "verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="light" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#F7F7F7" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#0F0F10" media="(prefers-color-scheme: dark)" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var stored = localStorage.getItem('keller-kuechenwelt-theme');
                  var theme = stored || 'light';
                  if (theme === 'system') {
                    theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  }
                  document.documentElement.classList.remove('light', 'dark');
                  document.documentElement.classList.add(theme);
                } catch (e) {
                  document.documentElement.classList.add('light');
                }
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${geist.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <ThemeProvider defaultTheme="light" storageKey="keller-kuechenwelt-theme">
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 pb-20 lg:pb-0">{children}</main>
            <Footer />
            <MobileCTA />
            <CookieBanner />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

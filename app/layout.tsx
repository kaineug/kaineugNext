import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import Navbar from "./Components/navbar";
import Script from "next/script";

const insSerif = localFont ({
    src: '../public/fonts/Instrument_Serif/InstrumentSerif-Regular.ttf',
})

const atkinson = localFont ({
    src: '../public/fonts/Atkinson_Hyperlegible/AtkinsonHyperlegible-Regular.ttf',
    variable: "--font-atkinson",
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kai Neugebauer",
  description: "schüler aus deutschland",
};

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en" className={`${geistSans.variable} ${atkinson.variable}`}>
//         <body className={`${insSerif.className}`}>
//             <Navbar />
//             {children}
//         </body>
//     </html>
//   );
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${atkinson.variable}`}>
        <body className={`${insSerif.className}`}>
            <Navbar />
            {children}
            <Script
                defer src="https://analytics.kaineug.de/script.js"
                data-website-id="08ac5a24-b266-42b6-890d-d60770212b8c"
                strategy="afterInteractive"
            />
        </body>
    </html>
  );
}

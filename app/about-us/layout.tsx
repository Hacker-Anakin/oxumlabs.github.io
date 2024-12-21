import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Head from 'next/head';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Oxum Labs - About Us",
  description: "Welcome to Oxum Labs where Innovation Meets Creativity",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
      <meta name="keywords" content="oxum labs, neit, language, ai, fast, company, coding, programming, innovation, creativity" />
        <meta name="author" content="Anmol Raj" />
        <link rel="canonical" href="https://nsite-lac.vercel.app/" />
        <meta property="og:title" content="Oxum Labs" />
        <meta property="og:description" content="Welcome to Oxum Labs where Innovation Meets Creativity" />
        <meta property="og:image" content="/main.png" />
        <meta property="og:url" content="https://nsite-lac.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="oxum labs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="apple-touch-icon" sizes="180x180" href="../apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="../favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="../favicon-16x16.png"/>
        <link rel="manifest" href="../site.webmanifest"/>
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

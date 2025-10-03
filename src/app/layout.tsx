import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransitionWrapper from "@/components/PageTransitionWrapper";

const geistSans = GeistSans;

const geistMono = GeistMono;

export const metadata: Metadata = {
  title: {
    default: 'Your Company Name - The Future of Web Design',
    template: '%s | Your Company Name',
  },
  description: 'Specializing in stunning, high-performance websites with a focus on user experience and cutting-edge design.',
  keywords: ['web development', 'ui/ux design', 'seo', '3d animation', 'next.js', 'react'],
  openGraph: {
    title: 'Your Company Name',
    description: 'The Future of Web Design',
    url: 'https://www.yourwebsite.com',
    siteName: 'Your Company Name',
    images: [
      {
        url: 'https://www.yourwebsite.com/og-image.png', // It's good practice to have an OG image
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Your Company Name',
    description: 'The Future of Web Design',
    // creator: '@yourtwitterhandle',
    images: ['https://www.yourwebsite.com/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-white bg-main-gradient from-dark-purple to-brand-black`}
      >
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 pt-20">
            <PageTransitionWrapper>{children}</PageTransitionWrapper>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}


import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/footer";
import Nav from "@/components/Nav";
import { ClerkProvider } from "@clerk/nextjs";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Bookscape",
  description: "Founded on books. Magnified with technology. Tailored for You.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {




  return (
    <html lang="en">

    <ClerkProvider
    appearance={{
      layout: {
        unsafe_disableDevelopmentModeWarnings: true,
      },
    }}
    >
    <head>
			<link rel='icon' href='/assets/fav.png' />
		</head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        
        <Nav />
        {children}
        <Footer />

      </body>
    </ClerkProvider>

    </html>
  );
}

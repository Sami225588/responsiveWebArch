// layout.tsx

import Image from 'next/image';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Link from 'next/link';

// Local fonts
const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});

const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

// RootLayout Component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Header */}

{/* Header */}
<header className="flex flex-col md:flex-row md:justify-between items-center p-6 bg-white shadow">
  {/* Logo */}
  <Image
    src="/images/logo.png"
    alt="Logo"
    width={70}
    height={43}
    priority
  />
  {/* Desktop Navigation */}
  <nav className="hidden md:flex space-x-4">
    <Link href="/" className="text-gray-700 px-4 text-base border-y-2 border-black">Main</Link>
    <Link href="/gallery" className="text-gray-700 px-1 text-base hover:border-y-2 hover:border-black">Gallery</Link>
    <Link href="/projects" className="text-gray-700 px-1 text-base hover:border-y-2 hover:border-black">Projects</Link>
    <Link href="/certificate" className="text-gray-700 px-1 text-base hover:border-y-2 hover:border-black">Certifications</Link>
    <Link href="/contacts" className="text-gray-700 px-1 text-base hover:border-y-2 hover:border-black">Contacts</Link>
  </nav>
  {/* Mobile Navigation */}
  <nav className="flex flex-col items-center space-y-2 mt-4 md:hidden">
    <Link href="/" className="text-gray-700 text-base hover:bg-black hover:text-white px-4 py-2 transition">Main</Link>
    <Link href="/gallery" className="text-gray-700 text-base hover:bg-black hover:text-white px-4 py-2 transition">Gallery</Link>
    <Link href="/projects" className="text-gray-700 text-base hover:bg-black hover:text-white px-4 py-2 transition">Projects</Link>
    <Link href="/certificate" className="text-gray-700 text-base hover:bg-black hover:text-white px-4 py-2 transition">Certifications</Link>
    <Link href="/contacts" className="text-gray-700 text-base hover:bg-black hover:text-white px-4 py-2 transition">Contacts</Link>
  </nav>
</header>

        {/* Main content */}
        <main>{children}</main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white p-6 mt-12">
          <div className="flex justify-between">
            <div>
              <h3 className="text-lg font-bold">Information</h3>
              <ul>
                <li><Link href="/" className="hover:underline">Main</Link></li>
                <li><Link href="/gallery" className="hover:underline">Gallery</Link></li>
                <li><Link href="/projects" className="hover:underline">Projects</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold">Contacts</h3>
              <p>1244 Sample Street<br />Austin, TX 78704</p>
              <p>Phone: 512-333-2222</p>
              <p>Email: sampleemail@gmail.com</p>
            </div>
          </div>
          <div className="mt-4 text-center">
            &copy; 2024 Your Company Name. All Rights Reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}

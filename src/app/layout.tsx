import type { Metadata } from 'next';
import './globals.css';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'Lyndan | Integrated Management Systems',
  description: 'Lyndan provides cutting-edge management systems including Building Compliance Management (BCMS) and Sentry Management (SMS).',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        
        {children}

        <footer className="footer">
          <div className="container">
            <div className="footer-content">
              <div className="logo" style={{ padding: '0.5rem 0' }}>
                <Image src="/lyndan-logo.png" alt="Lyndan Logo" width={160} height={45} style={{ objectFit: 'contain' }} />
              </div>
              <div className="footer-text">
                &copy; {new Date().getFullYear()} Lyndan Systems. All rights reserved.
              </div>
              <div className="nav-links">
                <a href="#" className="nav-link">Privacy Policy</a>
                <a href="#" className="nav-link">Terms of Service</a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

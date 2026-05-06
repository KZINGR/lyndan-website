import type { Metadata } from 'next';
import './globals.css';
import Link from 'next/link';

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
        <nav className="navbar">
          <div className="container navbar-content">
            <Link href="/" className="logo">
              <div className="logo-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              Lyndan
            </Link>
            <div className="nav-links">
              <a href="#systems" className="nav-link">Systems</a>
              <a href="#about" className="nav-link">About</a>
              <a href="#contact" className="nav-link">Contact</a>
            </div>
            <div>
              <button className="btn btn-primary">Login</button>
            </div>
          </div>
        </nav>
        
        {children}

        <footer className="footer">
          <div className="container">
            <div className="footer-content">
              <div className="logo">
                <div className="logo-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                Lyndan
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

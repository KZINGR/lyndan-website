'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="container navbar-content">
        <Link href="/" className="logo" onClick={closeMenu} style={{ padding: '0.5rem 0' }}>
          <Image src="/lyndan-logo.png" alt="Lyndan Logo" width={160} height={45} style={{ objectFit: 'contain' }} />
        </Link>
        
        {/* Hamburger Icon */}
        <button 
          className={`hamburger ${isOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        {/* Navigation Links */}
        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <Link href="/#services" className="nav-link" onClick={closeMenu}>Services</Link>
          <Link href="/#about" className="nav-link" onClick={closeMenu}>About</Link>
          <Link href="/team" className="nav-link" onClick={closeMenu}>Team</Link>
          <Link href="/contact" className="nav-link" onClick={closeMenu}>Contact</Link>
        </div>
      </div>
    </nav>
  );
}

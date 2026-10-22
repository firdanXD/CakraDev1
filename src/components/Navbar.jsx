import React, { useState, useEffect, useRef } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const links = [
    { label: 'Tentang', href: '#about' },
    { label: 'Layanan', href: '#layanan' },
    { label: 'Paket', href: '#paket' },
    { label: 'Alur Kerja', href: '#alur' },
    { label: 'Portofolio', href: '#portofolio' },
    { label: 'Kontak', href: '#contact' },
  ];

  // Close menu when clicking outside or pressing Escape
  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    function handleKeyDown(e) {
      if (e.key === 'Escape') setIsOpen(false);
    }

    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div className="nav-wrapper" ref={menuRef}>
      <nav className="nav" aria-label="Utama">
        <a href="#" className="nav__logo" aria-label="CakraDev">
          <img src="/logo.png" alt="CakraDev" width="26" height="26" />
          <span>CakraDev</span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="nav__links">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          className={`nav__burger ${isOpen ? 'is-active' : ''}`}
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen((prev) => !prev);
          }}
          aria-label={isOpen ? 'Tutup navigasi' : 'Buka navigasi'}
          aria-expanded={isOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="nav__mobile-menu" role="menu">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              role="menuitem"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

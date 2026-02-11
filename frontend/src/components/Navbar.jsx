import { useState } from 'react';
import './Navbar.css';

export default function Navbar({ activeSection, onNavClick, onGetStarted }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT' },
    { id: 'story', label: 'STORY' },
    { id: 'pricing', label: 'PRICING' },
    { id: 'contact', label: 'CONTACT' },
  ];

  return (
    <nav className="retro-navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <svg className="logo-icon" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Center circle - main council hub */}
            <circle cx="32" cy="32" r="8" fill="#00ff00" />

            {/* Outer circles - individual LLM models */}
            <circle cx="32" cy="12" r="6" fill="#00aa00" />
            <circle cx="47" cy="22" r="6" fill="#00aa00" />
            <circle cx="47" cy="42" r="6" fill="#00aa00" />
            <circle cx="32" cy="52" r="6" fill="#00aa00" />
            <circle cx="17" cy="42" r="6" fill="#00aa00" />
            <circle cx="17" cy="22" r="6" fill="#00aa00" />

            {/* Connection lines */}
            <line x1="32" y1="20" x2="32" y2="24" stroke="#00ff00" strokeWidth="2" />
            <line x1="41" y1="26" x2="38" y2="28" stroke="#00ff00" strokeWidth="2" />
            <line x1="41" y1="38" x2="38" y2="36" stroke="#00ff00" strokeWidth="2" />
            <line x1="32" y1="44" x2="32" y2="40" stroke="#00ff00" strokeWidth="2" />
            <line x1="23" y1="38" x2="26" y2="36" stroke="#00ff00" strokeWidth="2" />
            <line x1="23" y1="26" x2="26" y2="28" stroke="#00ff00" strokeWidth="2" />

            {/* Brain icons in circles */}
            <path d="M32 9c-0.5 0-1 0.5-1 1v1c0 0.5 0.5 1 1 1s1-0.5 1-1v-1c0-0.5-0.5-1-1-1z" fill="#000"/>
            <path d="M47 19c-0.5 0-1 0.5-1 1v1c0 0.5 0.5 1 1 1s1-0.5 1-1v-1c0-0.5-0.5-1-1-1z" fill="#000"/>
            <path d="M47 39c-0.5 0-1 0.5-1 1v1c0 0.5 0.5 1 1 1s1-0.5 1-1v-1c0-0.5-0.5-1-1-1z" fill="#000"/>
            <path d="M32 49c-0.5 0-1 0.5-1 1v1c0 0.5 0.5 1 1 1s1-0.5 1-1v-1c0-0.5-0.5-1-1-1z" fill="#000"/>
            <path d="M17 39c-0.5 0-1 0.5-1 1v1c0 0.5 0.5 1 1 1s1-0.5 1-1v-1c0-0.5-0.5-1-1-1z" fill="#000"/>
            <path d="M17 19c-0.5 0-1 0.5-1 1v1c0 0.5 0.5 1 1 1s1-0.5 1-1v-1c0-0.5-0.5-1-1-1z" fill="#000"/>
          </svg>
          <span className="logo-text">LLM BAITHAK</span>
        </div>

        {/* Desktop Navigation */}
        <div className="navbar-nav desktop-nav">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => {
                console.log('Navbar clicked:', item.id, item.label);
                onNavClick(item.id);
              }}
            >
              [{item.label}]
            </button>
          ))}
        </div>

        {/* Auth Button */}
        <div className="navbar-actions">
          <button className="auth-btn" onClick={onGetStarted}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 8a3 3 0 100-6 3 3 0 000 6zm0-2a1 1 0 110-2 1 1 0 010 2zm0 8c-3.3 0-6 1.3-6 3v2h12v-2c0-1.7-2.7-3-6-3z"/>
            </svg>
            LOGIN/SIGNUP
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="mobile-menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`mobile-nav ${menuOpen ? 'open' : ''}`}>
        {navItems.map((item) => (
          <button
            key={item.id}
            className={`mobile-nav-item ${activeSection === item.id ? 'active' : ''}`}
            onClick={() => {
              onNavClick(item.id);
              setMenuOpen(false);
            }}
          >
            {'>'} {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
}

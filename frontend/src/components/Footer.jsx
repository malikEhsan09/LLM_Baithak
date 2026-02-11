import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: 'Features', href: '#about' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'API Docs', href: '#' },
      { name: 'Changelog', href: '#' },
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Blog', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Press', href: '#' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'GDPR', href: '#' },
    ],
    community: [
      { name: 'Discord', href: '#' },
      { name: 'GitHub', href: '#' },
      { name: 'Twitter', href: '#' },
      { name: 'LinkedIn', href: '#' },
    ],
  };

  return (
    <footer className="retro-footer">
      {/* Top Section */}
      <div className="footer-top">
        <div className="footer-container">
          {/* Logo & Tagline */}
          <div className="footer-brand">
            <div className="footer-logo">
              <svg className="logo-icon" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="32" cy="32" r="8" fill="#00ff00" />
                <circle cx="32" cy="12" r="6" fill="#00aa00" />
                <circle cx="47" cy="22" r="6" fill="#00aa00" />
                <circle cx="47" cy="42" r="6" fill="#00aa00" />
                <circle cx="32" cy="52" r="6" fill="#00aa00" />
                <circle cx="17" cy="42" r="6" fill="#00aa00" />
                <circle cx="17" cy="22" r="6" fill="#00aa00" />
                <line x1="32" y1="20" x2="32" y2="24" stroke="#00ff00" strokeWidth="2" />
                <line x1="41" y1="26" x2="38" y2="28" stroke="#00ff00" strokeWidth="2" />
                <line x1="41" y1="38" x2="38" y2="36" stroke="#00ff00" strokeWidth="2" />
                <line x1="32" y1="44" x2="32" y2="40" stroke="#00ff00" strokeWidth="2" />
                <line x1="23" y1="38" x2="26" y2="36" stroke="#00ff00" strokeWidth="2" />
                <line x1="23" y1="26" x2="26" y2="28" stroke="#00ff00" strokeWidth="2" />
              </svg>
              <span className="logo-text">LLM BAITHAK</span>
            </div>
            <p className="footer-tagline">
              Where multiple AI minds collaborate to give you superior answers.
            </p>
            <div className="footer-social">
              <a href="#" className="social-link" title="Discord">
                <span>💬</span>
              </a>
              <a href="#" className="social-link" title="GitHub">
                <span>🐙</span>
              </a>
              <a href="#" className="social-link" title="Twitter">
                <span>𝕏</span>
              </a>
              <a href="#" className="social-link" title="LinkedIn">
                <span>in</span>
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="footer-links">
            <div className="link-column">
              <h4 className="link-title">[PRODUCT]</h4>
              <ul>
                {footerLinks.product.map((link, index) => (
                  <li key={index}>
                    <a href={link.href}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="link-column">
              <h4 className="link-title">[COMPANY]</h4>
              <ul>
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a href={link.href}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="link-column">
              <h4 className="link-title">[LEGAL]</h4>
              <ul>
                {footerLinks.legal.map((link, index) => (
                  <li key={index}>
                    <a href={link.href}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="link-column">
              <h4 className="link-title">[COMMUNITY]</h4>
              <ul>
                {footerLinks.community.map((link, index) => (
                  <li key={index}>
                    <a href={link.href}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Separator */}
      <div className="footer-separator">
        <div className="separator-line"></div>
        <div className="separator-dots">
          <span>◆</span>
          <span>◆</span>
          <span>◆</span>
        </div>
        <div className="separator-line"></div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <div className="footer-container">
          <div className="copyright">
            <p>&copy; {currentYear} LLM BAITHAK. ALL RIGHTS RESERVED.</p>
          </div>

          <div className="footer-badge">
            <span className="badge-text">SYSTEM STATUS:</span>
            <span className="status-indicator"></span>
            <span className="status-text">OPERATIONAL</span>
          </div>
        </div>
      </div>

      {/* Retro Terminal Footer */}
      <div className="terminal-footer">
        <pre className="terminal-text">
{`████████╗███████╗██╗  ██╗████████╗███╗   ███╗ ██████╗ ██████╗ ███████╗
╚══██╔══╝██╔════╝╚██╗██╔╝╚══██╔══╝████╗ ████║██╔═══██╗██╔══██╗██╔════╝
   ██║   █████╗   ╚███╔╝    ██║   ██╔████╔█║██║   ██║██║  ██║█████╗
   ██║   ██╔══╝   ██╔██╗    ██║   ██║╚██╔╝██║██║   ██║██║  ██║██╔══╝
   ██║   ███████╗██╔╝ ██╗   ██║   ██║ ╚═╝ ██║╚██████╔╝██████╔╝███████╗
   ╚═╝   ╚══════╝╚═╝  ╚═╝   ╚═╝   ╚═╝     ╚═╝ ╚═════╝ ╚═════╝ ╚══════╝
`}
        </pre>
      </div>
    </footer>
  );
}

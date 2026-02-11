import { useState } from 'react';
import './WaitlistPage.css';

export default function WaitlistPage({ onBack, onSignup, onLogin }) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !name) return;

    setIsLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    setSubmitted(true);
    setIsLoading(false);
  };

  if (submitted) {
    return (
      <div className="waitlist-page">
        <div className="waitlist-container">
          <div className="success-box retro-box">
            <div className="success-icon">✓</div>
            <h2 className="success-title">YOU'RE ON THE LIST!</h2>
            <p className="success-message">
              &gt; Thank you for joining our waitlist, {name}!
            </p>
            <p className="success-message">
              &gt; We'll notify you at <span className="highlight">{email}</span> when it's your turn.
            </p>
            <div className="success-position">
              <span className="position-label">YOUR POSITION:</span>
              <span className="position-number">#{Math.floor(Math.random() * 1000) + 1}</span>
            </div>
            <div className="success-actions">
              <button className="retro-btn secondary" onClick={onBack}>
                [BACK TO HOME]
              </button>
              <button className="retro-btn primary" onClick={onLogin}>
                [I HAVE AN ACCOUNT]
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="waitlist-page">
      <div className="waitlist-container">
        {/* Header */}
        <div className="waitlist-header">
          <button className="back-btn" onClick={onBack}>
            {'<'} BACK
          </button>
          <div className="header-logo">
            <svg className="logo-icon" viewBox="0 0 64 64" fill="none">
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
            <h1>LLM BAITHAK</h1>
          </div>
        </div>

        {/* Main Content */}
        <div className="waitlist-content">
          <div className="waitlist-box retro-box">
            <h2 className="box-title">&gt; JOIN_WAITLIST.EXE</h2>
            <p className="box-subtitle">
              Be among the first to experience the power of collaborative AI deliberation.
            </p>

            {/* Stats */}
            <div className="waitlist-stats">
              <div className="stat">
                <span className="stat-value">2,847</span>
                <span className="stat-label">ON WAITLIST</span>
              </div>
              <div className="stat">
                <span className="stat-value">500</span>
                <span className="stat-label">BETA SLOTS</span>
              </div>
              <div className="stat">
                <span className="stat-value">Q2 2025</span>
                <span className="stat-label">LAUNCH DATE</span>
              </div>
            </div>

            {/* Form */}
            <form className="waitlist-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">YOUR_NAME:</label>
                <input
                  type="text"
                  id="name"
                  className="retro-input"
                  placeholder="ENTER YOUR FULL NAME..."
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">YOUR_EMAIL:</label>
                <input
                  type="email"
                  id="email"
                  className="retro-input"
                  placeholder="ENTER YOUR EMAIL ADDRESS..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <button type="submit" className="retro-btn primary submit-btn" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <span className="loading-dots">PROCESSING</span>
                    <span className="blink-cursor">_</span>
                  </>
                ) : (
                  '[JOIN WAITLIST]'
                )}
              </button>
            </form>

            {/* Benefits */}
            <div className="waitlist-benefits">
              <h3>&gt; EARLY_ACCESS_BENEFITS:</h3>
              <ul>
                <li><span className="bullet">►</span> Priority access to beta</li>
                <li><span className="bullet">►</span> 50% off Pro plan for 6 months</li>
                <li><span className="bullet">►</span> Exclusive feature requests</li>
                <li><span className="bullet">►</span> Founding member badge</li>
              </ul>
            </div>

            {/* Alternative Actions */}
            <div className="alt-actions">
              <p>Already have an account?</p>
              <button className="retro-btn link" onClick={onLogin}>
                [LOGIN HERE]
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="waitlist-footer">
          <p>&copy; 2025 LLM BAITHAK. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </div>
  );
}

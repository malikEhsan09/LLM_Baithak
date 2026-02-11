import { useState } from 'react';
import './LoginPage.css';

export default function LoginPage({ onBack, onSignup, onLoginSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Hardcoded credentials for demo
  const VALID_EMAIL = 'admin@llmbaithak.com';
  const VALID_PASSWORD = 'admin.llm';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    setIsLoading(true);

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Check hardcoded credentials
    if (email === VALID_EMAIL && password === VALID_PASSWORD) {
      // Login successful
      setIsLoading(false);
      onLoginSuccess();
    } else {
      setIsLoading(false);
      setError('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        {/* Header */}
        <div className="login-header">
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
        <div className="login-content">
          <div className="login-box retro-box">
            <h2 className="box-title">&gt; LOGIN.EXE</h2>
            <p className="box-subtitle">
              Welcome back! Access your AI council dashboard.
            </p>

            {/* Error Message */}
            {error && (
              <div className="error-box">
                <span className="error-icon">⚠</span>
                <span className="error-message">{error}</span>
              </div>
            )}

            <form className="login-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">EMAIL_ADDRESS:</label>
                <input
                  type="email"
                  id="email"
                  className="retro-input"
                  placeholder="ENTER YOUR EMAIL..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isLoading}
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">PASSWORD:</label>
                <div className="password-input-wrapper">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    className="retro-input"
                    placeholder="ENTER YOUR PASSWORD..."
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={isLoading}
                  />
                  <button
                    type="button"
                    className="toggle-password"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? '🙈' : '👁'}
                  </button>
                </div>
              </div>

              <div className="form-options">
                <label className="remember-me">
                  <input type="checkbox" />
                  <span>Remember me</span>
                </label>
                <a href="#" className="forgot-password">
                  Forgot password?
                </a>
              </div>

              <button type="submit" className="retro-btn primary submit-btn" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <span className="loading-text">AUTHENTICATING</span>
                    <span className="blink-cursor">_</span>
                  </>
                ) : (
                  '[LOGIN]'
                )}
              </button>
            </form>

            {/* Demo Credentials Info */}
            <div className="demo-credentials">
              <h3>&gt; DEMO_CREDENTIALS:</h3>
              <div className="credential-item">
                <span className="credential-label">EMAIL:</span>
                <span className="credential-value">admin@llmbaithak.com</span>
              </div>
              <div className="credential-item">
                <span className="credential-label">PASSWORD:</span>
                <span className="credential-value">admin.llm</span>
              </div>
            </div>

            {/* Divider */}
            <div className="divider">
              <span className="divider-line"></span>
              <span className="divider-text">OR</span>
              <span className="divider-line"></span>
            </div>

            {/* Alternative Actions */}
            <div className="alt-actions">
              <p>Don't have an account?</p>
              <button className="retro-btn link" onClick={onSignup}>
                [SIGN UP HERE]
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="login-footer">
          <p>&copy; 2025 LLM BAITHAK. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </div>
  );
}

import { useState } from 'react';
import './SignupPage.css';

export default function SignupPage({ onBack, onLogin }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
    // Clear error when user starts typing
    if (errors[e.target.id]) {
      setErrors({
        ...errors,
        [e.target.id]: '',
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    // In real app, this would create the account
    alert('Account created successfully! Please login.');
    setIsLoading(false);
    onLogin();
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        {/* Header */}
        <div className="signup-header">
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
        <div className="signup-content">
          <div className="signup-box retro-box">
            <h2 className="box-title">&gt; CREATE_ACCOUNT.EXE</h2>
            <p className="box-subtitle">
              Join the AI council revolution today.
            </p>

            <form className="signup-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">FULL_NAME:</label>
                <input
                  type="text"
                  id="name"
                  className={`retro-input ${errors.name ? 'error' : ''}`}
                  placeholder="ENTER YOUR FULL NAME..."
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <span className="error-text">{errors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="email">EMAIL_ADDRESS:</label>
                <input
                  type="email"
                  id="email"
                  className={`retro-input ${errors.email ? 'error' : ''}`}
                  placeholder="ENTER YOUR EMAIL..."
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <span className="error-text">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="password">PASSWORD:</label>
                <input
                  type="password"
                  id="password"
                  className={`retro-input ${errors.password ? 'error' : ''}`}
                  placeholder="CREATE A PASSWORD (MIN 8 CHARS)..."
                  value={formData.password}
                  onChange={handleChange}
                />
                {errors.password && <span className="error-text">{errors.password}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="confirmPassword">CONFIRM_PASSWORD:</label>
                <input
                  type="password"
                  id="confirmPassword"
                  className={`retro-input ${errors.confirmPassword ? 'error' : ''}`}
                  placeholder="CONFIRM YOUR PASSWORD..."
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
                {errors.confirmPassword && <span className="error-text">{errors.confirmPassword}</span>}
              </div>

              <div className="terms-checkbox">
                <input type="checkbox" id="terms" required />
                <label htmlFor="terms">
                  I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>
                </label>
              </div>

              <button type="submit" className="retro-btn primary submit-btn" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <span className="loading-text">CREATING ACCOUNT</span>
                    <span className="blink-cursor">_</span>
                  </>
                ) : (
                  '[CREATE ACCOUNT]'
                )}
              </button>
            </form>

            {/* Divider */}
            <div className="divider">
              <span className="divider-line"></span>
              <span className="divider-text">OR</span>
              <span className="divider-line"></span>
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
        <div className="signup-footer">
          <p>&copy; 2025 LLM BAITHAK. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </div>
  );
}

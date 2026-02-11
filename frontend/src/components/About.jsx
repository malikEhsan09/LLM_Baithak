import './About.css';

export default function About() {
  return (
    <section className="about-section" id="about">
      <h2 className="retro-section-title">ABOUT OUR PRODUCT</h2>
      <p className="retro-section-subtitle">// REVOLUTIONIZING AI COLLABORATION</p>

      <div className="about-content">
        {/* Main Description */}
        <div className="about-main retro-box">
          <div className="retro-header">
            <span className="retro-bracket">[</span>
            <span className="retro-label">SYSTEM_DESCRIPTION</span>
            <span className="retro-bracket">]</span>
          </div>
          <div className="about-text">
            <p className="about-intro">
              &gt; LLM Baithak is an innovative AI deliberation system that brings together multiple
              large language models to collaborate, debate, and synthesize superior answers.
            </p>
            <p className="about-detail">
              &gt; Unlike traditional single-model systems, our platform employs a three-stage council
              approach where diverse AI perspectives are anonymized, evaluated, and combined to provide
              more comprehensive and reliable responses.
            </p>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="features-grid">
          {/* Feature 1 */}
          <div className="feature-card retro-box">
            <div className="feature-icon">
              <svg width="50" height="50" viewBox="0 0 64 64" fill="none">
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
            </div>
            <h3 className="feature-title">MULTI-MODEL COUNCIL</h3>
            <p className="feature-description">
              Multiple AI models analyze your query simultaneously, providing diverse perspectives
              and insights.
            </p>
            <div className="feature-status">
              <span className="status-dot"></span>
              <span className="status-text">ACTIVE</span>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="feature-card retro-box">
            <div className="feature-icon">
              <svg width="50" height="50" viewBox="0 0 64 64" fill="none">
                <rect x="8" y="12" width="48" height="40" rx="4" stroke="#00ff00" strokeWidth="3" fill="none"/>
                <circle cx="20" cy="24" r="4" fill="#00aa00"/>
                <circle cx="32" cy="24" r="4" fill="#00aa00"/>
                <circle cx="44" cy="24" r="4" fill="#00aa00"/>
                <rect x="14" y="36" width="36" height="3" fill="#00ff00"/>
                <rect x="14" y="42" width="28" height="3" fill="#00ff00"/>
              </svg>
            </div>
            <h3 className="feature-title">ANONYMOUS PEER REVIEW</h3>
            <p className="feature-description">
              Models evaluate responses blindly, preventing bias and ensuring fair assessment
              of each contribution.
            </p>
            <div className="feature-status">
              <span className="status-dot"></span>
              <span className="status-text">ACTIVE</span>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="feature-card retro-box">
            <div className="feature-icon">
              <svg width="50" height="50" viewBox="0 0 64 64" fill="none">
                <path d="M32 8 L56 20 L56 44 L32 56 L8 44 L8 20 Z" stroke="#00ff00" strokeWidth="3" fill="none"/>
                <circle cx="32" cy="32" r="12" stroke="#00aa00" strokeWidth="2" fill="none"/>
                <circle cx="32" cy="32" r="6" fill="#00ff00"/>
              </svg>
            </div>
            <h3 className="feature-title">SYNTHESIZED WISDOM</h3>
            <p className="feature-description">
              A chairman model combines the best insights from all evaluations into one
              comprehensive, superior answer.
            </p>
            <div className="feature-status">
              <span className="status-dot"></span>
              <span className="status-text">ACTIVE</span>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="feature-card retro-box">
            <div className="feature-icon">
              <svg width="50" height="50" viewBox="0 0 64 64" fill="none">
                <rect x="12" y="8" width="40" height="48" rx="2" stroke="#00ff00" strokeWidth="3" fill="none"/>
                <line x1="20" y1="20" x2="44" y2="20" stroke="#00aa00" strokeWidth="2"/>
                <line x1="20" y1="28" x2="44" y2="28" stroke="#00aa00" strokeWidth="2"/>
                <line x1="20" y1="36" x2="36" y2="36" stroke="#00aa00" strokeWidth="2"/>
                <circle cx="42" cy="44" r="6" stroke="#00ff00" strokeWidth="2" fill="none"/>
                <line x1="38" y1="44" x2="46" y2="44" stroke="#00ff00" strokeWidth="2"/>
              </svg>
            </div>
            <h3 className="feature-title">TRANSPARENT PROCESS</h3>
            <p className="feature-description">
              Full visibility into each stage of deliberation. See individual responses,
              evaluations, and the final synthesis.
            </p>
            <div className="feature-status">
              <span className="status-dot"></span>
              <span className="status-text">ACTIVE</span>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="how-it-works retro-box">
          <h3 className="how-title">&gt; HOW_IT_WORKS.EXE</h3>
          <div className="steps-container">
            <div className="step">
              <div className="step-number">01</div>
              <div className="step-content">
                <h4>STAGE 1: COLLECT</h4>
                <p>Multiple AI models independently analyze your query and provide their unique perspectives.</p>
              </div>
            </div>
            <div className="step-arrow">▼</div>
            <div className="step">
              <div className="step-number">02</div>
              <div className="step-content">
                <h4>STAGE 2: EVALUATE</h4>
                <p>Models anonymously review and rank each other's responses based on quality and accuracy.</p>
              </div>
            </div>
            <div className="step-arrow">▼</div>
            <div className="step">
              <div className="step-number">03</div>
              <div className="step-content">
                <h4>STAGE 3: SYNTHESIZE</h4>
                <p>The chairman model combines all insights and evaluations into one superior, comprehensive answer.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

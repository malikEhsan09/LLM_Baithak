import './Hero.css';

export default function Hero({ onGetStarted }) {
  return (
    <section className="hero-section" id="home">
      <div className="hero-content">
        {/* Retro TV Container */}
        <div className="retro-tv">
          {/* TV Outer Frame */}
          <div className="tv-frame">
            {/* TV Screen Bezel */}
            <div className="tv-bezel">
              {/* TV Screen */}
              <div className="tv-screen">
                {/* Screen Content */}
                <div className="screen-content">
                  {/* Animated Logo */}
                  <div className="hero-logo">
                    <svg className="hero-logo-svg" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {/* Center circle - main council hub */}
                      <circle cx="32" cy="32" r="8" fill="#00ff00" className="hub-pulse" />

                      {/* Outer circles - individual LLM models */}
                      <circle cx="32" cy="12" r="6" fill="#00aa00" className="node-pulse-1" />
                      <circle cx="47" cy="22" r="6" fill="#00aa00" className="node-pulse-2" />
                      <circle cx="47" cy="42" r="6" fill="#00aa00" className="node-pulse-3" />
                      <circle cx="32" cy="52" r="6" fill="#00aa00" className="node-pulse-4" />
                      <circle cx="17" cy="42" r="6" fill="#00aa00" className="node-pulse-5" />
                      <circle cx="17" cy="22" r="6" fill="#00aa00" className="node-pulse-6" />

                      {/* Connection lines */}
                      <line x1="32" y1="20" x2="32" y2="24" stroke="#00ff00" strokeWidth="2" className="line-flow-1" />
                      <line x1="41" y1="26" x2="38" y2="28" stroke="#00ff00" strokeWidth="2" className="line-flow-2" />
                      <line x1="41" y1="38" x2="38" y2="36" stroke="#00ff00" strokeWidth="2" className="line-flow-3" />
                      <line x1="32" y1="44" x2="32" y2="40" stroke="#00ff00" strokeWidth="2" className="line-flow-4" />
                      <line x1="23" y1="38" x2="26" y2="36" stroke="#00ff00" strokeWidth="2" className="line-flow-5" />
                      <line x1="23" y1="26" x2="26" y2="28" stroke="#00ff00" strokeWidth="2" className="line-flow-6" />
                    </svg>
                  </div>

                  {/* Hero Title */}
                  <h1 className="hero-title">LLM BAITHAK</h1>
                  <p className="hero-subtitle">MULTIPLE AI MINDS, ONE SUPERIOR ANSWER</p>

                  {/* Retro decorative elements */}
                  <div className="screen-decorations">
                    <span className="corner-bracket top-left">┌</span>
                    <span className="corner-bracket top-right">┐</span>
                    <span className="corner-bracket bottom-left">└</span>
                    <span className="corner-bracket bottom-right">┘</span>
                  </div>

                  {/* Scanlines effect */}
                  <div className="scanlines"></div>
                </div>
              </div>
            </div>

            {/* TV Controls */}
            <div className="tv-controls">
              <div className="control-panel">
                <div className="knob">
                  <span className="knob-label">VOLUME</span>
                </div>
                <div className="knob">
                  <span className="knob-label">CHANNEL</span>
                </div>
                <div className="power-indicator"></div>
              </div>
            </div>
          </div>

          {/* TV Antenna */}
          <div className="tv-antenna">
            <div className="antenna-left"></div>
            <div className="antenna-right"></div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="hero-cta">
          <button className="retro-cta-btn" onClick={onGetStarted}>
            <span className="btn-icon">►</span>
            <span className="btn-text">GET STARTED</span>
            <span className="btn-cursor">_</span>
          </button>
          <p className="hero-tagline">
            [ PRESS START TO BEGIN YOUR AI JOURNEY ]
          </p>
        </div>
      </div>

      {/* Background Elements */}
      <div className="hero-bg-elements">
        <div className="floating-code code-1">01001000 01000101 01001100 01001100 01001111</div>
        <div className="floating-code code-2">&gt; SYSTEM READY...</div>
        <div className="floating-code code-3">AI_COUNCIL.ACTIVATED()</div>
        <div className="floating-code code-4">SELECT MODEL_ID FROM BRAINS...</div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <span>SCROLL DOWN</span>
        <div className="scroll-arrow">▼</div>
      </div>
    </section>
  );
}

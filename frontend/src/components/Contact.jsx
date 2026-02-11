import './Contact.css';

export default function Contact() {
  const contacts = [
    {
      name: 'EHSAN AHMED RAFIQUE',
      role: 'FOUNDER & LEAD ARCHITECT',
      email: 'ehsan@llmbaithak.com',
      avatar: '👨‍💻',
      location: 'PAKISTAN',
    },
    {
      name: 'M. AJMAL MALIK',
      role: 'HEAD OF OPERATIONS',
      email: 'ajmal@llmbaithak.com',
      avatar: '👨‍💼',
      location: 'PAKISTAN',
    },
  ];

  return (
    <section className="contact-section" id="contact">
      <h2 className="retro-section-title">CONTACT US</h2>
      <p className="retro-section-subtitle">// GET IN TOUCH WITH THE TEAM</p>

      <div className="contact-content">
        {/* Contact Cards */}
        <div className="contact-grid">
          {contacts.map((contact, index) => (
            <div key={index} className="contact-card retro-box">
              <div className="contact-avatar">{contact.avatar}</div>
              <h3 className="contact-name">{contact.name}</h3>
              <p className="contact-role">{contact.role}</p>

              <div className="contact-details">
                <div className="contact-item">
                  <span className="contact-icon">✉</span>
                  <span className="contact-label">EMAIL:</span>
                  <a href={`mailto:${contact.email}`} className="contact-email">
                    {contact.email}
                  </a>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <span className="contact-label">LOCATION:</span>
                  <span className="contact-value">{contact.location}</span>
                </div>
              </div>

              <button className="contact-btn">
                <span className="btn-text">SEND MESSAGE</span>
                <span className="btn-arrow">→</span>
              </button>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="contact-form-container retro-box">
          <h3 className="form-title">&gt; SEND_US_A_MESSAGE.EXE</h3>

          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">YOUR_NAME:</label>
              <input
                type="text"
                id="name"
                placeholder="ENTER YOUR NAME..."
                className="retro-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">YOUR_EMAIL:</label>
              <input
                type="email"
                id="email"
                placeholder="ENTER YOUR EMAIL..."
                className="retro-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">SUBJECT:</label>
              <select id="subject" className="retro-select">
                <option value="">SELECT SUBJECT...</option>
                <option value="general">GENERAL INQUIRY</option>
                <option value="support">TECHNICAL SUPPORT</option>
                <option value="sales">SALES / ENTERPRISE</option>
                <option value="feedback">FEEDBACK</option>
                <option value="other">OTHER</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">MESSAGE:</label>
              <textarea
                id="message"
                rows="6"
                placeholder="TYPE YOUR MESSAGE HERE..."
                className="retro-textarea"
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              <span className="btn-icon">►</span>
              <span>TRANSMIT MESSAGE</span>
              <span className="btn-cursor">_</span>
            </button>
          </form>
        </div>

        {/* Additional Contact Info */}
        <div className="contact-info retro-box">
          <h3 className="info-title">&gt; OTHER_WAYS_TO_CONNECT</h3>

          <div className="info-links">
            <a href="#" className="info-link">
              <span className="link-icon">𝕏</span>
              <span className="link-text">@LLMBAITHAK</span>
            </a>
            <a href="#" className="info-link">
              <span className="link-icon">in</span>
              <span className="link-text">LINKEDIN</span>
            </a>
            <a href="#" className="info-link">
              <span className="link-icon">💬</span>
              <span className="link-text">DISCORD COMMUNITY</span>
            </a>
            <a href="#" className="info-link">
              <span className="link-icon">🐙</span>
              <span className="link-text">GITHUB</span>
            </a>
          </div>

          <div className="response-time">
            <p>&gt; AVERAGE RESPONSE TIME: 24 HOURS</p>
            <p>&gt; SUPPORT HOURS: MON-FRI, 9AM-6PM IST</p>
          </div>
        </div>
      </div>
    </section>
  );
}

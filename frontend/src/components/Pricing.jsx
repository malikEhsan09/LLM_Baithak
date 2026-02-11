import './Pricing.css';

export default function Pricing() {
  const plans = [
    {
      name: 'FREE',
      price: '$0',
      period: 'forever',
      icon: '🎮',
      features: [
        '5 queries per day',
        '3 AI models in council',
        'Basic deliberation',
        'Public conversations',
        'Community support',
      ],
      highlighted: false,
    },
    {
      name: 'PRO',
      price: '$19',
      period: 'per month',
      icon: '⚡',
      features: [
        'Unlimited queries',
        '7 AI models in council',
        'Advanced peer review',
        'Private conversations',
        'Priority support',
        'API access (10K calls)',
        'Export conversations',
      ],
      highlighted: true,
    },
    {
      name: 'ENTERPRISE',
      price: 'CUSTOM',
      period: 'contact us',
      icon: '🏢',
      features: [
        'Everything in PRO',
        'Unlimited AI models',
        'Custom model selection',
        'Team collaboration',
        'Dedicated support',
        'Unlimited API access',
        'SLA guarantee',
        'On-premise deployment',
      ],
      highlighted: false,
    },
  ];

  return (
    <section className="pricing-section" id="pricing">
      <h2 className="retro-section-title">PRICING</h2>
      <p className="retro-section-subtitle">// CHOOSE YOUR POWER LEVEL</p>

      <div className="pricing-grid">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`pricing-card retro-box ${plan.highlighted ? 'highlighted' : ''}`}
          >
            {plan.highlighted && (
              <div className="featured-badge">
                <span>★ BEST VALUE</span>
              </div>
            )}

            <div className="plan-icon">{plan.icon}</div>

            <h3 className="plan-name">{plan.name}</h3>

            <div className="plan-price">
              <span className="price-amount">{plan.price}</span>
              <span className="price-period">{plan.period}</span>
            </div>

            <div className="plan-features">
              <ul>
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>
                    <span className="feature-bullet">►</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button className={`plan-btn ${plan.highlighted ? 'highlighted-btn' : ''}`}>
              {plan.price === '$0' ? 'START FREE' : plan.price === 'CUSTOM' ? 'CONTACT US' : 'SUBSCRIBE'}
            </button>
          </div>
        ))}
      </div>

      {/* Pricing Note */}
      <div className="pricing-note retro-box">
        <p>
          &gt; All plans include our core three-stage deliberation system with anonymous peer review.
        </p>
        <p>
          &gt; Upgrade or downgrade at any time. No hidden fees, no commitments.
        </p>
        <p className="blink-text">
          &gt; SPECIAL LAUNCH OFFER: Get 50% off PRO plan for first 3 months!
        </p>
      </div>
    </section>
  );
}

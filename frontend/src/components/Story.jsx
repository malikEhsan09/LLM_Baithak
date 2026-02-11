import './Story.css';

export default function Story() {
  const timeline = [
    {
      year: '2023',
      title: 'THE SPARK',
      description: 'Frustrated with inconsistent AI responses, our founder wondered: What if multiple AI models could collaborate and debate to find the best answer?',
    },
    {
      year: 'EARLY 2024',
      title: 'PROTOTYPE BORN',
      description: 'Built the first experimental version with 3 AI models. The results were promising - combined answers were significantly more accurate and nuanced.',
    },
    {
      year: 'MID 2024',
      title: 'ANONYMITY BREAKTHROUGH',
      description: 'Discovered that anonymizing responses before peer review eliminated bias. Models couldn\'t play favorites - they had to evaluate purely on merit.',
    },
    {
      year: 'LATE 2024',
      title: 'BAITHAK IS BORN',
      description: 'Named the platform "Baithak" (Hindi for "gathering place"). The three-stage council system was perfected and tested with real users.',
    },
    {
      year: '2025',
      title: 'PUBLIC LAUNCH',
      description: 'LLM Baithak launches to the world, bringing democratic AI deliberation to everyone. Multiple AI minds, one superior answer.',
    },
  ];

  return (
    <section className="story-section" id="story">
      <h2 className="retro-section-title">OUR STORY</h2>
      <p className="retro-section-subtitle">// THE JOURNEY OF COLLECTIVE AI INTELLIGENCE</p>

      <div className="story-content">
        {/* Intro Box */}
        <div className="story-intro retro-box">
          <h3 className="intro-title">&gt; WHY_WE_EXIST.DAT</h3>
          <p className="intro-text">
            In a world where each AI model has its own strengths and biases, we asked ourselves:
            What if instead of choosing ONE model, we could have them ALL work together?
            What if they could debate, evaluate, and synthesize the best possible answer?
          </p>
          <p className="intro-text">
            LLM Baithak is our answer to that question. A "baithak" where AI minds gather,
            deliberate anonymously, and emerge with wisdom greater than any single model could provide.
          </p>
        </div>

        {/* Timeline */}
        <div className="timeline">
          {timeline.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker">
                <div className="marker-dot"></div>
                {index < timeline.length - 1 && <div className="marker-line"></div>}
              </div>
              <div className="timeline-content retro-box">
                <div className="timeline-year">{item.year}</div>
                <h4 className="timeline-title">{item.title}</h4>
                <p className="timeline-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="mission-box retro-box">
          <h3 className="mission-title">&gt; OUR_MISSION.EXE</h3>
          <div className="mission-content">
            <p className="mission-text">
              To democratize access to collective AI intelligence. We believe that the best answers
              come from diverse perspectives thoughtfully evaluated and synthesized - not from
              any single source of truth.
            </p>
            <p className="mission-text">
              Just as human wisdom emerges from deliberation and debate, AI wisdom should emerge
              from the collaboration of multiple models, each bringing their unique strengths to
              the table.
            </p>
            <div className="mission-quote">
              <span className="quote-mark">"</span>
              Aloneness is the curse of genius. Collaboration is the birthplace of wisdom.
              <span className="quote-mark">"</span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="stats-grid">
          <div className="stat-card retro-box">
            <div className="stat-value">7+</div>
            <div className="stat-label">AI MODELS IN COUNCIL</div>
          </div>
          <div className="stat-card retro-box">
            <div className="stat-value">3</div>
            <div className="stat-label">STAGE DELIBERATION</div>
          </div>
          <div className="stat-card retro-box">
            <div className="stat-value">100%</div>
            <div className="stat-label">ANONYMOUS REVIEW</div>
          </div>
          <div className="stat-card retro-box">
            <div className="stat-value">∞</div>
            <div className="stat-label">POTENTIAL ANSWERS</div>
          </div>
        </div>
      </div>
    </section>
  );
}

import './LoadingLogo.css';

export default function LoadingLogo({ size = 64 }) {
  return (
    <svg
      className="loading-logo"
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer circles - individual LLM models with pulse animation */}
      <circle className="node node-1" cx="32" cy="12" r="6" fill="#f06292" />
      <circle className="node node-2" cx="47" cy="22" r="6" fill="#f06292" />
      <circle className="node node-3" cx="47" cy="42" r="6" fill="#f06292" />
      <circle className="node node-4" cx="32" cy="52" r="6" fill="#f06292" />
      <circle className="node node-5" cx="17" cy="42" r="6" fill="#f06292" />
      <circle className="node node-6" cx="17" cy="22" r="6" fill="#f06292" />

      {/* Connection lines with flow animation */}
      <line className="connection conn-1" x1="32" y1="18" x2="32" y2="24" stroke="#e91e63" strokeWidth="2" />
      <line className="connection conn-2" x1="42" y1="24" x2="38" y2="28" stroke="#e91e63" strokeWidth="2" />
      <line className="connection conn-3" x1="42" y1="40" x2="38" y2="36" stroke="#e91e63" strokeWidth="2" />
      <line className="connection conn-4" x1="32" y1="46" x2="32" y2="40" stroke="#e91e63" strokeWidth="2" />
      <line className="connection conn-5" x1="22" y1="40" x2="26" y2="36" stroke="#e91e63" strokeWidth="2" />
      <line className="connection conn-6" x1="22" y1="24" x2="26" y2="28" stroke="#e91e63" strokeWidth="2" />

      {/* Center circle - main council hub with breathing animation */}
      <circle className="center-hub" cx="32" cy="32" r="8" fill="#e91e63" />

      {/* Thinking dots - small particles orbiting */}
      <circle className="particle particle-1" cx="32" cy="32" r="2" fill="#fff" />
      <circle className="particle particle-2" cx="32" cy="32" r="2" fill="#fff" />
      <circle className="particle particle-3" cx="32" cy="32" r="2" fill="#fff" />
    </svg>
  );
}

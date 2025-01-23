import { useState } from "react";

const containerStyle = {
  fontSize: "clamp(1.6rem, 5vw, 1.8rem)",
  color: "var(--white)",
  width: "100%",
};

const listStyle = {
  listStyle: "none",
  display: "grid",
};

const linkStyle = {
  fontFamily: "Freshman, sans-serif",
  textDecoration: "none",
  color: "var(--white)",
};

const buttonStyle = {
  border: "none",
  background: "none",
  cursor: "pointer",
};

const NavigationMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={containerStyle}>
      <button style={buttonStyle} onClick={() => setIsOpen(!isOpen)}>
        {!isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
          >
            <path
              fill="var(--white)"
              d="M3 4h18v2H3zm0 7h18v2H3zm0 7h18v2H3z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="var(--white)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 5L12 5L19 5M5 12H19M5 19L12 19L19 19"
            >
              <animate
                fill="freeze"
                attributeName="d"
                dur="0.4s"
                values="M5 5L12 5L19 5M5 12H19M5 19L12 19L19 19;M5 5L12 12L19 5M12 12H12M5 19L12 12L19 19"
              />
            </path>
          </svg>
        )}
      </button>
      {isOpen && (
        <ul style={listStyle}>
          <li>
            <a
              onClick={() => setIsOpen(false)}
              style={linkStyle}
              href="#about-me"
            >
              o mnie
            </a>
          </li>
          <li>
            <a style={linkStyle} onClick={() => setIsOpen(false)} href="#offer">
              oferta
            </a>
          </li>
          <li>
            <a
              style={linkStyle}
              onClick={() => setIsOpen(false)}
              href="#testimonials"
            >
              opinie
            </a>
          </li>
          <li>
            <a style={linkStyle} onClick={() => setIsOpen(false)} href="#faq">
              pytania
            </a>
          </li>
          <li>
            <a
              style={linkStyle}
              onClick={() => setIsOpen(false)}
              href="#contact"
            >
              kontakt
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default NavigationMobile;

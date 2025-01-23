import Image from "astro/components/Image.astro";
import arrow from "../images/white-arrow.svg";
import { useState } from "react";

type Props = {
  question: string;
  answer: string;
};

const Question = ({ question, answer }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const containerStyle = {
    fontSize: "clamp(1.6rem, 5vw, 1.8rem)",
    color: "var(--white)",
  };

  const questionStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    gap: "1rem",
    cursor: "pointer",
    fontSize: "inherit",
    border: "none",
    color: isOpen ? "var(--secondary-light)" : "var(--white)",
  };

  const lineStyle = {
    width: "100%",
    maxWidth: "1000px",
    height: "5px",
    backgroundColor: "var(--white)",
    marginInline: "auto",
    marginBlock: "1rem",
  };

  const answerContainerStyle = {
    maxHeight: isOpen ? "500px" : "0px",
    opacity: isOpen ? 1 : 0,
    overflow: "hidden",
    cursor: "pointer",
    transition: "max-height 0.2s ease-in-out, opacity 0.2s ease-in-out",
  };

  const answerStyle = {
    marginBlock: "1rem",
  };

  const imageStyle = {
    transform: isOpen ? "rotate(-90deg)" : "rotate(0deg)",
    transition: "transform 0.3s ease-in-out",
  };

  return (
    <div style={containerStyle}>
      <button onClick={() => setIsOpen(!isOpen)} style={questionStyle}>
        <p>{question}</p>
        <img
          style={imageStyle}
          src={arrow.src}
          alt="arrow"
          width={20}
          height={20}
        />
      </button>
      <div onClick={() => setIsOpen(!isOpen)} style={answerContainerStyle}>
        <p style={answerStyle}>{answer}</p>
      </div>

      <hr style={lineStyle} />
    </div>
  );
};

export default Question;

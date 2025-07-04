import { useEffect, useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";

const quotes = [
  { text: "To the game, you stay a slave", author: "Wanderer" },
  { text: "Peace sells... but who's buying?", author: "Megadeth" },
  { text: "Crack of dawn, all is gone except the will to be", author: "For Whom The Bell Tolls" },
  { text: "Authority pisses me off.", author: "James Hetfield" },
  { text: "Hear the cry of war", author: "Phantom Lord" },
  { text: "Halls of justice painted green, money talking", author: "Lady of Justice" },
  { text: "Death greets me warm", author: "Fade to Black" },
  { text: "Peace is a product, no one actually wanted", author: "Me" },
  { text: "Chained and shadowed to be left behind", author: "Metal Militia" },
  { text: "Color our world blackened", author: "Blackened" },
  { text: "Seeking no truth, winning is all", author: "Lady of Justice" },
];

function Quote() {
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const quote = quotes[quoteIndex];

  return (
    <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
      <blockquote
        style={{
          fontStyle: "italic",
          fontWeight: 500,
          color: "#a5b4fc",
          textAlign: "center",
          opacity: 0.85,
          lineHeight: 1.7,
          letterSpacing: "0.3px",
          transition: "opacity 0.5s ease",
        }}
      >
        <p style={{ margin: 0, fontSize: "1.1rem" }}>“{quote.text}”</p>
        <span style={{
          fontSize: "0.85rem",
          color: "#9ca3af",
          display: "block",
          letterSpacing: "1px",
        }}>
          — {quote.author}
        </span>
      </blockquote>
    </ScrollAnimation>
  );
}

export default Quote;

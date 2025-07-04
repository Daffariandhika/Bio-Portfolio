import { useEffect, useState } from "react";

const quotes = [
  { text: "Crack of dawn, all is gone except the will to be" },
  { text: "Authority pisses me off." },
  { text: "Peace is a product, no one actually wanted" },
  { text: "Chained and shadowed to be left behind" },
  { text: "Only after disaster can we be resurected" },
  { text: "What we do in life, echoes in eternity." },
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
      </blockquote>
  );
}

export default Quote;

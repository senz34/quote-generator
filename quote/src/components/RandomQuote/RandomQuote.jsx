import { useState, useEffect } from "react";
import reload_icon from "../../assets/reload.png";
import "./RandomQuote.css";

function App() {
  const [quote, setQuote] = useState({
    quote: "",
    text: "Hayatta en hakiki mürşit ilimdir.",
    author: "Mustafa Kemal Atatürk",
  });

  const [quotes, setQuotes] = useState([]);

  const loadQuotes = async () => {
    const response = await fetch("https://dummyjson.com/quotes");
    const data = await response.json();
    setQuotes(data.quotes);
  };

  useEffect(() => {
    loadQuotes();
  }, []);

  const random = () => {
    if (quotes.length === 0) return;
    const selected = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(selected);
  };

  return (
    <>
      <div className="container">
        <div className="quote">{quote?.quote || quote.text}</div>
        <div>
          <div className="line"></div>
          <div className="bottom">
            <div className="author">- {quote.author}</div>
            <div className="icons">
              <img src={reload_icon} onClick={random} alt="reload" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

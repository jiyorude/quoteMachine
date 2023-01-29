import "./index.css";
import { useState } from "react";

let quoteStorage = {
  quotes: [
    {
      quote: "True determination will get you further in life than seeking for perfection ever will.",
      author: "Jordy Veenstra",
    },
    {
      quote: "You only live once. But if you do it right, once is enough",
      author: "Mae West",
    },
    {
      quote: "Everything you can imagine is real",
      author: "Pablo Picasso",
    },
    {
      quote: "A day without sunshine is like, you know, night",
      author: "Steve Martin",
    },
    {
      quote: "It's no use going back to yesterday, because I was a different person back then",
      author: "Lewis Carroll",
    },
    {
      quote: "Never memorize anything that you can look up",
      author: "Albert Einstein",
    },
    {
      quote: "I like work: it fascinates me. I can sit and look at it for hours",
      author: "Jerome K. Jerome",
    },
    {
      quote: "If at first you don't succeed, try again. Then quit. No use being a damn fool about it",
      author: "W.C. Fields",
    },
    {
      quote: "Happiness is a warm puppy",
      author: "Charles M. Schulz",
    },
    {
      quote: "Time is an illusion. Lunchtime doubly so",
      author: "Douglas Adams",
    },
  ],
};

function QuoteMachine() {
  const [selectedQuote, setSelectedQuote] = useState(quoteStorage.quotes[0]);

  const handleNewQuote = () => {
    const randomIndex = Math.floor(Math.random() * quoteStorage.quotes.length);
    setSelectedQuote(quoteStorage.quotes[randomIndex]);
  };

  return (
    <div id="quote-box-flex">
      <section id="quote-box">
        <span id="text">{selectedQuote.quote}</span>
        <span id="author">{selectedQuote.author}</span>
        <button id="new-quote" onClick={handleNewQuote}>
          NEW QUOTE
        </button>
        <a
          id="tweet-quote"
          title="Share this quote on Twitter!"
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/intent/tweet"
        >
          <button id="tweetbtn">TWEET QUOTE</button>
        </a>
      </section>
    </div>
  );
}

export default QuoteMachine;

import React, { Component } from "react";
import quotes from "../quotes";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

export class Homepage extends Component {
  render() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    return (
      <div className="manu">
        <Navbar />
        <div className="quote">
          <p className="text">{randomQuote.quote}</p>
        </div>
        <div>
          <Link to="/words-of-wisdom">
            <button>Ooh Yes! Give me more!!</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Homepage;

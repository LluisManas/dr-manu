import React, { Component } from "react";
import quotes from "../quotes";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

export class Homepage extends Component {
  refreshQuote() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  }
  render() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    return (
      <div className="manu">
        <Navbar />
        <div className="quote">
          <p className="text">{randomQuote.quote}</p>
        </div>
        <div>
          <button onClick={this.refreshQuote}>Ooh Yes! Give me more!!</button>
        </div>
      </div>
    );
  }
}

export default Homepage;

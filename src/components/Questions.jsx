import React, { Component } from "react";
import Navbar from "./Navbar";
import questions from "../questions";
import allQuestions from "../questions";

export class Questions extends Component {
  handleChange = (event) => {
    const questions = [event.target.value];

    console.log(questions);
  };

  handleClick(event) {
    console.log("Send");
    event.preventDefault();
  }
  displayResults = () => {
    console.log(this.questions);
    const results = [];
    results.push(this.questions);
    console.log(results);
  };
  render() {
    return (
      <div>
        <Navbar />
        <h1>Shoot Me!</h1>
        <div className="general">
          <div className="div1"></div>
          <div className="questionText">
            <p>
              Ever Wondered what is the meaning of life? Do you want to know the
              answer to the most diffucult and deep questions? Well, lucky you,
              I'm here to answer for you. Feel free to ask me whatever and I
              will answer them during my new seccion at the El Cap News.
            </p>
          </div>
          <div className="div2"></div>
        </div>

        <form onClick={this.handleClick}>
          <label>What's your Question?</label>
          <br></br>
          <input
            onChange={this.handleChange}
            type="text"
            placeholder="Ask Me!"
          />
          <br></br>
          <button onClick={this.displayResults} type="submit">
            Submit
          </button>
        </form>
        <div className="results">{this.results}</div>
      </div>
    );
  }
}

export default Questions;

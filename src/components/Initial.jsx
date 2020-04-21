import React, { Component } from "react";
import { Link } from "react-router-dom";

class Initial extends Component {
  render() {
    return (
      <div className="intro">
        <h1>Hey you Beautiful</h1>
        <p className="introText">
          Are you finding it difficult to isolate? Maybe a little lonely?
          Unsure when this will end? Well move aside negativity!... because Dr.
          Manuelle Tort is here to help with his world famous: Words of wisdom!
        </p>
        <Link to="/words-of-wisdom">
          <button>Oh Yess!</button>
        </Link>
      </div>
    );
  }
}

export default Initial;

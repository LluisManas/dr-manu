import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <Link className="link" to="/questions">
          <li className="navItem">Questions</li>
        </Link>
        <Link className="link" to="/">
          <li className="navItem">Back to Praxis</li>
        </Link>

        <a href="http://giybf.com/" className="navItem">
          Help
        </a>
      </div>
    );
  }
}

export default Navbar;

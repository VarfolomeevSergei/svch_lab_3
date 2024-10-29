// Button.js
import { Component } from "react";
import './Logo.css'; 

class Logo extends Component {
  render() {
    return (
      <div className="header-logo-container">
          <img className="header-first-logo" src="../../img/logo-1.png" alt="Logo 1" />
          <img className="header-second-logo" src="../../img/logo-2.png" alt="Logo 2" />
        </div>
    );
  }
}

export default Logo;
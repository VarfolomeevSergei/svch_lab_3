import { Component } from "react";
import "./footer.css";

const Footer = () => {
  return (
      <footer className="footer-style">
        <div className="footer-section-first-container">
        <div className="footer-section-container flex-box-between">
          <div className="footer-section-left-container">
            <h5 className="lng-sign-up-if-you">Sign up if you want pure gold in your inbox.</h5>
            <p>© Copyright Isimemen 2022</p>
          </div>
          <div className="footer-section-right-container">
            <p className="lng-Company">Company</p>
            <a className="lng-About" href="">About</a>
            <a className="lng-Fulfilled" href="">Fulfilled Coaching Program</a>
            <a className="lng-Client" href="">Client Wins</a>
            <a className="lng-Press" href="">Press & Media</a>
            <a className="lng-Privacy" href="">Privacy</a>
            <a className="lng-Terms" href="">Terms & Conditions</a>
            <a className="lng-Brand" href="">Brand Design by Provoke</a>
            <a href="tel:375-447-387182">+375-447-387182</a>
            <a href="admin_panel/admin_panel.html">
              <p className="admin_panel123 hidden">Admin Panel</p>
            </a>
          </div>
        </div>
      </div>
      </footer>
    );
  }


export default Footer;

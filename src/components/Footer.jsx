import React from 'react';
import logo from "../image/forecastlogo.svg";


import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__inner">
        <a className="footer__brand" href="/">
          <img className="footer__logo" src={logo} alt="Forecast Logo" />
        </a>

        <section className="footer-adress">
          <span className="footer-adress_span">Address</span>
          <span className="footer-adress_str">Svobody str. 35</span>
          <span className="footer-adress_sity">Kyiv</span>
          <span className="footer-adress_country">Ukraine</span>
        </section>

        <p className="p">Contact us</p>

        <nav className="footer__social">
          <a
            className="footer__social-link"
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            title="Instagram"
          >
            <FaInstagram size={24} />
          </a>

          <a
            className="footer__social-link"
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            title="Facebook"
          >
            <FaFacebook size={24} />
          </a>

          <a
            className="footer__social-link"
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            title="WhatsApp"
          >
            <FaWhatsapp size={24} />
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;

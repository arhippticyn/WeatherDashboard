import React from 'react';
import logo from "../image/forecastlogo.svg";
import facebook from "../iconsFooter/facebook.svg";
import instagram from "../iconsFooter/instagram.svg";
import whatsapp from "../iconsFooter/whatsapp.svg";


const Footer = () => {
  return (
<footer className="footer" role="contentinfo">
      <div className="footer__inner">
        <a className="footer__brand" href="/">
          <img className="footer__logo" src={logo}/>
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
            title=""
          >
            <img src={instagram} alt="" srcset="" />
          </a>

          <a
            className="footer__social-link"
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            title="Instagram"
          >
            <img src={facebook} alt="" srcset="" />
          </a>

          <a
            className="footer__social-link"
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            title="YouTube"
          >
            <img src={whatsapp} alt="" srcset="" />
          </a>
        </nav>
      </div>
    </footer>  );
}

export default Footer;

import React from 'react'
import logo from '../images/logo.svg'


const Footer = () => {
    return (
      <footer
      className="px-8 pt-60 pb-20"
      style={{ backgroundColor: 'hsl(216, 53%, 9%)' }}
    >
      <article className="max-w-7xl mx-auto md:mb-10">
        <img src={logo} alt="" />
      </article>

      <div className="max-w-7xl mx-auto grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 lg:gap-16">
        <p className="flex items-start justify-start gap-3 text-white mt-10 md:mt-0 text-sm">
          <img src="./images/icon-location.svg" alt="" className="mt-2" />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>

        <ul>
          <li className="flex items-center justify-start gap-3 mb-4">
            <img src="./images/icon-phone.svg" alt="" /><a
              href="tel:+1-543-123-4567"
              className="text-white"
              >+1-543-123-4567</a
            >
          </li>
          <li className="flex items-center justify-start gap-3">
            <img src="./images/icon-email.svg" alt="" /><a
              href="mailto:example@fylo.com"
              className="text-white"
              >example@fylo.com</a
            >
          </li>
        </ul>

        <ul className="text-white flex flex-col gap-3 mt-6 lg:mt-0">
          <li>About Us</li>
          <li>Jobs</li>
          <li>Press</li>
          <li>Blog</li>
        </ul>

        <ul className="text-white flex flex-col gap-3 mt-6 lg:mt-0">
          <li>Contact Us</li>
          <li>Terms</li>
          <li>Privacy</li>
        </ul>

        <ul
          className="flex items-center justify-center gap-4 mt-8 md:justify-start lg:mt-0 xl:items-start"
        >
          <li>
            <a href="https://facebook.com/"
              ><i className="fab fa-facebook text-white text-2xl"></i
            ></a>
          </li>
          <li>
            <a href="https://twitter.com"
              ><i className="fab fa-twitter text-white text-2xl"></i
            ></a>
          </li>
          <li>
            <a href="https://instagram.com"
              ><i className="fab fa-instagram text-white text-2xl"></i
            ></a>
          </li>
        </ul>
      </div>
    </footer>
    );
  };
  
  export default Footer;
  
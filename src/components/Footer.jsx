import React from "react";
import pokemon from "../assets/pokemon.svg";
import github from "../assets/github.svg";
import linkeding from "../assets/linkedin.svg";
import instagram from "../assets/instagram.svg";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="name">
          <img src={pokemon} alt="" />
          <p>© 2025 Luidy — Projeto feito por um fã, sem fins lucrativos.</p>
        </div>
        <div className="redes">
          <a href="">
            <img src={github} alt="" />
          </a>
          <a href="">
            <img src={linkeding} alt="" />
          </a>
          <a href="">
            <img src={instagram} alt="" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

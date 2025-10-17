import React from "react";
import pokemon from "../assets/pokemon.svg";
import github from "../assets/github.svg";
import linkeding from "../assets/linkedin.svg";
import instagram from "../assets/instagram.svg";

const Header = () => {
  return (
    <div>
      <header>
        <img src={pokemon} alt="" />
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
      </header>
    </div>
  );
};

export default Header;

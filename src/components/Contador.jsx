import React from "react";
import arrow_left from "../assets/arrow_left.svg";
import arrow_rigth from "../assets/arraw_rigth.svg";

const Contador = ({ indice, setIndice }) => {
  return (
    <div className="contador">
      <button disabled={indice === 0} onClick={() => setIndice(indice - 6)}>
        <img src={arrow_left} alt="" />
      </button>

      <button onClick={() => setIndice(indice + 6)}>
        <img src={arrow_rigth} alt="" />
      </button>
    </div>
  );
};

export default Contador;

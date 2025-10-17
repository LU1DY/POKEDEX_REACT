import React from "react";
import arrayPokemon from "../services/fetchAPI";

const Renderizar = ({ indice }) => {
  const [pokemons, setPokemon] = React.useState([]);

  React.useEffect(() => {
    if (indice > 0) {
      const fetchData = async () => {
        const dados = await arrayPokemon(indice);
        setPokemon(dados);
      };
      fetchData();
    }
  }, [indice]);

  return (
    <div className="section-renderizar">

      {pokemons.map((pokemon) => (
        <p key={pokemon.id}>{pokemon.name}</p>
      ))}
    </div>
  );
};

export default Renderizar;

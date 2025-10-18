import React from "react";
import arrayPokemon from "../services/fetchAPI";
import coresPokemons from "../services/colors";

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
  function requestTypes(pokemon) {
    return pokemon["types"].map((t) => t.type.name);
  }
  console.log(pokemons);
  return (
    <section className="section-render">
      <ul>
        {pokemons.map((pokemon) => (
          <li
            style={{
              backgroundImage: `radial-gradient(80% 80% at 50% bottom, 
              ${
                coresPokemons[requestTypes(pokemon)[0]]
              }, rgba(6, 14, 32, 0.8))`,
            }}
            key={pokemon.id}
          >
            <img
              src={pokemon.sprites.other["official-artwork"].front_default}
              alt=""
            />
            <h3>{pokemon.name}</h3>
            <div className="row-types">
              {requestTypes(pokemon).map((type) => (
                <span
                  style={{ backgroundColor: `${coresPokemons[type]}` }}
                  className="types"
                  key={type}
                >
                  <img src={`/types/${type}.svg`} alt="" /> {type}
                </span>
              ))}
            </div>
            <div className="row">
              <div className="height_weight">
                <h4>Peso</h4>
                <p>{pokemon.weight / 10} KG</p>
              </div>
              <div className="height_weight">
                <h4>Altura</h4>
                <p>{pokemon.height / 10} M</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Renderizar;

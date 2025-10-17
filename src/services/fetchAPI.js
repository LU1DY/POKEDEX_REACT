async function fetchAPI(pokemon) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  const dados = await response.json();
  return dados;
}

async function arrayPokemon(indice) {
  const promessas = [];

  for (let i = indice - 5; i <= indice; i++) {
    promessas.push(fetchAPI(i));
  }

  return await Promise.all(promessas);
}

export default arrayPokemon;


export function updatePokedex(pokemon, pokedex, setPokedex) {

  const updatePokedex = [];

  pokedex.forEach((pokemonOfPokedex) => {

    if (pokemon.name === pokemonOfPokedex.name) {
    } else {
      updatePokedex.push(pokemonOfPokedex);
    }

  });

  setPokedex(updatePokedex);
}

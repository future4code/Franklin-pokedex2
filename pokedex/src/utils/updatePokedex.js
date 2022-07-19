export function updatePokedex(pokemon, pokedex, setPokedex) {
  const updatePokedex = [];
  let isInPokedex = false;

  pokedex.forEach((pokemonOfPokedex) => {
    if (pokemon.name === pokemonOfPokedex.name) isInPokedex = true;
    else updatePokedex.push(pokemonOfPokedex);
  });
  if (!isInPokedex) updatePokedex.push(pokemon);

  setPokedex(updatePokedex);
}

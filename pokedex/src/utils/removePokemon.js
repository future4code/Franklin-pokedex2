export function removePokemon(name, pokedex, setPokedex) {
  const updatePokedex = [];

  pokedex.forEach((pokemon) => {
    if (name === !pokemon.name) updatePokedex.push(pokemon);
  });

  setPokedex(updatePokedex);
}

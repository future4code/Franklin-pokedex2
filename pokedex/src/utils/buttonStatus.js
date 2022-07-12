export function buttonStatus(pokemon, pokedex) {
  let buttonName = "Adicionar";
  let buttonColor = "green";

  pokedex.forEach((pokemonOfPokedex) => {
    if (pokemon.name === pokemonOfPokedex.name) {
      buttonName = "Remover";
      buttonColor = "red";
    }
  });

  return { buttonName, buttonColor };
}

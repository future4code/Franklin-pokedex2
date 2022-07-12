import { usePokedexContext } from "../../contexts/PokedexContext";
import { buttonStatus } from "../../utils/buttonStatus";
import { updatePokedex } from "../../utils/updatePokedex";
import { Button } from "./styles";

function ButtonStatus({pokemon}) {
  const { pokedex, setPokedex } = usePokedexContext();
  const { buttonName, buttonColor } = buttonStatus(pokemon, pokedex);

  return (
    <Button
      onClick={() => updatePokedex(pokemon, pokedex, setPokedex)}
      color={buttonColor}
    >
      {buttonName}
    </Button>
  );
}

export default ButtonStatus;
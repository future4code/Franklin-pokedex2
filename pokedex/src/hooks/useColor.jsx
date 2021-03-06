import { useState, useEffect } from "react";

function useColor() {
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    switch (color) {
      case "fire":
        setColor("#f57d31");
        break;
      case "grass":
        setColor("#74CB48");
        break;
      case "water":
        setColor("#6493EB");
        break;
      case "bug":
        setColor("#A7B723");
        break;
      case "electric":
        setColor("#F9CF30");
        break;
      case "ghost":
        setColor("#70559B");
        break;
      case "psychic":
        setColor("#B7B9D0");
        break;
      case "steel":
        setColor("#FB5584");
        break;
      case "poison":
        setColor("#A43E9E");
        break;
      case "ground":
        setColor("#DEC16B");
        break;
      case "fairy":
        setColor("#E69EAC");
        break;
      case "rock":
        setColor("#B69E31");
        break;
      case "fighting":
        setColor("#C12239");
        break;
      case "dragon":
        setColor("#7037FF");
        break;
      case "ice":
        setColor("#9AD6DF");
        break;
      case "dark":
        setColor("#75574C");
        break;
      case "flying":
        setColor("#A891EC");
        break;
      case "normal":
        setColor("#AAA67F");
        break;
      default:
        break;
    }
  }, [color]);

  return { color, setColor };
}

export default useColor;

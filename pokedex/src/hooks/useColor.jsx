import { useState, useEffect } from "react";

function useColor() {
  const [color, setColor] = useState("");

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

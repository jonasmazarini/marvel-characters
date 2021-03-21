import { useEffect, useState } from "react";
import { getAllCharacters } from "./coreAPI";

export const useCharacter = () => {
  const [data, setCharacters] = useState("empty");

  useEffect(() => {
    getAllCharacters().then(setCharacters);
  }, []);

  return { data};
};

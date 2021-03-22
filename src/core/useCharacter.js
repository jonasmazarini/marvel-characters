import { useEffect, useState } from "react";
import { getAllCharacters, getCharactersByID } from "./coreAPI";

// Function to get the characters data
export const useCharacter = () => {
  const [data, setCharacters] = useState("empty");

  useEffect(() => {
    getAllCharacters().then(setCharacters);
  }, []);

  return { data };
};

// Function to get datas of a especif character using an ID
export const useCharacterByID = (id) => {
  const [profile, setProfile] = useState();

  useEffect(() => {
    getCharactersByID(id).then(setProfile);
  }, [id]);

  return { profile };
};

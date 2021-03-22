import axios from "axios";

//Take the URL base for the API requests
const api = axios.create({
  baseURL: "https://gateway.marvel.com",
  params: {
    apikey: "cc03b22669ed677d6a12c38243213c74",
  },
});

// Get all the characters (in the limit) of the API
export const getAllCharacters = () => {
  return api.get("/v1/public/characters", {
    params: {
      ts: 1,
      apikey: "cc03b22669ed677d6a12c38243213c74",
      hash: "6291aa6d5004b918afb7fcfac65a6afb",
      limit: 100,
      offset: 0,
    },
  });
};

// Search a especific character by an ID
export const getCharactersByID = (id) => {
  return api.get("/v1/public/characters/" + id, {
    params: {
      apikey: "cc03b22669ed677d6a12c38243213c74",
    },
  });
};

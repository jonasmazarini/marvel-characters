import axios from "axios";

const marvelData = axios.create({
  baseURL: "https://gateway.marvel.com",
  params: {
    apikey: "cc03b22669ed677d6a12c38243213c74",
  },
  // timeout: 10000
});

export default marvelData;

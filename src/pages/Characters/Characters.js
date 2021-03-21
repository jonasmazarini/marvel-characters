import React from "react";
import Header from "../../components/Header/Header";
import { useCharacter } from "../../core/useCharacter";
import CardList from "../../components/CardList";
import "./Characters.css";

export default function Characters() {
  const { data } = useCharacter();
  let results = [];
  if (data !== "empty") {
    results = data.data.data.results;
  }

  console.log("Dados: ", data);
  console.log("Results: ", results);
  return (
    <>
      <section>
        <Header showSearch />
      </section>
      <CardList characters={results} />
    </>
  );
}

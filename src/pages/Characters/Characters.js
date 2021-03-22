import React from "react";
import Header from "../../components/Header";
import { useCharacter } from "../../core/useCharacter";
import CardList from "../../components/CardList";
import "./Characters.css";

// Create the initial page, with the header and a list of the characters
export default function Characters({ ...props }) {
  const { data } = useCharacter();
  let results = [];
  if (data !== "empty") {
    results = data.data.data.results;
  }
  return (
    <>
      <section>
        <Header />
      </section>
      <CardList characters={results} />
    </>
  );
}

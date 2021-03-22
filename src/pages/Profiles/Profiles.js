import React from "react";
import Header from "../../components/Header";
import { useCharacterByID } from "../../core/useCharacter";
import ProfileCard from "../../components/ProfileCard";
import "./Profiles.css";

// Create a profile page of the especific character when the user click on its card on the initial page (still not working)
export default function Profile({ ...props }) {
  const { profile } = useCharacterByID(props.match.params.characterId);
  let results = [];
  if (profile !== "empty") {
    results = profile.data.data.results;
  }
  return (
    <>
      <section>
        <Header />
      </section>
      <ProfileCard profile={results} />
    </>
  );
}

import React from "react";
import "./Header.css";

//Create the reader with the search input (still not working)
export default function Header() {
  return (
    <section className="header">
      <div className="searchContainer">
        <input
          type="text"
          placeholder="Pesquise um Personagem"
          className="searchInput"
        />
      </div>
      )
    </section>
  );
}

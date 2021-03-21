import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import characterCard from "../../components/Character-card/Character-card";
import Header from "../../components/Header/Header";
import characterActions from "../../store/actions/index";
import { useCharacter } from "../../core/useCharacter";
import CardList from "../../components/CardList"
import "./Characters.css";

export default function Characters() {
  /* const [data, setData] = useState({});
  const { Character } = useSelector((state) => ({
    Characer: state.character,
  }));
  Character.then((response) => setData(response));

  const dispatch = useDispatch();

  useEffect(() => {
    const getCharacter = () => {
      dispatch(characterActions.requestGetCharacter());
    };
    getCharacter();
  }, []); */
  const { data } = useCharacter();
  let results = [];
  if (data !== "empty") {
    results = data.data.data.results;
  }

  console.log("Dados: ", data);
  console.log("Results: ", results);
  //console.log('Results: ',results ? results:'TRISSSTE')
  return (
    <>
      <Header showSearch />
      <CardList characters={results} />
    {/*   <section>
        {data !== "empty" ? (
          results.map((dataMap) => {
            return <characterCard data={dataMap} key={dataMap.id} />;
          })
        ) : (
          <p>NAO ROLOU</p>
        )}
      </section> */}
    </>
  );
}

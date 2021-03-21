import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import characterCard from "../../components/Character-card/Character-card";
import Header from "../../components/Header/Header";
import characterActions from "../../store/actions/index";
import "./Characters.css";

export default function Characters() {
  const [data, setData] = useState({});
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
  }, []);

  return (
    <>
      <Header showSearch />
      <section>
        {data?.data?.length !== 0 ? (
          data?.data?.map((dataMap) => {
            return <characterCard data={dataMap} key={dataMap.id} />;
          })
        ) : (
          <p />
        )}
      </section>
    </>
  );
}

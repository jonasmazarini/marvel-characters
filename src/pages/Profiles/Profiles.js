import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CardSerie from "../../components/Comics-card/Comics-card";
import Header from "../../components/Header/Header";
import characterActions from "../../store/actions/index";
import "./Profiles.css";

export default function Character() {
  const { characterId } = useParams();
  const [data, setData] = useState({});
  const { Character } = useSelector((state) => ({
    Character: state.character,
  }));
  Character.then((response) => setData(response));

  const dispatch = useDispatch();

  useEffect(() => {
    const getCharacter = () => {
      dispatch(characterActions.requestGetCharacterId(characterId));
    };
    getCharacter();
  }, []);

  return (
    <>
      <Header />
      <section>
        <div className="profile">
          <div className="title">Personagem</div>
          <div className="profileContent">
            {data?.dataUser?.map((response) => (
              <div key={response?.id}>
                <img
                  src={`${response?.thumbnail?.path}.${response?.thumbnail?.extension}`}
                  alt={response?.name}
                />
                <span className="name">{response?.name}</span>
                <span>{response?.description}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="comics">
          <div className="title">Revistas</div>
          <div className="comicsContent">
            {data?.data?.length !== 0 ? (
              data?.dataSeries?.map((response) => (
                <CardSerie data={response} key={response?.id} />
              ))
            ) : (
              <p text="Não encontrada nenhuma revista.." />
            )}
          </div>
        </div>
      </section>
    </>
  );
}

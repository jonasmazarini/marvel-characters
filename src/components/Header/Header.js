import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import characterActions from '../../store/actions/index';
import "./Header.css";

export default function Header({ showSearch }) {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    const getCharacterData = () => {
      showSearch &&
        (search === ''
          ? dispatch(characterActions.requestGetCharacter())
          : dispatch(characterActions.requestSearchCharacter(search)));
    };
    getCharacterData();
  }, [search]);

  return (
    <section>
      
      {showSearch && (
        <div className="searchContainer">
          <input
            type="text"
            onChange={e => setSearch(e.target.value)}
            value={search}
            placeholder="Pesquise um Personagem"
          />
        </div>
      )}
    </section>
  );
}

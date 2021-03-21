const requestGetCharacter = () => {
    return {
      type: "REQUEST_GET_CHARACTER",
    };
  };
  
  const requestSearchCharacter = (name) => {
    return {
      type: "REQUEST_SEARCH_CHARACTER",
      payload: { name },
    };
  };
  
  const requestGetCharacterId = (id) => {
    return {
      type: "REQUEST_GET_CHARACTER_ID",
      payload: { id },
    };
  };
  
  export default {
    requestGetCharacter,
    requestSearchCharacter,
    requestGetCharacterId,
  };
  
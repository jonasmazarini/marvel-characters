const INITIAL_STATE = {
  data: [],
  dataCharacter: [],
  dataComics: [],
  dataOptions: {
    findTotal: 100,
    offset: 0,
  },
  error: false,
  loading: false,
};

const rootReducer = async (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "REQUEST_GET_CHARACTER":
      return { ...state };
    case "SUCCESS_GET_CHARACTER":
      return {
        ...state,
        data: action.payload.data,
      };
    case "REQUEST_GET_CHARACTER_ID":
      return { ...state };
    case "SUCCESS_GET_CHARACTER_ID":
      return {
        ...state,
        dataCharacter: action.payload.dataCharacter,
        dataComics: action.payload.dataComics,
      };
    case "REQUEST_SEARCH_CHARACTER":
      return { ...state };
    case "SUCCESS_SEARCH_CHARACTER":
      return {
        ...state,
        data: action.payload.data,
      };
    default:
      return state;
  }
};

export default rootReducer;

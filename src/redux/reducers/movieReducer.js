import { actionTypes } from "../actions/ActionsTypes";

const initialState = {
  popularMovies: [],
  genres: [],
  isLoading: true,
};

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    //Filmelri stateye aktarma
    case actionTypes.SET_MOVIES:
      return {
        ...state,
        popularMovies: action.payload,
        isLoading: false,
      };
    //Kategırileri state aktarma
    case actionTypes.SET_CATEGORIES:
      return {
        ...state,
        genres: action.payload,
      };

    default:
      return state;
  }
};
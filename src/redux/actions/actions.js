import axios from "axios";
import { actionTypes } from "./ActionsTypes";
import { options } from "../../constants/apiConstants";

//* Tüm atılan isteklerin başına gelir.
axios.defaults.baseURL = "https://api.themoviedb.org/3";

// Senkron (Anında gerçekleşen ve süre gerektirmeyen işlemler)

// Yüklemenin durumuna göre isLoading değerini değiştirme
export const setLoading = (payload) => ({
  type: actionTypes.SET_LOADING,
  payload,
});

//Asenkron (Anında gerçekleşmeyen ve süre gerektiren işlemler (API çağrıları , veri tabanı istekleri vb.))
//* async ===> asenkron yani anlık gerçekleşmeyen
export const getMovies = () => {
  return async function (dispatch) {
    axios
      .get("/movie/popular", options)
      .then((res) =>
        dispatch({
          type: actionTypes.SET_MOVIES,
          payload: res.data.results,
        })
      )
  };
};


//* Filmler için kategori verisi çekme
export const getGenres = () => (dispatch)=> {
  axios.get('genre/movie/list?language=en' , options)
  //* Sonucu reducer a gönderme işlemi
  .then((res) => dispatch({
    type: actionTypes.SET_CATEGORIES,
    payload:res.data.genres
  }))
}
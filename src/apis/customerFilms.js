import axios from "./axios";

export const customerViewFilm = (userId, filmId) => {
  return axios.post(`ViewedFilms/SetViewedFilm?userId=${userId}&filmId=${filmId}`);
};


export const getCustomerViewedFilms = (userId) => {
  return axios.get(`ViewedFilms/GetViewedFilms?userId=${userId}`);
}

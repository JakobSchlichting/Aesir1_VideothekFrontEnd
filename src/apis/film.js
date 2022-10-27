import axios from "./axios";

export const films = () => {
  return axios.get(`film/films`);
};

export const filmsByGenre = (genre) => {
  return axios.get(`film/filmsByGenre?Genre=${genre}`);
};

export const filmsById = (id) =>{
    return axios.get(`/film/filmsById?ID=${id}`)
}
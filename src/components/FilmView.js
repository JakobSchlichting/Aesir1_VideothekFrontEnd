import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { customerViewFilm } from "../apis/customerFilms";

const FilmView = () => {
  const { id } = useParams();
  const filmsFromState = useSelector((state) => state.film.list);
  const [filmObjectToRender, setFilmObjectToRender] = useState([]);
  const userId = useSelector((state) => state.user.userInfo.id);

  useEffect(() => {
    customerView();
  }, []);

  const customerView = async () => {
    return await customerViewFilm(userId, id.slice(1));
  };

  const filmFetch = () => {
    filmsFromState.map((film) => {
      if (film.id === id.slice(1)) {
        return setFilmObjectToRender(film);
      } else {
        return "not found";
      }
    });
  };

  useEffect(() => {
    filmFetch();
  }, []);

  return (
    <div className="ui container">
      <Link to="/films">
        <i className="big arrow alternate circle left icon"></i>
        Films
      </Link>
      <div className="ui grid">
        <div className="ui row">
          <div className="fourteen wide column">
            <div className="ui embed">
              <iframe
                title="video player"
                src={filmObjectToRender.filmSource}
              />
            </div>

            <div className="ui segment">
              <h4>{filmObjectToRender.filmName}</h4>
              <p>{filmObjectToRender.filmDescription}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilmView;

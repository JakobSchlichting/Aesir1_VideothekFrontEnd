import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FilmDetail from "./FilmDetail";

import { useSelector, useDispatch } from "react-redux";
import { getFilms, getFilmsByGenre, cleanFilm } from "../redux/filmSlice";
import { logout, userZero } from "../redux/userSlice";

const FilmsList = () => {
  const dispatch = useDispatch();
  const filmsList = useSelector((state) => state.film.list);
  const [dropSelect, setDropSelect] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    loadFilm();
  }, [dropSelect]);

  const logoutUser = () => {
    dispatch(logout());
    dispatch(userZero());
    dispatch(cleanFilm());
    navigate("/");
  };

  const loadFilm = () => {
    switch (dropSelect) {
      case "1":
        dispatch(cleanFilm());
        dispatch(getFilmsByGenre("Action"));
        break;
      case "2":
        dispatch(cleanFilm());
        dispatch(getFilmsByGenre("Science fiction"));
        break;
      default:
        dispatch(getFilms());
    }
  };

  const renderList = filmsList.map((video) => {
    return <FilmDetail video={video} key={video.id} />;
  });

  const goToUser = () => {
    navigate("/user");
  };

  return (
    <div className="ui container">
      <div className="ui segment">
        <select
          className="ui selection dropdown"
          value={dropSelect}
          onChange={(e) => setDropSelect(e.target.value)}
        >
          <option value="0">All Films</option>
          <option value="1">Action</option>
          <option value="2">Science fiction</option>
        </select>
        
        <button
          className="ui  circular icon right floated button"
          onClick={goToUser}
          >
          <i className="big blue user circle icon"></i>
        </button>
        <button className="ui right floated button" onClick={logoutUser}>
          Log out
        </button>
      </div>

      <div className="ui four cards">{renderList}</div>
    </div>
  );
};

export default FilmsList;

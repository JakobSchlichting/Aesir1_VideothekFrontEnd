import React from "react";
import { Link } from "react-router-dom";

const FilmDetail = (props) => {
  return (
    <div className="card">
      <div className="image">
        <img
          alt={props.video.Id}
          className="ui image"
          src={props.video.thumbsnails}
        ></img>

        <div className="content">
          <Link to={`/filmView:${props.video.id}`} className="header">{props.video.filmName}</Link>
        </div>
      </div>
    </div>
  );
};

export default FilmDetail;
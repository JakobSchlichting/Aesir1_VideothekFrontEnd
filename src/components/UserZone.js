import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCustomerViewedFilms } from "../apis/customerFilms";

const UserZone = () => {
  //const userActive = useSelector((state)=> state.user.userActive);
  
  const userInfo = useSelector((state) => state.user.userInfo);
  const [films, setFilms] = useState([]);

  useEffect(() => {
    filmNameToRender();
  }, []);

  const filmNameToRender = async () => {
    const filmsNames = await getCustomerViewedFilms(userInfo.id);
    if(filmsNames.data.length === 0){
      return setFilms(["You have not watched any film yet", " ", "What are you doing run and watch your first film!!!"])
    }
    return setFilms(filmsNames.data);
  };
  
  
    
  
  const renderListFromFilms = films.map((film) => {
    console.log(films); 
    return <li>{film}</li>;
  });

 
  
  return (
    <div className="ui container">
      <div className="ui segment">
        <Link to="/films">
          <i className="big arrow alternate circle left icon"></i>
          Films
        </Link>
      </div>
      <div className="ui relaxed list">
        <div className="ui segment">
          <div className="ui two column relaxed grid">
            <div className="column">
              <h3>Personal Data</h3>
              <div className="list">
                <li>First name: {userInfo.firstName}</li>
                <li>Last name: {userInfo.lastName} </li>
                <li>Birthday: {userInfo.birthday}</li>
                <li>Email: {userInfo.email}</li>
                <li>Street: {userInfo.street}</li>
                <li>City: {userInfo.city}</li>
                <li>Postalcode: {userInfo.postalCode}</li>
                <li>Country: {userInfo.country}</li>
              </div>
            </div>

            <div className="column">
              <h3>Viewed films</h3>
              <div className="list">{renderListFromFilms}</div>
            </div>
          </div>
          <div className="ui vertical divider"></div>
        </div>
      </div>
    </div>
  );
};

export default UserZone;

import React from "react";
import Navigation from "../components/Navigation";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="home">
      <Navigation />
      <div className="notFound">
        <div className="notFoundContent">
          <h3>Désolé cette page n'existe pas !</h3>
          <NavLink exact to="/">
            <i className="fas fa-home"></i>
            <span> Accueil</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

import React from 'react';
import {Link, NavLink} from "react-router-dom";
import saveMovie from "./Movie";

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies: {saveMovie}</h3>
    {props.list.map(movie => (
      
      <span className="saved-movie">{movie.title}</span>
      
    ))}
    <Link to="/" className="home-button">Home</Link>
  </div>
);

export default SavedList;

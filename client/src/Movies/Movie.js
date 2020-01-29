import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import MovieCard from "./MovieCard";


const Movie = (props) => {
const [movie, setMovie] = useState();
const {movieid} = useParams();

  useEffect(() => {
       axios
        .get(`http://localhost:5000/api/movies/${movieid}`)
        .then(response => {
          setMovie(response.data);
        })
        .catch(error => {
          console.error(error);
        });

  },[movieid]);
  
  const saveMovie = () => {
    const addToSavedList = props.addToSavedList;
    addToSavedList(movie)
  }

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  return (
    <div className="save-wrapper">
      <MovieCard key={movie.id} movie={movie}/>
      <div className="save-button" onClick={() => {saveMovie()}}>Save</div>
    </div>
  );
}

export default Movie;

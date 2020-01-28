import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import MovieCard from "./MovieCard";


const Movie = (props) => {
const [movie, setMovie] = useState();
const {movieid} = useParams();

  useEffect(() => {
    const id = movieid;
    // change ^^^ that line and grab the id from the URL
    // You will NEED to add a dependency array to this effect hook

       axios
        .get(`http://localhost:5000/api/movies/${movieid}`)
        .then(response => {
          setMovie(response.data);
        })
        .catch(error => {
          console.error(error);
        });

  },[movieid]);
  
  // Uncomment this only when you have moved on to the stretch goals
  const saveMovie = () => {
    const addToSavedList = props.addToSavedList;
    addToSavedList(movie)
  }

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  const { title, director, metascore, stars } = movie;
  return (
    <div className="save-wrapper">
      <MovieCard key={movie.id} movie={movie}/>
      <div className="save-button" onClick={() => {saveMovie()}}>Save</div>
    </div>
  );
}

export default Movie;

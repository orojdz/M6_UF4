import { MovieCard } from '../components/MovieCard'
// import imagen from '../img/cank.jpg'
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from "react";
import db from "../config/config";
import { collection, doc, getDocs, deleteDoc } from "firebase/firestore";

// const moviesData = [
//     {
//       id: 1,
//       title: "Inception",
//       image: imagen,
//       rate: "8.8",
//       direction: "Christopher Nolan"
//     }
// ];

export function MoviesList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getDocs(collection(db, "movies"))
      .then((response) => {
        setMovies(response.docs.map((doc) => { 
          return { ...doc.data(), id:doc.id }
          })
        );
      })
  }, []);

  // eliminar pelicula de la lista
  const deleteMovie = (id) => {
    const movieDoc = doc(db, "movies", id);
    deleteDoc(movieDoc)
      
        alert("Pel·lícula eliminada amb èxit");
        setMovies(movies.filter(movie => movie.id !== id))
      
  }

  return (
      <div className="moviesListComp" >
        {movies.map(movie => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title} 
            year={movie.year}
            image={movie.image}
            rate={movie.rate}
            director={movie.director}
            duration={movie.duration}
            description={movie.description}
            onDelete={deleteMovie}
          />
        ))}
      </div>
  );
}
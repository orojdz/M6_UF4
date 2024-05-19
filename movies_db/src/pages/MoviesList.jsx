import { MovieCard } from '../components/MovieCard'
import imagen from '../img/cank.jpg'
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
// import { useEffect, useState } from "react";
// import db from "../config/config";
// import { collection , deleteDoc, doc, getDocs} from "firebase/firestore";

const moviesData = [
    {
      id: 1,
      title: "Inception",
      image: imagen,
      rate: "8.8",
      direction: "Christopher Nolan"
    },
    {
      id: 1,
      title: "Inception",
      image: imagen,
      rate: "8.8",
      direction: "Christopher Nolan"
    },{
      id: 1,
      title: "Inception",
      image: imagen,
      rate: "8.8",
      direction: "Christopher Nolan"
    },{
      id: 1,
      title: "Inception",
      image: imagen,
      rate: "8.8",
      direction: "Christopher Nolan"
    },{
      id: 1,
      title: "Inception",
      image: imagen,
      rate: "8.8",
      direction: "Christopher Nolan"
    },{
      id: 1,
      title: "Inception",
      image: imagen,
      rate: "8.8",
      direction: "Christopher Nolan"
    },
];

export function MoviesList() {

  return (
      <div>
        <Link to='/'>
          <Typography
            gutterBottom 
              variant="h2"
                component="div"
                className="typography-title"
                sx={{
                    whiteSpace: 'nowrap',
                    maxWidth: '100%',
                    fontFamily: 'Roboto',
                    fontWeight: 700,
                    fontSize: '1.25rem',
                }}>

            <h2>Llista de pel·lícules</h2>
          </Typography>
        </Link>

        <div className="moviesListComp" >
          {moviesData.map(movie => (
            <MovieCard
              key={movie.id}
              title={movie.title} 
              image={movie.image}
              rate={movie.rate}
              direction={movie.direction}
            />
          ))}
        </div>
      </div>
  );
}
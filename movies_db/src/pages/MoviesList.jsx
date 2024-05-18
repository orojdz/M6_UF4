import { MovieCard } from '../components/MovieCard'
import imagen from '../img/cank.jpg'
import { useEffect, useState } from "react";
import db from "../config/config";
import { collection , deleteDoc, doc, getDocs} from "firebase/firestore";

const moviesData = [
    {
      id: 1,
      title: "Inception",
      image: imagen,
      rate: "8.8",
      direction: "Christopher Nolan"
    },
    {
      id: 2,
      title: "The Shawshank Redemption",
      image: imagen,
      rate: "9.3",
      direction: "Frank Darabont"
    },
    {
      id: 3,
      title: "The Godfather",
      image: imagen,
      rate: "9.2",
      direction: "Francis Ford Coppola"
    }  
];

export function MoviesList() {

    return (
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
      );
}
import { MovieCard } from '../components/MovieCard';
import imagen from '../img/cank.jpg'

// const moviesData = [
//     {
//       id: 1,
//       title: "Inception",
//       image: imagen,
//       rate: "8.8",
//       direction: "Christopher Nolan"
//     },
//     {
//       id: 2,
//       title: "The Shawshank Redemption",
//       image: imagen,
//       rate: "9.3",
//       direction: "Frank Darabont"
//     },
//     {
//       id: 3,
//       title: "The Godfather",
//       image: imagen,
//       rate: "9.2",
//       direction: "Francis Ford Coppola"
//     },
//     // Agrega más películas si lo deseas
//   ];

export function MoviesList() {

    return (
        <div className="moviesListComp">
            <MovieCard
              key={"1"}
              title={"Cank"}
              image={imagen}
              rate={"10/10"}
              direction={"Cank itseft"}
            />
        </div>
      );
}
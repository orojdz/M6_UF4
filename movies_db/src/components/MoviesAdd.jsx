import { useEffect, useState } from "react"
import { Typography } from "@mui/material";
import db from "../config/config";
import { collection, addDoc, doc, getDocs} from "firebase/firestore";

export function MoviesAdd() {
    const [movie, setMovie] = useState({
        title: '',
        description: '',
        director: '',
        image: '',
        rate: '',
        year: '',
        duration: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setMovie((prevMovie) => ({
          ...prevMovie,
          [name]: value
        }));
    };

    const addMovie = async (e) => {
        e.preventDefault();
        try {
          await addDoc(collection(db, 'movies'), movie);
          alert('Pel·lícula afegida amb èxit');
          setMovie({
            title: '',
            description: '',
            director: '',
            image: '',
            rating: '',
            year: '',
            duration: ''
          });
        } catch (e) {
          console.error('Error adding document: ', e);
        }
      };

    return(
        <div className='moviesAddComp'>
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
                <h2 className="addTitle">Afegeix una pel·lícula</h2>
            </Typography>
            <form onSubmit={ addMovie }>
                <div className="form-group">
                    <label>Títol</label>
                    <input type="text" name="title" value={movie.title} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Descripció</label>
                    <textarea name="description" value={movie.description} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Direcció</label>
                    <input type="text" name="director" value={movie.director} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Imatge (URL)</label>
                    <input type="url" name="image" value={movie.image} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Nota (1-5)</label>
                    <input type="number" name="rate" value={movie.rate} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Any</label>
                    <input type="number" name="year" value={movie.year} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Durada (min)</label>
                    <input type="number" name="duration" value={movie.duration} onChange={handleChange} required />
                </div>
                <div className="inputBtn">
                    <button type="submit">Afegir Pel·lícula</button>
                </div>
            </form>
        </div>
    );
}
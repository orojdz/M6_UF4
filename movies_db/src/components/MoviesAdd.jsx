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

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await addDoc(collection(db, 'movies'), movie);
          alert('Pel·lícula afegida amb èxit');
          setMovie({
            title: '',
            description: '',
            director: '',
            imageUrl: '',
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
            <form onSubmit={console.log("funciona")}>
                <div className="form-group">
                    <label>Títol</label>
                    <input type="text" name="title" required />
                </div>
                <div className="form-group">
                    <label>Descripció</label>
                    <textarea name="description" required />
                </div>
                <div className="form-group">
                    <label>Direcció</label>
                    <input type="text" name="director" required />
                </div>
                <div className="form-group">
                    <label>Imatge (URL)</label>
                    <input type="url" name="imageUrl" required />
                </div>
                <div className="form-group">
                    <label>Nota (1-5)</label>
                    <input type="number" name="rating" required />
                </div>
                <div className="form-group">
                    <label>Any</label>
                    <input type="number" name="year" required />
                </div>
                <div className="form-group">
                    <label>Durada (min)</label>
                    <input type="number" name="duration" required />
                </div>
                <div className="inputBtn">
                    <button type="submit">Afegir Pel·lícula</button>
                </div>
            </form>
        </div>
    );
}
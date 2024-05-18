import { CardComp } from '../components/Card'
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

export function IndexMenu() {
    return(
        <div className='select'>
            <CardComp size={400}>
                <Card className="toList" sx={{ maxWidth: 400 }}>
                    <Link to="/movies/list">Lista de peliculas</Link>
                </Card>
            </CardComp>
            <CardComp size={400}>
                <Card className="toList" sx={{ maxWidth: 400 }}>
                    <Link to="/movies/add">Añadir una pelicula</Link>
                </Card>
            </CardComp> 
        </div>
    );
}
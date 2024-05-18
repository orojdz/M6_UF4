import { CardComp } from '../components/Card'
import Card from '@mui/material/Card';
import { CardContent, CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

export function IndexMenu() {
    return(
        <div className='select'>
            <div className="toList">
                <CardComp>
                    <Card sx={{ minWidth: 250 }}>
                        <Link to="/movies/list">
                            <CardActionArea>
                                <CardContent >
                                    Lista de peliculas
        
                                </CardContent>
                            </CardActionArea>
                        </Link>
                    </Card>
                </CardComp>
            </div>
            <div className='toAdd'>
                <CardComp>
                    <Card sx={{ minWidth: 250 }}>
                        <CardActionArea>
                            <CardContent>
                                <Link to="/movies/add">Añadir una pelicula</Link>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </CardComp> 
            </div>
        </div>
    );
}
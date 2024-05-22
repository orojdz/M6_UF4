import { CardComp } from '../components/Card'
import Card from '@mui/material/Card';
import { Link } from 'react-router-dom';
import filmGif from '../img/film-tape.gif';
import cameraGif from '../img/camera.gif';

export function IndexMenu() {
    return(
        <div className='select'>
            <div className="toList">
                <CardComp>
                    <Link to="/movies/list">
                        <Card sx={{ minWidth: 250, minHeight: 250 }}>
                            <h4>Llista de pel·lícules</h4>
                            <img src={filmGif} alt="llista de pel·lícules" width={150}/>
                        </Card>
                    </Link>
                </CardComp>
            </div>
            <div className='toAdd'>
                <CardComp>
                    <Link to="/movies/add">
                        <Card sx={{ minWidth: 250, minHeight: 250 }}>
                            <h4>Afegeix una pel·lícula</h4>
                            <img src={cameraGif} alt="Afegir una pel·lícula" width={150} />
                        </Card>
                    </Link>
                </CardComp> 
            </div>
        </div>
    );
}
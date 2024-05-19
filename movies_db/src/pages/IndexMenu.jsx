import { CardComp } from '../components/Card'
import Card from '@mui/material/Card';
import { Link } from 'react-router-dom';

export function IndexMenu() {
    return(
        <div className='select'>
            <div className="toList">
                <CardComp>
                    <Link to="/movies/list">
                        <Card sx={{ minWidth: 250, minHeight: 250}}>
                            <h4>Llista de pel·lícules</h4>
                        </Card>
                    </Link>
                </CardComp>
            </div>
            <div className='toAdd'>
                <CardComp>
                    <Link to="/movies/add">
                        <Card sx={{ minWidth: 250, minHeight: 250 }}>
                            <h4>Afegeix una pel·lícula</h4>
                        </Card>
                    </Link>
                </CardComp> 
            </div>
        </div>
    );
}
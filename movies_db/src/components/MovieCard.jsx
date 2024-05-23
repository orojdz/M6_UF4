import StarRateIcon from '@mui/icons-material/StarRate';
import DeleteIcon from '@mui/icons-material/Delete';
import HeartIcon from './HeartIcon';
import { CardComp } from './Card';

export function MovieCard({ id, title, year, image, rate, director, description, duration, onDelete }) {
      
    // Función para abreviar la descripción de la película
    const abbrDesc = (description) => {
       if (description.length > 20)
            return description.substring(0, 50) + '...'
    }

    return (
        <CardComp size={300}>
            <div className="movie-card">
            <div className="movie-icons">
                <DeleteIcon sx={{ color: 'grey' }} className='icon' onClick={() => onDelete(id)} />
            </div>
            <img src={image} alt={title} className="movie-card-image" />
            <div className="movie-card-overlay">
                <div className="movie-card-header">
                    <h3 className="movie-title">{title} ({year})</h3>
                    <div className='icon-info'>
                        <div className='rate'>
                            <small>{rate}</small><StarRateIcon className='rate-star' sx={{ color: 'yellow' }} fontSize='smaller' />
                        </div>
                        <div className='duration'>
                            <small>{duration}m</small>
                        </div>
                    </div>
                </div>
                <div className="movie-card-body">
                    <small className='movie-director'><strong>{director}</strong></small>
                    <div className='desc-heart'>
                        <p className="movie-description">{ abbrDesc(description)}</p> <HeartIcon />
                    </div>
                </div>
            </div>
            </div>
        </CardComp>
    );
}
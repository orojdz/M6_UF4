import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardComp } from './Card';

export function MovieCard({ title, image, rate, direction }) {
    return (
        <CardComp size={200}>
            <Card className="cards" sx={{ maxWidth: 280 }}>
                <CardMedia sx={{ height: 290 }}
                  image={image}
                  title={title}
                />
                <CardContent>
                    <Typography 
                        gutterBottom 
                        variant="h5"
                        component="div"
                        className="typography-title"
                        sx={{
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            maxWidth: '100%',
                            fontFamily: 'Roboto',
                            fontWeight: 700,
                            fontSize: '1.25rem'
                        }}>
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ fontFamily: 'Roboto'}}>
                        {direction}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ fontFamily: 'Roboto'}}>
                        {rate}
                    </Typography>
                </CardContent>
            </Card>
            
        </CardComp>
    );
}
import React from 'react';
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import {ListaDeImagenes} from '../../utils/Data'

const Carta = ({ Imagen, Texto, Enlace }) => {
    return (
        <Grid
            container
            item
            md={4}>
            <Card sx={{ maxWidth: '100%' }}>
                <CardMedia
                    component='img'
                    height='300'
                    image={Imagen}
                    alt='green iguana'
                />
                <CardContent>
                    <Typography gutterBottom variant='h5' component='div'>
                        Lizard
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size='small'>
                        <Link to={Enlace} underline={'none'} color={'inherit'}>
                            Seguir Leyendo...
                        </Link>
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    )
}

const CardEventos = () => {
    const arreglo = [1,2,3]
    return (
        <Grid
            container
            direction={'row'}
            justifyContent={'center'}
            padding={{md:'150px'}}
            marginTop={{xs: '20', md:'40px'}}
            sx={{
                backgroundColor: 'rgba(0,0,0,0.8)'
            }}>
                <Grid 
                item 
                xs={12} 
                textAlign={'center'}
                marginBottom={{xs: '10px',md: '20px'}}>
                    <Typography variant='h2' color={'white'}>
                        Próximos Eventos
                    </Typography>
                </Grid>
               <Grid 
               container 
               item 
               xs={12}
               spacing={2}>
               {
                    arreglo.map(valor => {
                        return <Carta key={valor} 
                        Imagen={ListaDeImagenes().fondoRegistro} 
                        Texto={''} 
                        Enlace={''} />
                    })
                }
               </Grid>
        </Grid>
    );
}

export default CardEventos;

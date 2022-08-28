import { 
    Button, 
    Card, 
    CardActions, 
    CardContent, 
    CardMedia, 
    Typography } from '@mui/material';
import Axios from 'axios'
import React, { useEffect, useState } from 'react';

const CartasPublicidad = ({DatosPublicidad}) => {
    return (
        <Card sx={{ maxWidth: 345, mb: '30px' }}
        raised={true}>
            <CardMedia
                component="img"
                height="140"
                image={`${process.env.PUBLIC_URL}`+DatosPublicidad.img}
                alt={DatosPublicidad.img}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {DatosPublicidad.titulo}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {DatosPublicidad.descripcion}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Compartir</Button>
                <Button size="small">Leer más</Button>
            </CardActions>
        </Card>
    )
}

const Publicidad = () => {

    const [DatosPublicidad, SetDatosPublicidad] = useState([])

    useEffect(() => {

        Axios.get('http://localhost:8090/api/user/publicidad')
        .then((res) => {
            SetDatosPublicidad(res.data.publicidad)
        })
        .catch((err) => {
            console.log(err);
        })
    }, [SetDatosPublicidad])
    return (
        DatosPublicidad.map((value, index) => {
            return <CartasPublicidad key={index} DatosPublicidad={value} />
        })
    );
}

export default Publicidad;

import React, { useEffect, useState } from 'react';
import Axios from 'axios'
import {
    Grid,
    Card,
    CardContent,
    Typography,
    Button,
    CardActions,
    IconButton,
    List,
    ListItem,
    ListItemText
} from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility';
import { DatosEventos } from '../../utils/Data'







const CreaOrdenDeCompra = ({ Evento }) => {

    return (
        <Card
            raised={true}
            sx={{ mb: 2 }}
        >
            <CardContent
                sx={{ pb: 0 }}>
                <List>
                    <ListItem disablePadding>
                        <ListItemText primary={`# Recibo: ${Evento.recibo}`} />
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemText primary={`Evento: ${Evento.evento}`} />
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemText primary={`Cantidad de entradas: ${Evento.cantidadEntradas}`} />
                    </ListItem>
                </List>
            </CardContent>
            <CardActions
                disableSpacing
                sx={{ pt: 0, pl: '16px' }}>
                <Typography>
                    Ver más...
                </Typography>
                <IconButton aria-label="Ver recibo">
                    <VisibilityIcon />
                </IconButton>
            </CardActions>
        </Card>
    )
}

const OrdenesDeCompra = () => {

    const [data, setData] = useState(null)

    useEffect(() => {
        Axios.get('http://localhost:8090/api/user/ticketscomprados')
            .then((res) => {
                setData(res.data.ticketscomprados)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [setData])

    return (
        <Grid
            heigth={{ md: '100%' }}>
            <Card
                sx={{ pt: '50px' }}>
                <CardContent>
                    <Grid item xs={12} sx={{ mb: 3 }}>
                        <Typography gutterBottom variant="h5" component="div">
                            Historial de compras
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sx={{ mb: 3 }} textAlign={'right'}>
                        <Button variant="contained" color="success">
                            Nueva compra
                        </Button>
                    </Grid>
                    <Grid item xs={12}>
                        {
                            data ?
                                (
                                    data.map((value, index) => {
                                        return <CreaOrdenDeCompra Evento={value} key={index} />
                                    })
                                )
                                : ""
                        }
                    </Grid>
                </CardContent>
            </Card>
        </Grid>
    );
}

export default OrdenesDeCompra;

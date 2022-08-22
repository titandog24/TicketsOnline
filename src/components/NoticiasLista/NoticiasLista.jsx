import React from 'react';
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import moment from 'moment'

const CartaNoticia = ({ Noticia, TamanoImagen }) => {
    const {
        author,
        title,
        description,
        url,
        image,
        published_at
    } = Noticia
    return (
        <>
            <Grid item xs={12} heigth={TamanoImagen}>
                <Card>
                    <div 
                    style={{
                        backgroundImage: `url(${image})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundAttachment: 'fixed',
                        backgroundPosition: 'center center',
                        backgroundSize: 'cover',
                        height:`${TamanoImagen}`,
                        color:'white',
                        textAlign: 'center'
                    }}
                    className='divFondoMision'
                    >
                        <Typography variant='h4'>
                            {title}
                        </Typography>
                    </div>
                </Card>
            </Grid>
            <Grid item xs={12}>
                <Grid item xs={12}>
                    <Typography variant='h5'>
                        {description}, 
                        <q>{author}</q>
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography>
                        {moment(published_at).format('DD/MM/YYYY')}
                    </Typography>
                </Grid>
            </Grid>
        </>
    )
}


const NoticiasLista = ({ Lista, MedidaMedia }) => {
    const imagenHeight = MedidaMedia > 4? '300px' : '200px'
    return (
        <>
            {
                Lista.map((noticia, index) => {
                    return (
                        <Grid
                            item
                            key={index}
                            xs={12}
                            md={MedidaMedia}>
                                <CartaNoticia Noticia={noticia} TamanoImagen={imagenHeight} />
                        </Grid>
                    )
                })
            }
        </>
    );
}

NoticiasLista.defaultProps = {
    MedidaMedia: 4
}

export default NoticiasLista;

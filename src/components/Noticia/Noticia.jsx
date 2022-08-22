import React from 'react';
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Pagination from '@mui/material/Pagination'
import NoticiasLista from '../NoticiasLista'
import { TitulosYTexto } from '../../utils/Data'
import { NumeroPaginacion, ObtenerArreglo } from '../../utils/Util';

const Noticia = ({ Noticias, NoticiasFijas }) => {

    const [page, setPage] = React.useState(1);
    const handleChange = (event, value) => {
      setPage(value);
    };
    const { tituloBlog, detalleBlog } = TitulosYTexto()
    const cantPaginas = NumeroPaginacion(Noticias)
    const arreglo = ObtenerArreglo(Noticias[0].data, page)
    
    return (
        <Grid
            container
            justifyContent={'center'}
            direction={'row'}
            marginTop={{ xs: '100px', md: '200px' }}>
            <Grid
                container
                item
                xs={12}>
                <Grid item xs={12}>
                    <Typography variant={'h3'}>
                        {tituloBlog}
                    </Typography>
                </Grid>
                <Grid item xs={12} marginTop={{ xs: 8 }}>
                    <Typography variant={'h5'}>
                        {detalleBlog}
                    </Typography>
                </Grid>
            </Grid>
            <Grid
                container
                item
                xs={12}
                marginTop={{ xs: 8 }}
                spacing={2}>
                <NoticiasLista Lista={NoticiasFijas[0].data} MedidaMedia={6} />
            </Grid>
            <Grid
                container
                item
                xs={12}
                marginTop={{ xs: 8 }}
                spacing={2}>
                <NoticiasLista Lista={arreglo} MedidaMedia={4} />
            </Grid>
            <Grid
                container
                item
                xs={12}
                marginTop={{ xs: 8 }}>
                <hr style={{ width: '100%' }} />
            </Grid>
            <Grid
                container
                item
                xs={12}
                marginTop={{ xs: 8 }}
                justifyContent={'center'}>
                <Stack spacing={2}>
                    <Pagination 
                    count={cantPaginas} 
                    page={page}
                    variant="outlined" 
                    shape="rounded" 
                    size='large'
                    onChange={handleChange} />
                </Stack>
            </Grid>
        </Grid>
    );
}

export default Noticia;

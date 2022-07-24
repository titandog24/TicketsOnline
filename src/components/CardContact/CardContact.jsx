import React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Grid from '@mui/material/Grid'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import TextField from '@mui/material/TextField'
import {formatForm} from '../../utils/Data'
import CardMapaContact from '../CardMapaContact'
import Typography from '@mui/material/Typography'


const CuadroTextoFormulario = ({ objeto }) => {
    const { input, label, id } = objeto
    switch (input) {
        case 'text':
            return <TextField
                required
                id={id}
                label={label}
                sx={{ width: '100%' }} />
        case 'descr':
            return <TextField
                id={id}
                label={label}
                placeholder={label}
                multiline
                fullWidth
                variant='filled'/>
        default:
            return <></>
    }
}

const theme = createTheme({
    palette: {
      blackButton: {
        main: '#000000', //Color del botón
        contrastText: '#fff' //Color del texto del botón
      },
    },
  });


const CardContact = () => {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    const campos = formatForm()
    return (
        <Grid container
            item
            xs={12}
            justifyContent={'center'}
            spacing={2}
            marginTop={{md:5}}>
            <Grid 
            item 
            xs={12} 
            md={4}
            marginRight={{md:5}}>
                <Typography variant={'h4'}>
                   ¡Dejanos un mensaje!
                </Typography>
                {
                    campos.map((valor,index) => {
                        return (
                            <Box key={index} marginTop={{ xs: 3 }}>
                                <CuadroTextoFormulario objeto={valor} />
                            </Box>
                        )
                    })
                }
                <Box marginTop={{ xs: 3 }}>
                    <FormControl sx={{width: '100%' }}>
                        <InputLabel id='demo-simple-select-autowidth-label' sx={{ width: '100%' }}>Motivo</InputLabel>
                        <Select
                            labelId='demo-simple-select-autowidth-label'
                            id='demo-simple-select-autowidth'
                            value={age}
                            onChange={handleChange}
                            fullWidth
                            label='Age'>
                            <MenuItem value=''>
                                <em>Ninguno</em>
                            </MenuItem>
                            <MenuItem value={10}>Politica y privacidad</MenuItem>
                            <MenuItem value={21}>Compra al por mayor</MenuItem>
                            <MenuItem value={22}>Otro</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <Box marginTop={{ xs: 3 }}>
                    <CuadroTextoFormulario objeto={{input:'descr', id:'mensaje', label:'Mensaje'}} />
                </Box>
                <Box marginTop={{ xs: 3 }}>
                <ThemeProvider theme={theme}>
                    <Button variant='contained' color='blackButton' fullWidth>Enviar mensaje</Button>
                </ThemeProvider>
                </Box>
            </Grid>
            <Grid 
            item 
            xs={12} 
            md={4}
            marginLeft={{md:5}}>
                <CardMapaContact />
            </Grid>
        </Grid>
    );
}

export default CardContact;

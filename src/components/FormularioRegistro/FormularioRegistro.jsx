import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link'
import { Link as RouterLink } from 'react-router-dom'
import { ListaDeImagenes } from '../../utils/Data';

const CreateNewUser = (e, RegisterNewUser) => {

    e.preventDefault()

    let user = {
        nombre: document.getElementById('nombre').value,
        apellido: document.getElementById('apellidos').value,
        dni: document.getElementById('dni').value,
        email: document.getElementById('correo').value,
        password: document.getElementById('password').value
    }

    RegisterNewUser(user) 
}

const FormularioRegistro = ({RegisterNewUser}) => {

    return (
        <Grid item xs={12}>
            <Grid container item direction={'row'} sx={{ mb: 5, height: '10%' }}>
                <Grid container item xs={12} sx={{p:5}}>
                    <Grid item xs={6}>
                        <img src={ListaDeImagenes().logoEmpresa} alt='logo empresa' style={{ maxWidth: '8rem', maxHeight: '5rem' }} />
                    </Grid>
                    <Grid item xs={6} textAlign={'right'}>
                        <Typography style={{marginTop:'1rem'}}>
                            ¿Quieres regresar al inicio? <Link to={'/'} component={RouterLink} color={'inherit'}>Volver</Link>
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container item direction={'row'} justifyContent={'center'}>
                <Grid container item xs={12} sm={8} md={6}>
                    <Grid container item sx={{ m: 1 }}>
                        <Typography variant={'h4'}>
                            Registro de usuario
                        </Typography>
                    </Grid>
                    <Grid container item xs={12} spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id='nombre'
                                label='Nombre'
                                sx={{ width: '100%' }} />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id='apellidos'
                                label='Apellidos'
                                sx={{ width: '100%' }} />
                        </Grid>
                    </Grid>
                    <Grid container item xs={12} sx={{ mt: 2 }}>
                        <Grid item xs={12}>
                            <TextField
                                required
                                id={'correo'}
                                label={'Correo electrónico'}
                                type={'email'}
                                sx={{ width: '100%' }} />
                        </Grid>
                    </Grid>
                    <Grid container item xs={12} sx={{ mt: 2 }}>
                        <Grid item xs={12}>
                            <TextField
                                required
                                id={'dni'}
                                label={'DNI'}
                                sx={{ width: '100%' }} />
                        </Grid>
                    </Grid>
                    <Grid container item xs={12} sx={{ mt: 2 }}>
                        <Grid item xs={12}>
                            <TextField
                                required
                                id={'password'}
                                label={'Contraseña'}
                                type={'password'}
                                autoComplete={'current-password'}
                                sx={{ width: '100%' }} />
                        </Grid>
                    </Grid>
                    <Grid container item xs={12} sx={{ mt: 2 }}>
                        <Grid item xs={12}>
                            <TextField
                                required
                                id={'confirmar-password'}
                                label={'Confirmar contraseña'}
                                type={'password'}
                                autoComplete={'current-password'}
                                sx={{ width: '100%' }} />
                        </Grid>
                    </Grid>
                    <Grid container item xs={12} sx={{ mt: 2 }}>
                        <Grid item xs={12}>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox />} label="Yo acepto los terminos de servicio y politicas de privacidad" />
                                <FormControlLabel control={<Checkbox />} label="Yo quiero recibir noticias sobre eventos de Tickets por correo electrónico" />
                            </FormGroup>
                        </Grid>
                    </Grid>
                    <Grid container item xs={12} sx={{ mt: 2 }}>
                        <Grid item xs={12}>
                            <Button 
                            variant="contained" 
                            color='secondary' 
                            style={{ width: '100%' }}
                            onClick={(e) => CreateNewUser(e, RegisterNewUser)}>
                                Crear cuenta
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default FormularioRegistro;

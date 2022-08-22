import React from 'react';
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import {
    Button,
    Card,
    CardContent,
    CardHeader,
    TextField
} from '@mui/material';


const clickHandler = (e, getData) => {
    e.preventDefault()
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    getData(email, password)
}

const FormularioLogin = ({getData}) => {
    return (
        <Paper
            elevation={3}

            sx={{ width: { md: '500px' } }}>
            <Card>
                <CardHeader
                    title="Inicio de sesión"
                    style={{ textAlign: 'center' }}
                />
                <CardContent>
                    <Grid
                        item
                        xs={12}
                        sx={{ mb: '20px' }}>
                        <TextField
                            required
                            id='email'
                            label='Email'
                            sx={{ width: '100%' }} />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sx={{ mb: '20px' }}>
                        <TextField
                            required
                            id='password'
                            label='Password'
                            type={'password'}
                            sx={{ width: '100%' }} />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            variant="contained"
                            color='secondary'
                            style={{ width: '100%' }}
                            onClick={(e) => clickHandler(e, getData)}>
                            Iniciar sesión
                        </Button>
                    </Grid>
                </CardContent>
            </Card>
        </Paper>
    );
}

export default FormularioLogin;

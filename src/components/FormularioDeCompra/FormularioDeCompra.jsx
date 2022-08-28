import React, { useState } from 'react';
import {
    Grid,
    Card,
    CardContent,
    Typography,
    Button,
    CardHeader,
    TextField
} from '@mui/material'
import { currencies } from '../../utils/Data';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const FormularioDeCompra = ({RealizarCompra, ActivaFormularioCompra}) => {

    const [currency, setCurrency] = useState('EUR')
    const [entradas, setEntradas] = useState(1)

    const handleClick = () => {

        const pedido = {
            currency,
            entradas
        }
        
        RealizarCompra(pedido)
    }
    const handleChange = (event) => {
        setCurrency(event.target.value)
    }
    const handleChangeEntradas = (event) => {
        setEntradas(event.target.value)
    }


    const ListaDeEntradas = () => {

        let array = []

        for (let index = 1; index <= 20; index++) {
            array.push(index)
        }
        return array
    }

    const Formulario = () => {
        return (
            <Grid 
                sx={{
                    padding:{md:'10% 25%'}
                }}>
                <Grid item xs={12}>
                    <TextField
                        id="filled-select-currency-native"
                        select
                        label="Selección de evento"
                        value={currency}
                        onChange={handleChange}
                        SelectProps={{
                            native: true,
                        }}
                        helperText="Por favor seleccione el evento"
                        variant="filled"
                        sx={{ width: '100%' }}>
                        {currencies().map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </TextField>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="filled-select-currency-native"
                        select
                        label="Cantidad de entradas"
                        value={entradas}
                        onChange={handleChangeEntradas}
                        SelectProps={{
                            native: true,
                        }}
                        helperText="Por favor seleccione cuantas entradas desea comprar"
                        variant="filled"
                        sx={{ width: '100%' }}>
                        {ListaDeEntradas().map((numero) => (
                            <option key={numero} value={numero}>
                                {numero}
                            </option>
                        ))}
                    </TextField>
                </Grid>
                <Grid item xs={12} textAlign={'right'}>
                    <Button variant="contained" color="error" onClick={() => ActivaFormularioCompra(false)}>
                        Cancelar
                    </Button>
                    <Button variant="contained" color="success" onClick={handleClick}>
                        Comprar <ShoppingCartIcon />
                    </Button>
                </Grid>
            </Grid>
        )
    }

    return (
        <Grid
            container
            direction={'row'}
            justifyContent={'center'}>
            <Card raised={true}>
                <CardHeader>
                    <Typography variant={'h3'}>
                        Nueva reservación de boleto
                    </Typography>
                </CardHeader>
                <CardContent>
                    <Grid>
                        {Formulario()}
                    </Grid>
                </CardContent>
            </Card>
        </Grid>
    );
}




export default FormularioDeCompra;

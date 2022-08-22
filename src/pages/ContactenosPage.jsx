import React from 'react';
import AppFrame from '../components/AppFrame';
import CartaDeMultiplataforma from '../components/CartaDeMultiplataforma';
import Contact from '../components/Contact';



const ContactenosPage = ({User, UserLogin}) => {
    return (
        <AppFrame isLogged={User} setUserLogin={UserLogin}>
            <Contact />
            <CartaDeMultiplataforma />
        </AppFrame>
    );
}

export default ContactenosPage;

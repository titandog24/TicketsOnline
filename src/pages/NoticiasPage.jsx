import React from 'react';
import AppFrame from '../components/AppFrame';
import Noticia from '../components/Noticia/Noticia';
import { noticias, noticiasFijas } from '../utils/Data';

const NoticiasPage = ({User, UserLogin}) => {
    return (
        <AppFrame isLogged={User} setUserLogin={UserLogin}>
            <Noticia Noticias={noticias} NoticiasFijas={noticiasFijas} />
        </AppFrame>
    );
}

export default NoticiasPage;

export const DatosListaCarta = () => {
    const data = [
        {
            imagen: 'https://www.eluniverso.com/resizer/sEF3HisnunOeLFvWeuuXpNeqIAQ=/960x670/smart/filters:quality(70)/cloudfront-us-east-1.images.arcpublishing.com/eluniverso/C4OJC3KWRRAKBOZ4RCITMNXMAI.jpg',
            texto: 'Concierto de Cold Play en Estadio Nacional'
        },
        {
            imagen: 'https://images.squarespace-cdn.com/content/v1/58597a19e58c62ba7fa48bf9/1539736835805-QTOHF9X0E88SHXZQDZKA/43879061_10155988196823262_1541225434799144960_n.jpg',
            texto: 'Monster Jump en Estadio Nacional'
        },
        {
            imagen: 'https://www.tdgarden.com/assets/img/TD_BOCELLI_TDGWEBSITE_EventThumbnail_1048x528-bbf5436301.jpg',
            texto: 'Andrea Bocelli en Parque VIVA'
        },
        {
            imagen: 'https://futbolchapinenvivo.com/wp-content/uploads/2021/07/Costa-Rica-vs-Canada-en-vivo.jpg',
            texto: 'Último partido Clasificatorio para CATAR 2022'
        },
        {
            imagen: 'https://futbolchapinenvivo.com/wp-content/uploads/2022/03/Costa-Rica-vs-Estados-Unidos-en-vivo-online-gratis.jpg',
            texto: 'Costa Rica vs USA en el Estadio Nacional'
        },
        {
            imagen: 'https://cdn.eticket.cr/imagenes/artistas/220124112153721_performer_img_1200x400sinone.jpg',
            texto: 'Gira Mundial de Bad Bunny en Costa Rica'
        }
    ]
    return data
}

export const ImagenCartaEncabezado = () => {
    return 'https://blog.facialix.com/wp-content/uploads/2021/03/hello_world_facialix-1.jpg'
}

export const TitulosYTexto = () => {
    return {
        tituloPrincipal: 'La plataforma diseñada para reservar tus eventos, conciertos y actividades deportas favoritas',
        tituloSecundario: 'En pocos minutos puedes reserver tu espacio en los eventos más importantes del país. ¡No te los pierdas!',
        tituloPatrocinadores: 'Con la confianza de personas y equipos de las empresas más importantes del mundo',
        nombreEmpresa: 'Tickets'
    }
}
export const ListaPatrocinador = () => {
    const url = `${process.env.PUBLIC_URL}/img/`
    return [
        {
            nombre:'Tesla',
            logo: `${url}/tesla.png`
        },
        {
            nombre:'Google',
            logo: `${url}/google.png`
        },
        {
            nombre:'GreenPeace',
            logo: `${url}/greenpeace.png`
        },
        {
            nombre:'Pinterest',
            logo: `${url}/pinterest.png`
        },
        {
            nombre:'Atlassian',
            logo: `${url}/atlassian.png`
        },
        {
            nombre:'Adidas',
            logo: `${url}/adidas.png`
        },
        {
            nombre:'Deutsche Bank',
            logo: `${url}/bank.png`
        }
    ]
}
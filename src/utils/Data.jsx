import moment from 'moment'
export const DatosListaCarta = () => {
    const data = [
        {
            imagen: 'https://www.eluniverso.com/resizer/sEF3HisnunOeLFvWeuuXpNeqIAQ=/960x670/smart/filters:quality(70)/cloudfront-us-east-1.images.arcpublishing.com/eluniverso/C4OJC3KWRRAKBOZ4RCITMNXMAI.jpg',
            texto: 'Cold Play en Estadio Nacional'
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

export const ListaOpcionesDetalle = () => {
    return [
        {
            titulo:'Nuestra misión',
            detalle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium deleniti, nesciunt consectetur neque nihil blanditiis eum laborum inventore iusto odio obcaecati ea enim ad animi vero expedita, alias totam facilis?'
        },
        {
            titulo:'Nuestra misión',
            detalle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium deleniti, nesciunt consectetur neque nihil blanditiis eum laborum inventore iusto odio obcaecati ea enim ad animi vero expedita, alias totam facilis?'
        },
        {
            titulo:'Nuestra misión',
            detalle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium deleniti, nesciunt consectetur neque nihil blanditiis eum laborum inventore iusto odio obcaecati ea enim ad animi vero expedita, alias totam facilis?'
        },
        {
            titulo:'Nuestra misión',
            detalle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium deleniti, nesciunt consectetur neque nihil blanditiis eum laborum inventore iusto odio obcaecati ea enim ad animi vero expedita, alias totam facilis?'
        }
    ]
}

export const ListaDeImagenes = () => {
    return {
        logoEmpresa:`${process.env.PUBLIC_URL}/img/logo.png`,
        fondoRegistro: `${process.env.PUBLIC_URL}/img/fondoRegistro.jpg`,
        TercerContenidoWelcome:'https://uizard.io/static/ed3b9ff8e4dfdf9e6fea5799733f881d/a8d7d/shoutout-image-a.webp',
        imagenDelHeader: `${process.env.PUBLIC_URL}/img/fondoRegistro.jpg`,
        imagenOficinaInicio: `${process.env.PUBLIC_URL}/img/inicioTickets.jpg`
    }
}

export const ImagenCartaEncabezado = () => {
    return 'https://blog.facialix.com/wp-content/uploads/2021/03/hello_world_facialix-1.jpg'
}

export const TitulosYTexto = () => {
    return {
        tituloPrincipal: 'La plataforma diseñada para reservar tus eventos, conciertos y actividades deportas favoritas',
        tituloSecundario: 'En pocos minutos puedes reserver tu espacio en los eventos más importantes del país. ¡No te los pierdas!',
        tituloPatrocinadores: 'Con la confianza de personas y equipos de las empresas más importantes del mundo',
        nombreEmpresa: 'Tickets',
        tituloMultiplataforma: 'Reservación Fácil',
        tituloSecundarioMultiplataforma: 'Existen muchas formas de reservar un espacio en un evento, ¡pero ninguna tan fácil y rápido como Tickets!',
        tituloEstadistica: '¡Nuestros usuarios aumentan rápidamente!',
        subtituloEstadistica: 'Unete tu también y descubre las ventajas, promociones y descuentos por ser un miembro activo de Tickets',
        tituloListaEventos: 'Nuestros próximos eventos más importantes',
        historiaTickets: 'Historia de Tickets',
        resumenHistoria: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium deleniti, nesciunt consectetur neque nihil blanditiis eum laborum inventore iusto odio obcaecati ea enim ad animi vero expedita, alias totam facilis?',
        tituloMision:'Misión y Visión',
        detalleMision: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium deleniti, nesciunt consectetur neque nihil blanditiis eum laborum inventore iusto odio obcaecati ea enim ad animi vero expedita, alias totam facilis?'
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

export const OpcionesDelFooter = () => {
   return [
        {
           categoria: "Tickets",
           opciones: [
            "Producto",
            "Planillas",
            "Software de reserva de espacios",
            "Tickets para empresas",
            "Tickets vs otras herramientas",
            "Precios"
           ]
        },
        {
           categoria: "Recursos",
           opciones: [
            "Blog",
            "Centro de ayuda",
            "Contacto",
            "Sobre",
            "Carreras ¡Estamos contratando!",
            "Investigar",
            "Prensa"
           ]
        },
        {
           categoria: "Redes sociales",
           opciones: [
            "Facebook",
            "Twitter",
            "LinkedIn",
            "Instagram",
            "Tik Tok"
           ]
        },
        {
           categoria: "Legal",
           opciones: [
            "Política de privacidad",
            "Términos de servicio"
           ]
        }
    ]
}

export const dataAumentoDeUsuarios = () => {
    return [
        {
            day: moment().subtract(5, 'days').format('DD/MM/YYYY'),
            NuevosUsuarios: 5
        },
        {
            day: moment().subtract(4, 'days').format('DD/MM/YYYY'),
            NuevosUsuarios: 15
        },
        {
            day: moment().subtract(3, 'days').format('DD/MM/YYYY'),
            NuevosUsuarios: 50
        },
        {
            day: moment().subtract(2, 'days').format('DD/MM/YYYY'),
            NuevosUsuarios: 80
        },
        {
            day: moment().subtract(1, 'days').format('DD/MM/YYYY'),
            NuevosUsuarios: 100
        }
    ]
}

export const DataDeEventos = () => {
    return [
        {
            fechaPublicacion: 'From 6 sept 2017 until 7 March 2018',
            titulo: 'Electricity: The Spark of Life',
            detalle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit labore accusamus dolor inventore iste recusandae libero ratione eius dicta sed voluptas quasi voluptatum quo aliquid quos, asperiores molestiae id explicabo!',
            enlace: '/',
            imagen: `${process.env.PUBLIC_URL}/img/fondoRegistro.jpg`,
            orientacionImagen: 'I'
        },
        {
            fechaPublicacion: 'From 6 sept 2017 until 7 March 2018',
            titulo: 'Electricity: The Spark of Life',
            detalle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit labore accusamus dolor inventore iste recusandae libero ratione eius dicta sed voluptas quasi voluptatum quo aliquid quos, asperiores molestiae id explicabo!',
            enlace: '/',
            imagen: `${process.env.PUBLIC_URL}/img/fondoRegistro.jpg`,
            orientacionImagen: 'D'
        },
        {
            fechaPublicacion: 'From 6 sept 2017 until 7 March 2018',
            titulo: 'Electricity: The Spark of Life',
            detalle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit labore accusamus dolor inventore iste recusandae libero ratione eius dicta sed voluptas quasi voluptatum quo aliquid quos, asperiores molestiae id explicabo!',
            enlace: '/',
            imagen: `${process.env.PUBLIC_URL}/img/fondoRegistro.jpg`,
            orientacionImagen: 'I'
        },
        {
            fechaPublicacion: 'From 6 sept 2017 until 7 March 2018',
            titulo: 'Electricity: The Spark of Life',
            detalle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit labore accusamus dolor inventore iste recusandae libero ratione eius dicta sed voluptas quasi voluptatum quo aliquid quos, asperiores molestiae id explicabo!',
            enlace: '/',
            imagen: `${process.env.PUBLIC_URL}/img/fondoRegistro.jpg`,
            orientacionImagen: 'D'
        }
    ]
}
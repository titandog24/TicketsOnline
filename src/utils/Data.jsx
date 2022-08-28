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
        imagenOficinaInicio: `${process.env.PUBLIC_URL}/img/inicioTickets.jpg`,
        imagenMapa: `${process.env.PUBLIC_URL}/img/Liberia.png`
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
        detalleMision: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium deleniti, nesciunt consectetur neque nihil blanditiis eum laborum inventore iusto odio obcaecati ea enim ad animi vero expedita, alias totam facilis?',
        tituloBlog: 'El blog de noticias de Ticikets',
        detalleBlog: 'Bienvenido al blog oficial de Ticket, donde puede aprender sobre todo lo relacionado con el diseño y leer las últimas noticias globales. Ya sea que sea un profesional experimentado o un recién llegado, hay algo para todos en el Blog de noticias de Tickets'
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

export const formatForm = () => {
    return  [
        {
            input: 'text',
            id: 'fullname',
            label: 'Nombre completo'
        },
        {
            input: 'text',
            id: 'email',
            label: 'Correo electrónico'
        },
        {
            input: 'text',
            id: 'company',
            label: 'Compañia'
        }
    ]
}

export const noticias =  [
    {
        pagination: {
            limit : 30,
            offset : 0,
            count : 30,
            total : 10000
        },
        data: [
            {
                author: "اليوم السابع",
                title: "القضاء البريطاني يبرئ إيد شيران فى سرقة أغنية \" Shape of you\" - اليوم السابع",
                description: "استطاع نجم البوب البريطاني إيد شيران الربح في معركته القضائية، حيث خلصته المحكمة العليا في لندن من السرقة الأدبية في أغنيته الشهيرة \" Shape of you\"،",
                url: "http://thinakhbarak.local/articles/43868029-%D8%A7%D9%84%D9%82%D8%B6%D8%A7%D8%A1-%D8%A7%D9%84%D8%A8%D8%B1%D9%8A%D8%B7%D8%A7%D9%86%D9%8A-%D9%8A%D8%A8%D8%B1%D8%A6-%D8%A5%D9%8A%D8%AF-%D8%B4%D9%8A%D8%B1%D8%A7%D9%86-%D9%81%D9%89-%D8%B3%D8%B1%D9%82%D8%A9",
                source: "Akhbarak.net",
                image: "https://i.discogs.com/lVOppFOmQY2H0Ze9amRdcK0tR0c69DQae0j04KScMQM/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTIxODQ0/ODItMTYyNDYxNzk3/NS0xMjcxLmpwZWc.jpeg",
                category: "general",
                language: "ar",
                country: "eg",
                published_at: "2022-04-06T13:52:14+00:00"
            },
            {
                author: "test1",
                title: "القضاء البريطاني يبرئ إيد شيران sdfsdfsdf سرقة أغنية \" Shape of you\" - اليوم السابع",
                description: "استطاع نجم البوب البريطاني إيد شيران الربح في معركته القضائية، حيث خلصته المحكمة العليا في لندن من السرقة الأدبية في أغنيته الشهيرة \" Shape of you\"،",
                url: "http://thinakhbarak.local/articles/43868029-%D8%A7%D9%84%D9%82%D8%B6%D8%A7%D8%A1-%D8%A7%D9%84%D8%A8%D8%B1%D9%8A%D8%B7%D8%A7%D9%86%D9%8A-%D9%8A%D8%A8%D8%B1%D8%A6-%D8%A5%D9%8A%D8%AF-%D8%B4%D9%8A%D8%B1%D8%A7%D9%86-%D9%81%D9%89-%D8%B3%D8%B1%D9%82%D8%A9",
                source: "Akhbarak.net",
                image: "https://i.discogs.com/lVOppFOmQY2H0Ze9amRdcK0tR0c69DQae0j04KScMQM/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTIxODQ0/ODItMTYyNDYxNzk3/NS0xMjcxLmpwZWc.jpeg",
                category: "general",
                language: "ar",
                country: "eg",
                published_at: "2022-04-06T13:52:14+00:00"
            },
            {
                author: "test2",
                title: "القضاء البريطاني يبرئ إيد شيران sdfsdfsdf سرقة أغنية \" Shape of you\" - اليوم السابع",
                description: "استطاع نجم البوب البريطاني إيد شيران الربح في معركته القضائية، حيث خلصته المحكمة العليا في لندن من السرقة الأدبية في أغنيته الشهيرة \" Shape of you\"،",
                url: "http://thinakhbarak.local/articles/43868029-%D8%A7%D9%84%D9%82%D8%B6%D8%A7%D8%A1-%D8%A7%D9%84%D8%A8%D8%B1%D9%8A%D8%B7%D8%A7%D9%86%D9%8A-%D9%8A%D8%A8%D8%B1%D8%A6-%D8%A5%D9%8A%D8%AF-%D8%B4%D9%8A%D8%B1%D8%A7%D9%86-%D9%81%D9%89-%D8%B3%D8%B1%D9%82%D8%A9",
                source: "Akhbarak.net",
                image: "https://i.discogs.com/lVOppFOmQY2H0Ze9amRdcK0tR0c69DQae0j04KScMQM/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTIxODQ0/ODItMTYyNDYxNzk3/NS0xMjcxLmpwZWc.jpeg",
                category: "general",
                language: "ar",
                country: "eg",
                published_at: "2022-04-06T13:52:14+00:00"
            },
            {
                author: "test3",
                title: "القضاء البريطاني يبرئ إيد شيران sdfsdfsdf سرقة أغنية \" Shape of you\" - اليوم السابع",
                description: "استطاع نجم البوب البريطاني إيد شيران الربح في معركته القضائية، حيث خلصته المحكمة العليا في لندن من السرقة الأدبية في أغنيته الشهيرة \" Shape of you\"،",
                url: "http://thinakhbarak.local/articles/43868029-%D8%A7%D9%84%D9%82%D8%B6%D8%A7%D8%A1-%D8%A7%D9%84%D8%A8%D8%B1%D9%8A%D8%B7%D8%A7%D9%86%D9%8A-%D9%8A%D8%A8%D8%B1%D8%A6-%D8%A5%D9%8A%D8%AF-%D8%B4%D9%8A%D8%B1%D8%A7%D9%86-%D9%81%D9%89-%D8%B3%D8%B1%D9%82%D8%A9",
                source: "Akhbarak.net",
                image: "https://i.discogs.com/lVOppFOmQY2H0Ze9amRdcK0tR0c69DQae0j04KScMQM/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTIxODQ0/ODItMTYyNDYxNzk3/NS0xMjcxLmpwZWc.jpeg",
                category: "general",
                language: "ar",
                country: "eg",
                published_at: "2022-04-06T13:52:14+00:00"
            },
            {
                author: "test4",
                title: "القضاء البريطاني يبرئ إيد شيران sdfsdfsdf سرقة أغنية \" Shape of you\" - اليوم السابع",
                description: "استطاع نجم البوب البريطاني إيد شيران الربح في معركته القضائية، حيث خلصته المحكمة العليا في لندن من السرقة الأدبية في أغنيته الشهيرة \" Shape of you\"،",
                url: "http://thinakhbarak.local/articles/43868029-%D8%A7%D9%84%D9%82%D8%B6%D8%A7%D8%A1-%D8%A7%D9%84%D8%A8%D8%B1%D9%8A%D8%B7%D8%A7%D9%86%D9%8A-%D9%8A%D8%A8%D8%B1%D8%A6-%D8%A5%D9%8A%D8%AF-%D8%B4%D9%8A%D8%B1%D8%A7%D9%86-%D9%81%D9%89-%D8%B3%D8%B1%D9%82%D8%A9",
                source: "Akhbarak.net",
                image: "https://i.discogs.com/lVOppFOmQY2H0Ze9amRdcK0tR0c69DQae0j04KScMQM/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTIxODQ0/ODItMTYyNDYxNzk3/NS0xMjcxLmpwZWc.jpeg",
                category: "general",
                language: "ar",
                country: "eg",
                published_at: "2022-04-06T13:52:14+00:00"
            },
            {
                author: "test5",
                title: "القضاء البريطاني يبرئ إيد شيران sdfsdfsdf سرقة أغنية \" Shape of you\" - اليوم السابع",
                description: "استطاع نجم البوب البريطاني إيد شيران الربح في معركته القضائية، حيث خلصته المحكمة العليا في لندن من السرقة الأدبية في أغنيته الشهيرة \" Shape of you\"،",
                url: "http://thinakhbarak.local/articles/43868029-%D8%A7%D9%84%D9%82%D8%B6%D8%A7%D8%A1-%D8%A7%D9%84%D8%A8%D8%B1%D9%8A%D8%B7%D8%A7%D9%86%D9%8A-%D9%8A%D8%A8%D8%B1%D8%A6-%D8%A5%D9%8A%D8%AF-%D8%B4%D9%8A%D8%B1%D8%A7%D9%86-%D9%81%D9%89-%D8%B3%D8%B1%D9%82%D8%A9",
                source: "Akhbarak.net",
                image: "https://i.discogs.com/lVOppFOmQY2H0Ze9amRdcK0tR0c69DQae0j04KScMQM/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTIxODQ0/ODItMTYyNDYxNzk3/NS0xMjcxLmpwZWc.jpeg",
                category: "general",
                language: "ar",
                country: "eg",
                published_at: "2022-04-06T13:52:14+00:00"
            },
            {
                author: "test6",
                title: "القضاء البريطاني يبرئ إيد شيران sdfsdfsdf سرقة أغنية \" Shape of you\" - اليوم السابع",
                description: "استطاع نجم البوب البريطاني إيد شيران الربح في معركته القضائية، حيث خلصته المحكمة العليا في لندن من السرقة الأدبية في أغنيته الشهيرة \" Shape of you\"،",
                url: "http://thinakhbarak.local/articles/43868029-%D8%A7%D9%84%D9%82%D8%B6%D8%A7%D8%A1-%D8%A7%D9%84%D8%A8%D8%B1%D9%8A%D8%B7%D8%A7%D9%86%D9%8A-%D9%8A%D8%A8%D8%B1%D8%A6-%D8%A5%D9%8A%D8%AF-%D8%B4%D9%8A%D8%B1%D8%A7%D9%86-%D9%81%D9%89-%D8%B3%D8%B1%D9%82%D8%A9",
                source: "Akhbarak.net",
                image: "https://i.discogs.com/lVOppFOmQY2H0Ze9amRdcK0tR0c69DQae0j04KScMQM/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTIxODQ0/ODItMTYyNDYxNzk3/NS0xMjcxLmpwZWc.jpeg",
                category: "general",
                language: "ar",
                country: "eg",
                published_at: "2022-04-06T13:52:14+00:00"
            },{
                author: "test7",
                title: "القضاء البريطاني يبرئ إيد شيران فى سرقة أغنية \" Shape of you\" - اليوم السابع",
                description: "استطاع نجم البوب البريطاني إيد شيران الربح في معركته القضائية، حيث خلصته المحكمة العليا في لندن من السرقة الأدبية في أغنيته الشهيرة \" Shape of you\"،",
                url: "http://thinakhbarak.local/articles/43868029-%D8%A7%D9%84%D9%82%D8%B6%D8%A7%D8%A1-%D8%A7%D9%84%D8%A8%D8%B1%D9%8A%D8%B7%D8%A7%D9%86%D9%8A-%D9%8A%D8%A8%D8%B1%D8%A6-%D8%A5%D9%8A%D8%AF-%D8%B4%D9%8A%D8%B1%D8%A7%D9%86-%D9%81%D9%89-%D8%B3%D8%B1%D9%82%D8%A9",
                source: "Akhbarak.net",
                image: "https://i.discogs.com/lVOppFOmQY2H0Ze9amRdcK0tR0c69DQae0j04KScMQM/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTIxODQ0/ODItMTYyNDYxNzk3/NS0xMjcxLmpwZWc.jpeg",
                category: "general",
                language: "ar",
                country: "eg",
                published_at: "2022-04-06T13:52:14+00:00"
            },
            {
                author: "test8",
                title: "القضاء البريطاني يبرئ إيد شيران sdfsdfsdf سرقة أغنية \" Shape of you\" - اليوم السابع",
                description: "استطاع نجم البوب البريطاني إيد شيران الربح في معركته القضائية، حيث خلصته المحكمة العليا في لندن من السرقة الأدبية في أغنيته الشهيرة \" Shape of you\"،",
                url: "http://thinakhbarak.local/articles/43868029-%D8%A7%D9%84%D9%82%D8%B6%D8%A7%D8%A1-%D8%A7%D9%84%D8%A8%D8%B1%D9%8A%D8%B7%D8%A7%D9%86%D9%8A-%D9%8A%D8%A8%D8%B1%D8%A6-%D8%A5%D9%8A%D8%AF-%D8%B4%D9%8A%D8%B1%D8%A7%D9%86-%D9%81%D9%89-%D8%B3%D8%B1%D9%82%D8%A9",
                source: "Akhbarak.net",
                image: "https://i.discogs.com/lVOppFOmQY2H0Ze9amRdcK0tR0c69DQae0j04KScMQM/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTIxODQ0/ODItMTYyNDYxNzk3/NS0xMjcxLmpwZWc.jpeg",
                category: "general",
                language: "ar",
                country: "eg",
                published_at: "2022-04-06T13:52:14+00:00"
            },
            {
                author: "test9",
                title: "القضاء البريطاني يبرئ إيد شيران sdfsdfsdf سرقة أغنية \" Shape of you\" - اليوم السابع",
                description: "استطاع نجم البوب البريطاني إيد شيران الربح في معركته القضائية، حيث خلصته المحكمة العليا في لندن من السرقة الأدبية في أغنيته الشهيرة \" Shape of you\"،",
                url: "http://thinakhbarak.local/articles/43868029-%D8%A7%D9%84%D9%82%D8%B6%D8%A7%D8%A1-%D8%A7%D9%84%D8%A8%D8%B1%D9%8A%D8%B7%D8%A7%D9%86%D9%8A-%D9%8A%D8%A8%D8%B1%D8%A6-%D8%A5%D9%8A%D8%AF-%D8%B4%D9%8A%D8%B1%D8%A7%D9%86-%D9%81%D9%89-%D8%B3%D8%B1%D9%82%D8%A9",
                source: "Akhbarak.net",
                image: "https://i.discogs.com/lVOppFOmQY2H0Ze9amRdcK0tR0c69DQae0j04KScMQM/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTIxODQ0/ODItMTYyNDYxNzk3/NS0xMjcxLmpwZWc.jpeg",
                category: "general",
                language: "ar",
                country: "eg",
                published_at: "2022-04-06T13:52:14+00:00"
            },
            {
                author: "test10",
                title: "القضاء البريطاني يبرئ إيد شيران sdfsdfsdf سرقة أغنية \" Shape of you\" - اليوم السابع",
                description: "استطاع نجم البوب البريطاني إيد شيران الربح في معركته القضائية، حيث خلصته المحكمة العليا في لندن من السرقة الأدبية في أغنيته الشهيرة \" Shape of you\"،",
                url: "http://thinakhbarak.local/articles/43868029-%D8%A7%D9%84%D9%82%D8%B6%D8%A7%D8%A1-%D8%A7%D9%84%D8%A8%D8%B1%D9%8A%D8%B7%D8%A7%D9%86%D9%8A-%D9%8A%D8%A8%D8%B1%D8%A6-%D8%A5%D9%8A%D8%AF-%D8%B4%D9%8A%D8%B1%D8%A7%D9%86-%D9%81%D9%89-%D8%B3%D8%B1%D9%82%D8%A9",
                source: "Akhbarak.net",
                image: "https://i.discogs.com/lVOppFOmQY2H0Ze9amRdcK0tR0c69DQae0j04KScMQM/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTIxODQ0/ODItMTYyNDYxNzk3/NS0xMjcxLmpwZWc.jpeg",
                category: "general",
                language: "ar",
                country: "eg",
                published_at: "2022-04-06T13:52:14+00:00"
            },
            {
                author: "test11",
                title: "القضاء البريطاني يبرئ إيد شيران sdfsdfsdf سرقة أغنية \" Shape of you\" - اليوم السابع",
                description: "استطاع نجم البوب البريطاني إيد شيران الربح في معركته القضائية، حيث خلصته المحكمة العليا في لندن من السرقة الأدبية في أغنيته الشهيرة \" Shape of you\"،",
                url: "http://thinakhbarak.local/articles/43868029-%D8%A7%D9%84%D9%82%D8%B6%D8%A7%D8%A1-%D8%A7%D9%84%D8%A8%D8%B1%D9%8A%D8%B7%D8%A7%D9%86%D9%8A-%D9%8A%D8%A8%D8%B1%D8%A6-%D8%A5%D9%8A%D8%AF-%D8%B4%D9%8A%D8%B1%D8%A7%D9%86-%D9%81%D9%89-%D8%B3%D8%B1%D9%82%D8%A9",
                source: "Akhbarak.net",
                image: "https://i.discogs.com/lVOppFOmQY2H0Ze9amRdcK0tR0c69DQae0j04KScMQM/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTIxODQ0/ODItMTYyNDYxNzk3/NS0xMjcxLmpwZWc.jpeg",
                category: "general",
                language: "ar",
                country: "eg",
                published_at: "2022-04-06T13:52:14+00:00"
            },
            {
                author: "test12",
                title: "القضاء البريطاني يبرئ إيد شيران sdfsdfsdf سرقة أغنية \" Shape of you\" - اليوم السابع",
                description: "استطاع نجم البوب البريطاني إيد شيران الربح في معركته القضائية، حيث خلصته المحكمة العليا في لندن من السرقة الأدبية في أغنيته الشهيرة \" Shape of you\"،",
                url: "http://thinakhbarak.local/articles/43868029-%D8%A7%D9%84%D9%82%D8%B6%D8%A7%D8%A1-%D8%A7%D9%84%D8%A8%D8%B1%D9%8A%D8%B7%D8%A7%D9%86%D9%8A-%D9%8A%D8%A8%D8%B1%D8%A6-%D8%A5%D9%8A%D8%AF-%D8%B4%D9%8A%D8%B1%D8%A7%D9%86-%D9%81%D9%89-%D8%B3%D8%B1%D9%82%D8%A9",
                source: "Akhbarak.net",
                image: "https://i.discogs.com/lVOppFOmQY2H0Ze9amRdcK0tR0c69DQae0j04KScMQM/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTIxODQ0/ODItMTYyNDYxNzk3/NS0xMjcxLmpwZWc.jpeg",
                category: "general",
                language: "ar",
                country: "eg",
                published_at: "2022-04-06T13:52:14+00:00"
            },
            {
                author: "test13",
                title: "القضاء البريطاني يبرئ إيد شيران sdfsdfsdf سرقة أغنية \" Shape of you\" - اليوم السابع",
                description: "استطاع نجم البوب البريطاني إيد شيران الربح في معركته القضائية، حيث خلصته المحكمة العليا في لندن من السرقة الأدبية في أغنيته الشهيرة \" Shape of you\"،",
                url: "http://thinakhbarak.local/articles/43868029-%D8%A7%D9%84%D9%82%D8%B6%D8%A7%D8%A1-%D8%A7%D9%84%D8%A8%D8%B1%D9%8A%D8%B7%D8%A7%D9%86%D9%8A-%D9%8A%D8%A8%D8%B1%D8%A6-%D8%A5%D9%8A%D8%AF-%D8%B4%D9%8A%D8%B1%D8%A7%D9%86-%D9%81%D9%89-%D8%B3%D8%B1%D9%82%D8%A9",
                source: "Akhbarak.net",
                image: "https://i.discogs.com/lVOppFOmQY2H0Ze9amRdcK0tR0c69DQae0j04KScMQM/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTIxODQ0/ODItMTYyNDYxNzk3/NS0xMjcxLmpwZWc.jpeg",
                category: "general",
                language: "ar",
                country: "eg",
                published_at: "2022-04-06T13:52:14+00:00"
            }
        ]
    }
]

export const noticiasFijas =  [
    {
        data: [
            {
                author: "اليوم السابع",
                title: "القضاء البريطاني يبرئ إيد شيران فى سرقة أغنية \" Shape of you\" - اليوم السابع",
                description: "استطاع نجم البوب البريطاني إيد شيران الربح في معركته القضائية، حيث خلصته المحكمة العليا في لندن من السرقة الأدبية في أغنيته الشهيرة \" Shape of you\"،",
                url: "http://thinakhbarak.local/articles/43868029-%D8%A7%D9%84%D9%82%D8%B6%D8%A7%D8%A1-%D8%A7%D9%84%D8%A8%D8%B1%D9%8A%D8%B7%D8%A7%D9%86%D9%8A-%D9%8A%D8%A8%D8%B1%D8%A6-%D8%A5%D9%8A%D8%AF-%D8%B4%D9%8A%D8%B1%D8%A7%D9%86-%D9%81%D9%89-%D8%B3%D8%B1%D9%82%D8%A9",
                source: "Akhbarak.net",
                image: "https://i.discogs.com/lVOppFOmQY2H0Ze9amRdcK0tR0c69DQae0j04KScMQM/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTIxODQ0/ODItMTYyNDYxNzk3/NS0xMjcxLmpwZWc.jpeg",
                category: "general",
                language: "ar",
                country: "eg",
                published_at: "2022-04-06T13:52:14+00:00"
            },
            {
                author: "test",
                title: "القضاء البريطاني يبرئ إيد شيران sdfsdfsdf سرقة أغنية \" Shape of you\" - اليوم السابع",
                description: "استطاع نجم البوب البريطاني إيد شيران الربح في معركته القضائية، حيث خلصته المحكمة العليا في لندن من السرقة الأدبية في أغنيته الشهيرة \" Shape of you\"،",
                url: "http://thinakhbarak.local/articles/43868029-%D8%A7%D9%84%D9%82%D8%B6%D8%A7%D8%A1-%D8%A7%D9%84%D8%A8%D8%B1%D9%8A%D8%B7%D8%A7%D9%86%D9%8A-%D9%8A%D8%A8%D8%B1%D8%A6-%D8%A5%D9%8A%D8%AF-%D8%B4%D9%8A%D8%B1%D8%A7%D9%86-%D9%81%D9%89-%D8%B3%D8%B1%D9%82%D8%A9",
                source: "Akhbarak.net",
                image: "https://i.discogs.com/lVOppFOmQY2H0Ze9amRdcK0tR0c69DQae0j04KScMQM/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTIxODQ0/ODItMTYyNDYxNzk3/NS0xMjcxLmpwZWc.jpeg",
                category: "general",
                language: "ar",
                country: "eg",
                published_at: "2022-04-06T13:52:14+00:00"
            }
        ]
    }
]

export const DatosEventos = () => {
    return [
        {
            recibo: '09876',
            evento: 'Monster Jump',
            cantidadEntradas: 5
        },
        {
            recibo: '12345',
            evento: 'Concierto de Cultura Profetica',
            cantidadEntradas: 2
        },
        {
            recibo: '34567',
            evento: 'Partido Costa Rica vs México',
            cantidadEntradas: 2
        },
    ]
}


export const currencies  = () => [
    {
      value: 'c2022-1',
      label: 'Concierto de Bad Bunny',
    },
    {
      value: 'c2022-2',
      label: 'Concierto con BTS',
    },
    {
      value: 'c2022-3',
      label: 'Concierto con Guns And Roses',
    },
    {
      value: 'c2022-4',
      label: 'Concierto con Cristian Nodal',
    },
  ];
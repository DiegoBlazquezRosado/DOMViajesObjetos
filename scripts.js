//DOM Viajes

const divBienvenidos = document.getElementById('bienvenidos'); 
const divRecomendados = document.getElementById('recomendados');
const divDestinos = document.getElementById('destinos');
let fragment = document.createDocumentFragment();

//Bienvenidos
const insertBienvenidos = () => {

    const objBienvenidos = [
        { src: "./banner/1.jpg", title: "Imagen 1", alt: "Descripción de Imagen 1" },
        { src: "./banner/2.jpg", title: "Imagen 2", alt: "Descripción de Imagen 2" },
        { src: "./banner/3.jpg", title: "Imagen 3", alt: "Descripción de Imagen 3" },
        { src: "./banner/4.jpg", title: "Imagen 4", alt: "Descripción de Imagen 4" },
        { src: "./banner/5.jpg", title: "Imagen 5", alt: "Descripción de Imagen 5" },
        { src: "./banner/6.jpg", title: "Imagen 6", alt: "Descripción de Imagen 6" },
        { src: "./banner/7.jpg", title: "Imagen 7", alt: "Descripción de Imagen 7" },
        { src: "./banner/8.jpg", title: "Imagen 8", alt: "Descripción de Imagen 8" },
    ];
    let randomBienvenidos = Math.floor(Math.random()*objBienvenidos.length);

    const imgBienvenidos = document.createElement('img');
    imgBienvenidos.src = objBienvenidos[randomBienvenidos].src;
    imgBienvenidos.title = objBienvenidos[randomBienvenidos].title;
    imgBienvenidos.alt = objBienvenidos[randomBienvenidos].alt;
    fragment.append(imgBienvenidos);

    divBienvenidos.append(fragment);
}

//Recomendados
const insertRecomendados = () => {

    const objRecomendados = [
        { src: "./viajes/viajes-1.jpg", title: "Imagen 1", alt: "Descripción de Imagen 1", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolore culpa voluptatibus odio autem, expedita quam ipsam unde corporis? Dignissimos ipsa qui voluptatem! Temporibus omnis vitae dolor hic eaque ea." },
        { src: "./viajes/viajes-2.jpg", title: "Imagen 2", alt: "Descripción de Imagen 2", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolore culpa voluptatibus odio autem, expedita quam ipsam unde corporis? Dignissimos ipsa qui voluptatem! Temporibus omnis vitae dolor hic eaque ea." },
        { src: "./viajes/viajes-3.jpg", title: "Imagen 3", alt: "Descripción de Imagen 3", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolore culpa voluptatibus odio autem, expedita quam ipsam unde corporis? Dignissimos ipsa qui voluptatem! Temporibus omnis vitae dolor hic eaque ea." },
        { src: "./viajes/viajes-4.jpg", title: "Imagen 4", alt: "Descripción de Imagen 4", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolore culpa voluptatibus odio autem, expedita quam ipsam unde corporis? Dignissimos ipsa qui voluptatem! Temporibus omnis vitae dolor hic eaque ea." },
        { src: "./viajes/viajes-5.jpg", title: "Imagen 5", alt: "Descripción de Imagen 5", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolore culpa voluptatibus odio autem, expedita quam ipsam unde corporis? Dignissimos ipsa qui voluptatem! Temporibus omnis vitae dolor hic eaque ea." },
        { src: "./viajes/viajes-6.jpg", title: "Imagen 6", alt: "Descripción de Imagen 6", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolore culpa voluptatibus odio autem, expedita quam ipsam unde corporis? Dignissimos ipsa qui voluptatem! Temporibus omnis vitae dolor hic eaque ea." },
        { src: "./viajes/viajes-7.jpg", title: "Imagen 7", alt: "Descripción de Imagen 7", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolore culpa voluptatibus odio autem, expedita quam ipsam unde corporis? Dignissimos ipsa qui voluptatem! Temporibus omnis vitae dolor hic eaque ea." },
    ];

    objRecomendados.forEach((recomendado) => {
        const articleRecomendados = document.createElement('article');
        articleRecomendados.classList.add('card');

        const imgRecomendados = document.createElement('img');
        imgRecomendados.src = recomendado.src;
        imgRecomendados.title = recomendado.title;
        imgRecomendados.alt = recomendado.alt;
        articleRecomendados.append(imgRecomendados);

        const h3Recomendados = document.createElement('h3');
        articleRecomendados.append(h3Recomendados);
        h3Recomendados.innerText = recomendado.title;

        const pRecomendados = document.createElement('p');
        articleRecomendados.append(pRecomendados);
        pRecomendados.innerText = recomendado.text;

        fragment.append(articleRecomendados);
    });

    divRecomendados.append(fragment);
}

//Destinos
const insertDestinos = () => {

    const objDestinos = [
        { name: "Australia" },
        { name: "Suiza" },
        { name: "País Vasco" },
        { name: "Paises Bajos" },
        { name: "Dinamaca" },
    ];

    const selectDestinos = document.createElement('select');

    objDestinos.forEach((destino) => {
        const optionDestinos = document.createElement('option');
        optionDestinos.value = destino.name;
        optionDestinos.text = destino.name;
        selectDestinos.append(optionDestinos);
        fragment.append(selectDestinos);
    });

    divDestinos.append(fragment);
}

insertBienvenidos();
insertRecomendados();
insertDestinos();
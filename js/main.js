// Consegna:
// Dato un array di oggetti letterali con:
// url dell’immagine
// titolo
// descrizione
// Creare un carosello come nella foto allegata.
// Milestone 0:
// Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.

const images = [
    {
        url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
        title: 'Svezia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Perù',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
        title: 'Chile',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Argentina',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
        title: 'Colombia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
];

let activeImageIndex = 0;
const carousel = document.querySelector('.carousel-image');


// creo un if per cui se l'immagine è uguale alla prima nell'array allora aggiungo la classe con display block cosi da farla vedere

for (let index = 0; index < images.length; index++) {
    let image = document.createElement('img');
    image.setAttribute('src', `${images[index].url}`);
    if (index == activeImageIndex) {
        image.classList.add("active");
        image.innerHTML = index;
        // in tutti gli altri casi sarà display none
    } else if (index > 0) {
        image.classList.remove("active");
    };

    carousel.append(image);


};


const btnStop = document.getElementById('btn-stop');
const btnPre = document.getElementById('btn-next');
btnPre.addEventListener('click', function () {
    // const clock = setInterval(imgPlay,);
    // btnStop.addEventListener('click', function () {
    //     clearInterval(clock);
    // });
    const activeImage = document.querySelector('img.active');
    activeImage.classList.remove('active');
    console.log(carousel);
    console.log(activeImage);

    activeImageIndex++;


    if (activeImageIndex === images.length) {
        activeImageIndex = 0;
    };
    const nextimage = document.getElementById(activeImageIndex);
    console.log(nextimage);
    nextimage.classList.add('active');
    // activeImage[activeImageIndex].classList.add('active');
    // console.log(activeImage);
});




// creo un button stop per fermare (eventualmente) lo scorrimento



// inserisco la funzione di scorrimento delle immagini all'interno di una funzione che poi inserisco sopra nel setInterval

function imgPlay() {
    const activeImage = document.querySelector('img.active');
    activeImage.classList.remove('active');
    console.log(carousel);
    console.log(activeImage);

    activeImageIndex++;


    if (activeImageIndex === images.length) {
        activeImageIndex = 0;
    };
    const nextimage = document.getElementById(activeImageIndex);
    console.log(nextimage);
    nextimage.classList.add('active');
};
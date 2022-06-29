

// creo un bottone cui agganciare la funzione di scorrimento immagini del carosello


// inserisco l'array fornito e creo un add event listener sui buttons nell'html per aggancirvi la funzione

const imgList = [
    'https://cdn.photographycourse.net/wp-content/uploads/2022/04/Portrait-vs-Landscape-Featured-Image-3.jpg',
    'https://i.natgeofe.com/n/2a832501-483e-422f-985c-0e93757b7d84/6.jpg',
    'https://cdn.photographycourse.net/wp-content/uploads/2014/11/Landscape-Photography-steps.jpg',
    'https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature.jpg',
    'https://iso.500px.com/wp-content/uploads/2021/02/Torres-Del-Paine-Sunset-By-Paul-Reiffer-2-1500x1000.jpg',
    'https://mymodernmet.com/wp/wp-content/uploads/2020/02/Landscape-Photographer-of-the-Year-Sander-Grefte.jpg'
];
let activeImageIndex = 0;
const carousel = document.querySelector('.carousel-image');


// creo un if per cui se l'immagine è uguale alla prima nell'array allora aggiungo la classe con display block cosi da farla vedere

for (let index = 0; index < imgList.length; index++) {
    let image = document.createElement('img');
    image.setAttribute('src', imgList[index]);
    image.setAttribute("id", index);
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
    const clock = setInterval(imgPlay, 700);
    btnStop.addEventListener('click', function () {
        clearInterval(clock);
    });
    // const activeImage = document.querySelector('img.active');
    // activeImage.classList.remove('active');
    // console.log(carousel);
    // console.log(activeImage);

    // activeImageIndex++;


    // if (activeImageIndex === imgList.length) {
    //     activeImageIndex = 0;
    // };
    // const nextimage = document.getElementById(activeImageIndex);
    // console.log(nextimage);
    // nextimage.classList.add('active');
    // // activeImage[activeImageIndex].classList.add('active');
    // // console.log(activeImage);
});




// creo un button stop per fermare (eventualmente) lo scorrimento



// inserisco la funzione di scorrimento delle immagini all'interno di una funzione che poi inserisco sopra nel setInterval

function imgPlay() {
    const activeImage = document.querySelector('img.active');
    activeImage.classList.remove('active');
    console.log(carousel);
    console.log(activeImage);

    activeImageIndex++;


    if (activeImageIndex === imgList.length) {
        activeImageIndex = 0;
    };
    const nextimage = document.getElementById(activeImageIndex);
    console.log(nextimage);
    nextimage.classList.add('active');
};
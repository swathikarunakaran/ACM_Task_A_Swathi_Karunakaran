const images = [
    { src: 'https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg', category: 'Nature', slideshow: true, alt: 'Nature 1' },
    { src: 'https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=400', category: 'Nature', slideshow: true, alt: 'Nature 2' },
    { src: 'https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', category: 'Nature', alt: 'Nature 3' },
    { src: 'https://images.pexels.com/photos/158028/bellingrath-gardens-alabama-landscape-scenic-158028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', category: 'Nature', alt: 'Nature 4' },
    { src: 'https://images.pexels.com/photos/4029925/pexels-photo-4029925.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', category: 'Portraits', slideshow: true, alt: 'Portrait 1' },
    { src: 'https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', category: 'Portraits', alt: 'Portrait 2' },
    { src: 'https://images.pexels.com/photos/135018/pexels-photo-135018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', category: 'Architecture', slideshow: true, alt: 'Architecture 1' },
    { src: 'https://images.pexels.com/photos/30433303/pexels-photo-30433303/free-photo-of-baroque-church-facade-with-intricate-details.jpeg?auto=compress&cs=tinysrgb&w=400', category: 'Architecture', slideshow: true, alt: 'Architecture 2' },
    { src: 'https://images.pexels.com/photos/30373182/pexels-photo-30373182/free-photo-of-majestic-meenakshi-amman-temple-in-madurai.jpeg?auto=compress&cs=tinysrgb&w=400', category: 'Architecture', alt: 'Architecture 3' },
    { src: 'https://images.pexels.com/photos/2174656/pexels-photo-2174656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', category: 'Travel', slideshow: true, alt: 'Travel 1' },
    { src: 'https://images.pexels.com/photos/2265876/pexels-photo-2265876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', category: 'Travel', alt: 'Travel 2' },
];

let slideIndex = 1;

function populateSlideshow() {
    const slideshowContainer = document.querySelector('.slideshow-container');
    if (!slideshowContainer) return;

    slideshowContainer.innerHTML = '';

    const slideshowImages = images.filter(image => image.slideshow);

    slideshowImages.forEach(image => {
        const slideDiv = document.createElement('div');
        slideDiv.classList.add('mySlides', 'fade');

        const img = document.createElement('img');
        img.src = image.src;
        img.style.width = '100%';
        img.alt = image.alt;

        slideDiv.appendChild(img);
        slideshowContainer.appendChild(slideDiv);
    });

    const dotsContainer = document.querySelector('.dots-container');
    if (!dotsContainer) return;
    dotsContainer.innerHTML = '';

    slideshowImages.forEach(() => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        dotsContainer.appendChild(dot);
    });

    showSlides(slideIndex);
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (slides.length === 0) return;

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

function filterImages(category) {
    const imageGrid = document.querySelector('.image-grid');
    if (!imageGrid) return;

    imageGrid.innerHTML = ''; // Clear the grid FIRST

    if (category === 'All') {
        images.forEach(image => {
            const img = document.createElement('img');
            img.src = image.src;
            img.alt = image.alt;
            imageGrid.appendChild(img);
        });
    } else {
        const filteredImages = images.filter(image => image.category === category); // Filter images FIRST

        filteredImages.forEach(image => { // THEN iterate and add
            const img = document.createElement('img');
            img.src = image.src;
            img.alt = image.alt;
            imageGrid.appendChild(img);
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    populateSlideshow();
    filterImages('All'); // Show all images initially
});
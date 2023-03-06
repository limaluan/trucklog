const urlTrucks = "https://api.unsplash.com/search/photos?client_id=89UhoUfGQNVC_n0-9nNx0Mg25maQ3XW43VJv0q0WycI&query=truck";
var slides = document.querySelectorAll('.slides');
var currentSlide = 0;

console.log(slides)

function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

fetch(urlTrucks)
    .then((response) => response.json())
    .then((data) => {
        let allImages = data.results;
        let allUrlImages = [];
        for (let index = 0; index < allImages.length; index++) {
            allUrlImages[index] = allImages[index].urls.small;
        
    }
        document.getElementById("imgT1").src = allUrlImages[4];
        document.getElementById("imgT2").src = allUrlImages[1];
        document.getElementById("imgT3").src = allUrlImages[7];
        
 })

 
    setInterval(nextSlide, 2500);
    
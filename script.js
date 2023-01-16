

let time = 5000,
    currentImageIndex=0,
    images = document
                .querySelectorAll("#banner img")
    max = images.length;
function nextImage(){
    
    images[currentImageIndex]
        .classList.remove("cartaz")

    currentImageIndex++
    
    if(currentImageIndex >= max)
        currentImageIndex = 0

    images[currentImageIndex]
        .classList.add("cartaz")
}

function start() {
  setInterval(() => {
    //ttroca de imagem
    nextImage()
  }, time)
}
window.addEventListener("load", start) 

$('.carousel').slick({
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 5,
});
function start() {
  setInterval(() => {
    //ttroca de imagem
    nextImage()
  }, time)
}
window.addEventListener("load", start) 

$('#carousel2').slick({
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
});
function start() {
  setInterval(() => {
    //ttroca de imagem
    nextImage()
  }, time)
}
window.addEventListener("load", start) 

$('.Lcarousel').slick({
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 3,
});
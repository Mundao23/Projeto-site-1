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
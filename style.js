// Automatically scroll the image slider
let currentIndex = 0;
const images = document.querySelectorAll('.image-slider img');

function changeImage() {
  images[currentIndex].style.display = 'none';
  currentIndex = (currentIndex + 1) % images.length;
  images[currentIndex].style.display = 'inline-block';
}

setInterval(changeImage, 3000);


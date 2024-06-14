// avatar-toggle.js
const image = document.getElementById('avatar');

image.addEventListener('click', function () {
  if (image.src.match('./assets/girl-illustration.png')) {
    image.src = './assets/pinkyukata.png';
  } else if (image.src.match('./assets/pinkyukata.png')) {
    image.src = './assets/redorange-yukata.png';
  } else if (image.src.match('./assets/redorange-yukata.png')) {
    image.src = './assets/girl-illustration.png';
  }
});
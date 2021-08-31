const images = ["sky.jpg", "ocean.jpg","moon.jpg"];

const chooseImage = images[Math.floor(Math.random() * images.length)];

document.body.style.backgroundImage = `url(images/${chooseImage})`;

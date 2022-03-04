const images = ["0.jpeg", "1.jpeg", "2.jpeg", "3.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const image = document.createElement("img");

image.src = `img/${chosenImage}`;

console.log(image);

document.body.appendChild(image);

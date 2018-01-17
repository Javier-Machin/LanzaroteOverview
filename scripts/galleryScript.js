let images = ["./images/elgolfo1.jpg", "./images/timanfaya1.jpg", "./images/timanfaya2.jpg", "./images/timanfaya3.jpg",
              "./images/lagraciosa.jpg", "./images/lagraciosa2.jpg", "./images/PlayaDorada.jpg"]

let galleryGrid = document.querySelector(".gridContainer");

for (let i = 0; i < images.length; i++) {
	let newImg = document.createElement("img");
	newImg.classList.add('gridItem');
	newImg.style.cssText = 'content: url(' + images[i] + ');';
	galleryGrid.appendChild(newImg);
} 

galleryGrid.style.cssText = 'grid-template-columns: repeat(3, 280px);' + 'grid-template-rows: repeat(6, 160px);';



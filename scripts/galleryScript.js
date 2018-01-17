let images = ["./images/elgolfo1.jpg", "./images/timanfaya1.jpg", "./images/timanfaya2.jpg", "./images/timanfaya3.jpg",
              "./images/lagraciosa.jpg", "./images/lagraciosa2.jpg", "./images/PlayaDorada.jpg"]

let galleryGrid = document.querySelector(".gridContainer");

for (let i = 0; i < images.length; i++) {
	let newDiv = document.createElement("div");
	newDiv.classList.add('gridItem');
	newDiv.style.cssText = 'background: url(' + images[i] + ') no-repeat;' + 'background-size: contain;';
	galleryGrid.appendChild(newDiv);
} 

galleryGrid.style.cssText = 'grid-template-columns: repeat(3, 280px);' + 'grid-template-rows: repeat(6, 160px);';



let images = ["./images/small/elgolfo1s.jpg", "./images/small/timanfaya1s.jpg", "./images/small/timanfaya2s.jpg", "./images/small/timanfaya3s.jpg",
              "./images/small/lagraciosas.jpg", "./images/small/lagraciosa2s.jpg", "./images/small/cuevadelosverdes1s.jpg", "./images/small/jameosdelagua1s.jpg", 
              "./images/small/timanfaya4s.jpg", "./images/small/mar1s.jpg", "./images/small/cesarmanrique1s.jpg", "./images/small/cuevadelosverdes2s.jpg", 
              "./images/small/jameosdelagua2s.jpg", "./images/small/jardindecactus1s.jpg", "./images/small/jardindecactus2s.jpg", "./images/small/miradorharia1s.jpg", 
              "./images/small/timanfaya5s.jpg", "./images/small/timanfaya6s.jpg", "./images/small/tinguaton1s.jpg", "./images/small/PlayaDoradas.jpg"]
images.sort()

let galleryGrid = document.querySelector(".gridContainer");

for (let i = 0; i < images.length; i++) {
	let newDiv = document.createElement("div");
	newDiv.classList.add('gridItem');
	newDiv.style.cssText = 'background: url(' + images[i] + ') no-repeat;' + 'background-size: contain;';
	galleryGrid.appendChild(newDiv);
} 

galleryGrid.style.cssText = 'grid-template-columns: repeat(3, 280px);' + 'grid-template-rows: repeat(7, 160px);';



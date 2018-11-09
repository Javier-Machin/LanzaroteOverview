let images = ["./images/small/elgolfo1.jpg", "./images/small/timanfaya1.jpg", "./images/small/timanfaya2.jpg", "./images/small/timanfaya3.jpg",
              "./images/small/lagraciosa.jpg", "./images/small/lagraciosa2.jpg", "./images/small/cuevadelosverdes1.jpg", "./images/small/jameosdelagua1.jpg", 
              "./images/small/timanfaya4.jpg", "./images/small/mar1.jpg", "./images/small/cesarmanrique1.jpg", "./images/small/cuevadelosverdes2.jpg", 
              "./images/small/jameosdelagua2.jpg", "./images/small/jardindecactus1.jpg", "./images/small/jardindecactus2.jpg", "./images/small/miradorharia1.jpg", 
              "./images/small/timanfaya5.jpg", "./images/small/timanfaya6.jpg", "./images/small/tinguaton1.jpg", "./images/small/PlayaDorada.jpg"]
images.sort()
let imageZoomWindow = document.getElementById('imageZoomWindow');
let imageZoom = document.getElementById("imageZoom");
let galleryGrid = document.querySelector(".gridContainer");

// Creates as many divs as images there is to show in the gallery
for (let i = 0; i < images.length; i++) {
	let newDiv = document.createElement("div");
	newDiv.classList.add('gridItem');
	newDiv.style.cssText = 'background: url(' + images[i] + ') no-repeat;' + 'background-size: contain;';
	galleryGrid.appendChild(newDiv);
} 

galleryGrid.style.cssText = 'grid-template-columns: repeat(3, 280px);' + 'grid-template-rows: repeat(7, 160px);';
galleryGrid.addEventListener("click", fullSizeImage);

function fullSizeImage(e) {
	// Gets the source for the zoomed image by removing part of the route
	// to the small version, directing it to the full size version
	let imgSource = e.target.style.background;
	imgSource = imgSource.replace("small/", "").split('"')[1];
	if (imgSource.includes("images")) {
		imageZoomWindow.style.display = "block";
 		imageZoom.src = imgSource;
 	}
}
let span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
  imageZoomWindow.style.display = "none";
}



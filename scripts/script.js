let topImgContainer = document.querySelector(".topImgContainer");
let topImg = document.querySelectorAll(".topImgContainer .contentImg");

setInterval(switchImages, 11000);

function switchImages() {
	topImg[0].classList.toggle("transparent");
	topImg[1].classList.toggle("transparent");
	setTimeout(changeSource, 1000);
}

function changeSource() {
	let mySrc = topImg[0].getAttribute('src');
	let mySrc2 = topImg[1].getAttribute('src');
	if(mySrc === 'images/timanfaya1.jpg') {
	  topImg[0].setAttribute ('src', 'images/elgolfo1.jpg');
	  topImg[1].setAttribute ('src', 'images/lagraciosa.jpg');
	} else {
		topImg[0].setAttribute ('src', 'images/timanfaya1.jpg');
		topImg[1].setAttribute ('src', 'images/timanfaya2.jpg');
	}
	setTimeout(function(){topImg[0].classList.toggle("transparent")}, 500);
	setTimeout(function(){topImg[1].classList.toggle("transparent")}, 500);
}

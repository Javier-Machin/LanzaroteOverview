const gallerymethod = (images) => {
  console.log("ayy");
  let imageZoomWindow = document.getElementById('imageZoomWindow');
  let imageZoom = document.getElementById("imageZoom");
  let galleryGrid = document.querySelector(".gridContainer");

  // Creates as many divs as images there is to show in the gallery
  for (let i = 0; i < images.length; i++) {
    let newDiv = document.createElement("div");
    let newP = document.createElement("p");

    newP.innerHTML = "&nbsp;";
    newDiv.classList.add('gridItem');
    newDiv.style.cssText = 'background: url(' + images[i] + ') no-repeat;' + 'background-size: cover;';
    newDiv.appendChild(newP);
    galleryGrid.appendChild(newDiv);
  } 

  galleryGrid.style.cssText = 'grid-template-columns: repeat(3, 1fr);' + 'grid-template-rows: repeat(7, 1fr);';
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
};

export default gallerymethod
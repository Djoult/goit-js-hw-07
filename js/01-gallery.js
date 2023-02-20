import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");
gallery.innerHTML = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<div class="gallery__item">
  <a class="gallery__link" href=${original}>
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt=${description}
    />
  </a>
</div>`
  )
  .join("");
gallery.addEventListener("click", openGalleryImageModal);
function openGalleryImageModal(event) {
  event.preventDefault();
  if (event.target == event.currentTarget) {
    return;
  }

  const currentImg = event.target;
  console.log(currentImg);
  const currentLink = currentImg.dataset.source;
  const instance = basicLightbox.create(`
    
          <img width="1400" height="900" src="${currentLink}">
  
  `);

  instance.show();
  document.addEventListener("keydown", closeModal);
}

function closeModal(e) {
  e.preventDefault();
  if (e.key === "Escape") {
    console.log("closed");
    const imageToClose = document.querySelector(".basicLightbox--img");
    // imageToClose.remove();
    document.removeEventListener("keydown", closeModal);
    imageToClose.classList.remove("basicLightbox--visible");

    setTimeout(() => {
      imageToClose.parentElement.removeChild(imageToClose);
    }, 410);
  }
}

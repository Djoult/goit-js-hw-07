import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
gallery.innerHTML = galleryItems
  .map(
    ({ preview, original, description }) =>
      `
  <a class="gallery__item" href=${original}>
    <img
      class="gallery__image"
      src=${preview}
      alt=${description}
    />
  </a>`
  )
  .join("");
const lightbox = new SimpleLightbox(".gallery a", {
  // navText: ["&#11178;", "&#11179;"],
  navText: ["&#8656;", "&#8658;"],
  captions: true,
  captionDelay: 250,
  captionSelector: "img",
  captionType: "attr",
  captionsData: "alt",
  captionPosition: "bottom",
  captionClass: "",
  //   closeText: "&#10015;", краще не розкоментовувати :)
  closeText: "&#10803",
  showCounter: false,
});

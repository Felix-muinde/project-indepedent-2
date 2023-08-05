
let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
    menu.classList.remove('active');

}

let menu = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = () => {
    search.classList.toggle('active');
    search.classList.remove('active');

}
window.onscroll = () => {
    menu.classList.remove('active');
    search.classList.remove('active');
}

let header = document.querySelector('header');

window.addEventListener('scroll' , () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});
let imageGallery = [];

function addImage() {
  const imageUrl = document.getElementById("imageUrl").value;
  const altText = document.getElementById("altText").value;

  if (imageUrl.trim() !== "" && altText.trim() !== "") {
    const newImage = {
      id: Date.now(),
      imageUrl,
      altText,
    };
    imageGallery.push(newImage);
    updateGallery();
    document.getElementById("imageUrl").value = "";
    document.getElementById("altText").value = "";
  } else {
    alert("Please fill in both Image URL and Alt Text.");
  }
}

function deleteImage(id) {
  imageGallery = imageGallery.filter((image) => image.id !== id);
  updateGallery();
}

function updateImage(id) {
  const newAltText = prompt("Enter the new Alt Text:");
  if (newAltText !== null) {
    const imageToUpdate = imageGallery.find((image) => image.id === id);
    if (imageToUpdate) {
      imageToUpdate.altText = newAltText;
      updateGallery();
    }
  }
}

function updateGallery() {
  const imageGalleryDiv = document.getElementById("imageGallery");
  imageGalleryDiv.innerHTML = ""; // Clear previous content

  imageGallery.forEach((image) => {
    const imageCard = document.createElement("div");
    imageCard.className = "image-card";
    imageCard.innerHTML = `
      <img src="${image.imageUrl}" alt="${image.altText}">
      <p>${image.altText}</p>
      <button class="delete-btn">Delete</button>
      <button class="update-btn">Update</button>
    `;
    imageGalleryDiv.appendChild(imageCard);
  });

  // Add event listeners for delete buttons
  const deleteButtons = document.querySelectorAll(".delete-btn");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const id = parseInt(button.parentElement.getAttribute("data-id"));
      deleteImage(id);
    });
  });

  // Add event listeners for update buttons
  const updateButtons = document.querySelectorAll(".update-btn");
  updateButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const id = parseInt(button.parentElement.getAttribute("data-id"));
      updateImage(id);
    });
  });
}

// Event listener for the Add Image button
const addButton = document.getElementById("addButton");
addButton.addEventListener("click", addImage);


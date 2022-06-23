
const parentElem = document.getElementById("market_section_container")
const cardElem = document.getElementById("dog_card")
const dogImage = document.getElementById("image_sect");
const dogName = document.getElementById("dog-name");
const dogDescription = document.getElementById("description");
const dogPrice = document.getElementById("price");


document.addEventListener("DOMContentLoaded", () => {
getDogCard();
  });

  function getDogCard() {
    fetch("db.json")
      .then((response) => response.json())
      .then((data) => dogData(data));
  }
  
  
  function dogData(data) {
    data.forEach((data) => {
      const card = document.createElement("div");
      card.innerText = data.name;
      parentElem.appendChild(div);

      list.addEventListener("click", () => {
        dogImage.setAttribute("src", data.image_url);
        dogImage.textContent = data.breed;         
        dogDescription.textContent = data.description;
      });
    });
  }
let randomRestaurant = document.getElementById("random-restaurant");
let randomSection = document.getElementById("random");

let restaurantArr = [
  {
    id: 1,
    name: "Dallas BBQ",
    url: "https://www.dallasbbq.com/fordham-road",
  },
  {
    id: 2,
    name: "Pop & Pour",
    url: "http://www.poppournyc.com/",
  },
  {
    id: 3,
    name: "Tyron Public House",
    url: "http://www.tryonpublichouse.com/",
  },
  {
    id: 4,
    name: "Sushi Mambo",
    url: "https://www.sushimambony.com/",
  },
  {
    id: 5,
    name: "Genesis",
    url: "http://genesisrestaurantnyc.com/",
  },
];

let getRandomRestaurant = () => {
  // Clear the content of the randomSection element
  randomSection.innerHTML = "";

  let randomNumber = Math.floor(Math.random() * restaurantArr.length);
  let nameSpan = document.createElement("p");
  let urlSpan = document.createElement("p");
  let urlLink = document.createElement("a");
  nameSpan.textContent = restaurantArr[randomNumber].name;
  urlLink.textContent = restaurantArr[randomNumber].url;
  urlLink.href = restaurantArr[randomNumber].url;
  urlLink.target = "_blank";
  urlSpan.appendChild(urlLink);
  randomSection.appendChild(nameSpan);
  randomSection.appendChild(urlSpan);
  randomSection.style.display = "block";
};

randomRestaurant.addEventListener("click", getRandomRestaurant);

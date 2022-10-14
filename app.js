const cardImg = [
  {
    name: "card1",
    img: "images/Page1.jpg",
  },
  {
    name: "card2",
    img: "images/Page2.jpg",
  },
  {
    name: "card3",
    img: "images/Page3.jpg",
  },
];

const card = document.querySelector(".carousel");

function crousel() {
  for (let i = 0; i < cardImg.length; i++) {
    console.log(cardImg);
    // const button = document.createElement("button");
    const images = document.createElement("img");
    images.setAttribute("src", cardImg[i].img);
    images.setAttribute("class", "card-img");
    card.append(images);
  }
}
crousel();

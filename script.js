function changeImage() {
  var img = document.getElementById("avatar");
  var bouton = document.getElementById("avatar-button");

  if (img.getAttribute("src") == "images/avatar.png") {
    img.src = "images/avatar-distanciel.png";
  } else {
    img.src = "images/avatar.png";
  }
  if (bouton.textContent === "Présentiel") {
    bouton.textContent = "Distanciel";
  } else {
    bouton.textContent = "Présentiel";
  }
}

const slider = document.querySelector(".wrapper");
const sliderElements = slider.querySelectorAll(".picture-slideshow");
const slideCount = sliderElements.length - 1;
let currentIndex = 0;

setInterval(() => {
  if (currentIndex < slideCount) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  sliderElements.forEach((s) => s.classList.remove("active"));
  sliderElements.item(currentIndex).classList.add("active");
}, 10000);

// const el = document.querySelector(".card");
// const wrap = document.querySelector(".card__wrapper");
// let is_flipped = false;
// let w = el.clientWidth;
// let h = el.clientHeight;
// let b = el.getBoundingClientRect();
// el.addEventListener("mousemove", (e) => {
//   let X = (e.clientX - b.left) / w;
//   let Y = (e.clientY - b.top) / h;

//   let rX = -(X - 0.5) * 26;
//   let rY = (Y - 0.5) * 26;

//   let bgX = 40 + 20 * X;
//   let bgY = 40 + 20 * Y;

//   document.documentElement.style.setProperty("--x", 1 * X + "%");
//   document.documentElement.style.setProperty("--y", 1 * Y + "%");

//   document.documentElement.style.setProperty("--bg-x", bgX + "%");
//   document.documentElement.style.setProperty("--bg-y", bgY + "%");

//   document.documentElement.style.setProperty("--r-x", rX + "deg");
//   document.documentElement.style.setProperty("--r-y", rY + "deg");
// });

const mangas = [
  {
    src: "images/manga/berserk.png",
    alt: "Manga-Berserk",
  },
  {
    src: "images/manga/death-note.jpeg",
    alt: "Manga-Death-Note",
  },
  {
    src: "images/manga/berserk2.jpeg",
    alt: "Manga-Berserk",
  },
  {
    src: "images/manga/naruto.jpeg",
    alt: "Manga-Naruto",
  },
  {
    src: "images/manga/one-piece.jpg",
    alt: "Manga-One-piece",
  },
  {
    src: "images/manga/snk.jpeg",
    alt: "Manga-Attaque des titans",
  },
  {
    src: "images/manga/vinland-saga.jpeg",
    alt: "Manga-Vinland saga",
  },
];

let flippableCard = document.querySelector(".card-flip");
let cardImg = flippableCard.querySelector(".card-back > img");

flippableCard.addEventListener("click", () => {
  flippableCard.classList.toggle("is-flipped");

  if (flippableCard.classList.contains("is-flipped")) {
    // interestingly, cardImg.getAttribute("src") and cardImg.src are not the same
    // cardImg.src is the "completed by the browser" path like http://<domain>:<port>/images/manga/<something>
    const randomManga = getRandomManga(cardImg.getAttribute("src"));
    cardImg.src = randomManga.src;
    cardImg.alt = randomManga.alt;
  }
});

function getRandomManga(currentSrc) {
  let newManga = mangas[getRandomInt(mangas.length)];

  while (currentSrc == newManga.src) {
    newManga = mangas[getRandomInt(mangas.length)];
  }

  return newManga;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

var b = document.querySelector("body");
var btn = document.getElementById("toggle");
btn.addEventListener("click", function () {
  b.classList.toggle("alternate");
});

// box shadow container when button-project moouseover
// var boutonOrni = document.getElementById("button-project-ornitologie");
// var ornitologie = document.getElementById("container-hover-ornitologie");
// var overlay = document.getElementById("overlay");

// boutonOrni.addEventListener("mouseover", function() {
//   ornitologie.classList.add("show");
// });

// boutonOrni.addEventListener("mouseout", function() {
//   ornitologie.classList.remove("show");
// });

//ajouter l'overlay sauf sur le container de l'ornitologie, besoin de rien dans l'html
// $(function(){
//   $("body").not('#ornitologie-project-container').addClass("overlay");
//  });

//myoverlay test
// $(function () {
//   $('body').addClass('myoverlay');
// });

// sélectionner tous les boutons dans la grille
const buttons = document.querySelectorAll(".button-projet");
const cardTitles = document.querySelectorAll(".card-title");

const articles = document.querySelectorAll("article");
articles.forEach((a) => {
  const button = a.querySelector(".button-projet");
  const title = a.querySelector(".card-title");
  if (button) {
    button.addEventListener("mouseover", () => {
      articles.forEach((art) => {
        if (art != a) {
          art.style.opacity = "0.2";
        } else {
          art.style.opacity = "1";
          title.style.opacity = "1";
        }
      });
    });

    button.addEventListener("mouseout", () => {
      articles.forEach((art) => {
        art.style.opacity = "1";
        title.style.opacity = "0";
      });
    });
  }
});

// gestionnaire d'événement pour chaque bouton
buttons.forEach((button) => {});

/*

      const parent_title = button.closest('.card-title');
      cardTitles.style.opacity = '1'; 
  
      // trouver le conteneur parent du bouton hover
      const parent = button.closest('.container');
  
      // ajouter la classe .active à tous les conteneurs
      document.querySelectorAll('.container').forEach(item => {
        item.classList.add('active');
      });
  
      // supp la classe "active" au conteneur parent
      parent.classList.remove('active');

      button.addEventListener('mouseout', () => {
  
      // supp la classe "active" de tous les conteneurs
      document.querySelectorAll('.container').forEach(item => {
        item.classList.remove('active');
      });
  
      cardTitle.style.opacity = '0'; 
      // title.classList.remove('active');
    });
*/

// steve
// import { Application } from '@splinetool/runtime';

// const canvas = document.getElementById('canvas3d');
// const app = new Application(canvas);
// app.load('https://prod.spline.design/1B15nLxXbKrQPsTD/scene.splinecode');

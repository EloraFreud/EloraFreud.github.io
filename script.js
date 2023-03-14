function changeImage(){
  var img=document.getElementById("avatar");
  var bouton = document.getElementById("avatar-button");

  if(img.getAttribute('src')=="images/avatar.png"){
    img.src="images/avatar-distanciel.png";
  }else {
    img.src="images/avatar.png";
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
  sliderElements.forEach(s => s.classList.remove('active'));
  sliderElements.item(currentIndex).classList.add('active');
}, 10000)

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

is_flipped = false;
var cards = document.querySelectorAll('.card-flip');

[...cards].forEach((card)=>{
  card.addEventListener( 'click', function() {
    card.classList.toggle('is-flipped');
    generateMangaRandom()
  });
});

let manga_src = ['images/manga/berserk.png', 'images/manga/death-note.jpeg', 'images/manga/berserk2.jpeg', 'images/manga/naruto.jpeg', 'images/manga/one-piece.jpg', 'images/manga/snk.jpeg', 'images/manga/vinland-saga.jpeg'];
let manga_alt = ['Manga-Berserk', 'Manga-Death-Note', 'Manga-Berserk', 'Manga-Naruto', 'Manga-One-piece', 'Manga-Attaque des titans', 'Manga-Vinland saga'];

function getRandomInt(max) {
    return Math.floor(Math.random() * manga_src.length);
}

function generateMangaRandom(){
    is_flipped = !is_flipped;
    const elt = document.querySelector(".card-back");
    if(is_flipped){
        manga_random = getRandomInt(3)
        elt.innerHTML = '<img src={0} alt={1} class="img-back">'.format(manga_src[manga_random], manga_alt[manga_random])
    }
    else{
        elt.innerHTML = ""
    }
}

String.prototype.format = function() {
    a = this;
    for (k in arguments) {
        a = a.replace("{" + k + "}", arguments[k])
    }
    return a
}

var b = document.querySelector("body");
var btn = document.getElementById("toggle");
btn.addEventListener("click", function(){
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
const buttons = document.querySelectorAll('.button-projet');
const cardTitles = document.querySelectorAll('.card-title');

const articles = document.querySelectorAll('article');
articles.forEach(a => {
  const button = a.querySelector(".button-projet");
  const title = a.querySelector(".card-title");
  if(button){
    button.addEventListener('mouseover', () => {
      articles.forEach(art => {
        if(art != a){
          art.style.opacity = "0.2";
        }else{
          art.style.opacity = "1";
          title.style.opacity = "1";
        }
      })
    });  

    button.addEventListener("mouseout", () => {
      articles.forEach(art => {
          art.style.opacity = "1";
          title.style.opacity = "0";
      })
    });
  }
});

// gestionnaire d'événement pour chaque bouton
buttons.forEach(button => {
  
});

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
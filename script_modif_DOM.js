//Modification n°1:
console.log("********************Modification n-1")
function changeTitles() {
  let titleAlbumExample = document.getElementsByTagName("h1")
  console.log(titleAlbumExample)
  titleAlbumExample[0].innerHTML = "Ce que j'ai appris à THP";

  let subTitleContent = document.querySelectorAll("p.lead.text-muted")
  console.log(subTitleContent)
  subTitleContent[0].innerHTML = "THP est une formation qui, en 3 mois, à plein temps, vous apportera des connaissances actionnables pour vous permettre de voir plus loin. Chez nous, pas de professeurs, pas de locaux, mais un groupe de travail en présentiel. Après 11 semaines, les principaux langages et outils du web n'auront plus de secret pour vous !";
}
changeTitles();


//Modification n°2:
console.log("********************Modification n-2")

function changeCallToActions() {
let buttonCTA = document.querySelectorAll("a.btn.btn-primary")
console.log(buttonCTA)
buttonCTA[0].innerHTML = "OK je veux tester !";
buttonCTA[0].setAttribute("href", "http://www.thehackingproject.org");

let buttonSecondaryAction = document.querySelectorAll("a.btn.btn-secondary")
console.log(buttonSecondaryAction)
buttonSecondaryAction[0].innerHTML= "Non Merci"
buttonSecondaryAction[0].setAttribute("href", "https://www.pole-emploi.fr/accueil/");
}
changeCallToActions();


//Modification n°3:
console.log("********************Modification n-3")

function changeLogoName() {
  let elementLogo = document.querySelectorAll("a.navbar-brand strong")
  console.log(elementLogo)
  elementLogo[0].innerHTML = "The THP Experience";
  elementLogo[0].style.fontSize = "2em";
  
}
changeLogoName()


//Modification n°4:
console.log("********************Modification n-4")

 function populateImages() {
  let elementCards = document.querySelectorAll(".card-img-top")
  console.log(elementCards)

  let imagesArray = [
    "https://img.icons8.com/color/480/000000/html-5.png",
    "https://img.icons8.com/color/480/000000/css3.png",
    "https://img.icons8.com/color/480/000000/javascript.png",
    "https://img.icons8.com/color/480/000000/ruby-programming-language.png",
    "https://img.icons8.com/color/480/000000/bootstrap.png",
    "https://img.icons8.com/color/480/000000/github.png",
    "https://i.imgur.com/bJE9Pka.png",
    "https://avatars2.githubusercontent.com/u/25484553?s=200&v=4",
    "https://img.icons8.com/color/480/000000/heroku.png"
  ];

   // Vérifie si les longueurs des tableaux correspondent
   if (elementCards.length !== imagesArray.length) {
    console.error("Le nombre d'images ne correspond pas au nombre de cartes !");
    return;
  }

  // Boucle pour ajouter les images
  for(let i = 0; i <elementCards.length; i++) {
    elementCards[i].setAttribute("src", imagesArray[i]); // Définit l'attribut "src" avec l'URL correspondante
  }
 }
populateImages()


//Modification n°5:
console.log("********************Modification n-5")
function deleteLastCards() {
  let elementCards = document.querySelectorAll(".card")

  // Supprimer les 3 dernières cards
  for(let i=elementCards.length - 1; i >= elementCards.length - 3; i--) {
    elementCards[i].remove(); // Supprimer chaque card
  }
}
deleteLastCards()


//Modification n°6:
console.log("********************Modification n-6")


//Écris une fonction changeCardsText() qui va modifier le texte des 3 premières cards et le remplacer avec cela :
// Carte HTML : "L’HyperText Markup Language, généralement abrégé HTML, est le langage de balisage conçu pour représenter les pages web"
// Carte CSS : "Les feuilles de style en cascade, généralement appelées CSS de l'anglais Cascading Style Sheets, forment un langage informatique qui décrit la présentation des documents HTML et XML"
// Carte JS : "JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives mais aussi pour les serveurs. C'est un langage orienté objet à prototype."
// Essaye de mettre ça dans une boucle.
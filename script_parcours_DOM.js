
//Question 1
console.log("**********Combien y a-t-il d'éléments <p> présents dans la page HTML ? Imprime-le résultat dans la console.");
let numberOfP = document.getElementsByTagName("p")
console.log(numberOfP.length)

//Question 2
console.log("**********Quel est le contenu texte de l'élément portant l'id coucou ? Imprime-le dans la console.");
let elementWithIdCoucou = document.getElementById("coucou")
console.log(elementWithIdCoucou.innerHTML)

//Question 3
console.log("**********Quelle est l'URL vers laquelle pointe le 3ème élément <a> de la page HTML ? Imprime-la dans la console.");
let elementThirdA = document.getElementsByTagName("a")
console.log(elementThirdA[2].href)


//Question 4
console.log("**********Combien d'éléments portent la classe compte-moi ? Imprime le résultat dans la console.");
let elementClassCompteMoi = document.getElementsByClassName("compte-moi")
console.log(elementClassCompteMoi.length)

//Question 5
console.log("**********Combien d'éléments <li> portent la classe compte-moi ? Imprime le résultat dans la console.");
let elementTagLiClasseCompteMoi = document.querySelectorAll("li.compte-moi")
console.log(elementTagLiClasseCompteMoi.length)

//Question 6
console.log("**********Combien d'éléments <li> et situés dans une liste ordonnée portent la classe compte-moi ? Imprime le résultat dans la console.");
let elementTagLiOlClassCompteMoi = document.querySelectorAll("ol li.compte-moi")
console.log(elementTagLiOlClassCompteMoi.length)


//Question 7
console.log("**********La page contient un seul élément <div>. Celui-ci contient 2 éléments <ul>. Dans le second <ul>, le premier élément de la liste (tag <li>) est caché visuellement de l'utilisateur mais toi, tu peux en récupérer le contenu. Affiche-le dans la console.");
console.log(document.querySelectorAll("div ul")[1].children[0].innerHTML)

//Cheminement initial:  
  // let elementTagDivTagUl = document.querySelectorAll("div ul")
  // let elementsLi = elementTagDivTagUl[1]
  // let elementLi = elementsLi.children[0]
  // let elementLiContent = elementLi
  // console.log(elementLiContent.innerHTML)


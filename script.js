// Séléctionner les aiguilles de montre
const AIGUILLEHR = document.querySelector("#hour");
const AIGUILLEMIN = document.querySelector("#minute");
const AIGUILLESEC = document.querySelector("#second");

function demarrerLaMontre() {
  //Extraire l'heure actuel à l'aide de l'objet Date()

  let clock = new Date();

  //Ajouter l'heure , minite , seconde  dans des varaiables

  let ss = (clock.getSeconds() )/60;
  let mm = (clock.getMinutes() + ss) / 60;
//   console.log(mm);
  let hh = (clock.getHours() + mm) / 12;
  // Calculer de degré de mouvement de l'aiguille heure, de l'aiguille minute, de l'aiguille seconde
  // Hint : Tous les aiguilles doivent se déplacer chaque second selon un degré

  let ssRotation = ss * 360; // 360° / 60sec
  let mmRotation = mm * 360; // 360° / 60min 
  let hhRotation = hh * 360; // 360° / 12h 
//   console.log(ssRotation);
  console.log(mmRotation);
//   console.log(hhRotation);

  // Déplacer les aiguilles

  AIGUILLESEC.style.transform = "rotate(" + ssRotation + "deg)";
  AIGUILLEMIN.style.transform = "rotate(" + mmRotation + "deg)";
  AIGUILLEHR.style.transform = "rotate(" + hhRotation + "deg)";
}
// Exercuter la fonction chaque second
var interval = setInterval(demarrerLaMontre, 1000);

// Séléctionner les aiguilles de montre
const AIGUILLEHR = document.querySelector("#hour");
const AIGUILLEMIN = document.querySelector("#minute");
const AIGUILLESEC = document.querySelector("#second");

function demarrerLaMontre() {
  //Extraire l'heure actuel à l'aide de l'objet Date()

  let clock = new Date();

  //Ajouter l'heure , minite , seconde  dans des varaiables

  let hh = clock.getHours() % 12;
  let mm = clock.getMinutes();
  let ss = clock.getSeconds();
  // Calculer de degré de mouvement de l'aiguille heure, de l'aiguille minute, de l'aiguille seconde
  // Hint : Tous les aiguilles doivent se déplacer chaque second selon un degré

  let hhRotation = hh * 30 + 0.5 * mm; // 360° / 12h // evey min ,6° = 6/60
  let mmRotation = mm * 6 + 0.1 * ss; // 360° / 60min // evey min ,6° = 6/60
  let ssRotation = ss * 6; // 360° / 60min

  // Déplacer les aiguilles

  AIGUILLEHR.style.transform = "rotate(" + hhRotation + "deg)";
  AIGUILLEMIN.style.transform = "rotate(" + mmRotation + "deg)";
  AIGUILLESEC.style.transform = "rotate(" + ssRotation + "deg)";
}
// Exercuter la fonction chaque second
var interval = setInterval(demarrerLaMontre, 1000);

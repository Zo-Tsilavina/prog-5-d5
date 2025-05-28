import Cafe from "../classes/Cafe.js";  // Ajout de l'extension .js

const Cafes = [
  new Cafe("Espresso", 1.5, [
    { nom: "eau", quantite: 20 },
    { nom: "cafe", quantite: 10 }
  ]),
  new Cafe("Cappuccino", 2.0, [
    { nom: "eau", quantite: 20 },
    { nom: "cafe", quantite: 10 },
    { nom: "lait", quantite: 10 }
  ]),
  new Cafe("Sucré Lait", 2.2, [
    { nom: "eau", quantite: 20 },
    { nom: "cafe", quantite: 10 },
    { nom: "lait", quantite: 10 },
    { nom: "sucre", quantite: 5 }
  ])
];

export default Cafes;
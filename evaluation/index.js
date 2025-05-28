import promptSync from "prompt-sync";
import chalk from "chalk";

import Client from "./classes/Client.js";
import Stock from "./classes/Stock.js";
import Monnayeur from "./classes/Monnayeur.js";
import MachineACafe from "./classes/MachineACafe.js";
import Cafes from "./data/cafe.js";

const prompt = promptSync();

function lancerSimulation() {
  console.log(chalk.cyan("=== Machine à Café CLI ===\n"));

  const solde = parseFloat(prompt("Insérez votre argent (€) : "));
  const client = new Client(solde);

  const stock = new Stock();
  const monnayeur = new Monnayeur(50);
  const machine = new MachineACafe(stock, monnayeur);

  console.log("\nMenu :");
  Cafes.forEach((cafe, i) => {
    console.log(`${i + 1}. ${cafe.nom} - ${cafe.prix}€`);
  });

  const choix = parseInt(prompt("\nChoisissez un café (numéro) : ")) - 1;
  const cafe = client.choisirCafe(Cafes, choix);

  if (!cafe) {
    console.log(chalk.red("Choix de café invalide."));
    return;
  }

  const ok = machine.choisirCafe(client, cafe);

  if (ok) {
    monnayeur.rendreMonnaie(client.solde, cafe.prix);
    client.solde = 0;
    console.log(chalk.green(`\nVoici votre ${cafe.nom}! ☕`));
  }

  stock.afficherStock();
}

try {
    lancerSimulation();
  } catch (error) {
    console.error("Erreur inattendue : ", error.message);
  }

import chalk from 'chalk';

class MachineACafe{
    constructor(stock, monnayeur) {
        this.stock = stock;
        this.monnayeur = monnayeur;
    }

        choisirCafe(client, cafe) {
        console.log(`\nVous avez choisi : ${cafe.nom} (${cafe.prix}€)`);
    
        const montant = client.solde;
    
        if (!this.monnayeur.accepterPaiement(montant, cafe.prix)) {
          console.log(chalk.red("Montant insuffisant. Paiement refusé."));
          return false;
        }
    
        if (!this.verifierStock(cafe)) {
          console.log(chalk.red("Ingrédients insuffisants pour ce café."));
          this.monnayeur.rendreMonnaie(montant, 0);
          return false;
        }
    
        this.preparerCafe(cafe);
        return true;
    }


    verifierStock(cafe) {
        return this.stock.verifierDisponibilite(cafe.ingredients);
    }

    preparerCafe(cafe) {
        console.log(chalk.yellow("\nPréparation en cours..."));
    
        this.stock.mettreAJour(cafe.ingredients);
    
        setTimeout(() => {
          console.log(chalk.green("Votre café est prêt ☕. Merci !"));
        }, 1500);
    }
}

export default MachineACafe;
import chalk from 'chalk';

class Monnayeur {
    constructor(fonds = 0) {
        this.fondsDisponibles = fonds
    }

    accepterPaiement(montantClient, prixCafe) {
        if (montantClient >= prixCafe) {
            this.fondsDisponibles += prixCafe;
            return true;
        }
        return false;
    }

    rendreMonnaie(montantClient, prixCafe) {
        if (montantClient > prixCafe) {
            const monnaie = montantClient - prixCafe;
            this.fondsDisponibles -= monnaie;
            console.log(chalk.yellow(`Monnaie rendue : ${monnaie}€`));
            return monnaie;
        }
        return 0;
    }
}

export default Monnayeur;
class Client {
    constructor(solde, preference = {}){
        this.solde = solde;
        this.preference = preference;  
    }

    payer(montant){
        if(this.solde >= montant){
            this.solde -= montant;
            return true;
        }
        return false;
    }

    choisirCafe(menu, choixIndex){
        if(choixIndex >= 0 && choixIndex < menu.length){
            return menu[choixIndex];
        }
        return null;
    }
}

export default Client;
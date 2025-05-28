import chalk from 'chalk';

class Stock{
    constructor(quantite = {}){
        this.stock = {
            cafe: quantite.cafe || 100,
            lait: quantite.lait || 100,
            sucre: quantite.sucre || 100,
            eau: quantite.eau || 100,
            tasse: quantite.tasse || 100
        };        
    }

    verifierDisponibilite(ingredients){
        for(let ingredient in ingredients){
            if(this.stock[ingredient] < ingredients[ingredient]){
                return false;
            }
        }
        return true;
    }

    mettreAJour(ingredients){
        ingredients.forEach(i => {
            if(this.stock[i.nom] !== undefined){
                this.stock[i.nom] -= i.quantite;
            }
        });
        this.stock.tasse -= 1;
    }

    afficherStock(){
        console.log(chalk.blue("\nStock actuel :"));
        for(let ingredient in this.stock){
            console.log(chalk.green(`${ingredient}: ${this.stock[ingredient]}`));
        }
    }
}

export default Stock;
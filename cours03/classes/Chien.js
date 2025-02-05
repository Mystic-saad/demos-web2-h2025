import Animal from "./Animal.js";

class Chien extends Animal {
    constructor(nom, race) {
        super(nom); // Appelle le constructeur de la classe parent
        this.race = race;
    }
    
    faireDuBruit() {// cette méthode a étét REDÉFINIE(overridden)
        console.log("Wouf! Wouf!");
    }
    
    decrire() {
        return super.decrire() + ` C'est un chien de race ${this.race}.`; // utiliser l'héritage dans la redéfinition de cette méthode
    }
}
export{Chien};
class Animal {
    constructor(nom) {
        this.nom = nom;
    }
    
    faireDuBruit() {
        console.log("Un bruit d'animal");
    }
    
    decrire() {
        return `Cet animal s'appelle ${this.nom}.`;
    }
}
export default Animal;
/*Createur : Asaad Louazir
  Date : 2025-02-02
  Sujet : Tp1 
*/

// Tableau d'ouvrages (base de données initiale OBLIGATIORE)
const _ouvrages = [
    new Livre("Les Misérables", 1862, "Roman", true, "Victor Hugo", 2598),
    new Film("Inception", 2010, "Science-fiction", true, "Christopher Nolan", 148),
    new Film("La liste de Schindler", 1993, "Drame", true, "Steven Spielberg", 189),
    new Livre("1984", 1949, "Science-fiction", false, "George Orwell", 376),
    new Livre("Le Petit Prince", 1943, "Conte", true, "Antoine de Saint-Exupéry", 93),
    new Film("Titanic", 1997, "Drame", true, "James Cameron", 195),
    new Livre("Le meilleur des mondes", 1932, "Science-fiction", false, "Aldous Huxley", 285),
    new Livre("Le Seigneur des Anneaux", 1954, "Fantastique", true, "J.R.R. Tolkien", 423),
    new Film("Big Fish", 2003, "Fantastique", true, "Tim Burton", 125),
    new Livre("M. Tompkins au pays des merveilles", 1992, "Recueil de nouvelles", true, "George Gamow", 256),
    new Livre("Le Vieil Homme et la Mer", 1952, "Nouvelle", true, "Ernest Hemingway", 127),
    new Film("The Big Lebowski", 1998, "Comédie", false, "Joel et Ethan Coen", 117),
    new Livre("Gatsby le Magnifique", 1925, "Roman", true, "F. Scott Fitzgerald", 180),
    new Film("Star Wars : Episode IV - Un nouvel espoir", 1977, "Science-fiction", false, "George Lucas", 121),
];
class ouvrages {
  constructor(titre="Inconnu",anneeSortie=0,genre="Inconnu",dispo=false) {
      this.titre = titre;
      this.anneeSortie = anneeSortie;
      this.genre = genre;
      this.dispo = dispo;
  }
}


const ouvrages = new Object({titre:"",anneeSortie:0,genre:"",dispo:false});

const Livre = new Object({auteur:"Inconnu",nombPage:0});

const Film = new Object({realisteur:"Inconnu",dureeMinute:0,});

for (let i=0; i < _ouvrages.length; i++) {
    console.log(_ouvrages[i]);
}
function afficherEtoiles(n) {
  let etoiles = "*"
  let i = 1
  
  while(i < n){
      etoiles = etoiles + "*"
      i++
  }
  console.log(etoiles)
}
  //afficherEtoiles(2)
  //afficherEtoiles(5)

function afficherRectangle(hauteur, largeur) {
  let etage = 0

  while(etage < hauteur){
    afficherEtoiles(hauteur, largeur)
    etage++
}
}
afficherRectangle(5, 5);
  
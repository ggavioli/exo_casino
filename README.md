# exo_casino
faire un jeu de casino

Les modalités
deux select un avec pair ou impair l'autre avec des chiffres de 1 à 36
Sur le bouton onClic l'ordinateur représenté comme casino tire un numéro au hasard  
Utilisation de // On renvoie un entier aléatoire entre une valeur min (incluse)
// et une valeur max (incluse).
// Attention : si on utilisait Math.round(), on aurait une distribution
// non uniforme !
function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min +1)) + min;
} source https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Math/random

règle du jeu
Si l'ordinateur tire 0, la mise est perdu.
Si l'ordinateur tire le numéro du joueur, il rend la mise et 35x sa valeur.
Si l'ordinateur tire un numéro pair et que l'on a choisi « Pair », il rend la mise et 1x sa valeur. Même chose avec les impairs.
Dans tous les autres cas, la mise est perdue.

porte monaie :
totalPlayer = 100;
totalBank = 100;

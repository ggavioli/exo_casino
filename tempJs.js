var  bouton;

totalPlayer = 100;
totalBank = 100;

moneyPlayer = document.getElementById("moneyPlayer");
moneyBank = document.getElementById("moneyBank");

bouton = document.getElementById("bouton");

//numéro aléatoire de 1 à 36
var casino;
function playCasino(){
    casino = Math.floor(Math.random() * (36 - 0 +1)) + 0;
    alert(casino); 
}

//Choix pair ou impair
var select, choix, valeur;
function selecItem() {
	select = document.getElementById("PairImpair");
    choix = select.selectedIndex;
    valeur = select.options[choix].value;
}

//selection du player
var nselect, nchoix, nvaleur;
function selecNumber(){
    nselect = document.getElementById("SelectedNumber");
    nchoix = nselect.selectedIndex;
    nvaleur = nselect.options[nchoix].value;
}

//la mise du player
var somme ;
function misePlayer(){
    somme = document.getElementById("somme").value;
}

// Gagner ou perdu 
function game(){
    playerBank();
    casinoBank();
        if(totalPlayer <= 0){
            alert("vous avez perdu retenter votre chance. Appuyer sur F5 pour rejouer.");
        }else if (totalBank <= 0){
            alert("vous avez gagner bravo! Appuyer sur F5 pour rejouer. ");
        }
}
//Somme réajustée en cas de perte
function lost(){
    totalPlayer = totalPlayer - somme;
    totalBank = totalBank + (somme *1);
    playerBank();
	casinoBank();
}
//Si le casino fait le numéro que le player a choisi il rend la somme * 35
function won(){
    totalPlayer = totalPlayer + (somme * 35);
    totalBank = totalBank - (somme * 35);
    playerBank();
    casinoBank();
}
// le player a fait le choix du pair ou impair , le casino aussi, le casino rend la somme misée + 1 fois sa valeur
function secondWon(){
    totalPlayer = totalPlayer + (somme * 2);
    totalBank = totalBank - (somme * 2);
    playerBank();
    casinoBank();
}

//Combien d'argent a le joueur en bank. Récupére le chiffre contenu.
var totalPlayer, moneyPlayer;
function playerBank(){
    moneyPlayer.innerHTML = "vous avez " + totalPlayer + " euros";
}

var totalBank, moneyBank;
function casinoBank(){
    moneyBank.innerHTML = "La banque du casino affiche " + totalBank + " euros";
}
function resultat(){
    playCasino();
    misePlayer();
    
        if((((casino != nvaleur)) && ((casino % 2) != valeur)) || (casino === 0)){  
            alert("Dommage pour vous, une autre fois sans doute");
            return lost(), game();

        }else if(((casino == nvaleur))){
            alert("Bravo, Vous avez fait le bon choix !");
            return won(),game();

        }else{
            alert("Bravo, Vous avez fait le bon choix!");
            return secondWon(),game();
        }
}

bouton.onclick = resultat;//le clic lance le résultat
playerBank();
misePlayer();
casinoBank();
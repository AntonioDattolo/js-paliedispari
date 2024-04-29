// **********************************************PALINDROMA
// Chiedere all’utente di inserire una parola.
// Creare una funzione per capire se la parola inserita è palindroma.
// Sono accettate solo soluzioni che fanno uso del ciclo.
// Eventuali soluzioni più "comode" potete aggiungere come extra in un commit separato solo DOPO.
// ***************************************************
// let inputUtente = prompt("inserisci");
// const x = inputUtente.split("");
// const parolaDivisa = x.reverse()
// const y = parolaDivisa.join('')


// function palindromaTest(x,y){
//     if (inputUtente === y){
//         console.log("è palindroma")
//     }  else  {
//          console.log("non è palindroma")
//     }
// }
// let risultato  = palindromaTest()
    

// let carattere;
// let parolaInversa= '';
// let i = inputUtente.length - 1
// while(i >= 0){
//     carattere = inputUtente[i];
//     parolaInversa += carattere; 
//     // N.B. senza il + uguale non funge
//     i--;
//     console.log(carattere)
// }
// if (inputUtente === parolaInversa){
//     console.log("palindroma")
// }else {
//     console.log("no palindroma")
// }


// **************************************************PARI E DISPARI
// L’utente sceglie su cosa puntare: pari o dispari.
// L'utente inserisce un numero da 1 a 5.
// Il computer estrae un numero casuale sempre tra 1 e 5 (usando una funzione).
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione).
// Dichiariamo chi ha vinto.
// ***************************************************

let numeroUtente;
let numeroPc ;
let esito;
document.getElementById("play").addEventListener("click",function play() {
    numeroUtente = parseInt(document.getElementById("userSlt").value);
    // let numeroUtente = parseInt( prompt())
    console.log(`il numero scelto dall'utente è : ${numeroUtente}`);
    numeroPc = parseInt(Math.floor(Math.random() * 6));
    console.log(`il numero scelto dal pc è : ${numeroPc}`);
    let somma = numeroUtente+numeroPc;
    // console.log(`la somma dei numeri è: ${somma}`)
    
    if (numeroUtente > 5){
        esito = "inserisci un numero compres0 tra 0 e 5"  
        console.log("il numero sceelto deve essere compreso da 0 e 5");
        
    }
    if (somma % 2 == 0){
       esito = "la somma è pari" 
       console.log("il numero è pari");
       console.log(somma)
      
       
    }
     else if(somma % 2 != 0) {
       esito = "la somma è dispari"  
       console.log("il numero è dispari");
       console.log(somma)
       
        
    }
    document.getElementById("vincitore").innerHTML = esito
})

 




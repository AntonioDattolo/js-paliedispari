// **********************************************PALINDROMA
// Chiedere all’utente di inserire una parola.
// Creare una funzione per capire se la parola inserita è palindroma.
// Sono accettate solo soluzioni che fanno uso del ciclo.
// Eventuali soluzioni più "comode" potete aggiungere come extra in un commit separato solo DOPO.
// ***************************************************
let inputUtente = prompt("inserisci");
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
    

let carattere;
let parolaInversa= '';
let i = inputUtente.length - 1
while(i >= 0){
    carattere = inputUtente[i];
    parolaInversa += carattere; 
    // N.B. senza il + uguale non funge
    i--;
    console.log(carattere)
}
if (inputUtente === parolaInversa){
    console.log("palindroma")
}else {
    console.log("no palindroma")
}

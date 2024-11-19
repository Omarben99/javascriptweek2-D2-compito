//ESERCIZI SUGLI IF: 

/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

function ilPiuGrande(numero1, numero2) {
  if (numero1 > numero2) {
      return numero1;
  } else if (numero2 > numero1) {
      return numero2;
  } else {
      return "I numeri sono uguali";
  }
}let numero1 = 20;
let numero2 = 20;

console.log("Il numero più grande è: " + ilPiuGrande(numero1, numero2));

/*
ESERCIZIO 2
  Crea un blocco condizionale if/else per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

let num = 60;

if (num < 5) {
    console.log("Tiny");
} else if (num < 10) {
    console.log("Small");
} else if (num < 15) {
    console.log("Medium");
} else if (num < 20) {
    console.log("Large");
} else if (num >= 20) {
    console.log("Huge");}
    else {console.log("error")};

    
     


//ESERCIZI SUI CICLI: 

/* ESERCIZIO 3
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8 (suggerimento: ripassa l'uso di "continue").
*/

for (let m = 0; m <= 10; m++) {
  if (m === 3 || m === 8) {
      continue; 
  }
  console.log(m);
}


/* ESERCIZIO 11
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

for (let m = 0; m <= 15; m++) {
  if (m % 2 === 0) {
      console.log(m + " è pari");
  } else {
      console.log(m + " è dispari");
  }
}

//ESERCIZI EXTRA NON OBBLIGATORI

/* ESERCIZIO EXTRA 1
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

function verifiNum(numero1, numero2) {
    if (numero1 === 8 || numero2 === 8) {
        return true; 
    } else if (numero1 + numero2 === 8 || (numero1 - numero2) === 8) {
        return true; 
    } else {
        return false; 
    }
}
let numero1 = 10;
let numero2 = 2;

if (verifiNum(numero1, numero2)) {
    console.log("La condizione è soddisfatta.");
} else {
    console.log("La condizione non è soddisfatta.");
}

/* ESERCIZIO EXTRA 2
Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

function calcolaTotaleCheckout(totalShoppingCart) {
  const costoSpedizione = 10;
  let totaleCheckout;

  if (totalShoppingCart > 50) {
      totaleCheckout = totalShoppingCart; 
  } else {
      totaleCheckout = totalShoppingCart + costoSpedizione; 
  }

  return totaleCheckout;
}

// Esempio di utilizzo
let totalShoppingCart = 60; 
let totaleDaPagare = calcolaTotaleCheckout(totalShoppingCart);

console.log("Il totale da pagare è: €" + totaleDaPagare);

/* ESERCIZIO EXTRA 3
  Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando, usando l'algoritmo del codice precedente, se le spedizioni siano gratuite oppure no e e calcolando il totale.
*/

function calcolaTotaleCheckout(totalShoppingCart) {
  const scontoBlackFriday = 0.2; 
  const costoSpedizione = 10;

  
  let totaleScontato = totalShoppingCart - (totalShoppingCart * scontoBlackFriday);

  
  let totaleCheckout;
  if (totalShoppingCart > 50) {
      totaleCheckout = totaleScontato; 
  } else {
      totaleCheckout = totaleScontato + costoSpedizione;
  }

  return totaleCheckout;
}


let totalShoppingCart = 50 ; 
let totaleDaPagare = calcolaTotaleCheckout(totalShoppingCart);

console.log("Il totale da pagare (incluso lo sconto Black Friday) è: €" + totaleDaPagare);


/*  ESERCIZIO EXTRA 4
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile booleana chiamata isMale.
  Es. se isMale e' vero, il valore di gender deve essere "male"
*/

let isMale = false; 
let gender = isMale ? "male" : "female";
console.log(gender);

/* ESERCIZIO EXTRA 5
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3 (operatore modulo!), stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/
for (let m = 1; m <= 100; m++) {
  if (m % 3 === 0 && m % 5 === 0) {
      console.log("FizzBuzz");
  } else if (m % 3 === 0) {
      console.log("Fizz");
  } else if (m % 5 === 0) {
      console.log("Buzz");
  } else {
      console.log(m);
  }
}
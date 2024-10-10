// le FUNZIONI in JS sono dei BLOCCHI DI ISTRUZIONI RIUTILIZZABILI
// le funzioni vanno PRIMA dichiarate, e poi utilizzate

// uno dei modi (più sempliciotti) per dichiarare una funzione è la keyword 'function'

function bark() {
  // questo è il corpo della funzione, una lista di istruzioni che verrà ri-eseguita
  // ogni volta che invochiamo bark
  console.log('BAU')
}

// per utilizzare una funzione bisogna 'invocarla'
bark()
bark()
bark()

const sum = function () {
  const total = 3 + 6
  console.log('la somma fa:', total)
}

sum()

// quindi scriveremo i nostri blocchi di codice 'ricorrenti' in funzioni, in modo
// da evitare copincolla vari (principio ' D R Y') e mantenere il codice più ordinato

// però le funzioni tradizionalmente sono un pò limitate: la loro invocazione
// esegue un flusso di operazioni STATICO, FISSATO:

const waveToStefano = function () {
  console.log('CIAO, STEFANO')
}

// come faccio a renderla più "dinamica", "generica", spendibile in più situazioni?
// come faccio a fare una generica "waveToStudent"?

// DEFINIZIONE DI STUDENT
const waveToStudent = function (studentName) {
  console.log('CIAO', studentName)
}

waveToStudent('Anna')
waveToStudent('Giulia')
waveToStudent('Stefano')
waveToStudent('Gabriele')

const area = function () {
  const lato = 6
  console.log("L'area di questo quadrato è " + lato * lato)
}

area()

const genericArea = function (lato) {
  console.log("L'area di questo quadrato è ", lato * lato)
}
genericArea(5)
genericArea(7)
genericArea(32)

const showMessage = function (message, type) {
  // let intro = type === 'info' ? 'INFORMAZIONE' : 'ERRORE'  (VERSIONE SISTEMA TERNARIO)
  let intro = ' '

  if (type === 'info') {
    intro = 'INFORMAZIONE'
  } else {
    intro = 'ERRORE'
  }
  console.log(intro + ' - ' + message)
}

showMessage('Login effettuato con successo', 'info')
showMessage('Problema nel login', 'error')

const sumTwoNumbers = function(num1, num2) {
    console.log('La somma dei due numeri è ' + (num1 + num2))
}

sumTwoNumbers(30, 6)
sumTwoNumbers(4, 69)
sumTwoNumbers(10,100)
sumTwoNumbers(8)

// BOSS FINALE
// le funzioni possono avere un VALORE DI RITORNO (return value)
// una funzione può, opzionalmente, avere un valore di ritorno
// 'return'

const torna5 = function () {
    // questa funzione non riceve parametri 
    // questa funzione però ritorna SEMPRE il numero 5
    return 5
}
torna5()

console.log(torna5())

// questa invocazione di torna5() VALE 5

// es. più realistico

const createADiceNumber = function() {

    const randomNumber = Math.random()
    const diceNumberFloat = randomNumber * 6
    const integerResult = Math.ceil(diceNumberFloat) 

    return integerResult
}

console.log(createADiceNumber())
// l'invocazione di questa funzione equivale al suo valore di ritorno 
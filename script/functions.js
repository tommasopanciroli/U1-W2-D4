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

const sumTwoNumbers = function (num1, num2) {
  console.log('La somma dei due numeri è ' + (num1 + num2))
}

sumTwoNumbers(30, 6)
sumTwoNumbers(4, 69)
sumTwoNumbers(10, 100)
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

const createADiceNumber = function () {
  const randomNumber = Math.random()
  const diceNumberFloat = randomNumber * 6
  const integerResult = Math.ceil(diceNumberFloat)

  return integerResult
}

console.log(createADiceNumber())
// l'invocazione di questa funzione equivale al suo valore di ritorno

// funzione che accetta come parametro un numero, e se  è sopra 100 torna un messaggio d'errore

const above100 = function (num) {
  if (num > 100) {
    // troppo grande
    return 'Il numero è troppo grande'
  } else {
    // faremo cose
    return 'Numero accettato'
  }
}

console.log("L'utente Stefano ha ricevuto questo messaggio:" + above100(50))
console.log("L'utente Stefano ha ricevuto questo messaggio:" + above100(101))

//

const movesCharacter = function (numberOfSteps) {
  let position = 0
  position = position + numberOfSteps
  return position
}

movesCharacter(createADiceNumber())

// scriviamo una funzione che riceve un numero e torna true se il numero è 45 o 98

const checkNumber = function (number) {
  if (number === 45 || number === 98) {
    return true
  } else {
    return false
  }
}

console.log(checkNumber(60)) // senza return false risulterebbe undefined
console.log(checkNumber(45))

// scrivi una funzione che riceva una stringa e torni 'Bene!' se la stringa sia al massimo
//di 15 caratteri, 'Male!' in caso contrario

const checkString = function (str) {
  if (str.length <= 15) {
    return 'Bene!'
  } else {
    return 'Male!'
  }
}

console.log("L'esito del controllo è:" + checkString('Buongiorno Stefano!')) // male
console.log("L'esito del controllo è:" + checkString('Ciao Tommaso!')) // bene

// il RETURN è il risultato delle operazioni nella funzione

// scrivi una funzione che estragga da una stringa i caratteri alla 3°, 4° e 5° posizione

const extractMiniString = function (str) {
  return str.slice(2, 5) // 3 caratteri
  // slice richiede due parametri: l'indice di partenza e l'indice finale
}

const result = extractMiniString('Ciao, Stefano')
// result dovrebbe essere 'ao,'
console.log(result)

const combineCharacters = function (str) {
  // 2° 6° 9°
  return str.charAt(1) + str.charAt(5) + str.charAt(8)
}

console.log(combineCharacters('Oggi sto imparando le funzioni')) // "gs "

// funzione con un FOR all'interno
const students = [
  'francois', // 0
  'emanuele', // 1
  'giovanni', // 2
  'anna', // 3
  'patricia', // 4
  'giulia', // 5
]

const extract3RandomStudents = function () {
  for (let i = 0; i < 3; i++) {
    // per 3 volte
    // estraiamo un indice valido dell'array students
    // tiro il dado! ma il dado estrae 1-6, a noi serve da 0-5
    const diceResult = createADiceNumber() // numero da 1-6
    const index = diceResult - 1
    console.log(students[index])
  }
}

extract3RandomStudents()

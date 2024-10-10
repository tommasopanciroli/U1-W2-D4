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

const sum= function() {
  const total = 3 + 6
  console.log('la somma fa:', total)
}

sum()

// quindi scriveremo i nostri blocchi di codice 'ricorrenti' in funzioni, in modo
// da evitare copincolla vari (principio ' D R Y') e mantenere il codice più ordinato

// però le funzioni tradizionalmente sono un pò limitate: la loro invocazione
// esegue un flusso di operazioni STATICO, FISSATO: 

const waveToStefano= function() {
    console.log('CIAO, STEFANO')
}

// come faccio a renderla più "dinamica", "generica", spendibile in più situazioni?
// come faccio a fare una generica "waveToStudent"?

// DEFINIZIONE DI STUDENT
const waveToStudent = function(studentName) {
    console.log('CIAO', studentName )
}

waveToStudent('Anna')
waveToStudent('Giulia')
waveToStudent('Stefano')
waveToStudent ('Gabriele')

const area = function() {
    const lato = 6
    console.log("L'area di questo quadrato è " + lato * lato)
}

area()

const genericArea  = function(lato) {
    console.log("L'area di questo quadrato è ", lato * lato)
}
genericArea(5)
genericArea(7)
genericArea(32)
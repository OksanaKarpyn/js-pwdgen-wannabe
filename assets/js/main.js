/* Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito21 */


// chiedo all'utente il suo nome
const yourName = prompt('come ti chiami?');
console.log(yourName);
// chiedo al utente il suo cognome
const surname = prompt('comè il tuo cognome?');
console.log(surname);

// il suo colore preferito
let favoriteColor = prompt('colore preferito?');
console.log(favoriteColor);

 document.getElementById('info').innerHTML += 
`<p>Mi chiamo ${yourName}. Il mio cognome è ${surname}. Il colore preferito è ${favoriteColor} 21</p> `;

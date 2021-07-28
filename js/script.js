// 1. Richiesta nome utente
var firstName = prompt("Inserisci il tuo nome");
// 2. Richiesta nome utente
var lastName = prompt("Inserisci il tuo cognome");
// 3. Richiesta colore preferito
var favoriteColor = prompt("Inserisci il tuo colore preferito");
// 4. Costante classe
const booleanClass = "40";
// 5. Definizione variabile password
var pdwGen = " " + firstName + lastName + favoriteColor + booleanClass;
// 6. Concatenazione id--var
document.getElementById('pwd-gen').value = pdwGen;

// button--copy
function myFunction() {
  var copyText = document.getElementById("pwd-gen");
  copyText.select();
  copyText.setSelectionRange(0, 99999)
  document.execCommand("copy");
  alert("Copied the text: " + copyText.value);
}

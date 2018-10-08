// //simple alert suivie de bonjour
// var bonjour = " Bonjour ", firstName = " ! ", result;
// firstName = prompt(" votre prénom ? ");
// result = bonjour + firstName
// alert ( result );
//
//
// //bouton plus prompt suive de bonjour
// var button = document.querySelector('button');
//
// button.onclick = function() {
//   var name = prompt('Quel est votre nom ?');
//   alert('Hello ' + name + ', comment va tu ? !');
// }
 var firstName = prompt ('entrez votre prenom');
 if ( isNaN ( firstName ) ) {
   alert( 'bonjour:' + firstName );
 }else{
   alert ('erreur');
 }

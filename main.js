var cognome = prompt('Inserisci qui il tuo cognome');
var surlist = ['Rossi', 'Bianchi', 'Ferrari', 'Esposito'];
surlist.push(cognome);
surlist.sort();

for (var i = 0; i < surlist.length; i++) {
  var print = surlist.toString();
  document.getElementById('surnamelist').innerHTML = print
}

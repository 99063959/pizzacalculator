//ik heb de variabelen neergezet
var kleinepizza = 5;
var mediumpizza = 7;
var grotepizza = 9; 

var klein = parseInt(prompt("hoeveel kleine pizza's wil je"));
var medium = parseInt(prompt("hoeveel medium pizza's wil je"));
var groot = parseInt(prompt("hoeveel grote pizza's wil je"));

document.write("<br> aantal kleine pizza's = " +klein);
document.write("<br> prijs = " +kleinepizza*klein);
document.write("<br> aantal medium pizza's = " +medium);
document.write("<br> prijs = " +mediumpizza*medium);
document.write("<br> aantal grote pizza's = " +groot);
document.write("<br> prijs = " +grotepizza*groot);
var totaalkleinepizza = kleinepizza *klein;
var totaalmediumpizza = mediumpizza *medium;
var totaalgrotepizza = grotepizza *groot;
var totaal = totaalkleinepizza+totaalmediumpizza+totaalgrotepizza;
document.write("<br><br> totaal bedrag = "  + totaal); 

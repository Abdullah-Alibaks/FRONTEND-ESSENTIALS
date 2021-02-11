let persoon = {
    voornaam : prompt("Wat is je naam?"),
    achternaam : prompt("Wat is je achternaam?"),
    leeftijd : prompt("Wat is je leeftijd?"),
    email : prompt("Wat is je E-mail-adres?"),
    woonplaats : prompt("Wat is jou woonplaats?"),
    };

document.getElementById("naamGebruiker").innerHTML="<p>"+ persoon["voornaam"] + persoon["achternaam"]+"</p>";
console.log(persoon);
document.getElementById("naamTabel").innerHTML="<td>"+ persoon["voornaam"]+"</td>"+"<td>"+ persoon["achternaam"]+"</td>"+"<td>"+ persoon["leeftijd"]+"</td>"+"<td>"+ persoon["email"]+"</td>"+"<td>"+ persoon["woonplaats"]+"</td>";

// background-color
// backgroundColor

if(persoon.leeftijd == "16"){
   document.querySelector("body").style.backgroundColor = "orange";
}
if(persoon.leeftijd == "17") {
    document.querySelector("body").style.backgroundColor = "blue";
 }
if(persoon.leeftijd == "18") {
      document.querySelector("body").style.backgroundColor = "gold";
 }
if (persoon.leeftijd == "19") {
    document.querySelector("body").style.backgroundColor = "lightgreen";
 }
if(persoon.leeftijd > "19") {
   document.querySelector("body").style.backgroundColor = "limegreen";
}

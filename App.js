//Denne koden regner ut alderen min i år.
let fodt = new Date(2005,9,15)
let currentDate = new Date();
let ageInMilliseconds = currentDate - fodt;
let ageInYears = ageInMilliseconds / 31536000000;
let alder = Math.floor(ageInYears) + "år";
document.getElementById("aar").innerHTML = alder;

//Denne funksjonen styrer dropdownmenyene
function drop(pilnr, innholdnr){
  console.log(pilnr);
  const Innhold = document.getElementById(innholdnr)
  const pil = document.getElementById(pilnr)
    
  if (Innhold.style.maxHeight === "0px") {
    Innhold.style.maxHeight = "500px";
    pil.style.transform = "rotate(-90deg)";
  } else {
    Innhold.style.maxHeight = "0px";
    pil.style.transform = "rotate(0deg)";
  }
}
function actualizarDatos() {
  fetch("https://randomuser.me/api/")
    .then((res) => res.json())
    .then((datos) => {
      for (let i of datos["results"]) {
        document.getElementById("nombre").innerHTML =
          i.name.first + ", " + i.name.last;
          document.getElementById("direccion").innerHTML = i.location.street.name + " " + i.location.street.number + ", (" + i.location.postcode +") " + i.location.city + " - " +  i.location.state + " - " +  i.location.country;
        document.getElementById("telefono").innerHTML = i.phone;
        document.getElementById("email").innerHTML = i.email;
        document.getElementById("linkedin").innerHTML = "linkedin.com/" + i.login.username;
        document.getElementById("whatsapp").innerHTML = i.cell;
        var f = new Date(i.dob.date);
        document.getElementById("fechaNacimiento").innerHTML = f.getDate() + "/"+ f.getMonth()+ "/" +f.getFullYear() + " (" + i.dob.age + ")";
       
        document
          .getElementById("imagenusuario")
          .setAttribute("src", i.picture.large);
      }
    })
    .catch((err) => console.log("Solicitud fallida", err)); // Capturar errores;
}


const selectedEnglish = document.getElementById("eng");
const selectedEspanol = document.getElementById("esp");
const hidden = "display:none;";
const shown = "display:block;";
const allEnglishText = document.getElementsByClassName("eng");
const allEspanolText = document.getElementsByClassName("esp");


//SHOW ALL ENGLISH TEXT
function showEnglishText() {
  for (element in allEnglishText) {
     allEnglishText[element].style = shown;
  }
  for (element in allEspanolText) {
    allEspanolText[element].style = hidden;
  }
}
//SHOW ALL SPANISH TEXT
function showSpanishText() {
  for (element in allEnglishText) {
    allEnglishText[element].style = hidden;
  }
  for (element in allEspanolText) {
    allEspanolText[element].style = shown;
  }
}


//ENGLISH-> ALL OTHERS SWITCHED OFF
selectedEnglish.addEventListener("click", () => {
  selectedEnglish.classList.add("langSelected");
  selectedEspanol.classList.remove("langSelected");
 
  showEnglishText();
});

//SPANISH-> ALL OTHERS SWITCHED OFF
selectedEspanol.addEventListener("click", () => {
  selectedEspanol.classList.add("langSelected");
  selectedEnglish.classList.remove("langSelected");
 
  showSpanishText();
});
 

//ENGLISH-> ALL OTHERS SWITCHED OFF
selectedEnglish.addEventListener("click", () => {
  selectedEnglish.classList.add("langSelected");
  selectedEspanol.classList.remove("langSelected");
 
  showEnglishText();
  localStorage.setItem("languageActive", "english");
});
 
//SPANISH-> ALL OTHERS SWITCHED OFF
selectedEspanol.addEventListener("click", () => {
  selectedEspanol.classList.add("langSelected");
  selectedEnglish.classList.remove("langSelected");
 
  showSpanishText();
  localStorage.setItem("languageActive", "espanol");
});
 
//LOCAL STORAGE ADDON
switch (localStorage.getItem("languageActive")) {
 
  case "english":
    selectedEnglish.classList.add("langSelected");
    showEnglishText();
    break;

  case "espanol":
    selectedEspanol.classList.add("langSelected");
    showSpanishText();
    break;

  default:
    //default ENGLISH text shown, all others disabled
//default -> no local storage exists
    selectedEspanol.classList.add("langSelected");
    showSpanishText();
}
function editNav() {
  let x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalClose = document.querySelector(".close");
const thankBtn = document.querySelectorAll(".thank-btn");
const thankBg = document.querySelector(".bground-thank");


// launch modal event    Clic "je m'inscris"
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
modalClose.addEventListener("click", closeModal);

// launch modal form Lancement formulaire (changement du display en block)
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form  fermer formulaire via croix
function closeModal() {
  modalbg.style.display = "none";
}
// fermer thanks via "fermer"
document.querySelector(".button-thank").addEventListener("click", closeThank)

// fermer thanks via croix
document.getElementById("closethanks").addEventListener("click", closeThank)

function openThank() {
  document.getElementById("bground-thank").style.display = "block";
}

function closeThank() {
  modalbg.style.display = "none";
  let form = document.getElementById("form");
  form.reset();
  form.style.display = "block";
  document.getElementById("bground-thank").style.display = "none";
}

function closeForm() {
  document.getElementById("form").style.display = "none";
  document.getElementById("bground-thank").style.display = "block";
}
// openThank();


//tagName est pour la valeur du name
//regex pour la regex
//errorlabel pour la partie 
function toValidate(tagName, errorlabel, errorMsg, regex) {
  if (regex) {
    if (tagName.value == "") {
      document.getElementById(errorlabel).innerHTML = "Ce champ ne peut être vide";
      tagName.focus();
      return false;
    } else if (!regex.test(tagName.value)) {
      document.getElementById(errorlabel).innerHTML = errorMsg;
      tagName.focus();
      return false;
    } else {
      document.getElementById(errorlabel).innerHTML = "";
      return true;
    }
  } else {
    if (tagName.value == '') {
      document.getElementById(errorlabel).innerHTML = errorMsg;
      if (tagName.length == undefined) {
        tagName.focus();
      }
      return false;
    } else {
      document.getElementById(errorlabel).innerHTML = "";
      return true;
    }
  }

}

function validate() {
  //avec regex
  let name = document.forms["reserve"]["first"];
  let regexfirst = /^[A-za-z]{3,12}$/;
  let errorfirst = 'errorfirst';
  let errorMsgfirst = 'Veuillez entrez un prénom valide';
  if (!toValidate(name, errorfirst, errorMsgfirst, regexfirst)) return false;

  //avec regex
  let surname = document.forms["reserve"]["last"];
  let regexlast = /^[A-za-z]{3,12}$/;
  let errorlast = 'errorlast';
  let errorMsglast = 'Veuillez entrez un nom valide';
  if (!toValidate(surname, errorlast, errorMsglast, regexlast)) return false;

  //avec regex
  let email = document.forms["reserve"]["email"];
  let regexemail = /(.+)@(.+){2,}\.(.+){2,}/;
  let erroremail = 'erroremail';
  let errorMsgemail = 'Veuillez entrez un em@il valide';
  if (!toValidate(email, erroremail, errorMsgemail, regexemail)) return false;

  //sans regex
  let birthdate = document.forms["reserve"]["birthdate"];
  let errorbirthdate = 'errorbirthdate';
  let errorMsgbirthdate = "Veuillez entrez une date valide";
  if (!toValidate(birthdate, errorbirthdate, errorMsgbirthdate)) return false;

  //sans regex
  let quantity = document.forms["reserve"]["quantity"];
  let errorquantity = 'errorquantity';
  let errorMsgquantity = "Veuillez entrez une quantitée valide";
  if (!toValidate(quantity, errorquantity, errorMsgquantity)) return false;

  //sans regex
  let location = document.forms["reserve"]["location"];
  let errorlocation = 'errorlocation';
  let errorMsglocation = "Veuillez choisir une ville";
  if (!toValidate(location, errorlocation, errorMsglocation)) return false;
  closeForm();
  return false;
}


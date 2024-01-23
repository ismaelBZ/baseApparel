// Elements for resposive resize
const imgHero = document.querySelector(".img-hero");
const logoWrapper = document.querySelector(".logo-wrapper")
const commingSoonSection = document.getElementById("commingSoonSection")
const errorIcon = document.querySelector(".error-icon");
const buttonSize = document.querySelector(".submit-button");
const form = document.querySelector("form");
const emailInput = document.querySelector(".email-input");
const errorMessage = document.querySelector("#errorMessage");

const emailRegExp = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;


/* Show Error Message if email ins`t valid */
form.addEventListener("submit", (event) => {
  
  /*Prevant page refresh by browser */
  event.preventDefault();
  
  if (!emailInput.checkValidity() || emailInput.value == "" || emailRegExp.test(emailInput.value)) {
    errorMessage.style.color = "#f66a6a";
    errorMessage.textContent = "Please provide a valid email";
  } else {
    emailInput.setCustomValidity("");
    errorIcon.style.display = "none";
    errorMessage.style.color = "hsl(0, 36%, 70%)";
    errorMessage.textContent = "Email sent!";
    emailInput.value = "";
  }
  
})

emailInput.addEventListener("input", () => {
  
  if(!emailInput.checkValidity() || emailRegExp.test(emailInput.value)) {
    errorIcon.style.display = "inline";
  } else {
    errorIcon.style.display = "none";
  }
  
})



/* Responsive Resize Function */

function resizeLayout() {
  
  if (window.innerWidth > 680) {
    
    /* Resize image */
    imgHero.setAttribute("src", "./images/hero-desktop.jpg");
    
    /* Resize Comming Soon Section */
    const headerHight = parseInt(window.getComputedStyle(logoWrapper).height);
    const sectionHeight = parseInt(window.getComputedStyle(commingSoonSection).height);
    const totalHeight = parseInt(window.getComputedStyle(imgHero).height);
    const blankSpace = totalHeight - headerHight - sectionHeight
    
    /* Centralizing on resize */
    commingSoonSection.style.marginTop = `${0.8 * (blankSpace / 2)}px`;
    
  } 
  
  /* Returning to css position */
  if (window.innerWidth < 680) {
    
    /* Position Comming Soon Section */
    commingSoonSection.style.marginTop = "8vh";
    
  }
  
  /* Translate Error Icon */
  const translateErrorIcon = (percentage) => -(parseInt(window.getComputedStyle(buttonSize).width)*percentage);
  errorIcon.style.transform = `translateX(${translateErrorIcon(1.25)}px)`;
  
}

resizeLayout(); // Call to on load if the window is loading in a width rezided needeed



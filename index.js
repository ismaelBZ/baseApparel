const imgHero = document.querySelector(".img-hero");
const logoWrapper = document.querySelector(".logo-wrapper")
const commingSoonSection = document.getElementById("commingSoonSection")

function resizeLayout() {


  if (window.innerWidth > 680) {
    
    /* Resize image */
    imgHero.setAttribute("src", "./images/hero-desktop.jpg");

    /* Resize Comming Soon Section */
    const headerHight = parseInt(window.getComputedStyle(logoWrapper).height);
    console.log("Header " + headerHight);
    const sectionHeight = parseInt(window.getComputedStyle(commingSoonSection).height);
    console.log("Section" + sectionHeight);
    const totalHeight = parseInt(window.getComputedStyle(imgHero).height);
    console.log("total" + totalHeight);
    const blankSpace = totalHeight - headerHight - sectionHeight

    commingSoonSection.style.marginTop = `${0.8 * (blankSpace / 2)}px`;
    
//     // const commingSoonHeight = window.getComputedStyle(commingSoonSection).height;
//     imgHero.style.height = "100vh";
  } 

  if (window.innerWidth < 680) {
    commingSoonSection.style.marginTop = "8vh";
  }
}

resizeLayout();
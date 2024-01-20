const imgHero = document.querySelector(".img-hero");
const logoWrapper = document.querySelector(".logo-wrapper")
const commingSoonSection = document.getElementById("commingSoonSection")

function resizeLayout() {


  if (window.innerWidth > 680) {
    
    /* Resize image */
    imgHero.setAttribute("src", "./images/hero-desktop.jpg");

    /* Resize Comming Soon Section */
    const headerHight = parseInt(window.getComputedStyle(logoWrapper).height);
    const sectionHeight = parseInt(window.getComputedStyle(commingSoonSection).height);
    const totalHeight = parseInt(window.getComputedStyle(imgHero).height);
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

const increasePercent = (value, increase) => {
  newValue = `${value+increase}%`;
  console.log('Novo valor' + newValue);
  return newValue;
}

const moveSubmitButton = (positionInPercentage) => {
  setTimeout(() => {
  }, 1000);
}

function handleSubmit() {
  const submitButton = document.querySelector(".submit-button");
  let position = 10;


  let intervalID = setInterval(() => {
    position += 1
    submitButton.style.right = `${position}%`;
    if(position >= 70) {
      clearInterval(intervalID);
      let breakNumber = 0; 
      let takeABreak = setInterval(() => {
        breakNumber++;
        console.log(breakNumber);
        if (breakNumber >= 15) {
          clearInterval(takeABreak);
          let returnIntervalID = setInterval(() => {
            position -= 1
            submitButton.style.right = `${position}%`;
            console.log(position);
            if(position <= 10) {
              clearInterval(returnIntervalID);
            }
          }, 7);
        } 
      }, 7);
    }
  }, 7);

  handleBackground();

};

function handleBackground() {
  const buttonBackground = document.querySelector(".button-background-animation" );
  const inputValue = document.querySelector(".email-input")
  let progress = 10;

  let backgroundInterval = setInterval(() => {
    progress += 1;
    console.log(progress)
    buttonBackground.style.width = `${progress}%`;
    if (progress >= 70) {
        clearInterval(backgroundInterval);
        inputValue.value = "";
        let breakNumber = 0; 
        let takeABreak = setInterval(() => {
          breakNumber++;
          if (breakNumber >= 15) {
            clearInterval(takeABreak);
            let backgroundIntervalReverse = setInterval(() => {
              progress -= 1;
              buttonBackground.style.width = `${progress}%`
              if (progress <= 20) {
                clearInterval(backgroundIntervalReverse);
              }
            }, 7)
          }
        }, 7)
    }
  }, 7);
}
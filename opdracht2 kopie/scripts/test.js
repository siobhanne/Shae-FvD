// JavaScript Document
console.log("howdy");


// ******************************************************************************************
// FORWARD BUTTON
// Bron: hulp van Sanne
var previousButton = document.querySelector("footer button:nth-of-type(1)");
var nextButton = document.querySelector("footer button:nth-of-type(3)");
// var scherm = document.querySelector("body>ul li");

var deLijst = document.querySelector("body>ul");

nextButton.addEventListener("click", goDown);
previousButton.addEventListener("click", goUp);



// functies met toetsenbord functionaliteiten (kleine bron van thijs)
document.onkeydown = (e) => {

  e = e || window.event;
  if (e.key === 'ArrowUp') {
    console.log("Pijltje naar boven: vorig nummer");
    goUp();
  } else if (e.key === 'ArrowDown') {
    console.log("Pijltje naar beneden: volgend nummer");
    goDown();
  };
};




function goDown() {
  deLijst.scrollTop = deLijst.scrollTop + window.innerHeight;
  console.log(deLijst.scrollTop + window.innerHeight);

  theAudio.pause();
  musicProgress = 0;
  theAudio.currentTime = 0;
  artiest = artiest + 1;
  updateArtiest();

  // play music
  // isPlaying = true;
  // startSlider();
  // theAudio.play();
  buttonIcoon.src = 'images/pause.svg';

  if (artiest >= 5) {
    artiest = 0;
    deLijst.scrollTop = 0;
  }
}

function goUp() {
  deLijst.scrollTop = deLijst.scrollTop - window.innerHeight;
  console.log(deLijst.scrollTop - window.innerHeight);


  theAudio.pause();
  musicProgress = 0;
  theAudio.currentTime = 0;
  artiest = artiest - 1;
  updateArtiest();

  // play music
  // isPlaying = true;
  // startSlider();
  // theAudio.play();
  buttonIcoon.src = 'images/pause.svg';

  if (artiest <= 0) {
    artiest = 0;
    deLijst.scrollTop = 0;
    updateArtiest();
  }
}



// ******************************************************************************************
// OPSLAAN FAVORIET
var hartjeKnop = document.querySelector('body>ul li section:nth-of-type(2) button:first-of-type');
var hartjeImg = document.querySelector('body>ul li section:nth-of-type(2) button:first-of-type img');

function favorietMaken() {
  if (hartjeImg.classList.contains('favoriet')) {
    hartjeImg.src = "images/heart.svg";
    hartjeImg.classList.remove('favoriet');
    console.log("ik ben een wit hartje");
  }

  else {
    hartjeImg.src = "";
    hartjeImg.classList.add('favoriet');
    hartjeImg.src = "images/heart_filled.svg";
    console.log("ik ben een rood hartje");
  }
}

hartjeKnop.addEventListener('click', favorietMaken);



// ******************************************************************************************
// MUSICTIME SLIDER
// Bron: hulp van Sanne

var musicProgress;
var myInterval;
var musicSlider;

var theAudio;
var audioDuration;
var isPlaying;

var theButton;
var buttonIcoon;



function theweeknd() {
   musicProgress = 0;
   myInterval;
   musicSlider = document.querySelector("ul li:nth-of-type(1) > input");

   theAudio = document.querySelector("ul li:nth-of-type(1) > audio");
   audioDuration = 229;
   isPlaying = false;

   theButton = document.querySelector("footer button:nth-of-type(2)");
   buttonIcoon = document.querySelector('footer button:nth-child(2) img');

   artiest = 0;

  startSlider();
  startMetSchuiven();
  sliderIsVerschoven();
  toggleMusic();



theButton.addEventListener("click", toggleMusic);
musicSlider.addEventListener("mouse down", startMetSchuiven);
musicSlider.addEventListener("change", sliderIsVerschoven);
}




  function startSlider() {
    myInterval = setInterval(function () {
      musicProgress++

      if (musicProgress > 100) {
        musicProgress = 0;
        clearInterval(myInterval);
        goDown();

        artiest = artiest + 1;
        updateArtiest();
      }

      musicSlider.value = musicProgress;
    }, audioDuration / 10 * 100);
  }


  function startMetSchuiven() {
    clearInterval(myInterval);
    console.log("ik ben gestopt");
    theAudio.pause();
  }


  function sliderIsVerschoven() {
    musicProgress = musicSlider.value;
    theAudio.currentTime = musicProgress / 100 * audioDuration;
    startSlider();
    theAudio.play();
  }


  function toggleMusic() {
    console.log(isPlaying);

    if (isPlaying == false) {
      isPlaying = true;
      startSlider();
      theAudio.play();
      buttonIcoon.src = 'images/pause.svg';
    }

    else {
      isPlaying = false;
      clearInterval(myInterval);
      theAudio.pause();
      buttonIcoon.src = 'images/play.svg';
    }
  }










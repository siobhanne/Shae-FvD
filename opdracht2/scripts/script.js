// JavaScript Document
console.log("howdy");


// ******************************************************************************************
// FORWARD BUTTON
// Bron: hulp van Sanne
var previousButton = document.querySelector("footer button:nth-of-type(1)");
var nextButton = document.querySelector("footer button:nth-of-type(3)");

var deLijst = document.querySelector("body>ul");

nextButton.addEventListener("click", goDown);
previousButton.addEventListener("click", goUp);

function goDown() {
  deLijst.scrollTop = deLijst.scrollTop + window.innerHeight;
  console.log(deLijst.scrollTop + window.innerHeight);

  theAudio.pause();
  musicProgress = 0;
  theAudio.currentTime = 0;
  artiest = artiest + 1;
  updateArtiest()


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
var musicProgress = 0;
var myInterval;
var musicSlider = document.querySelector("ul li:nth-of-type(1) > input");

var theAudio = document.querySelector("ul li:nth-of-type(1) > audio");
var audioDuration = 229;
var isPlaying = false;

var theButton = document.querySelector("footer button:nth-of-type(2)");
var buttonIcoon = document.querySelector('footer button:nth-child(2) img');

var artiest = 0;



function startSlider() {
  // var musicProgress = 0;
  // Deze begrijp ik niet
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
  // theAudio.pause();
}


function sliderIsVerschoven() {
  musicProgress = musicSlider.value;
  theAudio.currentTime = musicProgress / 100 * audioDuration;
  startSlider();
  // theAudio.play();
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



function updateArtiest() {
  if (5 > artiest == 0) {
    theAudio = document.querySelector("ul li:nth-of-type(1) > audio");
    audioDuration = 229;
    theAudio.play();

    theAudio.currentTime = 0;
    console.log("This is: The Weeknd");

    musicSlider = document.querySelector("ul li:nth-of-type(1) > input");
  }

  if (artiest == 1) {
    theAudio = document.querySelector("ul li:nth-of-type(2) > audio");
    audioDuration = 230;
    theAudio.play();
    musicProgress = 0;
    theAudio.currentTime = 0;
    console.log("This is: Michael Jackson");

    musicSlider = document.querySelector("ul li:nth-of-type(2) > input");
  }

  if (artiest == 2) {
    theAudio = document.querySelector("ul li:nth-of-type(3) > audio");
    audioDuration = 230;
    theAudio.play();
    musicProgress = 0;
    theAudio.currentTime = 0;
    console.log("This is: The Kid Laroi");

    musicSlider = document.querySelector("ul li:nth-of-type(3) > input");
  }

  if (artiest == 3) {
    theAudio = document.querySelector("ul li:nth-of-type(4) > audio");
    audioDuration = 230;
    theAudio.play();
    musicProgress = 0;
    theAudio.currentTime = 0;
    console.log("This is: AJR");

    musicSlider = document.querySelector("ul li:nth-of-type(4) > input");
  }

  if (artiest == 4) {
    theAudio = document.querySelector("ul li:nth-of-type(5) > audio");
    audioDuration = 230;
    theAudio.play();
    musicProgress = 0;
    theAudio.currentTime = 0;
    console.log("This is: Tesher x Jason Derulo");

    musicSlider = document.querySelector("ul li:nth-of-type(5) > input");
  }
}



function update() {
  if (deLijst.scrollTop == 1792) {
    artiest == 2;
  }
}


theButton.addEventListener("click", toggleMusic);
musicSlider.addEventListener("mouse down", startMetSchuiven);
musicSlider.addEventListener("change", sliderIsVerschoven);




// ******************************************************************************************
// PINTEREST SAVE BUTTON FUNCTION
var body = document.querySelector(body);



let SubVideoOne= document.getElementById("SubVideoOne");
let SubVideoTwo= document.getElementById("SubVideoTwo");
let SubVideoThree= document.getElementById("SubVideoThree");
let SubVideoFour= document.getElementById("SubVideoFour");
let SubVideoFive= document.getElementById("SubVideoFive");
let SubVideoSix= document.getElementById("SubVideoSix");
let SubVideoSeven= document.getElementById("SubVideoSeven");
// let SubVideoEight= document.getElementById("SubVideoEight");

let MainVid= document.getElementById("MainVid");
let likebutton= document.getElementById("likebutton");
let dislike = document.getElementById("dislikebutton");
let
n = 0;
// let SubVideoOne= document.getElementById("SubVideoOne");
// const player = new Plyr('#player');
//
//
// window.player = player;
//////////////////////////////////////////////////////////////////////////
SubVideoOne.addEventListener('mouseover', () => {
  SubVideoOne.play();
})

SubVideoOne.addEventListener('mouseout', () => {
  SubVideoOne.pause();
})

SubVideoTwo.addEventListener('mouseover', () => {
  SubVideoTwo.play();
})

SubVideoTwo.addEventListener('mouseout', () => {
  SubVideoTwo.pause();
})

SubVideoThree.addEventListener('mouseover', () => {
  SubVideoThree.play();
})

SubVideoThree.addEventListener('mouseout', () => {
  SubVideoThree.pause();
})

SubVideoFour.addEventListener('mouseover', () => {
  SubVideoFour.play();
})

SubVideoFour.addEventListener('mouseout', () => {
  SubVideoFour.pause();
})

SubVideoFive.addEventListener('mouseover', () => {
  SubVideoFive.play();
})

SubVideoFive.addEventListener('mouseout', () => {
  SubVideoFive.pause();
})

SubVideoSix.addEventListener('mouseover', () => {
  SubVideoSix.play();
})

SubVideoSix.addEventListener('mouseout', () => {
  SubVideoSix.pause();
})

SubVideoSeven.addEventListener('mouseover', () => {
  SubVideoSeven.play();
})

SubVideoSeven.addEventListener('mouseout', () => {
  SubVideoSeven.pause();
})

//////////////////////////////////////////////////////////////////////////

function myFunction() {
  n++;
  var x = document.getElementById("likebutton");
  if (Math.cos(n * Math.PI) == -1) {
    x.src= "likeactivate.png";
  } else {
    x.src="like.png";
  }
}

dislike.addEventListener('click', () =>{
 alert(" Dislike button doesn't suit this video. ")

})


///////////////////////////////////////////////////////////////////
function readmore() {
  let dots = document.getElementById("dots");
  let moreText = document.getElementById("more");
  let btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

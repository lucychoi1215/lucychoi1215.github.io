let image = document.getElementById("image")
let player= document.getElementById("player")

image.addEventListener('mouseenter', () => {
  player.play();
})

image.addEventListener('mouseleave', () => {
  player.pause();
})

player.addEventListener('timeupdate', () => {
  console.log(" the current time is:", player.currentTime)

  if (player.currentTime > 28) {
    image.src= "https://thumbs.dreamstime.com/b/guy-holding-leather-bag-walking-down-stairs-businessman-wearing-suit-brown-shoes-concrete-steps-s-cropped-picture-123769800.jpg"
  }

  if (player.currentTime > 45) {
    image.src= "https://www.sisaweek.com/news/photo/201912/129091_117142_439.jpg"
  }

  if ( player.currentTime > 51) {
    image.src= "http://upload.wikimedia.org/wikipedia/commons/5/56/Seoul-metro-640-Korea-university-station-platform-20181125-153624.jpg"
  }

})

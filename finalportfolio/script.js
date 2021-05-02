let shine = new Shine(document.getElementById('my-shine-object'));
let logo = document.getElementById('logo');

 new WOW().init();


window.addEventListener('mousemove', function(event) {
  shine.light.position.x = event.clientX;
  shine.light.position.y = event.clientY;
  shine.draw();
}, false);


shine.config.opacity = 0.08;
shine.config.blur = 55;
shine.draw(); // make sure to re-draw

var config = new shinejs.Config({
  numSteps: 4,
  opacity: 0.2,
  shadowRGB: new shinejs.Color(91, 90, 88)
});

logo.addEventListener('mouseenter', event=> {
  logo.src='giflogo.gif';
})

logo.addEventListener('mouseleave', event=> {
  logo.src='logo_transparent_final.png';
})

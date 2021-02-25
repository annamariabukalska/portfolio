var slider_img = document.querySelector('.slider-img');
var images = ['lokalbefolkning.png', 'apenhet.png', 'kunstplus.png'];
var i = 0;

new Typewriter('#top-info', {
  loop: true,
  strings: ['Interaksjonsdesigner', 'UX-designer'],
  autoStart: true,
});

function openlinkedin() {
	window.open("https://www.linkedin.com/in/annamariabukalska/")
}

function openGitHub() {
	window.open("https://github.com/annamariabukalska")
}

function emailAnna() {
	window.open("mailto:annamariabukalska@gmail.com", '_self');
}

function prev() {
  if (i<= 0) i = images.length;
  i--;
  return setImg();
}

function next() {
   if (i >= images.length -1) i = -1;
   i++;
   return setImg();
}

function setImg() {
  return slider_img.setAttribute('src', 'resources/' + images[i]);
}
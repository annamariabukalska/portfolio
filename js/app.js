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



// attach event handlers with jquery
$("#next").on("click", function (e) {
  // check with following statement to see if event handler is attached properly
  // alert("next");
  next();
});

$("#prev").on("click", function (e) {
  prev();
});

var images = new Array(
  "http://placekitten.com/500/200",
  "http://placekitten.com/499/200",
  "http://placekitten.com/501/200",
  "http://placekitten.com/500/199");

function getCurrentImageIndex() {
  return images.indexOf(document.getElementById("image").src);
}

function next() {
  nextImage = (getCurrentImageIndex() + 1) % images.length;
  document.getElementById("image").src = images[nextImage];
  $("#textarea").val(images[nextImage]);
}

function prev() {
  nextImage = (getCurrentImageIndex() - 1 + images.length) % images.length;
  document.getElementById("image").src = images[nextImage];
  $("#textarea").val(images[nextImage]);
}


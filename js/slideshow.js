let slider_img = document.querySelector('.slider-img');
let selectedIndex = 0;
let images = [
    'apenhet/apenhet-bruker.jpg', 
    'apenhet/apenhet-side3.png', 
    'apenhet/apenhet-side2.png'
];

function prev() {
    if (selectedIndex <= 0) selectedIndex = images.length;
    selectedIndex--;
    return setImg();
}

function next() {
    if (selectedIndex >= images.length - 1) selectedIndex = -1;
    selectedIndex++;
    return setImg();
}

function setImg() {
    return slider_img.setAttribute('src', 'resources/' + images[selectedIndex]);
}
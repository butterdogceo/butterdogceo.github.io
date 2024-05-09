// jQuery
var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.3.min.js';
document.getElementsByTagName('head')[0].appendChild(script);

// Menu Functions
function openMenu() {
    document.getElementById('nav').style.width = "98.5%";
    document.getElementById('closeMenuIcon').style.display = "block";
    document.getElementById('menuIcon').style.display = "none";
}

function closeMenu() {
    document.getElementById('nav').style.width = "225px";
    document.getElementById('menuIcon').style.display = "block";
    document.getElementById('closeMenuIcon').style.display = "none";
}

function iconClick() {
    document.getElementById('icon').style.rotate = "180deg";
    $('.secret').css('display', 'block');
    $('.secret').css('opacity', '1');
}
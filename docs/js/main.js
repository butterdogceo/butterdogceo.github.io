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
    const items = document.querySelectorAll('div');
    const array = [...items];
    array.forEach(item => {
        if (item.classList.contains("secret")) {
            item.style.display = "block";
            item.style.opacity = 1;
        }
    });
  }
// Sidebar toggle
function sidebarToggle() {

  var toggleButton = document.getElementById("openNav");
  var main = document.getElementById("main");
  var sidebar = document.getElementById("mySidebar");
  var navbar = document.getElementById("navbar");

  if (document.getElementById("mySidebar").style.display == "block") {
    main.style.marginLeft = "0";
    sidebar.style.display = "none";
    // navbar.classList.remove('w3-hide-large');
  } else {
    main.style.marginLeft = "300px";
    sidebar.style.width = "300px";
    sidebar.style.display = "block";
    // navbar.classList.add('w3-hide-large');
  }
}

// Go to top button
var mybutton = document.getElementById("go-to-top-button");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// When window is maximzied make sure sudebar is being desplayed 
// .(it could be hidden in small screen).
function displaySidebar(){
  var w = document.documentElement.clientWidth;

  var toggleButton = document.getElementById("openNav");
  var main = document.getElementById("main");
  var sidebar = document.getElementById("mySidebar");
  var navbar = document.getElementById("navbar");

  if(w >= 993) {

    main.style.marginLeft = "300px";
    sidebar.style.width = "300px";
    sidebar.style.display = "block";
    navbar.classList.add('w3-hide-large');
  }
  
}
window.addEventListener("resize", displaySidebar);

// Accordion
function toggleAccordion(id) {
  var x = document.getElementById(id);
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace("w3-show", "");
  }
}
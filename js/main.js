// Hide loading image
jQuery('.doc-loader').fadeOut('fast');


// Change color nav
window.onscroll = () => {
  	const nav = document.querySelector('#menu');
  	if(this.scrollY <= 10) nav.className = ''; else nav.className = 'scroll';
};

// Jump to sectionn and change color menu 
jQuery(".section-title-holder").stick_in_parent({offset_top: 64}).on(
	"sticky_kit:stick", function (e) {
        jQuery('.menu-wrapper, .menu-wrapper .sub-menu').css('backgroundColor', 
        jQuery(this).css("backgroundColor"));
        jQuery('.menu-wrapper a.active, .menu-mobile').css('color',jQuery(this).find('.section-num span').css("color")
      );
    });

// BUtton down

let i = -1;
let time = 3000;
let slideTimer;
let slides = document.getElementsByClassName('slide');
let slideDots = document.getElementsByClassName('dot');

function clickChangeSlide(n){
  clearTimeout(slideTimer);
  console.log(n);
  changeSlide(n, true);
}

function changeSlide(n = i, manual = false){
  
  for(let j = 0; j < slides.length; j++){
    if(j == i) {
      slides[j].classList.add('prev-slide');
      slides[j].classList.remove('active-slide');
      slideDots[j].classList.remove('active-dot');
      continue; 
    }
    
  }
  if(manual){
    if(n < 0) i = slides.length - 1
    else if(n > slides.length - 1) i = 0
    else i = n
  }else i = i < slides.length - 1 ? i+1 : 0;
  
  slides[i].classList.add('active-slide');
  slideDots[i].classList.add('active-dot');
  
  slideTimer = setTimeout('changeSlide()', time);
}

window.onload = changeSlide();


//sEND eMAIL
//
// check email is valid
// 
const forms = document.forms;
const clickForm = forms['contact-form-content'];

  clickForm.addEventListener("click", function(e) {
  // e.preventDefault();
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  const name = document.getElementById('name').value;
  if(name === '' || email === '' || message ===''){
 
    //alert("Please enter valid form!");
    document.getElementById("error").style.display = 'block';
    document.getElementById("btn1").onclick = function () {
                document.getElementById("error").style.display = 'none';
            };
  } 
  else if (validateEmail(email)) {
      alert('Success');
      document.getElementById("error").style.display = 'none';
    }
      else {
      document.getElementById("error").style.display = 'block';
      document.getElementById("error").innerHTML = 'Fail';
      return true;
  
  }return false;
});
function validateEmail(email) {
  var pattern = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

  return $.trim(email).match(pattern) ? true : false;
}

    /*
    
<form class="email-form" action="" method="POST">
    <input class="email-form__input" id="email-input" type="email" placeholder="email@example.com">
    <input id="subscribe-button" class="email-form__button" type="submit" value="Send">
    var emailInput;

$("#email-input").on("change", function() {
  emailInput = $(this).val();

  if (validateEmail(emailInput)) {
    $(this).css({
      color: "white",
      background: "green",
      border: "1px solid green"
    });
  } else {
    $(this).css({
      color: "red",
      border: "1px solid red"
    });

    // alert("not a valid email address");
  }
});

$("#subscribe-button").on("click", function(e) {
  // e.preventDefault();
  if (validateEmail(emailInput)) {
    alert("you did it!");
  } else {
    alert('nope');
    return false;
  }
});

function validateEmail(email) {
  var pattern = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

  return $.trim(email).match(pattern) ? true : false;
}

     */

/// SHOW MENU MOBILE
/// 

var mobile = document.getElementsByClassName('.menu-wrapper')
var menu = document.getElementById('menu-mob');

menu.addEventListener('click', openNav);
function openNav() {
  var x = document.getElementById("menu-content");

if (x.style.height === "488px") {
//if (x.style.display === "block"){
    x.style.height = "0%";
   // x.style.display = "none";
    
  } else {
    x.style.height = "488px";
   // x.style.display = "block";
  }
  //document.getElementById("menu-content").style.height = "100%";
}

///////////////////////// FADE IN

function debounce(func, wait = 10, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

const fadeins = document.querySelectorAll('.fadein');
const fadeSlideIn = function() {
  // for each panel, check if window bottom has scrolled past start of panel -> if yes, add .panel-fade-in class
  fadeins.forEach(e => {
    const fadeInAt = (window.scrollY + window.innerHeight) - e.offsetHeight / 3;
    const fadeMidpoint = e.offsetTop + e.offsetHeight / 4;
    if (fadeInAt > fadeMidpoint) {
      e.classList.add('add-fade-in');
    }
  })
}
////// Animate Up
const animates = document.querySelectorAll('.section-content-holder');
const animateUp = function(){
  animates.forEach(e =>{
    e.classList.add('animateUp');
  });
}
//setTimeout(headtitleDescIn, 500);

window.addEventListener('scroll', debounce(function() {
  fadeSlideIn();
  animateUp();
}));

/////// Change to CV
const gotocv = document.getElementById('gotocv');
    gotocv.addEventListener('click', function(){
      window.location.href="cvforme/index.html";
    })
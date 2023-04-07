/************** Top Of The Page At Every Refresh ***********/
history.scrollRestoration = "manual";

$(window).on('beforeunload', function(){
      $(window).scrollTop(0);
});

/*************************************************/

/************** Active Nav Menus ***********/

const li=document.querySelectorAll(".links");
const a_menu=document.querySelectorAll(".active_menu");

function activeMenu(){
  let len=a_menu.length;
  while(--len && window.scrollY +97 < a_menu[len].offsetTop){}
  li.forEach(ltx => ltx.classList.remove("active"));
  li[len].classList.add("active");
}
activeMenu();
window.addEventListener("scroll",activeMenu);

/*************************************************/

/********************* Swipper ********************/
var swiper = new Swiper(".swiper-container", {
	effect: "coverflow",
	grabCursor: true,
	allowTouchMove: true,
	centeredSlides: true,
	slidesPerView: "auto",
	initialSlide : 3,
	loop: true,
	coverflowEffect: {
		rotate: 20,
		stretch: 0,
		depth: 50,
		modifier: 1,
		slideShadows: true,
  	},
	autoplay:{
		delay: 1500,
		disableOnInteraction: false,
		pauseOnMouseEnter: false,
	},
	pagination:{
		el: '.swiper-pagination',
		clickable: true,
		dynamicBullets: true,
	}
});

/********************* Section Height ********************/
/*let sec = document.querySelector("section");
window.onresize = function() {
    document.sec.height = window.innerHeight;
}
window.onresize();*/
const parallax=document.getElementById('parallax_efect');
const arrows=document.getElementsByClassName('arrows');
const arrow1=document.getElementsByClassName('arrow1');
const arrow2=document.getElementsByClassName('arrow2');
const oportunity2_about1=document.getElementById('oportunity2_about1');
const oportunity2_about2=document.getElementById('oportunity2_about2');
const ceo_info=document.getElementById('ceo_info');
const nav_icon3=document.getElementById('nav-icon3');
window.addEventListener("scroll",function(){
	
	let offset=window.pageYOffset;
	console.log(offset);
	parallax.style.backgroundPositionY=offset*0.7+'px';
});

for(let i=0; i<arrows.length;i++){

arrows[i].addEventListener("mouseenter",function(){
	arrow1[i].classList.remove("arrow1_active");
	arrow1[i].classList.add("arrow1_inactive");
	arrow2[i].classList.remove("arrow2_active");
	arrow2[i].classList.add("arrow2_inactive");
	
});


arrows[i].addEventListener("mouseleave",function(){
	
	arrow1[i].classList.remove("arrow1_inactive");
	arrow1[i].classList.add("arrow1_active");
	arrow2[i].classList.remove("arrow2_inactive");
	arrow2[i].classList.add("arrow2_active");
});


}

ceo_info.addEventListener("mouseenter",function(){
	console.log("ceo");
	arrow1[0].classList.remove("arrow1_active");
	arrow1[0].classList.add("arrow1_inactive");
	arrow2[0].classList.remove("arrow2_active");
	arrow2[0].classList.add("arrow2_inactive");

});

ceo_info.addEventListener("mouseleave",function(){
	arrow1[0].classList.remove("arrow1_inactive");
	arrow1[0].classList.add("arrow1_active");
	arrow2[0].classList.remove("arrow2_inactive");
	arrow2[0].classList.add("arrow2_active");
});

oportunity2_about1.addEventListener("mouseenter",function(){
	arrow1[1].classList.remove("arrow1_active");
	arrow1[1].classList.add("arrow1_inactive");
	arrow2[1].classList.remove("arrow2_active");
	arrow2[1].classList.add("arrow2_inactive");

});

oportunity2_about1.addEventListener("mouseleave",function(){
	arrow1[1].classList.remove("arrow1_inactive");
	arrow1[1].classList.add("arrow1_active");
	arrow2[1].classList.remove("arrow2_inactive");
	arrow2[1].classList.add("arrow2_active");
});

oportunity2_about2.addEventListener("mouseenter",function(){
	arrow1[2].classList.remove("arrow1_active");
	arrow1[2].classList.add("arrow1_inactive");
	arrow2[2].classList.remove("arrow2_active");
	arrow2[2].classList.add("arrow2_inactive");

});

oportunity2_about2.addEventListener("mouseleave",function(){
	arrow1[2].classList.remove("arrow1_inactive");
	arrow1[2].classList.add("arrow1_active");
	arrow2[2].classList.remove("arrow2_inactive");
	arrow2[2].classList.add("arrow2_active");
});


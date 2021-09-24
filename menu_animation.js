const hamburger=document.getElementById('hamburger');
const menu=document.getElementById('menu');
const address=document.getElementById('address');
const info_contact=document.getElementById('info_contact');
const fist_link=document.getElementById('fist_link');
const links=document.getElementsByClassName('links');

hamburger.addEventListener("click",function(){
	if(hamburger.classList.contains('inactive')){
		console.log("click");
		menu.animate([
		{ opacity: 1,
		zIndex:4}  
		], {
		duration: 1500,
		fill: "forwards",
		easing: "ease-out"
		});
		
		address.animate([
		{ marginTop: "200px" }  
		], {
		duration: 1500,
		fill: "forwards",
		easing: "ease-out"
		});		
		
		info_contact.animate([
		{ marginTop: "200px" }  
		], {
		duration: 1500,
		fill: "forwards",
		easing: "ease-out"
		});		
		
		fist_link.animate([
		{ marginTop: "100px" }  
		], {
		duration: 1500,
		fill: "forwards",
		easing: "ease-out"
		});
		
		for(let i=0;i<links.length;i++){
			links[i].animate([
		{ marginTop: "10px" }  
		], {
		duration: 1500,
		fill: "forwards",
		easing: "ease-out"
		});
		}

	hamburger.classList.remove('inactive');
	hamburger.classList.add('active');
	}
	
	else{
		console.log("not");
		menu.animate([
		{ opacity: 0,
		zIndex : -1
		}  
		], {
		duration: 1500,
		fill: "forwards",
		easing: "ease-out"
		});
		
		address.animate([
		{ marginTop: "300px" }  
		], {
		duration: 1500,
		fill: "forwards",
		easing: "ease-out"
		});		
		
		info_contact.animate([
		{ marginTop: "300px" }  
		], {
		duration: 1500,
		fill: "forwards",
		easing: "ease-out"
		});
		
		fist_link.animate([
		{ marginTop: "130px" }  
		], {
		duration: 1500,
		fill: "forwards",
		easing: "ease-out"
		});
		
		for(let i=0;i<links.length;i++){
			links[i].animate([
		{ marginTop: "20px" }  
		], {
		duration: 1500,
		fill: "forwards",
		easing: "ease-out"
		});
		}
	hamburger.classList.remove('active');
	hamburger.classList.add('inactive');
	}
	
});

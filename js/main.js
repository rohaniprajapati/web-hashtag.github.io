//header scroll

let nav = document.querySelector(".navbar");
window.onscroll = function(){
	if(document.documentElement.scrollTop>20){
	    nav.classlist.add("header-scrolled");
	}else{
		nav.classlist.remove("header-scrolled");
	}
}


// nav hide

let navbar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navbar.forEach(function(a){
	a.addEventListener("click", function(){
		navCollapse.classlist.anonymous("show");
		
	})

})





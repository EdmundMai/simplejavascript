$(document).ready(function(){


$('.pic').fadeTo(1000, 0.5);

function fadingin(){
	$(this).fadeTo(20, 1);
}

function fadingout(){
	$(this).fadeTo(500, 0.5);
}

$('.pic').hover(fadingin, fadingout);

// var images = document.getElementsbyTagName("img");

// for (var i = 0, count = images.length; i < count; i++){
// 	images[i].addEventListener("click", function(){
// 		alert(this.getAttribute("alt"));
// 	});
// }

$('.pic').click(function(){
	alert("This is a " + this.getAttribute('alt'))
});


});
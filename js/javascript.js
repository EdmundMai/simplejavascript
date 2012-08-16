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


// var images = new Array()
// images[0] = "bison"
// images[1] = "frog"

// function clicky(parama){
//     for (entry in images){
//         if (parama.getAttribute('alt') === images[entry]){
//             parama.onClick(alert("This is a" + parama.getAttribute('alt'));
//         } else {
//             parama.onClick(alert("dang it");
//         }
//     }
// }




// function toggling(){
// 	$(this).toggle(
// 		function(){
// 		$(this).css({'border':'2px solid black'});
// 	}, function(){
// 		$(this).css({'border':'2px solid white'});
// 	})
// })

// $('img').toggling



// var images = new Array()

// images[0] = 'images/bison.jpg'
// images[1] = 'images/frog.jpg'
// images[2] = 'images/giraffe.jpg'
// images[3] = 'images/monkey.jpg'
// images[4] = 'images/rabbit.jpg'
// images[5] = 'images/rhino.jpg'
// images[6] = 'images/tiger.jpg'
// images[7] = 'images/zebra.jpg'

















});
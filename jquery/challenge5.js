
var message = 'Hover over an image below.'
var image = $('img')

image.each(function(){
	image.mouseover(function(){
		console.log('mouseover is working')
		$('#image').css('backgroundImage', 'url('+this.src+')');
		$('#image').html(this.alt);
	});

	image.mouseout(function(){
		$('#image').css('backgroundImage', 'url()');
		$('#image').html(message);
	});

	image.blur(function(){
		$('#image').css('backgroundImage', 'url()');
		$('#image').html(message);
	});
	image.focus(function(){
		$('#image').css('backgroundImage', 'url('+this.src+')');
		$('#image').html(this.alt);
	});


	})





// console.log("here")
// var imgs = document.querySelectorAll("img");
// var msg = "Hover over an image below."
// for (let i = 0; i < imgs.length;i++){
// 	imgs[i].onmouseover = function() {
// 	 	document.querySelector('#image').style.backgroundImage="url('"+imgs[i].src+"')";
// 	 	document.querySelector('#image').innerHTML= imgs[i].alt;
// 	 }
//
// 	 imgs[i].onfocus = function() {
// 	 	document.querySelector('#image').style.backgroundImage="url('"+imgs[i].src+"')";
// 	 	document.querySelector('#image').innerHTML= imgs[i].alt;
// 	 }
//
// 	 imgs[i].onmouseleave = function() {
// 	 	document.querySelector('#image').style.backgroundImage="url('')";
// 	 	document.querySelector('#image').innerHTML= msg;
// 	 }
//
// 	 imgs[i].onblur = function() {
// 	 	document.querySelector('#image').style.backgroundImage="url('')";
// 	 	document.querySelector('#image').innerHTML= msg;
// 	 }
// }

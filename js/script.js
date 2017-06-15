$(document).ready(function(){
	for(var i = 0; i < 16*16; i++)
		$("#container").prepend("<div class=\"pixel\"></div>");
	$(".pixel").hover(function(){
		$(this).css("background-color", "black");
	});
});

function clearPixels(){
	$(".pixel").css("background-color", "white");
	resizePixels();
}

function resizePixels(){
	var newSize = prompt("How many pixels? (Max of 560)");
	$(".pixel").remove();
	var newSize = Math.min(newSize, 560);
	var pixelSize = 560 / newSize;
	$(".pixel").height(pixelSize);
	$(".pixel").width(pixelSize);
	var $container = $("#container");
	for(var i = 0; i < Math.pow(560 / pixelSize, 2); i++){
		$container.prepend("<div class=\"pixel\"></div>");
	}
		for(var i = 0; i < 16*16; i++)
		$("#container").prepend("<div class=\"pixel\"></div>");
	console.log("Riven so cute");
	$(".pixel").hover(function(){
		$(this).css("background-color", "black");
	});
}

$(document).ready(function(){
	var element = $('#list a');
	var offset = 0; 
	var stepping = 0.03;
	var list = $('#list');
	var $list = $(list);
	for (var i = element.length - 1; i >= 0; i--){
		element[i].elemAngle = i * Math.PI * 2 / element.length;
	}
	
	setInterval(render, 200);
	
	function render(){
		for (var i = element.length - 1; i >= 0; i--){
			var angle = element[i].elemAngle + offset;
			x = 120 + Math.sin(angle) * 30;
			y = 45 + Math.cos(angle) * 40;
			size = Math.round(40 - Math.sin(angle) * 40);
			var elementCenter = $(element[i]).width() / 2;
			var leftValue = (($list.width()/2) * x / 100 - elementCenter) + "px"
			$(element[i]).css("fontSize", size + "pt");
			$(element[i]).css("opacity",size/100);
			$(element[i]).css("zIndex" ,size);
			$(element[i]).css("left" ,leftValue);
			$(element[i]).css("top", y + "%");
		}
		offset += stepping;
	}
	
});
var images = document.getElementsByClass(".gallery").getElementsByTagName(".img");

for(var i = 0; i < images.length; i++){
	images[i].onmouseover = function (){
		this.style.cursor = 'hand';
		
	}
	images[i].onmouseout = function(){
		this.style.cursor = 'pointer';
		
}

window.onclick=function(event){
	
	if(event.target.className=="popup")
		event.target.style.display="none";
}

var clickbox=document.getElementsByClassName("box41");
for (var i=0;i<clickbox.length;i++){
	clickbox[i].onclick=function(){
		document.getElementById("popup-"+this.id).style.display="block";
	}
}
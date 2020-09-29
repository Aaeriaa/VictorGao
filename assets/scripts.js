
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
if(sessionStorage.op=="1"){
	document.getElementById("popup-programmingClub").style.display="block";
	sessionStorage.op="0";
}


document.getElementById("open").onclick=function(){
	sessionStorage.op=1;
}
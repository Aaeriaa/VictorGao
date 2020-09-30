function stringReverser(){
	document.getElementById("string-reverser-out").value=document.getElementById("string-reverser-in").value.split('').reverse().join('');
}
function ceasarCipher(){
	var s=document.getElementById("ceasar-cipher-in").value,shift=parseInt(document.getElementById("ceasar-cipher-shift").value),cipher="";
	if(!isNaN(shift)) for(var i=0;i<s.length;i++){
		var c=s.charCodeAt(i);
		if(65<=c&&c<=90) c=(c-65+shift)%26+65;
		else if(97<=c&&c<=122) c=(c-97+shift)%26+97;
		cipher=cipher.concat(String.fromCharCode(c));
	}
	document.getElementById("ceasar-cipher-out").value=cipher;
}
function factorize(){
	var x=parseInt(document.getElementById("factorize-in").value);
	if(isNaN(x)){
		document.getElementById("factorize-out").value="";
		return;
	}
	var primes=[],factors=[1,x];
	for(var i=2,y=x;i*i<=y;i++) if(y%i==0){
		for(;x%i==0;x/=i) primes.push(i);
		factors.push(i);
		if(y/i!=i) factors.push(y/i);
	}
	if(x>1) primes.push(x);
	factors.sort(function(a,b){return a-b});
	var ex=1,out3=1,out4="";
	for(var i=1;i<primes.length;i++){
		console.log(primes[i]);
		if(primes[i]!=primes[i-1]){
			console.log("out4");
			out4=out4.concat(primes[i-1]+"^"+ex+" x ")
			ex=0; out3++;
		}
		ex++;
	}
	out4=out4.concat(primes[primes.length-1]+"^"+ex);
	document.getElementById("factorize-out1").innerHTML=primes.length;
	document.getElementById("factorize-out2").innerHTML=primes.join(", ");
	document.getElementById("factorize-out3").innerHTML=out3;
	document.getElementById("factorize-out4").innerHTML=out4;
	document.getElementById("factorize-out5").innerHTML=factors.length;
	document.getElementById("factorize-out6").innerHTML=factors.join(", ");
}
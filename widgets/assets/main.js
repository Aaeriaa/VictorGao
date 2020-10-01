
function stringReverser(){
	document.getElementById("string-reverser-out").value=document.getElementById("string-reverser-in").value.split('').reverse().join('');
}
function caesarCipher(){
	var s=document.getElementById("caesar-cipher-in").value,shift=parseInt(document.getElementById("caesar-cipher-shift").value),cipher="";
	if(!isNaN(shift)) for(var i=0;i<s.length;i++){
		var c=s.charCodeAt(i);
		if(65<=c&&c<=90) c=(c-65+shift)%26+65;
		else if(97<=c&&c<=122) c=(c-97+shift)%26+97;
		cipher=cipher.concat(String.fromCharCode(c));
	}
	document.getElementById("caesar-cipher-out").value=cipher;
}
function factorize(){
	var xstring=document.getElementById("factorize-in").value;
	if(xstring=="") return;
	if(isNaN(xstring)){
		alert("Must be a positive integer");
		return;
	}
	var x=parseInt(xstring);
	if(x<=0){
		alert("Must be a positive integer");
		return;
	}
	var primes=[],factors=[1];
	for(var i=2;i*i<=x;i++){
		for(;x%i==0;x/=i) primes.push(i);
		if(i==1e9){
			alert("Operation took too long, a prime factor exists greater than 10^8");
			return;
		}
	}
	if(x>1) primes.push(x);
	var ex=1,out3=0,out4="";
	for(var i=1;i<primes.length;i++){
		if(primes[i]!=primes[i-1]){
			out4=out4.concat(primes[i-1]+"^"+ex+" x ");
			for(var j=primes[i-1],len=factors.length;ex;j*=primes[i-1],ex--) for(var k=len-1;k>=0;k--) factors.push(factors[k]*j);
			ex=0; out3++;
		}
		ex++;
	}
	if(primes.length){
		out3++;
		out4=out4.concat(primes[primes.length-1]+"^"+ex);
		for(var j=primes[primes.length-1],len=factors.length;ex;j*=primes[primes.length-1],ex--) for(var k=len-1;k>=0;k--) factors.push(factors[k]*j);
	}
	factors.sort((a, b) => (a < b) ? -1 : ((a > b) ? 1 : 0))
	document.getElementById("factorize-out1").innerHTML=primes.length;
	document.getElementById("factorize-out2").innerHTML=primes.join(", ");
	document.getElementById("factorize-out3").innerHTML=out3;
	document.getElementById("factorize-out4").innerHTML=out4;
	document.getElementById("factorize-out5").innerHTML=factors.length;
	document.getElementById("factorize-out6").innerHTML=factors.join(", ");
}
var n=parseInt(prompt("No. of players"));
var j=document.getElementsByTagName("span");
s=j[n+2].innerText+j[n+3].innerText+j[n+4].innerText;
var i=0;
var p=s.split("");
var l=setInterval(function(){
	document.getElementsByClassName("txtInput")[0].value+=p[i];
	i++;
	if(i==s.length)
		clearInterval(l);
}
,11000/parseInt(prompt("Speed")));

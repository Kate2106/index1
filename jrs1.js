﻿function $() 
{ var elements = new Array(); 
for (var i = 0; i < arguments.length; i++) 
{ var element = arguments[i]; 
if (typeof element == 'string') 
element = document.getElementById(element); 
if (arguments.length == 1) 
return element; 
elements.push(element); 
} 
return elements; }
function f1(input)
{		
	var x1="123456789-";
	var ff="O'key";
if(!input)
{
	ff="Fail";
}
	
	var x3 = input.split("-");
	var x4=x3.length-1;
	alert("fae");
if(!x3[0]||!x3[x4])
{
	ff="Fail";
}
if(input.indexOf('--')!=-1)
	{
	ff="Fail";
}
for(i=0;i<input.length;i++)
{	
	if(x1.indexOf(input.charAt(i))==-1)
	ff="Fail";
}
	return ff;
}

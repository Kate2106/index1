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
	var x1=["1","2","3","4","5","6","7","8","9","-"];
if(input.indexOf("")==0)
{
	return "Fail";
}
	var x2 = new String(document.getElementsById("num"));
	var x3 = x2.split("-");
if(x3.indexOf("")==0)
{
	return "Fail";
}
	
for(i=0;i<input.length;i++)
{	
	if(x1.indexOf(input.charAt(i))==-1)
	return "Fail";
}
return "Okay";
}

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
	if(input.indexOf("")==-1)
{
	return "Fail";
}
	if(input.indexOf("--")==-1)
{
	return "Fail";
}
	if(input.indexOf("-")==-1)
{
	return "Fail";
}
	if(input.lastIndexOf("-")==-1)
{
	return "Fail";
}
for(i=0;i<input.length;i++)
{	
	if(x1.indexOf(input.charAt(i))==-1)
		return "Fail"
}
return "Okay"
}

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
	var a = input.indexOf("--");
	if(input == "" )
{
	return "Fail";
}
	if(input == "--")
{
	return "Fail";
}
else
{return "Okay"}	
}
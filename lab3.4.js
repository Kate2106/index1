﻿﻿﻿function $() 
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

function f1()
{
var N=parseInt($('n').value);
var K;

for(K=1; K*K<=N; K=K)
{
	K++;
}
$('k').value=K;
}
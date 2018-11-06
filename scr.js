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
var b=new Date();
function f1()
{
var year1=parseInt($('a1').value);
b.setYear(year1);
b.setMonth(2);
b.setDate(8);
day1=b.getDay(b);
switch(day1)
{
case 1:
$('b').value='Понедельник'
break;
case 2:
$('b').value='Вторник'
break;
case 3:
$('b').value='Среда'
break;
case 4:
$('b').value='Четверг'
break;
case 5:
$('b').value='Пятница'
break;
case 6:
$('b').value='Суббота'
break;
case 0:
$('b').value='Воскресенье'
break;
}
}
var c=new Date();
function f2()
{
var year1=parseInt($('a1').value);
b.setYear(year1);
b.setMonth(11);
b.setDate(31);
day2=b.getDay(c);
switch(day2)
{
case 1:
$('c').value='Понедельник'
break;
case 2:
$('c').value='Вторник'
break;
case 3:
$('c').value='Среда'
break;
case 4:
$('c').value='Четверг'
break;
case 5:
$('c').value='Пятница'
break;
case 6:
$('c').value='Суббота'
break;
case 0:
$('c').value='Воскресенье'
break;
}
}
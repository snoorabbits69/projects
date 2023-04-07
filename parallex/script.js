let moon=document.getElementById('moon');
let stars=document.getElementById('stars');
let mountbehind=document.getElementById('mountbehind');
let text=document.getElementById('text');
let btn=document.getElementById('btn');
let mountfront=document.getElementById('mountfront');
let header=document.querySelectorAll('header')[0];
window.addEventListener('scroll',()=>{
    let value=window.scrollY;
stars.style.left=value * 0.25 +'px';
   moon.style.top=value * 1.05 +'px';
   mountbehind.style.top=value * 1.05 +'px';
mountfront.style.top=value * 0 +'px';
  text.style.marginRight=value * 4 +'px';
text.style.marginTop=value * 1.5 +'px';
btn.style.marginTop=value * 1.5 +'px';
 header.style.top=value *0.5 +'px';



})

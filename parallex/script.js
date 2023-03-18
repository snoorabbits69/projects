// let moon=document.getElementById('moon');
// let stars=document.getElementById('stars');
// let mountbehind=document.getElementById('mountbehind');
// let text=document.getElementById('text');
// let btn=document.getElementById('btn');
// let mountfront=document.getElementById('mountfront');
//let header=document.querySelectorAll('header')[0];
window.addEventListener('scroll',()=>{
    let value=window.scrollY;
    document.getElementById('stars').style.left=value * 0.25 +'px';
    document.getElementById('moon').style.top=value * 1.05 +'px';
    document.getElementById('mountbehind').style.top=value * 1.05 +'px';
    document.getElementById('mountfront').style.top=value * 0 +'px';
    document.getElementById('text').style.marginRight=value * 4 +'px';
    document.getElementById('text').style.marginTop=value * 1.5 +'px';
    document.getElementById('btn').style.marginTop=value * 1.5 +'px';
    document.querySelectorAll('header')[0].style.top=value *0.5 +'px';



})
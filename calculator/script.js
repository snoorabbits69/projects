let out=" ";

let box=document.getElementById('box');
let output=document.getElementById('output');
let input=Array.from(document.querySelectorAll('.input'));

input.forEach((e)=>{e.addEventListener('click',
()=>{
    if(e.value=='='){
out=eval(out);

output.value=out+0;
    }
    else if(e.value=='ac'){
        out=" ";
        output.value=out;
    }
    else if(e.value=='c'){
        out=out.slice(0, -1);
        output.value=out;
    }
    else if(e.value=="change"){
        out=-out;
output.value=out;
    }
    else{
    out=out+e.value;
output.value=out;
    }
})

document.body.addEventListener('keypress',(a)=>{
console.log(a.key);
   if(a.key=="Enter" || a.key=='='){
    out=eval(out);
    output.value=out;
   }
   
   else{
   if(a.key==e.value){
out=out+e.value;
output.value=out;
   }
}
})
})
let intro=document.getElementById('intro');
setInterval(()=>{
intro.innerHTML="Solve your problems"
},5000)
setInterval(()=>{
    intro.innerHTML="Welcome to Calculator";
    },10000)

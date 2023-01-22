let output=document.getElementById('output');
let adding=document.getElementById('add');
let subtract=document.getElementById('sub');
let reset=document.getElementById('reset');

adding.addEventListener('click',add);
let value=0;
function add(){
 
  value=Number.parseInt(value);
  value+=1;
  output.innerHTML=value;

  
}
subtract.addEventListener('click',sub);

function sub(){
 
  value=Number.parseInt(value);
  value-=1;
  output.innerHTML=value;
  
}
reset.addEventListener('click',rese)
function rese(){
  value=0;
  output.innerHTML=value;
}

let drop=document.getElementById('drop');
let limit=document.getElementById('limiter');
let name=document.getElementById('name');
let btn = document.getElementById('btn');
let pass=  document.getElementById('pass')
setInterval(()=>{
document.getElementById('val').innerHTML=limit.value;
},30
)
class password{
  constructor(leng,name){
    this.leng=leng;
    this.name=name;
    this.pass=[];
  }
    weakpass(){
      let c=this.leng-this.name.length;
      let a=[];
let gen=()=>{
  for(let i=0;i<c;i++){
  a[i]=Math.floor(Math.random()*10);
  }
  pass.value=this.name+a.join('');
}
      
btn.addEventListener('click',gen);

  }
  midpass(){
let a = "abcdefghijklmnopqrestuvwxyz123456789";



let gen = () => {
  for (let i = 0; i < this.leng; i++) {
    let c = Math.floor(Math.random() * a.length);
    this.pass[i] = a[c];
  }
pass.value = this.pass.join('');
}
btn.addEventListener('click', gen);
  }
  strongpass(){
let a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrestuvwxyz123456789!@#$%^&*()_+";



let gen = () => {
  for (let i = 0; i < this.leng; i++) {
    let c = Math.floor(Math.random() * a.length);
    this.pass[i] = a[c];
  }
pass.value = this.pass.join('');
}
btn.addEventListener('click', gen);
  }
}
setInterval(()=>{
  
let ob=new password(limit.value,name.value);
  if(drop.value=="strong"){
ob.strongpass();
  }
  else if(drop.value=="mid"){
ob.midpass();
  }
  else{
    ob.weakpass();
  }
}
          ,50
)

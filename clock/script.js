setInterval(function(){
  let b=new Date();
  if(b.getHours()>12){
 document.getElementById("hours").innerHTML=b.getHours()-12;
  }
  else{
     document.getElementById("hours").innerHTML=b.getHours();
  }

    if(b.getMinutes<10){
   document.getElementById("min").innerHTML="0"+b.getMinutes();
  }
  else{
   document.getElementById("min").innerHTML=b.getMinutes();
  }
  document.getElementById("sec").innerHTML=b.getSeconds();
 if(b.getHours()>=12){
 document.getElementById("zone").innerHTML="PM";
  }
  else{
     document.getElementById("zone").innerHTML="AM";
  }
  
},1000)
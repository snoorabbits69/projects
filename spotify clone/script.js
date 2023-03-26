console.log("Starting js");
let Index = 0;
let heart=document.getElementById('hear');
let masterplay=document.getElementById('masterplay');
let bigplay=document.getElementById('play');
let audioelement = new Audio('songs/1.mp3');
let allplay=document.querySelectorAll('.click');
let totalprogress = document.getElementById('progress');
let son=document.getElementsByClassName('songitem');
let songitem=Array.from(son);
let gif = document.getElementById('gif');
let duration=document.getElementsByClassName("timestamp");

let songplay=Array.from(document.getElementsByClassName('songlistplay'));
heart.addEventListener('click',()=>{
    heart.classList.toggle('heartcolor');
})

let songs=[
    {songname:"unravel",filepath:"songs/1.mp3",animename:"TokyoGhoul",coverpath:"cover/1.jpg"},
    {songname:"Opening 1",filepath:"songs/2.mp3",animename:"Death Note",coverpath:"cover/2.jpg"},
    {songname:"Opening ",filepath:"songs/3.mp3",animename:"Re-zero",coverpath:"cover/3.jpg"},
    {songname:"Hero Come back",filepath:"songs/4.mp3",animename:"Naruto",coverpath:"cover/4.jpg"},
    {songname:"Kick Back",filepath:"songs/5.mp3",animename:"Chainsaw-man",coverpath:"cover/5.jpg"},
    {songname:"Rumbling",filepath:"songs/6.mp3",animename:"Attack on Titan",coverpath:"cover/6.jpg"},
    {songname:"L's theme",filepath:"songs/7.mp3",animename:"Death note",coverpath:"cover/7.jpg"},
    {songname:"Opening 2",filepath:"songs/8.mp3",animename:"Bungou Stray dogs",coverpath:"cover/8.jpg"},
    {songname:"Ichigo's theme",filepath:"songs/9.mp3",animename:"Bleach",coverpath:"cover/9.jpg"},
    {songname:"Kyoran Hey Kids",filepath:"songs/10.mp3",animename:"Noragami",coverpath:"cover/10.jpg"},
]

for(i=0;i<2;i++)
{
allplay[i].addEventListener('click',()=>{
    if(audioelement.paused || audioelement.currentTime<0)
    {
        audioelement.play();
        masterplay.classList.remove('fa-play');
masterplay.classList.add('fa-pause');
bigplay.classList.remove('fa-circle-play');
bigplay.classList.add('fa-circle-pause');
songitem.forEach((element, i)=>{ 
    element.getElementsByTagName("i")[0].classList.remove("fa-circle-play");
    element.getElementsByTagName("i")[0].classList.add("fa-circle-pause");
   
})
gif.style.opacity=1;
songplay.forEach((element)=>{
    
  

}  
   )

    }
    else if(audioelement.played||audioelement.currentTime>0){
        audioelement.pause();
        masterplay.classList.remove('fa-pause');
masterplay.classList.add('fa-play');
bigplay.classList.remove('fa-circle-pause');
bigplay.classList.add('fa-circle-play'); 
songplay.forEach((element, i)=>{ 
    element.getElementsByTagName("i")[0].classList.add("fa-circle-play");
    element.getElementsByTagName("i")[0].classList.remove("fa-circle-pause");
   
})
gif.style.opacity=0;
    }
})
}
songitem.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverpath; 
    element.getElementsByClassName("songname")[0].innerHTML = songs[i].songname; 
    element.getElementsByClassName("animename")[0].innerHTML = songs[i].animename; 
})
audioelement.addEventListener('timeupdate',()=>{
    console.log("tt");
    let progress = parseInt((audioelement.currentTime/audioelement.duration)* 100); 
    totalprogress.value = progress;

 })
 totalprogress.addEventListener('change',()=>{
    audioelement.currentTime=totalprogress.value * audioelement.duration/100;
 })
 
 songplay.forEach((e)=>{
    console.log(e);
    e.addEventListener('click',(element)=>{
        console.log(element.target.id)
        
        if(audioelement.paused||audioelement.currentTime<0)
        {
            Index=parseInt(element.target.id);
    element.target.classList.remove('fa-circle-play');
element.target.classList.add('fa-circle-pause');
audioelement.src=`songs/${Index}.mp3`;
audioelement.play();
audioelement.duration=0;
gif.style.opacity=1;

        }
        else if(audioelement.played||audioelement.currentTime>0){
            element.target.classList.remove('fa-circle-pause');
    element.target.classList.add('fa-circle-play');
    
    audioelement.pause();
    
    gif.style.opacity=0;
        }
        Index= Index=parseInt(element.target.id);
    }
    
    )
   
 })
 document.getElementById('forward').addEventListener('click',()=>{

    if(Index>10){
        Index=0;
    }
    else{
        Index=parseInt(Index+1);
    }
    audioelement.src=`songs/${Index+1}.mp3`;
  audioelement.play();
  audioelement.duration=0;
 })
 document.getElementById('previous').addEventListener('click',()=>{

    if(Index<0){
        Index=0;
    }
    else{
        Index=parseInt(Index-1);
    }
    audioelement.src=`songs/${Index+1}.mp3`;
  audioelement.play();
  audioelement.duration=0;
 })


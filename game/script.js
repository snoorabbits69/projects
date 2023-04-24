const images={
  hills:"../image/hills.png",
  background:"../image/background.png",
  platformsmall:"../image/platformsmalll.png"
}
console.log(images.background);
const image = new Image();
image.src = '../image/platform.png';


image.addEventListener('load',()=>{
 
  console.log(image.width);
  console.log(image.height);


const canvas =document.querySelector('canvas');


let movement=0;
  canvas.width=1024;
  canvas.height=576;
  let c=canvas.getContext('2d');
  const gravity=0.5;
class Player{
    constructor()
    {
        this.position={
            x:100,
            y:100
        }
        this.width=30;
        this.height=30;
        this.velocity={
            x:0,
            y:0
        }
    }
    draw(){
        c.fillStyle="blue";
        c.fillRect(this.position.x,this.position.y,this.width,this.height);
    }
    update(){

        this.draw();
        this.position.y+=this.velocity.y;
        this.position.x+=this.velocity.x;
        if(this.position.y+this.velocity.y+this.height<canvas.height){
        this.velocity.y+=gravity;
        }
        else{
            this.velocity.y=0;
        }
        
        
    }
}

class Platform{
    constructor(x,y,image){
this.position={
    x,y
}
this.image=image;
this.width=this.image.width;
this.height=image.height;
    }
    draw(){
        c.drawImage(this.image,this.position.x,this.position.y)
    }
}

const player=new Player();

const platforms=[new Platform(10,460,image),new Platform(image.width,460,image)];
console.log(image.width);

function createimg(imagesrc){
const img=new Image();
img.src=imagesrc;
return img;
}

  class genericobjects{
    constructor(x,y,image){
this.position={
    x,y
}
this.image=image;
this.width=image.width;
this.height=image.height;
    }
    draw(){
        c.drawImage(this.image,this.position.x,this.position.y)
    }
}
const genericobj=[new genericobjects(0,0,createimg(images.background)),new genericobjects(-1,-1,createimg(images.hills))]
const keys={
right:{
pressed:false
},left:{
    pressed:false
}
}

function animate(){
    requestAnimationFrame(animate);
    c.fillStyle="white";
    c.fillRect(0,0,canvas.width,canvas.height);
    genericobj.forEach(generic=>{generic.draw();})
  player.update();

platforms.forEach(platform=>{
  platform.draw();
}
)
  if(keys.right.pressed && player.position.x<400){
    player.velocity.x=5;
    
  }
  else if(keys.left.pressed && player.position.x>100){
    player.velocity.x=-5;
  }
  else{
    player.velocity.x=0;
    if(keys.right.pressed){
        platforms.forEach(platform=>{
            
 platform.position.x-=5;
 

        })
        genericobj.forEach(generic=>{generic.position.x-=3;})
        movement+=5;
    }
    else if(keys.left.pressed){
        platforms.forEach(platform=>{
        platform.position.x+=5;
        })
        genericobj.forEach(generic=>{generic.position.x+=3;})
        movement-=5;
    }
if(movement>4000){
    console.log("You did it");
}
  }
  platforms.forEach(platform=>{
    if((player.height+player.position.y)<=platform.position.y 
        &&(player.height+player.position.y+player.velocity.y)>=platform.position.y
        && (player.position.x+player.velocity.x)>=platform.position.x
        &&player.position.x<(platform.position.x+platform.width)){
     player.velocity.y=0;
    }
})
}
animate();
addEventListener('keydown',({keyCode})=>{
// console.log(keyCode);

switch (keyCode) {
    case 65:
    case 37:
      // console.log("left");
      player.velocity.x -= 1;
      keys.left.pressed = true;
      break;
    case 68:
    case 39:
      // console.log("right");
      player.velocity.x += 1;
      keys.right.pressed = true;
      break;
    case 87:
    case 38:
    case 32:
      // console.log("up");
      player.velocity.y -= 10;
      break;
    case 83:
    case 40:
      // console.log("down");
      player.velocity.y += 10;
      break;
    default:
      break;
  }
  
                                                       

})
addEventListener('keyup',({keyCode})=>{

    switch (keyCode) {
        case 65:
        case 37:
          // console.log("left");
          player.velocity.x = 0;
          keys.left.pressed = false;
          break;
        case 68:
        case 39:
          // console.log("right");
          player.velocity.x = 0;
          keys.right.pressed = false;
          break;
        case 87:
        case 38:
        case 32:
          // console.log("up");
          player.velocity.y = 0;
          break;
        case 83:
        case 40:
          // console.log("down");
          player.velocity.y = 0;
          break;
        default:
          break;
      }
        })
        
      })

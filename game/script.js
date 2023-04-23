const canvas =document.querySelectorAll('canvas')[0];

  canvas.width=innerWidth;
  canvas.height=innerHeight;
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
        this.position.x=this.velocity.x;
        if(this.position.y+this.velocity.y+this.height<canvas.height){
        this.velocity.y+=gravity;
        }
        else{
            this.velocity.y=0;
        }
        
    }
}
class Platform{
    constructor(){
this.position={
    x:100,y:100
}
this.width=200;
this.height=20;
    }
    draw(){
        c.fillRect(this.position.x,this.position.y,this.width,this.height)
    }
}
const player=new Player();
const platform=new Platform();
const keys={
right:{
pressed:false
},left:{
    pressed:false
}
}

function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0,0,canvas.width,canvas.height);
  player.update();
  platform.draw();
  if(keys.right.pressed){
    player.velocity.x+=5;
  }else if(keys.left.pressed){
    player.velocity.x-=5;
  }

}
animate();
addEventListener('keydown',({keyCode})=>{
console.log(keyCode);


   if(keyCode==65|| keyCode==37){
        console.log("left");
        player.velocity.x-=1;
        keys.left.pressed=true;
     }
    else  if(keyCode==68||keyCode==39){
            console.log("right");
            player.velocity.x+=1;
            keys.right.pressed=true;
                 }
                 else if(keyCode==87||keyCode==38|| keyCode==32){
                console.log("up");
                player.velocity.y-=10;
                         }
                         else if(keyCode==83||keyCode==40){
                    console.log("down");
                    player.velocity.y+=10;
                                           }
                                           console.log(keys.right.pressed);                   

})
addEventListener('keyup',({keyCode})=>{

    if(keyCode==65|| keyCode==37){
        console.log("left");
        player.velocity.x-=0;
        keys.left.pressed=false;
     }
    else  if(keyCode==68|| keyCode==39){
            console.log("right");
            player.velocity.x+=0;
            keys.right.pressed=false;
                 }
                 else if(keyCode==87|| keyCode==38|| keyCode==32){
                console.log("up");
                player.velocity.y-=0;
                         }
                         else if(keyCode==83|| keyCode==40){
                    console.log("down");
                    player.velocity.y+=0;
                                           }
                    console.log(keys.right.pressed);
    })
    platform.draw();
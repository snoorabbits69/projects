let win=document.getElementById('win');
let images = {
  hills: "../image/hills.png",
  background: "../image/background.png",
  smallplatform: "../image/platformSmallTall.png",
  spriterunleft:"../image/spriteRunLeft.png",
  spriterunright:"../image/spriteRunRight.png",
  spritestandright:"../image/spriteStandRight.png",
  spritestandleft:"../image/spriteStandLeft.png"
}
let audio=new Audio();

let currentkey;
let smallplatform = new Image();
smallplatform.src = images.smallplatform;
let death = 0;
console.log(images.background);
let image = new Image();
image.src = '../image/platform.png';

let canvas = document.querySelector('canvas');


let movement = 0;
canvas.width = 1024;
canvas.height = 576;
let c = canvas.getContext('2d');
let gravity = 0.5;
function game() {
  function createimg(imagesrc) {
    let img = new Image();
    img.src = imagesrc;
    return img;
  }

  class Player {
    }
  let player = new Player();
  class Platform {
  }
  let platforms = [];



  class genericobjects {
  }
  let genericobj = [];
  let keys = {
    right: {
      pressed: false
    }, left: {
      pressed: false
    }
  }

  function init() {

    movement = 0
    class Player {

      constructor() {
        this.speed = 10;
        this.position = {
          x: 100,
          y: 100
        }
        this.width = 66;
        this.height = 150;
        this.velocity = {
          x: 0,
          y: 0
        }
        this.sprite={
          stand:{
            right:createimg(images.spritestandright),
       left:createimg(images.spritestandleft),
          cropwidth:177,
          width:66},
          run:{
            right:createimg(images.spriterunright),
            left:createimg(images.spriterunleft),
            cropwidth:341,
            width:127.799
          }
        }
        this.currentsprite=this.sprite.stand.right;
        this.currentcropwidth=177;
        this.currentwidth=66;
      this.frames=0;
      }
      draw() {
        
        c.drawImage(this.currentsprite,this.currentcropwidth*this.frames,0,this.currentcropwidth,400,
        this.position.x, this.position.y,this.width,this.height);
      }
      update() {
this.frames++;
if(this.frames>59 && (this.currentsprite===this.sprite.stand.right||this.currentsprite===this.sprite.stand.left)){this.frames=0;}
else if(this.frames>29&& (this.currentsprite===this.sprite.run.right||this.currentsprite===this.sprite.run.left)){this.frames=0;}
        this.draw();
        this.position.y += this.velocity.y;
        this.position.x += this.velocity.x;
        if (this.position.y + this.velocity.y + this.height < canvas.height) {
          this.velocity.y += gravity;
        }

      }
    }
    player = new Player();
    class Platform {
      constructor(x, y, image) {
        this.position = {
          x, y
        }
        this.image = image;
        this.width = this.image.width;
        this.height = image.height;
      }
      draw() {
        c.drawImage(this.image, this.position.x, this.position.y);
      }
    }
    platforms = [new Platform(10, 460, image), new Platform(image.width, 460, image),
    new Platform(image.width * 2 + 100, 460, image), new Platform(image.width * 3 + 200, 460, image),
    new Platform(image.width * 4, 460, image), new Platform(image.width * 5 + 120, 460, image), new Platform(image.width * 5 + 120, 400, smallplatform), new Platform(image.width * 6 + 300, 400, image), new Platform(image.width * 6 + 300, 350, smallplatform)];




    class genericobjects {
      constructor(x, y, image) {
        this.position = {
          x, y
        }
        this.image = image;
        this.width = image.width;
        this.height = image.height;
      }
      draw() {
        c.drawImage(this.image, this.position.x, this.position.y)
      }
    }
    genericobj = [new genericobjects(0, 0, createimg(images.background)), new genericobjects(-1, -1, createimg(images.hills))]

    let keys = {
      right: {
        pressed: false
      }, left: {
        pressed: false
      }

    }
    death = 0;
  }
  init();
  function animate() {
    requestAnimationFrame(animate);
    c.fillStyle = "white";
    c.fillRect(0, 0, canvas.width, canvas.height);
    genericobj.forEach(generic => { generic.draw(); })
    player.update();

    platforms.forEach(platform => {
      platform.draw();
    }
    )
    if (keys.right.pressed && player.position.x < 400) {
      player.velocity.x = player.speed;

    }
    else if ((keys.left.pressed && player.position.x > 100) || (keys.left.pressed && movement == 0 && player.position.x) > 0) {
      player.velocity.x = -player.speed;
    }
    else {
      player.velocity.x = 0;
      if (keys.right.pressed) {
        platforms.forEach(platform => {

          platform.position.x -= player.speed;


        })
        genericobj.forEach(generic => { generic.position.x -= player.speed * 0.65; })
        movement += 5;
      }
      else if (keys.left.pressed && movement > 0) {
        platforms.forEach(platform => {
          platform.position.x += player.speed;
        })
        genericobj.forEach(generic => { generic.position.x += player.speed * 0.65; })
        movement -= player.speed;
      }
      else {
        player.position.x += 0;
      }
   if(currentkey='right' && player.currentkey!=player.sprite.right){
player.frames=0;
    player.currentsprite=player.sprite.run.right;
    player.currentcropwidth=player.sprite.run.cropwidth;
    player.currentwidth=player.sprite.run.width;
player.width=player.sprite.run.width;
 
   }
   if(currentkey='left' && player.currentkey!=player.sprite.left){

        player.currentsprite=player.sprite.run.left;
        player.currentcropwidth=player.sprite.run.cropwidth;
        player.currentwidth=player.sprite.run.width;
    player.width=player.sprite.run.width;
     
       }
    if(movement>=1934){
      win.classList.remove('hide');
    }
      
      
      if (player.position.y > canvas.height) {
        death = 400;
        audio.src="death.mp3";
        win.classList.add('hide');
     audio.play();
        init();

      }
    }
    platforms.forEach(platform => {
      if ((player.height + player.position.y) <= (platform.position.y)
        && (player.height + player.position.y + player.velocity.y) >= platform.position.y
        && (player.position.x + player.velocity.x) >= platform.position.x
        && player.position.x < (platform.position.x + platform.width)) {
        player.velocity.y = 0;

      }
    })
  }
  animate();
  addEventListener('keydown', ({ keyCode }) => {


    switch (keyCode) {
      case 65:
      case 37:
        console.log("left");
        player.velocity.x -= 1;
        keys.left.pressed = true;
        currentkey='left';
        player.velocity.x += 1;
        player.currentsprite=player.sprite.run.left;
        player.currentcropwidth=player.sprite.run.cropwidth;
        player.currentwidth=player.sprite.run.width;
player.width=player.sprite.run.width;
     
        break;
      case 68:
      case 39:
        console.log("right");
        player.velocity.x += 1;
        currentkey='right';
        player.currentsprite=player.sprite.run.right;
        player.currentcropwidth=player.sprite.run.cropwidth;
        player.currentwidth=player.sprite.run.width;
player.width=player.sprite.run.width;
     
        keys.right.pressed = true;
        break;
      case 87:
      case 38:
      case 32:
        console.log("up");
        if (death == 0) {
          player.velocity.y -= 30;
        }
        break;


      case 83:
      case 40:
        console.log("down");

        player.velocity.y += 5;

        break;

      default:
        break;
    }



  })
  addEventListener('keyup', ({ keyCode }) => {

    switch (keyCode) {
      case 65:
      case 37:
        console.log("left");

        keys.left.pressed = false;
        keys.right.pressed = false;
        player.currentsprite=player.sprite.stand.left;
        player.currentcropwidth=player.sprite.stand.cropwidth;
        player.currentwidth=player.sprite.stand.width;
player.width=player.sprite.stand.width;
        break;
      case 68:
      case 39:
        console.log("right");

        keys.right.pressed = false;
        player.currentsprite=player.sprite.stand.right;
        player.currentcropwidth=player.sprite.stand.cropwidth;
        player.currentwidth=player.sprite.stand.width;
player.width=player.sprite.stand.width;
        break;
      case 87:
      case 38:
      case 32:
        console.log("up");
        player.velocity.y += 30;
        break;
      case 83:
      case 40:
        console.log("down");
        player.velocity.y -= 10;
        break;
      default:
        break;
    }
  })
  setInterval(() => { console.log(player.frames) }, 1000)
}




image.addEventListener('load', () => {
  game();
});


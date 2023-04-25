let images = {
  hills: "../image/hills.png",
  background: "../image/background.png",
  smallplatform: "../image/platformSmallTall.png"
}
let smallplatform=new Image();
smallplatform.src=images.smallplatform;
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
function game(){
  function createimg(imagesrc) {
    let img = new Image();
    img.src = imagesrc;
    return img;
  }
  
    class Player {
       constructor() {
        this.speed=5;
         this.position = {
           x: 100,
           y: 100
         }
         this.width = 30;
         this.height = 30;
         this.velocity = {
           x: 0,
           y: 0
         }
       }
       draw() {
         c.fillStyle = "blue";
         c.fillRect(this.position.x, this.position.y, this.width, this.height);
       }
       update() {
   
         this.draw();
         this.position.y += this.velocity.y;
         this.position.x += this.velocity.x;
         if (this.position.y + this.velocity.y + this.height < canvas.height) {
           this.velocity.y += gravity;
         }
   
       }
     }
     let player = new Player();
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
         c.drawImage(this.image, this.position.x, this.position.y)
       }
     }
   let platforms = [];
   
     
   
     class genericobjects {
       constructor(x, y, image) {
         this.position = {
           x:-1, y:-1
         }
         this.image = image;
         this.width = image.width;
         this.height = image.height;
       }
       draw() {
         c.drawImage(this.image, this.position.x, this.position.y)
       }
     }
     let genericobj = [];
     let keys = {
       right: {
         pressed: false
       }, left: {
         pressed: false
       }
     }
   
function init(){
 
  movement = 0
 class Player {

    constructor() {
      this.speed=5;
      this.position = {
        x: 100,
        y: 100
      }
      this.width = 30;
      this.height = 30;
      this.velocity = {
        x: 0,
        y: 0
      }
    }
    draw() {
      c.fillStyle = "blue";
      c.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
    update() {

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
  new Platform(image.width * 2+100, 460, image),new Platform(image.width * 3 +200, 460, image),
  new Platform(image.width *4, 460, image),new Platform(image.width *5+120, 460, image),new Platform(image.width *5+120, 400, smallplatform),new Platform(image.width *6+300, 400, image),new Platform(image.width *6+300, 350, smallplatform)];


  

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
 death=0;
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
    else if ((keys.left.pressed && player.position.x > 100)||(keys.left.pressed&&movement==0&&player.position.x)>0){
      player.velocity.x = -player.speed;
    }
    else {
      player.velocity.x = 0;
      if (keys.right.pressed ) {
        platforms.forEach(platform => {

          platform.position.x -= player.speed;


        })
        genericobj.forEach(generic => { generic.position.x -= player.speed*0.65; })
        movement += 5;
      }
      else if (keys.left.pressed && movement>0) {
        platforms.forEach(platform => {
          platform.position.x += player.speed;
        })
        genericobj.forEach(generic => { generic.position.x += player.speed *0.65; })
        movement -= player.speed;
      }
      else{
        player.position.x+=0;
      }
      if (movement > 4000) {
        console.log("You did it");
      }
      if (player.position.y > canvas.height) {
        death = 400;
        console.log(death);
 init();
      }
    }
    platforms.forEach(platform => {
      if ((player.height + player.position.y) <= platform.position.y
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
        break;
      case 68:
      case 39:
        console.log("right");
        player.velocity.x += 1;
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
        break;
      case 68:
      case 39:
         console.log("right");

        keys.right.pressed = false;
        break;
      case 87:
      case 38:
      case 32:
         console.log("up");
        player.velocity.y +=30;
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
  setInterval(()=>{console.log(player.position.y)},1000)
}


  
  
image.addEventListener('load',()=>{
game();
});




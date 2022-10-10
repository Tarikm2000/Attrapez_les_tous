import Mobile from './mobile.js';
import Basket from './basket.js';
import Egg from './egg.js';
import Rocket from './rocket.js';


export default class Game {
  constructor(canvas){
this.canvas=canvas;
this.context=canvas.getContext("2d");
this.basket=new Basket(canvas.width/2,canvas.height/2);
this.request=null;
this.eggs=new Array
this.interval;  /*for eggs*/
this.interval1;   /*for rockets */
this.rockets= new Array;
this.scoreChamps =document.getElementById("score");
this.life1=document.getElementById("life-1");
this.life2=document.getElementById("life-2");
this.life3=document.getElementById("life-3");
this.score=0;
this.life=3;
}


addEgg(){
  const y=0;
  const x=Math.floor(Math.random()*(this.canvas.width-Egg.EGG_WIDTH));
  const egg=new Egg(x,y);
  this.eggs.push(egg);

}
addRocket(){
  const x=0;
  const y= Math.floor(Math.random()*(this.canvas.height-Rocket.ROCKET_HEIGHT));
  const rocket = new Rocket(x,y);
  this.rockets.push(rocket);
}




startAndStop() {

    if(this.request==null)
    {
      this.moveAndDraw();
      this.interval=setInterval(this.addEgg.bind(this),1000);
      this.interval1=setInterval(this.addRocket.bind(this),1000);

    }
    else{
      clearInterval(this.interval);
      clearInterval(this.interval1);
     window.cancelAnimationFrame(this.request);
     this.request=null;
   }
 }

  moveAndDraw(){
     this.context.clearRect(0,0, this.canvas.width, this.canvas.height);

this.eggs.forEach((e) => {
  if (e.collisionWith(this.basket)){
    this.score+=100;
    this.scoreChamps.textContent=this.score;
  }
});
this.eggs=this.eggs.filter((e)=>!(this.basket.collisionWith(e)));
this.eggs=this.eggs.filter(e=>this.rockets.filter(x=> x.collisionWith(e)).length==0);
this.rockets.forEach(x=>
{
  if(x.collisionWith(this.basket)){
    this.score-=500;
    this.scoreChamps.textContent=this.score;
    document.getElementById(`life-${this.life}`).style.visibility="hidden";
    this.life-=1;
    if(this.life===0){
    window.alert("You lost");
    window.location.reload();
  }}}
);
this.rockets=this.rockets.filter(x=> !this.basket.collisionWith(x));
     this.basket.move(this.canvas);
     this.basket.draw(this.context);
    this.eggs.forEach((e)=>
     {
      e.move(this.canvas);
      e.draw(this.context);});
    this.rockets.forEach((r) => {
        r.move(this.canvas);
        r.draw(this.context);
      });
this.request = window.requestAnimationFrame(this.moveAndDraw.bind(this));
}

keyDownActionHandler(event) {
     switch (event.key) {
         case "ArrowLeft":
         case "Left":
             this.basket.moveLeft();
             break;
         case "ArrowRight":
         case "Right":
             this.basket.moveRight();
             break;
         case "ArrowUp":
         case "Up":
            this.basket.moveUp();
            break;
        case  "ArrowDown":
        case  "Down":
           this.basket.moveDown();
           break;
         default: return;
     }
     event.preventDefault();
  }
  keyUpActionHandler(event) {
    switch (event.key) {
        case "ArrowLeft":
        case "Left":
        case "ArrowRight":
        case "Right":
        case "ArrowUp":
        case "Up":
        case "ArrowDown":
        case "Down":
            this.basket.stopMoving();
            break;
        default: return;
    }
    event.preventDefault();
}



}

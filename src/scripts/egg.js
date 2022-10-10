import Mobile from './mobile.js';
import egg1 from './assets/images/blue-egg64.png';
import egg2 from './assets/images/green-egg64.png';
import egg3 from './assets/images/yellow-egg64.png';

export default class Egg extends Mobile{
static EGG_WIDTH=64;
static EGG_HEIGHT=83;
    constructor(x,y){
    const eg=Math.floor(Math.random()*3);

      if (eg===0){
        super(x,y,Egg.EGG_WIDTH,Egg.EGG_HEIGHT,0,4,egg1);

      }
      else if (eg==1){
         super(x,y,Egg.EGG_WIDTH,Egg.EGG_HEIGHT,0,4,egg2);
  }
  else {
    super(x,y,Egg.EGG_WIDTH,Egg.EGG_HEIGHT,0,4,egg3);

  }}


    move(canvas){
      this.y=this.y+this.deltaY;

  	}

}

import Mobile from './mobile.js';
import Egg from './egg.js';
import rocket from './assets/images/rocket128.png';


export default class Rocket extends Mobile {
  static ROCKET_WIDTH=64;
  static ROCKET_HEIGHT=38;
  constructor(x,y){
    super(x,y,Rocket.ROCKET_WIDTH,Rocket.ROCKET_HEIGHT,4,0,rocket);
  }


  move(canvas){
  this.x=this.x+this.deltaX;
  }

}

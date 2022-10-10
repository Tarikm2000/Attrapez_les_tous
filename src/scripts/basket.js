import Mobile from './mobile.js';
import panier from './assets/images/basket128.png';

const MoveState={LEFT : 0,RIGHT :1, NONE:2 ,UP: 3,DOWN :4};
const BASKET_WIDTH=128;
const BASKET_HEIGHT=94;
export default class Basket extends Mobile {

   constructor(x,y,w,h,deltaX=10,deltaY=10){
        super(x,y,BASKET_WIDTH,BASKET_HEIGHT,deltaX,deltaY,panier);
        this.moving=MoveState.NONE;
    }
    moveUp(){
      this.moving=MoveState.UP;

    }
    moveLeft(){
      this.moving=MoveState.LEFT;
    }
    moveRight(){
      this.moving=MoveState.RIGHT;
    }
    moveDown(){
      this.moving=MoveState.DOWN;
    }
    move(box) {
     if (this.moving === MoveState.LEFT) {
       this.x= Math.max(0,this.x-this.deltaX)  ;
     }
     if (this.moving === MoveState.RIGHT) {
       this.x = Math.min(box.width - this.image.width, this.x + this.deltaX);
     }
     if (this.moving===MoveState.UP){
       this.y = Math.max(0, this.y - this.deltaY);
     }
     if (this.moving===MoveState.DOWN){
       this.y = Math.min(box.height - this.image.height, this.y + this.deltaY);
     }
   }



   stopMoving() {
    this.moving = MoveState.NONE;
}



}

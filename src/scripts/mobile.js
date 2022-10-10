


export default class Mobile {


  constructor(x,y,w,h,deltaX=0,deltaY=0,img){

    this.x=x;
		this.y=y;
    this.width=w;
    this.height=h;
		this.deltaX=deltaX;
		this.deltaY=deltaY;
    this.image = this.#createImage(img);
  }

  draw(context) {
		context.drawImage(this.image,this.x,this.y);}


    move(canvas){
  if (this.x < 0 || (this.x + this.image.width) > canvas.width)
      this.deltaX *= -1;

  if (this.y < 0 || (this.y + this.image.width) > canvas.height)
      this.deltaY *= -1;

  this.x -= this.deltaX;
  this.y -= this.deltaY;

        }



  #createImage(imageSource) {
	  const newImg = new Image();
  	newImg.src = imageSource;
  	return newImg;
  }

  collisionWith(mobile){
        let a1x= this.x;
        let a1y=this.y;
        let a2x=a1x+this.width;
        let a2y=a1y+this.height;
        let o1x=mobile.x;
        let o1y=mobile.y;
        let o2x=o1x+mobile.width;
        let o2y=o1y+mobile.height;
        let p1x=Math.max(a1x,o1x);
        let p1y=Math.max(a1y,o1y);
        let p2x=Math.min(a2x,o2x);
        let p2y=Math.min(a2y,o2y);
        return (p1x<p2x && p1y<p2y);
      }
}

class Form {
  constructor() {
    this.title = createElement('h2');
    this.button = createButton('PLAY');
    this.title1 = createElement('h3');
  }
  /*hide(){
    this.tittle.hide();
    this.button.hide();
  }*/

  display(){
    this.title.html("Bring the change");
    this.title.position(100, 25);

    this.button.position(160, 100);
    small = createSprite(200,300,12,20);
    small.width = 12;
    small.addImage("small",small_img);
    small.scale = 0.2;

    balck = createSprite(60,280,12,30);
    balck.addImage("balck",balck_img);
    balck.scale = 0.3;

    tall = createSprite(340,280,9,30);
    tall.addImage("tall",tall_img);
    tall.scale = 0.25;

    this.button.mousePressed(()=>{
      this.title.hide();
      this.button.hide();
     
      Mygame();
      
    });

  }
}


class Particle {
    offset = 1
    /**
    * @param {number} x the X position
    * @param {number} y the Y position
    * @param {number} z the Hue of Color
    */
    constructor(x, y, z){
      this.x = x;
      this.y = y;
      this.z = 0;
    }
  
    
    display(){
      fill(0, 0, 100);
      stroke(this.z, 100, 100);
      strokeWeight(3);
      ellipse(this.x, this.y, 10);
    }
    
    update(){
      this.x += random(-this.offset, this.offset);
      this.y += random(-this.offset, this.offset);
      this.x = constrain(this.x, 0, width);
      this.y = constrain(this.y, 0, height);
  
      this.z += this.offset;
      if (this.z > 360) {
      this.z = 0;
      }
      
    }
  }
  
  const particles = [];
  
  let isInside = false;
  
  //setup
  
  function setup(){
    colorMode(HSB);
    createCanvas(500, 500);
    background(0, 0, 0);
  }
  
  //draw
  
  function draw(){
  
    particles.forEach((p) => {
      p.display();
      p.update();
    })
   
  //save button inside draw
  
    if (mouseX > 400 && mouseX < 400 + 90 && mouseY > 470 && mouseY < 470 + 20) {
      fill(104, 53, 100);
      isInside = true;
    } else {
      fill(0, 70, 100);
      isInside = false;
    }
    
    strokeWeight(1);
    rect(400, 470, 90, 20);
  
    fill(0, 0, 0);
    
    textSize(14);
    text('SAVE', 425, 485);
  
  } 
  
  //DO NOT PUT THIS INTO DRAW IT WILL BREAK
  
   function mouseDragged() {
    particles.push(new Particle(mouseX, mouseY));
      //console.log('DO SOMETHING'); 
     }
   
    function mouseClicked() {
      console.log('button clicked');
      if (isInside === true){
       saveCanvas("canvas", "png");
      } 
     return false;
    }
  
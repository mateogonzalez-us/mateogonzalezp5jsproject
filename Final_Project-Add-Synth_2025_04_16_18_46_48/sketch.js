var mode = 0;
var userFreq;

//oscillator 1
let osc1;

//oscillator 2
let osc2;

//oscillator 2
let osc3;


function setup() {
  createCanvas(windowWidth, windowHeight);
  splash = new Splash();
}

function draw() {
  if (mouseIsPressed == true && splash.update() == true) {
    mode = 1;
  }
  
  if (mode == 1) {
    splash.hide();
    
    // your code here
    
    
    
    function keyPressed() {//can go at the bottom of the code lines
  if (key === 'a') {
    // userFreq == midiToFreq(60)
  }
      if(key === "w"){
         userFreq == midiToFreq(61)
         }
      if(key === "s"){
         userFreq == midiToFreq(62)
         }
      if(key === "e"){
         userFreq == midiToFreq(63)
         }
      if(key === "d"){
         userFreq == midiToFreq(64)
         }
      if(key === "f"){
         userFreq == midiToFreq(65)
         }
      if(key === "t"){
         userFreq == midiToFreq(66)
         }
      if(key === "g"){
         userFreq == midiToFreq(67)
         }
      if(key === "y"){
         userFreq == midiToFreq(68)
         }
      if(key === "h"){
         userFreq == midiToFreq(69)
         }
      if(key === "u"){
         userFreq == midiToFreq(70)
         }
      if(key === "j"){
         userFreq == midiToFreq(71)
         }
      if(key === "k"){
         userFreq == midiToFreq(72)
         }
}
    
  
    
    //where all your project code goes
    background(50);
    fill(60);
    noStroke();
    rect(50, 50, windowWidth - 90, windowHeight - 90);
    fill(0);
    ellipse(mouseX, mouseY, 10, 10);
  }
}



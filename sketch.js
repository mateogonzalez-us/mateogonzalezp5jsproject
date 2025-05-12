let audioStarted = false; 

var mode = 0;

var userFreq;

let env1;
let env2;
let env3;

//oscillator 1

let oscType1 ='sine';

let oscType2 = 'sine';

let oscType3 = 'sine';


//arrayapproach
//let c = [0, 30, 60, 80, 160, 240, 270, 330,];

let keys = ['a', 'w', 's', 'e', 'd', 'f', 't','g', 'y', 'h', 'u', 'j', 'k']

let notes = [50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62];

let x = 50;

let osca, enva;
//






let osc1;
//for pitch modulation
let pitchSlider1=0;
let pitchChange1=0
let pitch1 = 0;

let mySelect1;//for waveform selection

let attackLevel1 = 1.0;
let releaseLevel1 = 0;

let attackTime1 = 0.001;
let decayTime1 = 0.2;
let susPercent1 = 50;
let releaseTime1 = 0;

//oscillator 2
let osc2;
let mySelect2;//for waveform selection

let pitchSlider2=0;
let pitchChange2=0;
// let pitch2 = 400;

let attackLevel2 = 1.0;
let releaseLevel2 = 0;

let attackTime2 = 0.001;
let decayTime2 = 0.2;
let susPercent2 = 50;
let releaseTime2= 0;

//oscillator 3
let osc3;
let mySelect3;//for waveform selection

let pitchSlider3=0;
let pitchChange3=0;
// let pitch3 = 400;

let attackLevel3 = 1.0;
let releaseLevel3 = 0;

let attackTime3 = 0.001;
let decayTime3 = 0.2;
let susPercent3 = 50;
let releaseTime3= 0;




/**
 *  Draw a buffer of audio samples. Use the p5.FFT
 *  (Web Audio API Analyzer Node) as a fast way to
 *  get the time domain data, pre-fft.
 * 
 *  Press T to toggle input between soundFile, mic, and oscillator.
 *  Oscillator's frequency is mapped to mouse position.
 *
 *  This example includes drag & drop with p5.dom.
 */

var mic, osc;

var analyzer;
var numSamples = 1024;

// Array of amplitude values (-1 to +1) over time.
var samples = [];
// var currentSource = "mic";




function setup() {
  createCanvas(windowWidth, windowHeight);
  splash = new Splash();
  
  //osc1
  osc1 = new p5.Oscillator('sine');
  osc1.freq((userFreq)+pitchChange1);
  osc1.amp(env1);

  osc1.start();
  
//    pitchSlider1 = createSlider(0,200);//creation of the slider, being stored at 'pitchSlider1'
  
  
 
  //osc2
  osc2 = new p5.Oscillator('sine');
  osc2.freq((userFreq)+pitchChange2);
  osc2.amp(env2);
  
  osc2.start();
  
  // pitchSlider2 = createSlider(0,200);//creation of the slider, being stored at 'pitchSlider2
  
  
 
  
  //osc3
  osc3 = new p5.Oscillator('sine');
  osc3.freq((userFreq)+pitchChange3);
  osc3.amp(env3);
  
  osc3.start();
  
  // pitchSlider3 = createSlider(0,200);//creation of the slider, being stored at 'pitchSlider3'

  
    
  //create adsr1 sliders
  
//   attackTime1Slider = createSlider(0,1000);
 
  
//     decayTime1Slider = createSlider(0,1000);
 
  
//   susPercent1Slider = createSlider(0,100);
  
  
//    releaseTime1Slider = createSlider(0,1000);
 
  
//   //create adsr2 sliders
  
//   attackTime2Slider = createSlider(0,1000);
  
  
//     decayTime2Slider = createSlider(0,1000);
  
  
//   susPercent2Slider = createSlider(0,100);

  
//    releaseTime2Slider = createSlider(0,1000);
 
  
//   //create adsr3 sliders
  
//   attackTime3Slider = createSlider(0,1000);
 
  
//     decayTime3Slider = createSlider(0,1000);
 
  
//   susPercent3Slider = createSlider(0,100);

  
//    releaseTime3Slider = createSlider(0,1000);

  
  
 
  
  //myselect 1
  mySelect1 = createSelect();
  mySelect1.position(60, windowHeight*0.55);
  //add
  mySelect1.option('triangle');
  mySelect1.option('sawtooth');
    mySelect1.option('square');
    mySelect1.option('sine');


                  
mySelect1.selected('sine');
  
  //mySelect2
  mySelect2 = createSelect();
  mySelect2.position(60,windowHeight*0.70);
  //add
  mySelect2.option('triangle');
  mySelect2.option('sawtooth');
    mySelect2.option('square');
    mySelect2.option('sine');
  
  //myselect3
  mySelect3 = createSelect();
  mySelect3.position(60, windowHeight*0.85);
  
  //add
  mySelect3.option('triangle');
  mySelect3.option('sawtooth');
    mySelect3.option('square');
    mySelect3.option('sine');

 
    mySelect1.hide()
    mySelect2.hide()
   mySelect3.hide() 
    
  //envelopes
env1 = new p5.Envelope(attackTime1/1000, decayTime1/1000, susPercent1/100, releaseTime1/1000);  
  env2 = new p5.Envelope(attackTime2/1000, decayTime2/1000, susPercent2/100, releaseTime2/100);
  env3 = new p5.Envelope(attackTime3/1000, decayTime3/1000, susPercent3/100, releaseTime3/100);
  
  env1.setADSR(attackTime1/1000, decayTime1/1000, susPercent1/100, releaseTime1/1000);
env2.setADSR(attackTime2/1000, decayTime2/1000, susPercent2/100, releaseTime2/1000);
env3.setADSR(attackTime3/1000, decayTime3/1000, susPercent3/100, releaseTime3/1000);                
  
  
  
mySelect1.selected('sine');
                  
mySelect2.selected('sine');
  
                    
mySelect3.selected('sine');
   
  
  
  
  
  
  
  // var cnv = createCanvas(windowWidth, windowHeight);
  // noFill();
  // stroke(240);
  // textFont('monospace');

  analyzer = new p5.FFT(0, numSamples);

  // set up various inputs. We'll toggle them when key "T" is pressed.
//   mic = new p5.AudioIn();
//   osc = new p5.Oscillator();
//   osc.amp(0.5);
//   osc.freq(10);

//   mic.start();
//   analyzer.setInput(mic);
  
  
}
function mousePressed() { // needed to get it to work in full screen mode
    // Start audio on user gesture
    if (!audioStarted) {
        userStartAudio();
        audioStarted = true;
    }
}


function draw() {
  if (mouseIsPressed == true && splash.update() == true) {
    mode = 1;
  }
  
  
  
  
  
//   console.log(userFreq.value());
  
  
  
  
  //code here
  if (mode == 1) {
    splash.hide();
    
    // your code here
   
    
    // text.show()
    
    mySelect1.show()
    mySelect2.show()
   mySelect3.show() 
    
    
    
      //osc1

    osc1.setType(mySelect1.value())
  
  oscType1= mySelect1.selected()
    //console.log(mySelect1.selected()) //it works
    
    //osc2
    osc2.setType(mySelect2.value())
  
  oscType2= mySelect2.selected()
    
    
    //osc3
osc3.setType(mySelect3.value())
  
  oscType3= mySelect3.selected()
    
    
    //osc1 adsr
//     attackTime1Slider.position(150,windowHeight*0.55)
//     decayTime1Slider.position(290,windowHeight*0.55)
//     susPercent1Slider.position(430,windowHeight*0.55)
//     releaseTime1Slider.position(570,windowHeight*0.55)
    
   
  
    
//     attackTime1=((attackTime1Slider.value())/1000);
//       decayTime1=((decayTime1Slider.value())/1000);
//       susPercent1=((susPercent1Slider.value())/100);
//       releaseTime1=((releaseTime1Slider.value())/1000);
    
//     pitchChange1 = pitchSlider1.value();
//     //osc2 adsr
//      attackTime2Slider.position(150,windowHeight*0.7)
//     decayTime2Slider.position(290,windowHeight*0.7)
//     susPercent2Slider.position(430,windowHeight*0.7)
//     releaseTime2Slider.position(570,windowHeight*0.7)
    
//     attackTime2=((attackTime2Slider.value())/1000);
//       decayTime2=((decayTime2Slider.value())/1000);
//       susPercent2=((susPercent2Slider.value())/100);
//       releaseTime2=((releaseTime2Slider.value())/1000);
    
//        pitchChange2 = pitchSlider2.value();
//     //osc3 adsr
//    attackTime3Slider.position(150,windowHeight*0.85)
//     decayTime3Slider.position(290,windowHeight*0.85)
//     susPercent3Slider.position(430,windowHeight*0.85)
//     releaseTime3Slider.position(570,windowHeight*0.85)
    
//     attackTime3=((attackTime3Slider.value())/1000);
//       decayTime3=((decayTime3Slider.value())/1000);
//       susPercent3=((susPercent3Slider.value())/100);
//       releaseTime3=((releaseTime3Slider.value())/1000);
    
//        pitchChange3 = pitchSlider3.value();
    
  console.log(userFreq)//how do I monitor this value?
  
    
 
    
    //where all your project code goes
    
    
    
    
    
    
    
    
    background(50);
    fill(60);
    noStroke();
    
        //osc1

    rect(50, 50, windowWidth - 90, windowHeight - 90);
    fill(206,17,37);
   
    rect(50, windowHeight*0.55, windowWidth-140,windowHeight/8);
    fill(206,17,37)
    
    
    //color1
    rect(windowWidth-80, windowHeight*0.55, 30,windowHeight/8);
    fill(255);
    
    
    //osc2
    rect(50, windowHeight*0.70, windowWidth-140,windowHeight/8);
        fill(255);
    //color2
    rect(windowWidth-80, windowHeight*0.7, 30,windowHeight/8);
    fill(0,104,71);
    
    rect(50, windowHeight*0.85, windowWidth-140,windowHeight/8);
    fill(0,104,71);
    //color3
        //fill(0,104,71);

    rect(windowWidth-80, windowHeight*0.85, 30,windowHeight/8);
    fill(0,104,71);
    
    
//     pitch1=userFreq
//     //pitchsliders
    
//     pitchSlider1.position(windowWidth -240,windowHeight*0.55)//x and y coord position of the slider
  
// pitchSlider2.position(windowWidth -240,windowHeight*0.70)//x and y coord position of the slider
  
// pitchSlider3.position(windowWidth -240,windowHeight*0.85)//x and y coord position of the slider

    
//     //slider names osc1
//     //fill(0)//what?
//     text("attack time 1", 150,windowHeight*0.6)
//     fill(0)
//    text("decay time 1", 290,windowHeight*0.6)
//     fill(0)
//    text("sustain level 1", 430,windowHeight*0.6)
//     fill(0)
//    text("release time 1", 570,windowHeight*0.6)
//     fill(0)
   
//   text("pitch bend 1",windowWidth -240,windowHeight*0.6)
//   fill(0)
  
   
//   //slider names osc2
//     text("attack time 2", 150,windowHeight*0.75)
//     fill(0)
//    text("decay time 2", 290,windowHeight*0.75)
//     fill(0)
//    text("sustain level 2", 430,windowHeight*0.75)
//     fill(0)
//    text("release time 2", 570,windowHeight*0.75)
//     fill(0)
   
//   text("pitch bend 2", windowWidth -240,windowHeight*0.75)
//     fill(0)
  
//   //slider names osc3
//     text("attack time 3", 150,windowHeight*0.9)
//     fill(0)
//    text("decay time 3", 290,windowHeight*0.9)
//     fill(0)
//    text("sustain level 3", 430,windowHeight*0.9)
//     fill(0)
//    text("release time 3", 570,windowHeight*0.9)
//     fill(0)
  
  

//  text("pitch bend 3", windowWidth -240,windowHeight*0.9)
//     fill(0)
    
    
    
 text("White keys = a s d f g h j k", windowWidth/2.25,windowHeight*0.1)
    fill(255,0,0)
    
    text("Black keys = w e, r t y ", windowWidth/2.25,windowHeight*0.15)
    fill(255,0,0)
    
    
    
    //mouse dot
     ellipse(mouseX, mouseY, 5, 5);
    fill(255)

    
    
    
    
    
    // get a buffer of 1024 samples over time.
  samples = analyzer.waveform();
  var bufLen = samples.length;

  // draw snapshot of the samples
  strokeWeight(4);
  stroke(66, 244, 155);
  noFill();
  beginShape();
  for (var i = 0; i < bufLen; i++){
    var x = map(i, 0, bufLen, 0, width);
    var y = map(samples[i], -1, 1, -height/10, height/10);
    vertex(x, y + height/3);
  }
  endShape();

  // map the oscillator frequency to mouse position
//   var freq = map(mouseX, 0, windowWidth, 1, 440);
//   osc.freq(freq, 0.01);
//   var amp = map(mouseY, height, 0, 0, 1);
//   osc.amp(amp, 0.01);

//   labelStuff(freq, amp);
}


// draw text
function labelStuff(freq, amp) {
	fill(0);
  noStroke();
//   text('Press T to toggle source', 20, 20);
//   text('Source: '+ currentSource, 20, 40);

//   // if currentSource is an oscillator:
//   if (currentSource === 'sine' || currentSource == 'triangle' || currentSource == 'square' || currentSource == 'sawtooth') {
//     text('Frequency: ' + freq, 20, 60);
//     text('Amplitude: ' + amp, 20, 80);
//   }
}


// ============
// toggle input
// ============

    //array approach
  for(let i = 0; i < 13; i++) {
  if(keyIsPressed && key == keys[i]) {
    //fill(c[i], 100,100);
      osc1.freq(midiToFreq(notes[i]))
          osc2.freq(midiToFreq(notes[i]))
          osc3.freq(midiToFreq(notes[i]))

  }
    }
    
}



//  function keyPressed() {
//   if (key == 'a') {
//      userFreq == midiToFreq(60)
//     playEnv1()
//     playEnv2()
//     playEnv3()
//   }
//       if(key == 'w'){
//          userFreq == midiToFreq(61)
//        playEnv1()
//     playEnv2()
//     playEnv3()
//          }
//       if(key == 's'){
//          userFreq == midiToFreq(62)
//        playEnv1()
//     playEnv2()
//     playEnv3()
//          }
//       if(key == 'e'){
//          userFreq == midiToFreq(63)
//        playEnv1()
//     playEnv2()
//     playEnv3()
//          }
//       if(key == 'd'){
//          userFreq == midiToFreq(64)
//        playEnv1()
//     playEnv2()
//     playEnv3()
//          }
//       if(key == 'f'){
//          userFreq == midiToFreq(65)
//         playEnv1()
//     playEnv2()
//     playEnv3()
//          }
//       if(key == 't'){
//          userFreq == midiToFreq(66)
//        playEnv1()
//     playEnv2()
//     playEnv3()
//          }
//       if(key == 'g'){
//          userFreq == midiToFreq(67)
//        playEnv1()
//     playEnv2()
//     playEnv3()
//          }
//       if(key == 'y'){
//          userFreq == midiToFreq(68)
//        playEnv1()
//     playEnv2()
//     playEnv3()
//          }
//       if(key == 'h'){
//          userFreq == midiToFreq(69)
//         playEnv1()
//     playEnv2()
//     playEnv3()
//          }
//       if(key == 'u'){
//          userFreq == midiToFreq(70)
//        playEnv1()
//     playEnv2()
//     playEnv3()
//          }
//       if(key == 'j'){
//          userFreq == midiToFreq(71)
//        playEnv1()
//     playEnv2()
//     playEnv3()
//          }
//       if(key == 'k'){
//          userFreq == midiToFreq(72)
//        playEnv1()
//     playEnv2()
//     playEnv3()
//          }
// }
//     function playEnv1() {
//   osc1.amp(0.5);
//   env1.setADSR(attackTime1/1000, decayTime1/1000, susPercent1/100, releaseTime1/1000);
//   env1.play();
// }
//     function playEnv2() {
//   osc2.amp(0.5);
//   env2.setADSR(attackTime2/1000, decayTime2/1000, susPercent2/100, releaseTime2/1000);
//   env2.play();
// }
//     function playEnv3() {
//   osc3.amp(0.5);
//   env3.setADSR(attackTime3/1000, decayTime3/1000, susPercent3/100, releaseTime3/1000);
//   env3.play();
// }
function keyPressed() {
  env1.play();
  env2.play();
  env3.play();
}

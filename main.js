x = 0;
y = 0;

draw_apple = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 

}

function setup() {
 
}

function draw() {
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}

// Variables to store canvas and image
let apple;
let speak_data = "";


function preload() {
    apple = loadImage('apple.png'); 
}

function setup() {
    let canvas = createCanvas(800, 400); 
}

function draw() {
    for (let i = 0; i < to_number; i++) {
        
        x = Math.random() * 700; 
        y = Math.random() * 400; 
        
        image(apple, x, y, 50, 50); /
    }

    
    speak_data = to_number + " Apples drawn";
    
    
    speak();
    noLoop();
}

function speak() {
    let synth = window.speechSynthesis;
    let utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}

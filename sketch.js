let animating = false;

//display random questions from this array
let question_library = ["What is your favorite drink?",
"What is your favorite cuisine?",
"What is your favorite dessert?",
"What is your favorite restaurant?",
"What is your favorite sports team/athlete?",
"What kinds of sports/physical activities do you practice?",
"What is your favorite season?",
"What kinds of weather do you like?",
"How is the weather in your area?",
"What was the best vacation you’ve had?",
"What is your favorite nature/amusement park?",
"Which kinds of museums do you like to visit?",
"Which musical instruments do you play?",
"What genres of music do you like?",
"What are your favorite singers/bands?",
"What holidays are celebrated within your culture?",
"What kinds of animals do you adore?",
"What is your favorite clothing/jewelry brand?",
"Which kinds of clothes/jewelry do you prefer wearing?",
"What is your favorite car brand?",
"What are your favorite stores of any kind?",
"What is/was your favorite toy?",
"What are your hobbies?",
"What are your favorite colors?"];

let index = -1;
let state = 'title';
let questions = [];
let numQuestions = 0;

let angle = 0; //let cube rotate

let g;

function setup() {
  createCanvas(windowWidth, 600);
  g = createGraphics(windowWidth, 600, WEBGL);
  pixelDensity(1);
}

function draw() {
   switch (state){
     case 'title':
        title();
        break;

     case 'play':
        showQuestion();
        break;

    default:
        break;
   }
}

function drawPixels() {
  //draw background with light blue and cyan pixels to resemble ice
  loadPixels();
  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
      let index = (i + j * width) * 4;
      pixels[index + 0] = 0; //no red used here
      pixels[index + 1] = i*0.125;  //add some green to create cyan
      pixels[index + 2] = j*0.75; //add blue for coolness
      pixels[index + 3] = j*0.5; //add transparency to make colors lighter
    }
  }
  updatePixels();
}

function title() {
  if (questions.length == 0) {
    for (let i=0; i<question_library.length; i++) {
       questions.push(question_library[i]);
    }
  }

  // push();
  // drawIceCube();
  // pop();

  // push();
  drawPixels();
  // pop();

  fill(0, 40, 180); //dark blue text to put over lighter blue background
  textAlign(CENTER);
  textSize(96);
  text("Ice Breaker", width*0.5, height*0.5);
  textSize(24);
  text("Click to begin new round", width*0.5, height*0.8);
}

// function drawIceCube() {
//   stroke(100, 240, 255);
//   fill(255); //white
//   translate(0, random(-height*0.5, height*0.5)); //let ice cube bounce vertically
//   angleMode(DEGREES);
//   rotateX(angle);
//   rotateY(angle * 0.5);
//   rotateZ(angle * 1.5);
//   rectMode(CENTER);
//   box(100);
//   angle += 0.1;
// }

function showQuestion(){
  drawPixels();
  textAlign(CENTER);
  textSize(36);
  console.log(`question: index=${index}, length = ${questions.length}`);
  // text(questions[index], width * 0.5, height * 0.5);
  text(questions[index], width * 0.5, height * 0.5);
}

function mousePressed(){
  console.log(`b4: index=${index}, length = ${questions.length}`);
  if (index >= 0){
    questions.splice(index, 1);
  }
  if (numQuestions >= 10){
    initTitle();
    console.log(`question_library=${question_library}`);
    return;
  }
  state = 'play';
  index = randomIndex = int(random(questions.length));
  numQuestions += 1;
  console.log(`after: index=${index}, length = ${questions.length}`);
}

function initTitle(){
  state = 'title';
  index = -1;
  numQuestions = 0;
}

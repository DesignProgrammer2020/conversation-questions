// let animating = false;

//display random questions from this array
let questions = ["What is your favorite drink?",
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

question index = 0;

function setup() {
  // background(0, 140, 255);
  createCanvas(windowWidth, 600);
  pixelDensity(1);
}

function draw() {

   switch (state) {
   case 'title':
     title();
     cnv.mouseClicked(titleMouseClicked);
     break;

   case 'shuffle':
     shuffle();
     // cnv.mouseClicked(shuffleMouseClicked);
     break;
  //
  //  default:
  //    break;
  // }
  //
  //   //background with multiple cool colors
  //   drawPixels();
  }

// //call back function for randomizer after button pressed
// function buttonPressed() {
//
//   //beginning scene
//   if (firstTime) {
//
//   //others
//     firstTime = false;
//   }

//   animating = true;
//   setTimeout(randomizer, 1000);
// }

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
  drawPixels();
  fill(0, 40, 180); //dark blue text to put over lighter blue background
  // drawIceCubes();
  textAlign(CENTER);
  textSize(96);
  text("Ice Breaker", width*0.5, height*0.5);
  textSize(24);
  text("Click screen to begin", width*0.5, height*0.8);
}

// function titleMouseClicked(){
//   state = shuffle;
// }

// function drawIceCubes(){
//
// }

function shuffle() {
  // animating = false;
  // for shuffling questions
  if (animating!) {
    clear();

    function drawPixels();

    // random visible colors for the display text
    fill(0, 40, 180); //dark blue text to put over lighter blue background
    noStroke();

    textAlign(CENTER);
    textSize(24);

    // question = random(questions);
    // text(`${question}`, width * 0.5, height * 0.5);
     text(questions[index], width * 0.5, height * 0.5);
    // questions.splice(randomIndex, 1);
    } else {
    animating();
    // end scene
    state = title;
  }
}

// function shuffleMouseClicked(){
//   state = title;
// }

function mousePressed(){
  index += 1;
  if (index == questions.length) {
    index = 0;
  }
}

//questions: What is your favorite drink? What is your favorite cuisine? What is your favorite dessert? What is your favorite restaurant? What is your favorite sports team/athlete?
// What kinds of sports/physical activities do you practice?
// What is your favorite season?
// What kinds of weather do you like?
// How is the weather in your area?
// What was the best vacation you’ve had?
// What is your favorite nature/amusement park?
// Which kinds of museums do you like to visit?
// Which musical instruments do you play?
// What genres of music do you like?
// What are your favorite singers/bands?
// What holidays are celebrated within your culture?
// What kinds of animals do you own or adore?
// What is your favorite clothing/jewelry brand?
// Which kinds of clothes/jewelry do you prefer wearing?
// What is your favorite car brand?
// What are your favorite stores of any kind?
// What is/was your favorite toy?
// What are your hobbies?
// What are your favorite colors and why?


function setup() {
  // background(0, 140, 255);
  createCanvas(800, 600);
}

function draw() {
  // text style for entire composition
  // textSize(28);

  // push();
  // if (firstTime) {
  // }
  // pop();

  // start animating after user presses randomizer button
  if (animating == true) {
    clear();

    // dark green background
    background(80, 180, 80);
  }

  if (final) {
    background(random(100, 255), random(100, 255), random(100, 255));
    textSize(28);
    //black text
    fill(0);
    text("", width * 0.25, height * 0.5);
    text("", width * 0.25, height * 0.6);
  }
}

function randomizer() {

//   animating = false;

//   //for randomizing questions
//   // if (ABC[0]) {

//   //   clear();

//   //   //dark blue background
//   //   background(0, 0, 180);

//   //   //random visible colors for the display text
//   //   fill(random(100, 240), random(100, 180), random(100, 240));
//   //   text(`ABC`, width * 0.15, height * 0.82);
//   //
//   // } else {
//     //end scene
//     final = true;
//   }
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
//
//   animating = true;
//   setTimeout(randomizer, 1000);
// }

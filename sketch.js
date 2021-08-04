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


function setup() {
  // background(0, 140, 255);
  createCanvas(windowWidth, 600);
  pixelDensity(1);
}

function draw() {
  // text style for entire composition
  textSize(28);

  //  switch (state) {
  //  case 'title':
  //    drawWelcomePage();
  //    title();
  //    cnv.mouseClicked(titleMouseClicked);
  //    break;
  //
  //  case 'level 1':
  //    level1();
  //    cnv.mouseClicked(level1MouseClicked);
  //    break;
  //
  //  case 'you win':
  //    youWin();
  //    cnv.mouseClicked(youWinMouseClicked);
  //    break;
  //
  //  case 'draw':
  //    drawDraw();
  //    break;
  //
  //  default:
  //    break;
  // }

    // dark green background
    // background(80, 180, 80);

    //background with multiple cool colors
    drawPixels();
  // }

  // if (final) {
  //   background(random(100, 255), random(100, 255), random(100, 255));
  //   // textSize(28);
  //   // //black text
  //   // fill(0);
  //   // text("", width * 0.25, height * 0.5);
  //   // text("", width * 0.25, height * 0.6);
  // }
}

// function randomizer() {
// animating = false;
// //for randomizing questions
// if (questions[0]) {
//   clear();
//   // //dark blue background
//   // background(0, 0, 180);
//
// //   //   //random visible colors for the display text
// //   //   fill(random(100, 240), random(100, 180), random(100, 240));
// text(`${questions}`, width * 0.5, height * 0.5);
// } else {
// //     //end scene
// final = true;
// }
// }

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

function setup() {

  background(0, 140, 255);

  createCanvas(800, 600);

  //click the button
  // buttonRandomizer = select("#randButton");
  // buttonRandomizer.mousePressed(buttonPressed);

  //"add more animals"
  // addMoreButton = select("#addMoreButton");
  // addMoreButton.mousePressed(addInput);

  // for (let i = 0; i < 3; i++) {
  //   // nameInputs.push(createInput());
  //   // nameInputs[i].parent("#inputFields");
  // }
}

// function draw() {
  //text style for entire composition
  // textSize(28);

  // push();
  //beginning scene with fishes in water
  // if (firstTime) {
  //   textSize(28);
  // }
  // pop();

  //start animating after user presses randomizer button
  // if (animating == true) {
  //   clear();
  //
  //   //dark blue background
  //   background(80, 180, 80);
  //
  //   //images of plastics
  //
  //
  //   // imageCounter %= plastics.length;
  //   //
  //   // image(plastics[imageCounter], width / 2, height / 2);
  //   // if (imageCounter < plastics.length - 1) {
  //   //   imageCounter++;
  //   // } else {
  //   //   imageCounter = 0;
  //   // }
  // }

  //start animating end scene with birds flying after all animals are displayed
  // if (final) {
  //   //medium/light colored bkg to contrast with black text
  //   background(random(100, 255), random(100, 255), random(100, 255));
  //   textSize(28);
  //   //black text
  //   fill(0);
  //   text("Don't litter!", width * 0.25, height * 0.5);
  //   text("Protect the animals.", width * 0.25, height * 0.6);
  // }
// }

// function randomizer() {
//
//   animating = false;
//
//   //for randomizing items from blanks and images
//   // if (animals[0]) {
//   //
//   //   clear();
//   //
//   //   //dark blue background
//   //   background(0, 0, 180);
//   //   randomIndexPlastics = int(random(plastics.length));
//   //
//   //
//   //   //random visible colors for the display text
//   //   fill(random(100, 240), random(100, 180), random(100, 240));
//   //   //add items from blanks to sentence
//   //   text(`ABC`, width * 0.15, height * 0.82);
//   //
//   // } else {
//     //end scene
//     final = true;
//   }
// }

// //call back function for randomizer after button pressed
// function buttonPressed() {
//
//   //beginning scene
//   if (firstTime) {
//     for (let i = 0; i < nameInputs.length; i++) {
//       animals.push(nameInputs[i].value());
//     }
//   //others
//     firstTime = false;
//   }
//
//   animating = true;
//   setTimeout(randomizer, 1000);
// }

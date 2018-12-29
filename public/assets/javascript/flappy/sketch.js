let bird;
let pipes = [];
let score = 0;
let maxScore = 0;
let isGameOver = false;

// maxScore Local Storage
if (localStorage.getItem === null) {
  maxScore = 0;
  localStorage.setItem('maxScore', 0);
} else {
  maxScore = parseInt(localStorage.getItem('maxScore'), 10);
}

function setup() {
  createCanvas(400, 600);
  bird = new Bird();
  pipes.push(new Pipe());
}

function draw() {
  background(0);
  bird.update();
  bird.show();

  if (frameCount % 100 === 0) {
    pipes.push(new Pipe());
  }

  for (let i = pipes.length-1; i >= 0; i--) {

    if (pipes[i].pass(bird)) {
      score++;
    }
  
    if (pipes[i].hits(bird)) {
      gameOver();
    } 
    
    pipes[i].update();
    pipes[i].show();

    if (pipes[i].offscreen()) {
      pipes.splice(i, 1);
    }

    showScores();

  }
}

function showScores() {
  textSize(15);
  text('score: ' + score, 320, 32);
  // Active maxScore update
  text('record: ' + max(score, maxScore), 315, 64);
}

function gameOver(){
  maxScore = max(score, maxScore);
  if (maxScore >= score) {
    localStorage.setItem('maxScore', maxScore);
  }
  isGameOver = true;
  noLoop();
}

function keyPressed() {
  if (key === ' ') {
    bird.up();
    if (isGameOver) {
        reset();
    }
  }
}

function reset(){
  isGameOver = false;
  pipes = [];
  score = 0;
  bird = new Bird();
  score = 0;
  loop();
}

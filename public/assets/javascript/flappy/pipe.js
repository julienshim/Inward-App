function Pipe() {

    var spacing = random(50, height / 3);
    var centerY = random(spacing, height-spacing);

    this.top = centerY - spacing / 2;
    this.bottom = height - (centerY + spacing / 2);
    this.x = width;
    this.w = 20;
    this.speed = 2;
    this.passed = false;

    this.highlight = false;

    this.hits = function(bird) {
        // Upper left is 0,0
        if(bird.y < this.top || bird.y > height - this.bottom) {
            if (bird.x > this.x && bird.x < this.x + this.w) {
                this.highlight = true;
                this.passed = true;
                noLoop();
                return true;
            }
        }
        this.highlight = false;
        return false;
    }

    this.pass = function(bird) {
        // Accounting + 20 for width of pipe, as a touched bird is +1
        if(bird.x > (this.x + 20) && !this.passed) {
            this.passed = true;
            return true;
        }
        return false;
    }

    this.show = function() {
        fill(255);
        if (this.highlight){
            fill(255, 0, 0);
        }
        rect(this.x, 0, this.w, this.top);
        rect(this.x, height-this.bottom, this.w, this.bottom);
    }

    this.update = function() {
        this.x -= this.speed;
    }

    this.offscreen = function() {
        if (this.x < -this.w) {
            return true;
        } else {
            return false;
        }
    }
}
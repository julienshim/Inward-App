function Bird() {
    // Bird Dimensions
    this.y = height/2;
    this.x = 64;

    // Physics
    this.gravity = 0.6;
    this.lift = -20;
    this.velocity = 0;

    // Show Bird
    this.show = function() {
        fill(22,177,181);
        ellipse(this.x, this.y, 32, 32);
    }

    // Upforce
    this.up = function() {
        this.velocity += this.lift;
        
    }

    // Physics
    this.update = function() {
        this.velocity += this.gravity;
        this.velocity *= 0.9;
        this.y += this.velocity;

        if (this.y > height) {
            this.y = height;
            this.velocity = 0;
        }
    }
}
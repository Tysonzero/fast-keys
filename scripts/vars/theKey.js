var theKey = {
  //integer representing the next letter to press
  key:Math.floor(Math.random()*25),
  
  //called whenever a letter is pressed
  keyPressed:function(tempKey) {
    //increases the score if correct key is pressed
    if (tempKey === this.key) {
      scoreboard.combo++;
      scoreboard.score += scoreboard.combo;
      scoreboard.combobroken = false;
    }
    else {
      //decreases score if incorrect key is pressed
      scoreboard.score--;
      
      if (scoreboard.combo > 0) {
        scoreboard.combo = 0;
        scoreboard.combobroken = true;
      }
    }
    
    //randomizes key
    this.key = Math.floor(Math.random()*25);
  },
  
  //logic
  update:function() {
    
  },
  
  //drawing to screen
  draw:function() {
    //draw the Key
    game.ctx.font="100px Arial";
    game.ctx.textAlign="center";
    game.ctx.fillStyle="#000000";
    game.ctx.fillText(String.fromCharCode(this.key + 65), 400, 340);
  },
}
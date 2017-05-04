import Player from './../objects/player';
import Platforms from './../objects/platform';
var player;
var platforms;
var cursors;
var music;
class Play extends Phaser.State {

  create() {
      //  We're going to be using physics, so enable the Arcade Physics system
      this.game.physics.startSystem(Phaser.Physics.ARCADE);

      music = this.game.add.audio('bg-music',1,true);
      music.play();
      //  A simple background for our game
      this.game.add.sprite(0, 0, 'sky');

      //  The platforms group contains the ground and the 2 ledges we can jump on
      platforms = new Platforms(this.game, undefined, 'platforms', true, true);

      // Here we create the ground.
      let ground = platforms.create(0, this.game.world.height - 64, 'ground');

      //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
      ground.scale.setTo(2, 2);

      //  This stops it from falling away when you jump on it
      ground.body.immovable = true;

      //  Now let's create two ledges
      let ledge = platforms.create(400, 400, 'ground');
      ledge.body.immovable = true;

      ledge = platforms.create(-150, 250, 'ground');
      ledge.body.immovable = true;

      // The player and its settings
      player = new Player(this.game, 32, this.game.world.height -150, 'dude');

      //  Our controls.
      cursors = this.game.input.keyboard.createCursorKeys();
  }

  update() {
      //  Collide the player and the stars with the platforms
      this.game.physics.arcade.collide(player, platforms);

      //  Reset the players velocity (movement)
      player.body.velocity.x = 0;

      if (cursors.left.isDown){
          //  Move to the left
          player.move('left');
      } else if (cursors.right.isDown){
          //  Move to the right
          player.move('right');
      } else {
          //  Stand still
         player.animations.stop();

         player.frame = 4;
      }

      //  Allow the player to jump if they are touching the ground.
      if (cursors.up.isDown && player.body.touching.down){
        player.move('up');
      }
  }
}

export default Play;

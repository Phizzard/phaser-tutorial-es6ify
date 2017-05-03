class Player extends Phaser.Sprite {
    constructor(game, x, y, key){
        super(game, x, y, key);

        this.game.physics.arcade.enable(this);

        //  Player physics properties. Give the little guy a slight bounce.
        this.body.bounce.y = 0;
        this.body.gravity.y = 2000;
        this.body.collideWorldBounds = true;

        //  Our two animations, walking left and right.
        this.animations.add('left', [0, 1, 2, 3], 10, true);
        this.animations.add('right', [5, 6, 7, 8], 10, true);

        this.game.stage.addChild(this);
    }

    move(direction){
        switch (direction){
            case 'up':
                // jump
                this.body.velocity.y = -800;
                break;
            case 'left':
                //  Move to the left
                this.body.velocity.x = -250;
                this.animations.play('left');
                break;
            case 'right':
                //  Move to the right
                this.body.velocity.x = 250;
                this.animations.play('right');
                break;
        }
    }
}

export default Player;

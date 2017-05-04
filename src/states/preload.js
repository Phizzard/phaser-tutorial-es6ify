class Preload extends Phaser.State {
  create() {
    this.game.load.onLoadStart.add(this.loadStart, this);
    this.game.load.onFileComplete.add(this.fileComplete, this);
    this.game.load.onLoadComplete.add(this.loadComplete, this);

    this.loadingText = this.game.add.text(32, 32, 'Loading...', {fill: '#fff'});

    // Load your assets here
    this.game.load.image('sky', 'assets/sprites/sky.png');
    this.game.load.image('ground', 'assets/sprites/platform.png');
    this.game.load.image('star', 'assets/sprites/star.png');
    this.game.load.spritesheet('dude', 'assets/spritesheets/dude.png', 32, 48);
    this.game.load.audio('bg-music', 'assets/sounds/Battle-of-the-Void-Loop.mp3');

    this.game.load.start();
  }

  loadStart() {
    this.loadingText.setText('Loading...');
  }

  fileComplete(progress) {
    this.loadingText.setText('Loading: ' + progress + '%');
  }

  loadComplete() {
    this.loadingText.setText('Load Complete');
    this.game.state.start('play');
  }
}

export default Preload;

import Phaser from "phaser";

class TestScene extends Phaser.Scene {
  constructor() {
    super("TestScene");
  }

  preload() {
    this.load.image("logo", "https://phaser.io/content/phaser3/logo.png");
  }

  create() {
    this.add.image(400, 300, "logo");
  }
}

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: TestScene
};

const game = new Phaser.Game(config);

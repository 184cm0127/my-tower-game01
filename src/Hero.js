import Phaser from 'phaser';

class Hero extends Phaser.Physics.Arcade.Sprite { // 改為繼承 Phaser.Physics.Arcade.Sprite
  constructor(scene, x, y) {
    super(scene, x, y, "hero");

    this.scene = scene;
    this.scene.add.existing(this);  // 將角色加入場景

    this.scene.physics.world.enable(this); // 啟用物理引擎

    this.setOrigin(0.5, 1); // 設定角色的原點位置，讓它站在地板上
  }

  moveTo(x, y) {
    this.scene.physics.moveTo(this, x, y, 200); // 使用物理引擎移動角色
  }
}

export default Hero;

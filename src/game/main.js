import Phaser from "phaser";

class TowerScene extends Phaser.Scene {
  constructor() {
    super({ key: "TowerScene" });
  }

  preload() {
    // 在這裡加載圖片或資源
  }

  create() {
    this.add.text(100, 100, "歡迎來到傲慢之塔!", { fontSize: "32px", fill: "#fff" });
  }
}

const gameConfig = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: TowerScene
};

export default gameConfig;

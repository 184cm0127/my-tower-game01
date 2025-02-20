import Phaser from 'phaser';

class MainScene extends Phaser.Scene {
  constructor() {
    super('MainScene'); // 場景名稱
  }

  preload() {
    // 預載入資源 (之後會加)
  }

  create() {
    // 顯示文字測試
    this.add.text(100, 100, '歡迎來到傲慢之塔！', { fontSize: '32px', fill: '#fff' });
  }
}

export default MainScene;

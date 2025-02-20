import Phaser from 'phaser';
import MainScene from './scenes/MainScene';

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: '#222',
  scene: [MainScene], // 加入主場景
};

const game = new Phaser.Game(config);

export default game;

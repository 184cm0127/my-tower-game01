import React, { useEffect } from "react";
import Phaser from "phaser";

const TestGame = () => {
  useEffect(() => {
    const config = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      scene: {
        preload: function () {
          this.load.image("logo", "https://phaser.io/content/phaser3/logo.png");
        },
        create: function () {
          this.add.image(400, 300, "logo");
        }
      }
    };

    const game = new Phaser.Game(config);

    return () => {
      game.destroy(true);
    };
  }, []);

  return <div id="game-container"></div>;
};

export default TestGame;

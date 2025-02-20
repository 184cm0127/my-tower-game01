import React, { useEffect, useRef } from "react";
import Phaser from "phaser";
import gameConfig from "../game/main";

const TowerGame = () => {
  const gameRef = useRef(null);

  useEffect(() => {
    if (!gameRef.current) {
      gameRef.current = new Phaser.Game(gameConfig);
    }
  }, []);

  return <div id="game-container"></div>;
};

export default TowerGame;

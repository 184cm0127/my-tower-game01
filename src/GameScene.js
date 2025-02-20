import React, { useContext, useEffect, useRef } from "react";
import { GameContext } from "./contexts/GameContext";

const GameScene = () => {
  const canvasRef = useRef(null);
  const { darkMode } = useContext(GameContext);

  // 初始化 Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // 設定 Canvas 尺寸
    canvas.width = 800;
    canvas.height = 600;

    // 繪製背景
    ctx.fillStyle = darkMode ? "#000" : "#fff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // 載入精靈圖（需替換為你的圖片路徑）
    const sprite = new Image();
    sprite.src = "/assets/sprites/hero.png";
    sprite.onload = () => {
      ctx.drawImage(sprite, 100, 100);
    };
  }, [darkMode]);

  return <canvas ref={canvasRef} className="game-canvas" />;
};

export default GameScene;
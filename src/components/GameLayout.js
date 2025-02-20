import React from "react";

const GameLayout = () => {
  return (
    <div className="game-container">
      {/* 最頂層 - 遊戲 LOGO */}
      <div className="top-bar">LOGO (未來放置)</div>

      {/* 中間層 - 三欄 */}
      <div className="middle-section">
        <div className="left-panel">背包 / 標籤切換</div>
        <div className="game-canvas">Phaser 遊戲畫布</div>
        <div className="right-panel">右邊用途未定</div>
      </div>

      {/* 最底層 - 玩家資訊 + 聊天視窗 + 設定按鈕 */}
      <div className="bottom-section">
        <div className="player-info">玩家資訊 (ID、領地等級)</div>
        <div className="chat-window">戰鬥訊息 / 聊天視窗</div>
        <div className="settings-panel">按鈕區 (設定等)</div>
      </div>
    </div>
  );
};

export default GameLayout;

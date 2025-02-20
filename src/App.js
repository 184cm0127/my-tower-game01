import React, { useContext } from "react";
import { GameProvider, GameContext } from "./contexts/GameContext";
import GameScene from "./GameScene";
import TeamStatus from "./components/UI/TeamStatus/TeamStatus";
import Inventory from "./components/UI/Inventory/Inventory";
import Button from "./components/UI/Button/Button";
import "./App.css";

const AppWrapper = () => (
  <GameProvider>
    <App />
  </GameProvider>
);

const App = () => {
  const { darkMode, setDarkMode, inventoryVisible, setInventoryVisible } = useContext(GameContext);

  // 切換黑暗模式
  const toggleDarkMode = () => setDarkMode(!darkMode);

  // 切換背包
  const toggleInventory = () => setInventoryVisible(!inventoryVisible);

  return (
    <div className={`app-container ${darkMode ? "dark-mode" : ""}`}>
      {/* 頂部標題欄 */}
      <header className="header">
        <Button
          onClick={toggleDarkMode}
          label={darkMode ? "☀️" : "🌙"}
          className="dark-mode-toggle"
        />
        <h1>傲慢之塔</h1>
      </header>

      {/* 遊戲主畫面 */}
      <main className="main-content">
        <GameScene />
        <TeamStatus />
        {inventoryVisible && <Inventory />}
      </main>

      {/* 底部資訊欄 */}
      <footer className="footer">
        <p>當前樓層：第 1 層</p>
        <Button
          onClick={toggleInventory}
          label={inventoryVisible ? "❌" : "🎒"}
          className="inventory-toggle"
        />
      </footer>
    </div>
  );
};

export default AppWrapper;
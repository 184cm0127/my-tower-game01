import React, { createContext, useState } from "react";

const GameContext = createContext();

const GameProvider = ({ children }) => {
  // 黑暗模式
  const [darkMode, setDarkMode] = useState(true);
  
  // 背包狀態
  const [inventoryVisible, setInventoryVisible] = useState(false);
  const [inventoryItems, setInventoryItems] = useState([
    { id: 1, name: "藥水", quantity: 3 },
    { id: 2, name: "鐵劍", quantity: 1 },
  ]);

  // 隊伍狀態
  const [teamMembers, setTeamMembers] = useState([
    { id: 1, name: "英雄", hp: 100, maxHp: 100, level: 1 },
    { id: 2, name: "法師", hp: 80, maxHp: 80, level: 1 },
  ]);

  // 遊戲進度（塔層）
  const [currentFloor, setCurrentFloor] = useState(1);

  return (
    <GameContext.Provider
      value={{
        darkMode,
        setDarkMode,
        inventoryVisible,
        setInventoryVisible,
        inventoryItems,
        setInventoryItems,
        teamMembers,
        setTeamMembers,
        currentFloor,
        setCurrentFloor,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export { GameContext, GameProvider };
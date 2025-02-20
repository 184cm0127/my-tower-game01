import React, { useContext, useCallback } from "react";
import { GameContext } from "../../contexts/GameContext";
import "./Inventory.css";

const Inventory = () => {
  const { inventoryItems, setInventoryItems } = useContext(GameContext);

  const handleUseItem = useCallback((itemId) => {
    setInventoryItems(prevItems =>
      prevItems
        .map(item => {
          if (item.id === itemId) {
            const newQuantity = item.quantity - 1;
            return newQuantity > 0 
              ? { ...item, quantity: newQuantity }
              : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  }, [setInventoryItems]);

  return (
    <div className="inventory-panel">
      <h3>🎒 背包</h3>
      <div className="inventory-grid">
        {inventoryItems.map(item => (
          <div 
            key={item.id} 
            className="inventory-item"
            onClick={() => handleUseItem(item.id)} // 這裡呼叫改名後的函式
          >
            <div className="item-icon">🛡️</div>
            <div className="item-info">
              <span>{item.name}</span>
              <span>x{item.quantity}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Inventory;

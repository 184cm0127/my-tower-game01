export const loadMap = async (mapId) => {
    try {
      const response = await fetch(`/assets/maps/floor${mapId}.json`);
      const mapData = await response.json();
      return mapData;
    } catch (error) {
      console.error("地圖載入失敗:", error);
      return null;
    }
  };
  
  // 地圖碰撞檢測
  export const checkCollision = (map, x, y) => {
    if (!map) return false;
    const tileSize = map.tilewidth;
    const tileX = Math.floor(x / tileSize);
    const tileY = Math.floor(y / tileSize);
    
    // 檢查碰撞層（假設碰撞層名為 "collision"）
    const collisionLayer = map.layers.find(l => l.name === "collision");
    if (!collisionLayer) return false;
    
    return collisionLayer.data[tileY * map.width + tileX] !== 0;
  };
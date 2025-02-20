import React, { useContext, useEffect } from "react";
import { GameContext } from "../../contexts/GameContext";

const BattleSystem = () => {
  const { inCombat, currentEnemy, teamMembers, setTeamMembers } = useContext(GameContext);

  // 戰鬥循環
  useEffect(() => {
    if (!inCombat || !currentEnemy) return;

    const combatInterval = setInterval(() => {
      // 隊伍成員攻擊
      setTeamMembers(prev => prev.map(member => ({
        ...member,
        hp: Math.max(0, member.hp - Math.floor(Math.random() * 5))
      })));

      // 敵人攻擊
      if (currentEnemy.hp > 0) {
        currentEnemy.hp -= Math.floor(Math.random() * 8);
      }

    }, 1000);

    return () => clearInterval(combatInterval);
  }, [inCombat, currentEnemy]);

  if (!inCombat || !currentEnemy) return null;

  return (
    <div className="battle-overlay">
      <div className="enemy-status">
        <h3>🦇 {currentEnemy.name}</h3>
        <div className="health-bar">
          <div 
            className="health-fill"
            style={{ width: `${(currentEnemy.hp / currentEnemy.maxHp) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default BattleSystem;
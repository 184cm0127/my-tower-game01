import React, { useContext } from "react";
import { GameContext } from "../../../contexts/GameContext";
import "./TeamStatus.css";

const TeamStatus = () => {
  const { teamMembers } = useContext(GameContext);

  return (
    <div className="team-status">
      <h3>👥 隊伍狀態</h3>
      {teamMembers.map(member => (
        <div key={member.id} className="member-card">
          <div className="member-header">
            <span className="member-name">{member.name}</span>
            <span>Lv.{member.level}</span>
          </div>
          <div className="health-bar">
            <div 
              className="health-fill"
              style={{ width: `${(member.hp / member.maxHp) * 100}%` }}
            />
            <span className="health-text">{member.hp}/{member.maxHp} HP</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamStatus;
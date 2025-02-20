import React, { useContext } from "react";
import { GameContext } from "../../contexts/GameContext"; // 加上大括號！
import "./TeamStatus.css";

const TeamStatus = () => {
  const { teamMembers } = useContext(GameContext);

  return (
    <div className="team-status">
      <h3>隊伍狀態</h3>
      {teamMembers.map(member => (
        <div key={member.id} className="team-member">
          <span>{member.name}</span> - <span>HP: {member.hp}</span>
        </div>
      ))}
    </div>
  );
};

export default TeamStatus;

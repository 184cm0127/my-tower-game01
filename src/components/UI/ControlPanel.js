import React from "react";

const ControlPanel = ({ currentScene, onChangeScene }) => {
  const renderControls = () => {
    switch (currentScene) {
      case "battle":
        return (
          <div>
            <button onClick={() => console.log("攻擊策略")}>攻擊策略</button>
            <button onClick={() => console.log("治療策略")}>治療策略</button>
          </div>
        );
      case "home":
        return (
          <div>
            <button onClick={() => console.log("隊伍管理")}>隊伍管理</button>
            <button onClick={() => console.log("裝備更換")}>裝備更換</button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <h3>指令台</h3>
      {renderControls()}
    </div>
  );
};

export default ControlPanel;

// 敵人狀態機
export class EnemyStateMachine {
    constructor(enemy, player) {
      this.enemy = enemy;
      this.player = player;
      this.currentState = "PATROL";
    }
  
    update() {
      switch (this.currentState) {
        case "PATROL":
          this.patrol();
          break;
        case "CHASE":
          this.chase();
          break;
        case "ATTACK":
          this.attack();
          break;
      }
    }
  
    patrol() {
      // 簡單巡邏邏輯
      this.enemy.x += Math.cos(Date.now() * 0.002) * 0.5;
      this.enemy.y += Math.sin(Date.now() * 0.002) * 0.5;
  
      if (this.distanceToPlayer() < 150) {
        this.currentState = "CHASE";
      }
    }
  
    chase() {
      // 計算朝向玩家的方向
      const dx = this.player.x - this.enemy.x;
      const dy = this.player.y - this.enemy.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance > 200) {
        this.currentState = "PATROL";
        return;
      }
  
      if (distance < 30) {
        this.currentState = "ATTACK";
        return;
      }
  
      this.enemy.x += (dx / distance) * this.enemy.speed;
      this.enemy.y += (dy / distance) * this.enemy.speed;
    }
  
    attack() {
      // 觸發戰鬥系統
      if (this.distanceToPlayer() > 40) {
        this.currentState = "CHASE";
      }
    }
  
    distanceToPlayer() {
      const dx = this.player.x - this.enemy.x;
      const dy = this.player.y - this.enemy.y;
      return Math.sqrt(dx * dx + dy * dy);
    }
  }
import { EEnemyStat } from "src/enums/e-enemy-stat";
import { ETargetType } from "src/enums/e-target-type";

export class CEnemyDebuff {
  target: ETargetType = ETargetType.target;
  enemyStat: EEnemyStat = EEnemyStat.defShred;
  change: number = 0;
}

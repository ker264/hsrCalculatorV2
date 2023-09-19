import { CAbilityNumber } from "./c-ability-number";
import { CEnemyDebuff } from "./c-enemy-debuff";
import { CStatChange } from "./c-stat-change";

export class CAbilityResult {
  statChange: CStatChange[] = [];
  enemyDenuff: CEnemyDebuff[] = [];
  abilityNumbers: CAbilityNumber[] = [];
}

import { EEffectorsNames } from "src/enums/e-effectors-names";

export class CStatChange {
  statName: EEffectorsNames = EEffectorsNames.atk;
  changeValue: number = 0;
  isOnlyForThisMove: boolean = false;

  constructor();
  constructor(data: CStatChange);
  constructor(data?: CStatChange) {
    if (data) {
      this.statName = data.statName;
      this.changeValue = data.changeValue;
      this.isOnlyForThisMove = data.isOnlyForThisMove;
    }
  }
}

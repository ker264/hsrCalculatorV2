import { EEffectorsNames } from "src/enums/e-effectors-names";

export class CStatChange {
  statName: EEffectorsNames = EEffectorsNames.atk;
  changeValue: number = 0;
  isOnlyForThisMove: boolean = true;
}

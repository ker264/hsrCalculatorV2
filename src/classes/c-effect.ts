import { EEffectorsNames } from "src/enums/e-effectors-names";
import { ClStacks } from "./cl-stacks";

export class CEffect {
  isActive: boolean = true;
  statChangeDescription: EEffectorsNames = EEffectorsNames.atk;
  statChangeValue: number = 0;
  statChangeStacks: ClStacks = new ClStacks();
}

import { EEffectorsNames } from "src/enums/e-effectors-names";
import { CStat } from "./c-stat";
import { ESetNames } from "./e-set-names";

export class CRelic {
  mainStat: CStat = new CStat();
  possibleMainStat: EEffectorsNames[] = [];
  subStats: CStat[] = [];
  set: ESetNames = ESetNames.placeholder;
}

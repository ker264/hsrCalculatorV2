import { CStatsCalculator } from "src/classes/c-visible-stats";
import { ECondition } from "src/enums/e-condition";

export interface IConditionalEffect {
  condition: ECondition;
  effect: (allcharStats: CStatsCalculator) => void;
}

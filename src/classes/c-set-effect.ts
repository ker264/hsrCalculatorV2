import { CStatChange } from "./c-stat-change";

export class CSetEffect {
  statChange!: CStatChange;
  isConditional: boolean = false;
  conditionalEffect = () => {};
}

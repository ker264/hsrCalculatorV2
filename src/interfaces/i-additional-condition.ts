import { EAdditionalConditionTypes } from "src/enums/e-additional-condition-types";

export interface IAdditionalCondition {
  type: EAdditionalConditionTypes;
  description: string;
  minValue?: number;
  maxValue?: number;
}

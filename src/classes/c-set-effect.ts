import { IAdditionalCondition } from "src/interfaces/i-additional-condition";
import { IConditionalEffect } from "src/interfaces/i-conditional-effect";
import { CStatChange } from "./c-stat-change";

export class CSetEffect {
  description: string = "";
  unconditionalEffects?: CStatChange[];
  conditionalEffects?: IConditionalEffect[];
  additionalNumbers?: IAdditionalCondition[];

  constructor();
  constructor(data: CSetEffect);
  constructor(data?: CSetEffect) {
    if (data) {
      this.unconditionalEffects = data.unconditionalEffects;
      this.conditionalEffects = data.conditionalEffects;
      this.description = data.description;
      this.additionalNumbers = data.additionalNumbers;
    }
  }
}

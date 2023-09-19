import { CAbilityResult } from "./c-ability-result";
import { CAdditionalInfo } from "./c-additional-info";

export class CAbility {
  description = (): string => {
    let desc = "";
    return desc;
  };
  lvl: number = 10;
  abilityEffect = (): CAbilityResult[] => {
    let result: CAbilityResult[] = [];

    return result;
  };
  additionalInfo: CAdditionalInfo[] = [];
  values: number[][] = [];
  isActivatable: boolean = false;
  isActive: boolean = true;
}

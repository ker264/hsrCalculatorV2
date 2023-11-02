import { CAdditionalInfo } from "./c-additional-info";

export class CSupportAbility {
  description: string = "";
  isActive: boolean = true;
  additionalValues: CAdditionalInfo[] = [];
  effect = () => {};
  lvl: number = 10;
  mainValies: any[] = [];
}

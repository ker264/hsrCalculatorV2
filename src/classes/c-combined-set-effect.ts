import { ESetNames } from "src/enums/e-set-names";
import { ISavedSetEffect } from "src/interfaces/i-saved-set-effect";
import { CSetEffect } from "./c-set-effect";

export class CCombinedSetEffect {
  firstNormalEffect: ISavedSetEffect;
  secondNormalEffect: ISavedSetEffect;
  planarEffect: ISavedSetEffect;

  constructor();
  constructor(data: CCombinedSetEffect);
  constructor(data?: CCombinedSetEffect) {
    if (data) {
      this.firstNormalEffect = data.firstNormalEffect;
      this.secondNormalEffect = data.secondNormalEffect;
      this.planarEffect = data.planarEffect;
    } else {
      this.firstNormalEffect = { setname: ESetNames.placeholder, effect: new CSetEffect() };
      this.secondNormalEffect = { setname: ESetNames.placeholder, effect: new CSetEffect() };
      this.planarEffect = { setname: ESetNames.placeholder, effect: new CSetEffect() };
    }
  }
}

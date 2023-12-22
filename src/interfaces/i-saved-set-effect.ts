import { CSetEffect } from "src/classes/c-set-effect";
import { ESetNames } from "src/enums/e-set-names";

export interface ISavedSetEffect {
  setname: ESetNames;
  effect: CSetEffect;
}

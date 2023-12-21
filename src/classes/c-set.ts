import { CSetEffect } from "src/classes/c-set-effect";
import { ESetNames } from "src/enums/e-set-names";
import { ESetTypes } from "src/enums/e-set-types";

export class CSet {
  name: ESetNames;
  type: ESetTypes;
  twoPieceEffects: CSetEffect;
  fourPieceEffects: CSetEffect;

  constructor();
  constructor(data: CSet);
  constructor(data?: CSet) {
    if (!data) {
      this.name = ESetNames.placeholder;
      this.type = ESetTypes.common;
      this.twoPieceEffects = new CSetEffect();
      this.fourPieceEffects = new CSetEffect();
      return;
    }

    this.name = data.name;
    this.type = data.type;
    this.twoPieceEffects = data.twoPieceEffects;
    this.fourPieceEffects = data.fourPieceEffects;
  }
}

import { CSetEffect } from "src/classes/c-set-effect";
import { ESetNames } from "src/enums/e-set-names";

export class CSet {
  name: ESetNames = ESetNames.placeholder;
  twoPieceEffects: CSetEffect[] = [];
  fourPieceEffects: CSetEffect[] = [];
}

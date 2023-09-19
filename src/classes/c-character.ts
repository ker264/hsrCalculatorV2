import { EElement } from "src/enums/e-element";
import { EPath } from "src/enums/e-path";
import { ERarity } from "src/enums/e-rarity";
import { CAbility } from "./c-ability";
import { CLightcone } from "./c-lightcone";
import { CRelic } from "./c-relic";
import { CRelicSet } from "./c-relic-set";
import { CSetEffect } from "./c-set-effect";
import { CSupportAbility } from "./c-support-ability";
import { CTrace } from "./c-trace";

export class CCharacter {
  name: string = "";
  rarity: ERarity = ERarity.star4;
  path: EPath = EPath.abundance;
  element: EElement = EElement.physical;
  atk: number = 0;
  hp: number = 0;
  def: number = 0;
  spd: number = 0;
  lightcone: CLightcone = new CLightcone();
  traces: CTrace[] = [];
  basic: CAbility = new CAbility();
  skill: CAbility = new CAbility();
  ult: CAbility = new CAbility();
  talent: CAbility = new CAbility();
  relicSet: CRelicSet = new CRelicSet();
  supportAbilities: CSupportAbility[] = [];
  setEffects: CSetEffect[] = [];
}

import { EPath } from "src/enums/e-path";
import { ERarity } from "src/enums/e-rarity";
import { CEffect } from "./c-effect";

export class CLightcone {
  name: string = "";
  description: string = "";
  path: EPath = EPath.abundance;
  rarity: ERarity = ERarity.star4;
  atk: number = 0;
  hp: number = 0;
  def: number = 0;
  refinment: number = 0;
  effects: CEffect[] = [];
  pictureUrl: string = "";
}

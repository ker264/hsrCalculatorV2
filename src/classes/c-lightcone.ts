import { ELcNames } from "src/enums/e-lc-names";
import { EPath } from "src/enums/e-path";
import { ERarity } from "src/enums/e-rarity";
import { CEffect } from "./c-effect";

export class CLightcone {
  name: string = ELcNames.notChosen;
  description = function (): string {
    return "no description";
  };
  path: EPath = EPath.abundance;
  rarity: ERarity = ERarity.star4;
  atk: number = 0;
  hp: number = 0;
  def: number = 0;
  refinment: number = 1;
  numbers: number[][] = [];
  effects: CEffect[] = [];
  pictureUrl: string = "assets/lightcones/Nothing.png";
  isSupportable: boolean = false;

  getNum(num: number) {
    return this.numbers[num][this.refinment - 1];
  }

  constructor(params?: {
    name: string;
    path: EPath;
    rarity: ERarity;
    hp: number;
    atk: number;
    def: number;
    isSupportable: boolean;
    numbers: number[][];
    description: () => string;
  }) {
    if (!params) return;

    this.name = params.name;
    this.path = params.path;
    this.rarity = params.rarity;
    this.hp = params.hp;
    this.atk = params.atk;
    this.def = params.def;
    this.isSupportable = params.isSupportable;
    this.numbers = params.numbers;
    this.pictureUrl = `assets/lightcones/${params.name}.webp`;
    this.description = params.description;
  }
}

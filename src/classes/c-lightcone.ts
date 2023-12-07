import { ECondition } from "src/enums/e-condition";
import { ELcNames } from "src/enums/e-lc-names";
import { EPath } from "src/enums/e-path";
import { ERarity } from "src/enums/e-rarity";
import { IBaseStat } from "src/interfaces/i-base-stats-combined";
import { IConditionalEffect } from "src/interfaces/i-conditional-effect";
import { CAdditionalInfo } from "./c-additional-info";
import { CStatsCalculator } from "./c-visible-stats";

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
  effects: CAdditionalInfo[] = [];
  pictureUrl: string = "assets/lightcones/Nothing.png";
  isSupportable: boolean = false;
  unconditionalEffects: IBaseStat[] = [];
  conditionalEffects: IConditionalEffect[] = [];

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
    unconditionalEffects?: IBaseStat[];
    conditionalEffects?: IConditionalEffect[];
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

    if (params.unconditionalEffects) this.unconditionalEffects = params.unconditionalEffects;
    if (params.conditionalEffects) this.conditionalEffects = params.conditionalEffects;
  }
}

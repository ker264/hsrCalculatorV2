import { EEffectorsNames } from "src/enums/e-effectors-names";
import { IBaseStat } from "src/interfaces/i-base-stats-combined";

export class CBaseStatsCombined {
  stats: IBaseStat[] = [];

  nulifyStats() {
    this.stats.forEach((element) => {
      element.value = 0;
    });
  }

  setStatByName(name: string, value: number) {
    this.stats.find((item) => item.name == name)!.value = value;
  }

  getStatByName(name: string) {
    return this.stats.find((item) => item.name == name)!.value;
  }

  calcBaseStatsBySum(base1: CBaseStatsCombined, base2: CBaseStatsCombined) {
    for (let i = 0; i < this.stats.length; i++) {
      this.stats[i].value = base1.stats[i].value + base2.stats[i].value;
    }
  }

  getVisibleStats() {
    // Выбираем важные для отображения параметры
    return this.stats.filter((item, index) => index < 8);
  }

  addStatByName(name: string, value: number) {
    this.stats.find((item) => item.name == name)!.value += value;
  }

  constructor() {
    for (let effector in EEffectorsNames) {
      this.stats.push({ name: <EEffectorsNames>effector, value: 0 });
    }
  }
}

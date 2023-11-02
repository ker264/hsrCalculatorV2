import { EPossibleSubStats } from "src/enums/e-possible-sub-stats";
import { CCharacter } from "./c-character";

export class CVisibleStats {
  stats: { name: string; value: number }[] = [
    { name: EPossibleSubStats.hp, value: 0 },
    { name: EPossibleSubStats.atk, value: 0 },
    { name: EPossibleSubStats.def, value: 0 },
    { name: EPossibleSubStats.spd, value: 0 },
    { name: EPossibleSubStats.critRate, value: 5 },
    { name: EPossibleSubStats.critDmg, value: 50 },
    { name: EPossibleSubStats.effectHitRate, value: 0 },
  ];

  constructor() {}

  nulifyStats() {
    this.stats.forEach((element) => {
      element.value = 0;
    });
    this.setStatByName(EPossibleSubStats.critRate, 5);
    this.setStatByName(EPossibleSubStats.critDmg, 50);
  }

  setStatsFromCharacter(char: CCharacter) {
    this.nulifyStats();
    this.setStatByName(EPossibleSubStats.atk, char.atk);
    this.setStatByName(EPossibleSubStats.def, char.def);
    this.setStatByName(EPossibleSubStats.hp, char.hp);
    this.setStatByName(EPossibleSubStats.spd, char.spd);
  }

  private setStatByName(name: string, value: number) {
    this.stats.find((item) => item.name == name)!.value = value;
  }
}

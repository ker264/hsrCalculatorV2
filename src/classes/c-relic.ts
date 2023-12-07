import { CStat } from "./c-stat";
import { EPossibleRelicStats } from "src/enums/e-possible-relic-stats";

export class CRelic {
  mainStat: EPossibleRelicStats;
  possibleMainStat: EPossibleRelicStats[] = [];
  subStats: CStat[] = [];  

  constructor(...stats: EPossibleRelicStats[]) {
    this.possibleMainStat.push(...stats);

    this.mainStat = this.possibleMainStat[0];

    // TODO Заменить имена на картинки, а имена перевести в подпись, поменять CStat
    for (let statName in EPossibleRelicStats) {
      this.subStats.push({ name: <EPossibleRelicStats>statName, value: 0 });
    }
  }

  setStatByName(name: EPossibleRelicStats, value: number) {
    this.subStats.find((item) => item.name == name)!.value = value;
  }

  //TODO расставить статы для реликов, их максимальные значения и тд
}

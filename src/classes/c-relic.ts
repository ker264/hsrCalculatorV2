import { CStat } from "./c-stat";
import { EPossibleRelicStats } from "src/enums/e-possible-relic-stats";
import { ERelicParts } from "src/enums/e-relic-parts";

export class CRelic {
  setPart: ERelicParts | string = "";
  mainStat: EPossibleRelicStats;
  possibleMainStat: EPossibleRelicStats[] = [];
  subStats: CStat[] = [];
  isErrorsInSubStats: boolean = false;
  relicImgSrc: string = "";

  constructor(opt: { serialisedData?: CRelic; stats?: EPossibleRelicStats[] }) {
    // Инициализация
    if (opt.stats) {
      this.possibleMainStat.push(...opt.stats);

      this.mainStat = this.possibleMainStat[this.possibleMainStat.length - 1];

      for (let statName in EPossibleRelicStats) {
        let imgPath: string = "";
        switch (statName) {
          case EPossibleRelicStats.atk:
          case EPossibleRelicStats.atkPercentage:
            imgPath = "assets/stats/IconAttack.png";
            break;

          case EPossibleRelicStats.hp:
          case EPossibleRelicStats.hpPercentage:
            imgPath = "assets/stats/IconMaxHP.png";
            break;

          case EPossibleRelicStats.def:
          case EPossibleRelicStats.defPercentage:
            imgPath = "assets/stats/IconDefence.png";
            break;

          case EPossibleRelicStats.spd:
            imgPath = "assets/stats/IconSpeed.png";
            break;

          case EPossibleRelicStats.critRate:
            imgPath = "assets/stats/IconCriticalChance.png";
            break;

          case EPossibleRelicStats.critDmg:
            imgPath = "assets/stats/IconCriticalDamage.png";
            break;

          case EPossibleRelicStats.effectHitRate:
            imgPath = "assets/stats/IconStatusProbability.png";
            break;

          case EPossibleRelicStats.effectResistance:
            imgPath = "assets/stats/IconStatusResistance.png";
            break;

          case EPossibleRelicStats.breakEffect:
            imgPath = "assets/stats/IconBreakUp.png";
            break;

          case EPossibleRelicStats.dmgBoostAll:
            imgPath = "assets/stats/IconQuantumAddedRatio.png";
            break;

          case EPossibleRelicStats.energyRegenerationRate:
            imgPath = "assets/stats/IconEnergyRechargeRate.png";
            break;

          case EPossibleRelicStats.outgoingHealingBoost:
            imgPath = "assets/stats/IconHealingBonus.png";
            break;

          default:
            break;
        }

        this.subStats.push({ name: <EPossibleRelicStats>statName, value: 0, img: imgPath });
      }
      return;
    }

    // Чтение из памяти
    if (opt.serialisedData) {
      this.setPart = opt.serialisedData.setPart;
      this.mainStat = opt.serialisedData.mainStat;
      this.possibleMainStat = opt.serialisedData.possibleMainStat;
      this.subStats = opt.serialisedData.subStats;
      this.isErrorsInSubStats = opt.serialisedData.isErrorsInSubStats;
      this.relicImgSrc = opt.serialisedData.relicImgSrc;
      return;
    }

    this.mainStat = this.possibleMainStat[0];
  }

  setStatByName(name: EPossibleRelicStats, value: number) {
    this.subStats.find((item) => item.name == name)!.value = value;
  }

  //TODO расставить статы для реликов, их максимальные значения и тд
}

import { ECondition } from "src/enums/e-condition";
import { EEffectorType } from "src/enums/e-effector-type";
import { EEffectorsNames } from "src/enums/e-effectors-names";
import { IConditionalEffect } from "src/interfaces/i-conditional-effect";
import { IVisibleStats } from "src/interfaces/i-visible-stats";
import { CBaseStatsCombined } from "./c-base-stats-combined";
import { CCharacter } from "./c-character";
import { CEffectorsAndValues } from "./c-effectors-and-values";
import { CLightcone } from "./c-lightcone";

export class CStatsCalculator {
  // Базовые статы
  baseStats: CBaseStatsCombined = new CBaseStatsCombined();
  charBase: CBaseStatsCombined = new CBaseStatsCombined();
  weaponBase: CBaseStatsCombined = new CBaseStatsCombined();

  // Дополнительные статы
  additionalStats: CBaseStatsCombined = new CBaseStatsCombined();

  // Суммарные статы
  sumStats: CBaseStatsCombined = new CBaseStatsCombined();
  // conditionalStats: CBaseStatsCombined = new CBaseStatsCombined();

  allEffectors: CEffectorsAndValues = new CEffectorsAndValues();

  currentLC: CLightcone = new CLightcone();

  conditionalEffects: IConditionalEffect[] = [];

  constructor() {}

  setStatsFromCharacter(char: CCharacter) {
    this.charBase.nulifyStats();

    // Базовые статы
    this.charBase.setStatByName(EEffectorsNames.atk, char.atk);
    this.charBase.setStatByName(EEffectorsNames.def, char.def);
    this.charBase.setStatByName(EEffectorsNames.hp, char.hp);
    this.charBase.setStatByName(EEffectorsNames.spd, char.spd);
    this.charBase.setStatByName(EEffectorsNames.critRate, 5);
    this.charBase.setStatByName(EEffectorsNames.critDmg, 50);

    // Статы от трейсов
    this.allEffectors.nulifyTypeEffector(EEffectorType.traceEffectors);
    for (let effect of char.traces) {
      this.allEffectors.addStatByNameToType(EEffectorType.traceEffectors, effect.statChangeDescription, effect.statChangeValue);
    }

    // Пересчитываем статы
    this.recalculateStats();
  }

  setStatsFromLC(lc: CLightcone) {
    this.weaponBase.nulifyStats();

    // Базовые статы
    this.weaponBase.setStatByName(EEffectorsNames.atk, lc.atk);
    this.weaponBase.setStatByName(EEffectorsNames.def, lc.def);
    this.weaponBase.setStatByName(EEffectorsNames.hp, lc.hp);

    // Безусловные эффекты
    this.allEffectors.nulifyTypeEffector(EEffectorType.lcEffectors);
    for (let effect of lc.unconditionalEffects) {
      this.allEffectors.addStatByNameToType(EEffectorType.lcEffectors, effect.name, lc.numbers[effect.value][lc.refinment - 1]);
    }

    // Копируем данные конуса
    this.currentLC = lc;
    this.conditionalEffects.push(...this.currentLC.conditionalEffects);

    // Пересчитываем статы
    this.recalculateStats();
  }

  recalculateStats() {
    this.baseStats.nulifyStats();
    this.additionalStats.nulifyStats();

    // Считаем сумму базовых стат от персонажа и оружие
    this.baseStats.calcBaseStatsBySum(this.charBase, this.weaponBase);

    // Расчет дополнительных стат
    this.calculateAdditionalStats();

    // Считаем сумму стат от базовых + увеличение
    this.sumStats.calcBaseStatsBySum(this.baseStats, this.additionalStats);
  }

  private calculateAdditionalStats() {
    this.allEffectors.calculateSumEffector().effector.forEach((effectorItem) => {
      if (effectorItem.name.match(/Percentage/)) {
        // Процентное увеличение
        let shortName = effectorItem.name.slice(0, -"Percentage".length);
        this.additionalStats.addStatByName(shortName, (this.baseStats.getStatByName(shortName) * effectorItem.value) / 100);
      } else {
        // Флатовое увеличение
        this.additionalStats.addStatByName(effectorItem.name, effectorItem.value);
      }
    });
  }

  /**
   * Получить iVisibleStats для отображения на экранее
   */
  getVisibleStats(): IVisibleStats[] {
    let visibleStasts: IVisibleStats[] = [];
    let baseVisible = this.baseStats.getVisibleStats();
    let additionalVisible = this.additionalStats.getVisibleStats();
    let sumVisible = this.sumStats.getVisibleStats();

    for (let i = 0; i < baseVisible.length; i++) {
      visibleStasts.push({
        name: baseVisible[i].name,
        base: baseVisible[i].value,
        additional: additionalVisible[i].value,
        sum: sumVisible[i].value,
      });
    }
    return visibleStasts;
  }

  static getPlaceholderStats() {
    let visibleStasts: IVisibleStats[] = [];
    let tmpStats = new CBaseStatsCombined().getVisibleStats();
    for (let i = 0; i < tmpStats.length; i++) {
      visibleStasts.push({
        name: tmpStats[i].name,
        base: 0,
        additional: 0,
        sum: 0,
      });
    }
    return visibleStasts;
  }
}

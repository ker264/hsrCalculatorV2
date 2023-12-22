import { ECondition } from "src/enums/e-condition";
import { EEffectorType } from "src/enums/e-effector-type";
import { EEffectorsNames } from "src/enums/e-effectors-names";
import { IConditionalEffect } from "src/interfaces/i-conditional-effect";
import { IVisibleStats } from "src/interfaces/i-visible-stats";
import { CBaseStatsCombined } from "./c-base-stats-combined";
import { CCharacter } from "./c-character";
import { CCombinedSetEffect } from "./c-combined-set-effect";
import { CEffectorsAndValues } from "./c-effectors-and-values";
import { CLightcone } from "./c-lightcone";
import { CRelicSet } from "./c-relic-set";
import { CSet } from "./c-set";

export class CStatsCalculator {
  // Базовые статы
  baseStats: CBaseStatsCombined;
  charBase: CBaseStatsCombined;
  weaponBase: CBaseStatsCombined;

  // Дополнительные статы
  additionalStats: CBaseStatsCombined;

  // Суммарные статы
  sumStats: CBaseStatsCombined;
  // conditionalStats: CBaseStatsCombined = new CBaseStatsCombined();

  allEffectors: CEffectorsAndValues;

  currentLC: CLightcone;
  currentSetsEffects: CCombinedSetEffect;

  conditionalEffects: IConditionalEffect[] = [];

  constructor();
  constructor(data: CStatsCalculator);
  constructor(data?: CStatsCalculator) {
    // Базовая инициализация
    this.baseStats = new CBaseStatsCombined();
    this.charBase = new CBaseStatsCombined();
    this.weaponBase = new CBaseStatsCombined();
    this.additionalStats = new CBaseStatsCombined();
    this.sumStats = new CBaseStatsCombined();

    this.allEffectors = new CEffectorsAndValues();
    this.currentLC = new CLightcone();
    this.currentSetsEffects = new CCombinedSetEffect();
  }

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

  setStatsFromSet(set: CRelicSet) {
    // Удаляем старые эффекторы от реликов и пишем новые
    this.allEffectors.nulifyTypeEffector(EEffectorType.relicsEffectors);
    for (let part of set.getRelicsAsArray()) {
      for (let effect of part.subStats) {
        this.allEffectors.addStatByNameToType(EEffectorType.relicsEffectors, effect.name, effect.value);
      }
    }

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

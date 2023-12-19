import { EPossibleRelicStats } from "src/enums/e-possible-relic-stats";

const mainRelicStats: { name: EPossibleRelicStats; value: number }[] = [
  { name: EPossibleRelicStats.atk, value: 352 },
  { name: EPossibleRelicStats.hp, value: 705 },
  { name: EPossibleRelicStats.atkPercentage, value: 43.2 },
  { name: EPossibleRelicStats.hpPercentage, value: 43.2 },
  { name: EPossibleRelicStats.defPercentage, value: 54 },
  { name: EPossibleRelicStats.critRate, value: 32.4 },
  { name: EPossibleRelicStats.critDmg, value: 64.8 },
  { name: EPossibleRelicStats.outgoingHealingBoost, value: 34.6 },
  { name: EPossibleRelicStats.effectHitRate, value: 43.2 },
  { name: EPossibleRelicStats.spd, value: 25 },
  { name: EPossibleRelicStats.dmgBonus, value: 38.9 },
  { name: EPossibleRelicStats.breakEffect, value: 64.8 },
  { name: EPossibleRelicStats.energyRegenerationRate, value: 19.4 },
];

export default mainRelicStats;

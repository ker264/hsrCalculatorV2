import { EPossibleRelicStats } from "src/enums/e-possible-relic-stats";
import { CRelic } from "./c-relic";

export class CRelicSet {
  name: string = "newSet";
  head: CRelic = new CRelic(EPossibleRelicStats.hp);
  arms: CRelic = new CRelic(EPossibleRelicStats.atk);
  body: CRelic = new CRelic(
    EPossibleRelicStats.hpPercentage,
    EPossibleRelicStats.atkPercentage,
    EPossibleRelicStats.defPercentage,
    EPossibleRelicStats.critRate,
    EPossibleRelicStats.critDmg,
    EPossibleRelicStats.outgoingHealingBoost,
    EPossibleRelicStats.effectHitRate
  );
  feet: CRelic = new CRelic(EPossibleRelicStats.hpPercentage, EPossibleRelicStats.atkPercentage, EPossibleRelicStats.defPercentage, EPossibleRelicStats.spd);
  rope: CRelic = new CRelic(
    EPossibleRelicStats.breakEffect,
    EPossibleRelicStats.energyRegenerationRate,
    EPossibleRelicStats.hpPercentage,
    EPossibleRelicStats.atkPercentage,
    EPossibleRelicStats.defPercentage
  );
  planar: CRelic = new CRelic(
    EPossibleRelicStats.hpPercentage,
    EPossibleRelicStats.atkPercentage,
    EPossibleRelicStats.defPercentage,
    EPossibleRelicStats.dmgBonus
  );
}

import mainRelicStats from "src/database/others/mainRelicStats";
import { EPossibleRelicStats } from "src/enums/e-possible-relic-stats";
import { ERelicParts } from "src/enums/e-relic-parts";
import { CRelic } from "./c-relic";

export class CRelicSet {
  name: string = "newSet";

  head: CRelic;
  arms: CRelic;
  body: CRelic;
  feet: CRelic;
  rope: CRelic;
  sphere: CRelic;

  constructor();
  constructor(serialisedData: CRelicSet);
  constructor(serialisedData?: CRelicSet) {
    if (serialisedData) {
      this.name = serialisedData.name;
      this.head = serialisedData.head;
      this.arms = serialisedData.arms;
      this.body = serialisedData.body;
      this.feet = serialisedData.feet;
      this.rope = serialisedData.rope;
      this.sphere = serialisedData.sphere;
    } else {
      this.head = new CRelic({ stats: [EPossibleRelicStats.hp] });
      this.arms = new CRelic({ stats: [EPossibleRelicStats.atk] });
      this.body = new CRelic({
        stats: [
          EPossibleRelicStats.hpPercentage,
          EPossibleRelicStats.atkPercentage,
          EPossibleRelicStats.defPercentage,
          EPossibleRelicStats.critRate,
          EPossibleRelicStats.critDmg,
          EPossibleRelicStats.effectHitRate,
          EPossibleRelicStats.outgoingHealingBoost,
        ],
      });
      this.feet = new CRelic({
        stats: [EPossibleRelicStats.hpPercentage, EPossibleRelicStats.atkPercentage, EPossibleRelicStats.defPercentage, EPossibleRelicStats.spd],
      });
      this.rope = new CRelic({
        stats: [
          EPossibleRelicStats.hpPercentage,
          EPossibleRelicStats.atkPercentage,
          EPossibleRelicStats.defPercentage,
          EPossibleRelicStats.breakEffect,
          EPossibleRelicStats.energyRegenerationRate,
        ],
      });
      this.sphere = new CRelic({
        stats: [EPossibleRelicStats.hpPercentage, EPossibleRelicStats.atkPercentage, EPossibleRelicStats.defPercentage, EPossibleRelicStats.dmgBoostAll],
      });

      // Картинки
      this.head.relicImgSrc = "assets/relicParts/IconRelicHead.png";
      this.arms.relicImgSrc = "assets/relicParts/IconRelicHands.png";
      this.body.relicImgSrc = "assets/relicParts/IconRelicBody.png";
      this.feet.relicImgSrc = "assets/relicParts/IconRelicFoot.png";
      this.sphere.relicImgSrc = "assets/relicParts/IconRelicSphere.png";
      this.rope.relicImgSrc = "assets/relicParts/IconRelicRope.png";

      // Части сетов
      this.head.setPart = ERelicParts.head;
      this.body.setPart = ERelicParts.body;
      this.arms.setPart = ERelicParts.arms;
      this.feet.setPart = ERelicParts.feet;
      this.sphere.setPart = ERelicParts.sphere;
      this.rope.setPart = ERelicParts.rope;

      // Инициализация мейн статов
      this.head.subStats.find((item) => item.name == this.head.mainStat)!.value = mainRelicStats.find((item) => item.name == this.head.mainStat)!.value;
      this.body.subStats.find((item) => item.name == this.body.mainStat)!.value = mainRelicStats.find((item) => item.name == this.body.mainStat)!.value;
      this.arms.subStats.find((item) => item.name == this.arms.mainStat)!.value = mainRelicStats.find((item) => item.name == this.arms.mainStat)!.value;
      this.feet.subStats.find((item) => item.name == this.feet.mainStat)!.value = mainRelicStats.find((item) => item.name == this.feet.mainStat)!.value;
      this.sphere.subStats.find((item) => item.name == this.sphere.mainStat)!.value = mainRelicStats.find((item) => item.name == this.sphere.mainStat)!.value;
      this.rope.subStats.find((item) => item.name == this.rope.mainStat)!.value = mainRelicStats.find((item) => item.name == this.rope.mainStat)!.value;
    }
  }

  getRelicsAsArray() {
    return [this.head, this.arms, this.body, this.feet, this.sphere, this.rope];
  }
}

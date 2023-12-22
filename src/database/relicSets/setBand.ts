import { CSet } from "src/classes/c-set";
import { CSetEffect } from "src/classes/c-set-effect";
import { CStatsCalculator } from "src/classes/c-visible-stats";
import { EAdditionalConditionTypes } from "src/enums/e-additional-condition-types";
import { ECondition } from "src/enums/e-condition";
import { EEffectorType } from "src/enums/e-effector-type";
import { EEffectorsNames } from "src/enums/e-effectors-names";
import { ESetNames } from "src/enums/e-set-names";
import { ESetTypes } from "src/enums/e-set-types";

const setBandOfSizzlingThunder: CSet = new CSet({
  name: ESetNames.Band_of_Sizzling_Thunder,
  type: ESetTypes.common,
  twoPieceEffects: new CSetEffect({
    description: "Increases Lightning DMG by 10%",
    unconditionalEffects: [{ isOnlyForThisMove: false, statName: EEffectorsNames.dmgBoostLightning, changeValue: 10 }],
  }),
  fourPieceEffects: new CSetEffect({
    description: "When the wearer uses Skill, increases the wearer's ATK by 20% for 1 turn(s)",
    additionalNumbers: [{ description: "skill used", type: EAdditionalConditionTypes.simple, value: 0 }],
    conditionalEffects: [
      {
        condition: ECondition.changedSetEfefcts,
        effect: (allcharStats: CStatsCalculator) => {
          let effect = allcharStats.currentSetsEffects.secondNormalEffect.effect;
          if (effect.additionalNumbers![0].value == 1) {
            allcharStats.allEffectors.nulifyTypeEffector(EEffectorType.setEffectorsSecond);
            allcharStats.allEffectors.addStatByNameToType(EEffectorType.setEffectorsSecond, EEffectorsNames.atkPercentage, 20);
          }
        },
      },
    ],
  }),
  img: "assets/relicSets/71008.png",
});

export default setBandOfSizzlingThunder;

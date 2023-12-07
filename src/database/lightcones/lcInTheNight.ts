import { CLightcone } from "src/classes/c-lightcone";
import { ECondition } from "src/enums/e-condition";
import { EEffectorsNames } from "src/enums/e-effectors-names";
import { ELcNames } from "src/enums/e-lc-names";
import { EPath } from "src/enums/e-path";
import { ERarity } from "src/enums/e-rarity";

let lcInTheNight: CLightcone = new CLightcone({
  // Общая инфа
  name: ELcNames.InTheNight,
  path: EPath.hunt,
  rarity: ERarity.star5,

  // Статы
  hp: 1058,
  atk: 582,
  def: 463,

  // Остальное
  isSupportable: false,
  numbers: [
    [18, 21, 24, 27, 30],
    [6, 7, 8, 9, 10],
    [12, 14, 16, 18, 20],
  ],
  description() {
    return `Increases the wearer's CRIT Rate by ${lcInTheNight.getNum(0)}%. 
    While the wearer is in battle, for every 10 SPD that exceeds 100, the DMG of the wearer's Basic ATK and Skill is increased by ${lcInTheNight.getNum(1)}%
     and the CRIT DMG of their Ultimate is increased by ${lcInTheNight.getNum(2)}%. This effect can stack up to 6 time(s).`;
  },
  unconditionalEffects: [{ name: EEffectorsNames.critRate, value: 0 }], // value - первичный индекс из numbers
  conditionalEffects: [
    {
      condition: ECondition.useBasic,
      effect(allcharStats) {
        let stacks = Math.floor((allcharStats.sumStats.getStatByName(EEffectorsNames.spd) - 100) / 10);
        allcharStats.sumStats.addStatByName(EEffectorsNames.dmgBoostBasic, allcharStats.currentLC.numbers[1][allcharStats.currentLC.refinment - 1] * stacks);
      },
    },
    {
      condition: ECondition.useSkill,
      effect(allcharStats) {
        let stacks = Math.floor((allcharStats.sumStats.getStatByName(EEffectorsNames.spd) - 100) / 10);
        allcharStats.sumStats.addStatByName(EEffectorsNames.dmgBoostSkill, allcharStats.currentLC.numbers[1][allcharStats.currentLC.refinment - 1] * stacks);
      },
    },
    {
      condition: ECondition.useUltimate,
      effect(allcharStats) {
        let stacks = Math.floor((allcharStats.sumStats.getStatByName(EEffectorsNames.spd) - 100) / 10);
        allcharStats.sumStats.addStatByName(EEffectorsNames.critDmg, allcharStats.currentLC.numbers[2][allcharStats.currentLC.refinment - 1] * stacks);
      },
    },
  ],
});

export default lcInTheNight;

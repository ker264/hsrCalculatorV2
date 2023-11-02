import { CLightcone } from "src/classes/c-lightcone";
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
});

export default lcInTheNight;

import { CAbility } from "src/classes/c-ability";
import { CCharacter } from "src/classes/c-character";
import { ECharNames } from "src/enums/e-char-names";
import { EEffectorsNames } from "src/enums/e-effectors-names";
import { EElement } from "src/enums/e-element";
import { EPath } from "src/enums/e-path";
import { ERarity } from "src/enums/e-rarity";

let charSeele: CCharacter = {
  name: ECharNames.Seele,
  path: EPath.hunt,
  element: EElement.quantum,
  rarity: ERarity.star5,
  img: "assets/characters/Seele.png",

  //Базовые статы
  atk: 640,
  def: 363,
  hp: 931,
  spd: 115,

  // TODO Сделать вывод способностей и добавить условные статы от них
  // Способности
  basic: new CAbility(),
  skill: new CAbility(),
  ult: new CAbility(),
  talent: new CAbility(),
  supportAbilities: [],

  // Статы от трейсов
  traces: [
    { statChangeDescription: EEffectorsNames.defPercentage, statChangeValue: 12.5 },
    { statChangeDescription: EEffectorsNames.atkPercentage, statChangeValue: 28 },
    { statChangeDescription: EEffectorsNames.critDmg, statChangeValue: 24 },
  ],
};

export default charSeele;

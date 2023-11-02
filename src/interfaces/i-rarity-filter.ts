import { ERarity } from "src/enums/e-rarity";

export interface IRarityFilter {
  rarity: ERarity;
  isChosen: boolean;
  img: string;
}

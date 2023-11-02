import { ECharNames } from "src/enums/e-char-names";
import { CCharacter } from "./c-character";

export class CAllCharacters {
  characters: CCharacter[] = [];

  push(newChar: CCharacter) {
    this.characters.push(newChar);
  }

  find(name: ECharNames) {
    return this.characters.find((a) => a.name) ?? new CCharacter();
  }
}

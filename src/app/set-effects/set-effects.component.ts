import { Component, EventEmitter, Output } from "@angular/core";
import { CSet } from "src/classes/c-set";
import allSets from "src/database/relicSets/allSets";

@Component({
  selector: "app-set-effects",
  templateUrl: "./set-effects.component.html",
  styleUrls: ["./set-effects.component.scss"],
})
export class SetEffectsComponent {
  @Output() closeEffectsMenu: EventEmitter<boolean> = new EventEmitter();

  allSetEffects: CSet[];

  constructor() {
    this.allSetEffects = allSets;
  }

  /**
   * Закрыть окно выбора персонажа
   */
  close() {
    this.closeEffectsMenu.emit(false);
  }
}

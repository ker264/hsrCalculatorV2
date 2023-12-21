import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-set-effects",
  templateUrl: "./set-effects.component.html",
  styleUrls: ["./set-effects.component.scss"],
})
export class SetEffectsComponent {
  @Output() closeEffectsMenu: EventEmitter<boolean> = new EventEmitter();

  constructor() {}

  /**
   * Закрыть окно выбора персонажа
   */
  close() {
    this.closeEffectsMenu.emit(false);
  }
}

import { Component } from "@angular/core";
import { CLightcone } from "src/classes/c-lightcone";
import allLightcones from "src/database/lightcones/allLightcones";
import { EMainPageStates } from "src/enums/e-main-page-states";
import { EPath } from "src/enums/e-path";
import { ERarity } from "src/enums/e-rarity";
import { IRarityFilter } from "src/interfaces/i-rarity-filter";
import { BattleServiceService } from "src/services/battle-service.service";
import { MainFormStateManagerService } from "src/services/main-form-state-manager.service";

@Component({
  selector: "app-lightcone-picker",
  templateUrl: "./lightcone-picker.component.html",
  styleUrls: ["./lightcone-picker.component.scss"],
})
export class LightconePickerComponent {
  allLightcones = allLightcones;
  charPath: EPath | undefined;

  constructor(private stateManager: MainFormStateManagerService, private battleManager: BattleServiceService) {
    this.charPath = battleManager.getCurrentCharPath();
  }

  // Фильтры
  rarityFilters: IRarityFilter[] = [
    { rarity: ERarity.star3, isChosen: false, img: "assets/elements/IconWhiteFire.png" },
    { rarity: ERarity.star4, isChosen: false, img: "assets/elements/IconWhiteFire.png" },
    { rarity: ERarity.star5, isChosen: false, img: "assets/elements/IconWhiteFire.png" },
  ];

  // Переключить переменную для применения фильтра
  applyFilter: boolean = false;

  /**
   * Закрыть окно выбора конуса
   */
  close() {
    this.stateManager.switchState(EMainPageStates.normal);
  }

  setLightcone(lc: CLightcone) {
    this.battleManager.setLightcone(lc);
    this.close();
  }
}

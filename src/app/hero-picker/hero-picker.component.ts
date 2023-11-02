import { Component } from "@angular/core";
import { Subscription } from "rxjs";
import { CCharacter } from "src/classes/c-character";
import allCharacters from "src/database/characters/allCharacters";
import { EElement } from "src/enums/e-element";
import { EMainPageStates } from "src/enums/e-main-page-states";
import { EPath } from "src/enums/e-path";
import iElementFilter from "src/interfaces/i-element-filter";
import iPathFilter from "src/interfaces/i-path-filter";
import { BattleServiceService } from "src/services/battle-service.service";
import { MainFormStateManagerService } from "src/services/main-form-state-manager.service";

@Component({
  selector: "app-hero-picker",
  templateUrl: "./hero-picker.component.html",
  styleUrls: ["./hero-picker.component.scss"],
})
export class HeroPickerComponent {
  constructor(private stateManager: MainFormStateManagerService, private battleManager: BattleServiceService) {}

  allCharacters = allCharacters;

  // Фильтры
  pathFilters: iPathFilter[] = [
    { path: EPath.abundance, isChosen: false, img: "assets/paths/IconAbundance.png" },
    { path: EPath.destruction, isChosen: false, img: "assets/paths/IconDestruction.png" },
    { path: EPath.erudition, isChosen: false, img: "assets/paths/IconErudition.png" },
    { path: EPath.harmony, isChosen: false, img: "assets/paths/IconHarmony.png" },
    { path: EPath.hunt, isChosen: false, img: "assets/paths/IconHunt.png" },
    { path: EPath.nihility, isChosen: false, img: "assets/paths/IconNihility.png" },
    { path: EPath.preservation, isChosen: false, img: "assets/paths/IconPreservation.png" },
  ];

  elementFilters: iElementFilter[] = [
    { element: EElement.fire, isChosen: false, img: "assets/elements/IconWhiteFire.png" },
    { element: EElement.ice, isChosen: false, img: "assets/elements/IconWhiteIce.png" },
    { element: EElement.imaginary, isChosen: false, img: "assets/elements/IconWhiteImaginary.png" },
    { element: EElement.lightning, isChosen: false, img: "assets/elements/IconWhiteThunder.png" },
    { element: EElement.physical, isChosen: false, img: "assets/elements/IconWhitePhysical.png" },
    { element: EElement.quantum, isChosen: false, img: "assets/elements/IconWhiteQuantum.png" },
    { element: EElement.wind, isChosen: false, img: "assets/elements/IconWhiteWind.png" },
  ];

  nameFilter: string = "";

  // Переключить переменную для применения фильтра
  applyFilter: boolean = false;

  /**
   * Закрыть окно выбора персонажа
   */
  close() {
    this.stateManager.switchState(EMainPageStates.normal);
  }

  /**
   * Переключить фильтр
   * @param oneFilter: iPathFilter
   */
  switchPathFilter(oneFilter: iPathFilter) {
    oneFilter.isChosen = !oneFilter.isChosen;
    this.goFilter();
  }

  /**
   * Переключить фильтр
   * @param oneElement: iElementFilter
   */
  switchElementFilter(oneElement: iElementFilter) {
    oneElement.isChosen = !oneElement.isChosen;
    this.goFilter();
  }

  // Применить фильтр
  private goFilter() {
    this.applyFilter = !this.applyFilter;
  }

  setCharacter(char: CCharacter) {
    this.battleManager.setCharacter(char);
    this.close();
  }
}

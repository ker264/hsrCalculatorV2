import { Component } from "@angular/core";
import { Subscription } from "rxjs";
import { CCharacter } from "src/classes/c-character";
import { CEnemy } from "src/classes/c-enemy";
import { CLightcone } from "src/classes/c-lightcone";
import { CRelicSet } from "src/classes/c-relic-set";
import { CSetEffect } from "src/classes/c-set-effect";
import allCharacters from "src/database/characters/allCharacters";
import allLightcones from "src/database/lightcones/allLightcones";
import { ECharNames } from "src/enums/e-char-names";
import { ELcNames } from "src/enums/e-lc-names";
import { EMainPageStates } from "src/enums/e-main-page-states";
import { BattleServiceService } from "src/services/battle-service.service";
import { MainFormStateManagerService } from "src/services/main-form-state-manager.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "hsrCalculatorV2";
  subs: Subscription;

  //Тестовые параметры под удаление потом

  // Параметры боя
  character?: CCharacter;
  lightcone: CLightcone = new CLightcone();

  // Параметры для переключения вида страницы
  mainPageState = EMainPageStates.normal;

  constructor(private stateManager: MainFormStateManagerService, private battleManager: BattleServiceService) {
    // Работа с сервисом состояний страниц
    this.subs = stateManager.mainPageState$.subscribe((state) => (this.mainPageState = state));

    // Работа с боевым сервисом
    this.subs = battleManager.character$.subscribe((char) => (this.character = char));
    this.subs = battleManager.lightcone$.subscribe((lc) => (this.lightcone = lc));
  }

  testMove() {
    console.log(allCharacters);
  }

  chooseHero() {
    this.stateManager.switchState(EMainPageStates.pickHero);
  }

  chooseLightcone() {
    this.stateManager.switchState(EMainPageStates.pickLightcone);
  }
}

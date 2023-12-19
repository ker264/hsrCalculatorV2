import { Component } from "@angular/core";
import { CRelic } from "src/classes/c-relic";
import { CRelicSet } from "src/classes/c-relic-set";
import { CStat } from "src/classes/c-stat";
import mainRelicStats from "src/database/others/mainRelicStats";
import { EMainPageStates } from "src/enums/e-main-page-states";
import { EPossibleRelicStats } from "src/enums/e-possible-relic-stats";
import { ERelicParts } from "src/enums/e-relic-parts";
import { BattleServiceService } from "src/services/battle-service.service";
import { LocalStorageService } from "src/services/local-storage.service";
import { MainFormStateManagerService } from "src/services/main-form-state-manager.service";

@Component({
  selector: "app-relics",
  templateUrl: "./relics.component.html",
  styleUrls: ["./relics.component.scss"],
})
export class RelicsComponent {
  // Данные по реликвиям
  relicSet: CRelicSet;

  a() {
    console.log(this.relicSet);
    console.log(this.battleManager.relicSet);
  }

  handleMainStatChange(subStat: CStat, setPart: CRelic) {
    setPart.subStats.find((item) => item.name == setPart.mainStat)!.value = 0;
    setPart.mainStat = <EPossibleRelicStats>subStat.name;
    subStat.value = mainRelicStats.find((item) => item.name == subStat.name)!.value;
  }

  //TODO Доделать интерфейс, добавить кнопку удаления в правый столбец

  constructor(private stateManager: MainFormStateManagerService, private battleManager: BattleServiceService, private lsService: LocalStorageService) {
    //TODO Написать чтение данных из localStorage для CRelicSet
    let data = lsService.getData("testSet");
    this.battleManager.relicSet = new CRelicSet(data);

    this.relicSet = battleManager.relicSet;
  }

  /**
   * Закрыть окно выбора конуса
   */
  close() {
    this.stateManager.switchState(EMainPageStates.normal);
  }

  //TODO Вставить проверку на замену если имя сета соответствует уже существующему
  saveSet() {
    this.lsService.setData("testSet", this.relicSet);
  }

  loadSet() {
    this.lsService.setData("testSet", this.relicSet);
  }
}

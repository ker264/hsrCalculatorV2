import { Component } from "@angular/core";
import { CRelicSet } from "src/classes/c-relic-set";
import { EMainPageStates } from "src/enums/e-main-page-states";
import { BattleServiceService } from "src/services/battle-service.service";
import { MainFormStateManagerService } from "src/services/main-form-state-manager.service";

@Component({
  selector: "app-relics",
  templateUrl: "./relics.component.html",
  styleUrls: ["./relics.component.scss"],
})
export class RelicsComponent {
  // Данные для html разметки
  relicDiv: { name: string; img: string }[] = [
    { name: "Head", img: "assets/relicParts/IconRelicHead.png" },
    { name: "Hands", img: "assets/relicParts/IconRelicHands.png" },
    { name: "Body", img: "assets/relicParts/IconRelicBody.png" },
    { name: "Foot", img: "assets/relicParts/IconRelicFoot.png" },
    { name: "Sphere", img: "assets/relicParts/IconRelicSphere.png" },
    { name: "Rope", img: "assets/relicParts/IconRelicRope.png" },
  ];

  // Данные по реликвиям
  relicSet: CRelicSet = new CRelicSet();

  // a(){
  //   EPossibleSubStats.
  // }

  constructor(private stateManager: MainFormStateManagerService, private battleManager: BattleServiceService) {
    console.log(this.relicSet);
  }

  /**
   * Закрыть окно выбора конуса
   */
  close() {
    this.stateManager.switchState(EMainPageStates.normal);
  }
}

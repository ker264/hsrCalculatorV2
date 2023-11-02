import { Component } from "@angular/core";
import { Subscription } from "rxjs";
import { CCharacter } from "src/classes/c-character";
import { CLightcone } from "src/classes/c-lightcone";
import { CVisibleStats } from "src/classes/c-visible-stats";
import { ELcNames } from "src/enums/e-lc-names";
import { BattleServiceService } from "src/services/battle-service.service";

@Component({
  selector: "app-character-stats",
  templateUrl: "./character-stats.component.html",
  styleUrls: ["./character-stats.component.scss"],
})
export class CharacterStatsComponent {
  subs: Subscription;

  // Статы
  stats: CVisibleStats = new CVisibleStats();

  constructor(private battleManager: BattleServiceService) {
    // Работа с сервисом
    this.subs = battleManager.character$.subscribe((char) => this.manageNewCharacter(char));
    this.subs = battleManager.lightcone$.subscribe((lc) => this.manageNewLighcone(lc));
  }

  private manageNewCharacter(char: CCharacter | undefined) {
    if (!char) {
      this.stats.nulifyStats();
      return;
    }
    this.stats.setStatsFromCharacter(char);
  }

  private manageNewLighcone(lc: CLightcone) {
    if (lc.name == ELcNames.notChosen) return;
    console.log(lc);
  }
}

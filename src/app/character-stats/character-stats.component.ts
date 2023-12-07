import { Component } from "@angular/core";
import { Subscription } from "rxjs";
import { CBaseStatsCombined } from "src/classes/c-base-stats-combined";
import { CStatsCalculator } from "src/classes/c-visible-stats";
import { IVisibleStats } from "src/interfaces/i-visible-stats";
import { BattleServiceService } from "src/services/battle-service.service";

@Component({
  selector: "app-character-stats",
  templateUrl: "./character-stats.component.html",
  styleUrls: ["./character-stats.component.scss"],
})
export class CharacterStatsComponent {
  subs: Subscription;

  // Статы
  stats: IVisibleStats[] = CStatsCalculator.getPlaceholderStats();

  constructor(private battleManager: BattleServiceService) {
    // Работа с сервисом
    this.subs = battleManager.visibleBaseStats$.subscribe((newStats) => (this.stats = newStats));
  }
}

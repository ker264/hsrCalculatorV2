import { Injectable } from "@angular/core";
import { debounce } from "lodash";
import { BehaviorSubject, Subject } from "rxjs";
import { CBaseStatsCombined } from "src/classes/c-base-stats-combined";
import { CCharacter } from "src/classes/c-character";
import { CEnemy } from "src/classes/c-enemy";
import { CLightcone } from "src/classes/c-lightcone";
import { CRelicSet } from "src/classes/c-relic-set";
import { CSetEffect } from "src/classes/c-set-effect";
import { CStatsCalculator } from "src/classes/c-visible-stats";
import { EEffectorsNames } from "src/enums/e-effectors-names";
import { EPath } from "src/enums/e-path";
import { IVisibleStats } from "src/interfaces/i-visible-stats";

@Injectable({
  providedIn: "root",
})
export class BattleServiceService {
  // debouncer
  private debouncedSetUpdate = debounce(() => {
    this.stats.setStatsFromSet(this.relicSet);
    this.visibleBaseStats.next(this.stats.getVisibleStats());
  }, 500);

  // Параметры для расчета урона
  private character = new BehaviorSubject<CCharacter | undefined>(undefined);
  public character$ = this.character.asObservable();

  private lightcone = new BehaviorSubject<CLightcone>(new CLightcone());
  public lightcone$ = this.lightcone.asObservable();

  private stats = new CStatsCalculator();
  private visibleBaseStats = new Subject<IVisibleStats[]>();
  public visibleBaseStats$ = this.visibleBaseStats.asObservable();

  supports: CCharacter[] = [];
  enemies: CEnemy[] = [];
  relicSet: CRelicSet = new CRelicSet();
  setEffects: CSetEffect[] = [];
  supportLCs: CLightcone[] = [];

  public setCharacter(character: CCharacter) {
    this.character.next(character);
    this.stats.setStatsFromCharacter(character);
    this.visibleBaseStats.next(this.stats.getVisibleStats());
  }

  public setLightcone(lightcone: CLightcone) {
    this.lightcone.next(lightcone);
    this.stats.setStatsFromLC(lightcone);
    this.visibleBaseStats.next(this.stats.getVisibleStats());
  }

  public setSet() {
    this.debouncedSetUpdate();
  }

  public getCurrentCharPath(): EPath | undefined {
    return this.character.getValue()?.path;
  }

  constructor() {}
}

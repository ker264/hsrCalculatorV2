import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { CCharacter } from "src/classes/c-character";
import { CEnemy } from "src/classes/c-enemy";
import { CLightcone } from "src/classes/c-lightcone";
import { CRelicSet } from "src/classes/c-relic-set";
import { CSetEffect } from "src/classes/c-set-effect";
import { EPath } from "src/enums/e-path";

@Injectable({
  providedIn: "root",
})
export class BattleServiceService {
  // Параметры для расчета урона
  private character = new BehaviorSubject<CCharacter | undefined>(undefined);
  public character$ = this.character.asObservable();

  private lightcone = new Subject<CLightcone>();
  public lightcone$ = this.lightcone.asObservable();

  supports: CCharacter[] = [];
  enemies: CEnemy[] = [];
  relicSet: CRelicSet = new CRelicSet();
  setEffects: CSetEffect[] = [];
  supportLCs: CLightcone[] = [];

  public setCharacter(character: CCharacter) {
    this.character.next(character);
  }

  public setLightcone(lightcone: CLightcone) {
    this.lightcone.next(lightcone);
  }

  public getCurrentCharPath(): EPath | undefined {
    return this.character.getValue()?.path;
  }
  constructor() {}
}

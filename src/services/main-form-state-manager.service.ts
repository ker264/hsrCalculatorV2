import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { EMainPageStates } from "src/enums/e-main-page-states";

@Injectable({
  providedIn: "root",
})
export class MainFormStateManagerService {
  private mainPageState = new Subject<EMainPageStates>();
  public mainPageState$ = this.mainPageState.asObservable();

  public switchState(newState: EMainPageStates) {
    this.mainPageState.next(newState);
  }

  constructor() {}
}

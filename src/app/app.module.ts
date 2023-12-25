import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { HeroPickerComponent } from "./hero-picker/hero-picker.component";
import { CharFilterPipe } from "../pipes/char-filter.pipe";
import { CharacterStatsComponent } from "./character-stats/character-stats.component";
import { LightconePickerComponent } from "./lightcone-picker/lightcone-picker.component";
import { LcFilterPipe } from "../pipes/lc-filter.pipe";
import { RelicsComponent } from "./relics/relics.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { SetEffectsComponent } from "./set-effects/set-effects.component";
import { SetEffectTypeFilterPipe } from "../pipes/set-effect-type-filter.pipe";

@NgModule({
  declarations: [
    AppComponent,
    HeroPickerComponent,
    CharFilterPipe,
    CharacterStatsComponent,
    LightconePickerComponent,
    LcFilterPipe,
    RelicsComponent,
    SetEffectsComponent,
    SetEffectTypeFilterPipe,
  ],
  imports: [BrowserModule, FormsModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

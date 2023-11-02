import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { HeroPickerComponent } from "./hero-picker/hero-picker.component";
import { CharFilterPipe } from "../pipes/char-filter.pipe";
import { CharacterStatsComponent } from "./character-stats/character-stats.component";
import { LightconePickerComponent } from "./lightcone-picker/lightcone-picker.component";
import { LcFilterPipe } from "../pipes/lc-filter.pipe";

@NgModule({
  declarations: [AppComponent, HeroPickerComponent, CharFilterPipe, CharacterStatsComponent, LightconePickerComponent, LcFilterPipe],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { Pipe, PipeTransform } from "@angular/core";
import { CLightcone } from "src/classes/c-lightcone";
import { EPath } from "src/enums/e-path";
import { IRarityFilter } from "src/interfaces/i-rarity-filter";

@Pipe({
  name: "lcFilter",
})
export class LcFilterPipe implements PipeTransform {
  transform(lightcones: CLightcone[], path: EPath | undefined, rarityFilter: IRarityFilter[]): CLightcone[] {
    let isFilterByRarity: boolean = false;

    // Массивы фильтров
    let onRarityFilters: IRarityFilter[] = [];

    for (let item of rarityFilter) {
      if (item.isChosen) {
        isFilterByRarity = true;
        onRarityFilters = rarityFilter.filter((a) => a.isChosen);
        break;
      }
    }

    // Возврат если путь не задан (не выбран персонаж)
    if (path == undefined) return lightcones;

    return lightcones.filter((lc) => {
      let isShow = lc.path == path;

      if (isFilterByRarity)
        onRarityFilters.forEach((filter) => {
          if (lc.rarity == filter.rarity) isShow = true;
        });

      return isShow;
    });
  }
}

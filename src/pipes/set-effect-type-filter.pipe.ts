import { Pipe, PipeTransform } from "@angular/core";
import { CSet } from "src/classes/c-set";
import { ESetTypes } from "src/enums/e-set-types";

@Pipe({
  name: "setEffectTypeFilter",
})
export class SetEffectTypeFilterPipe implements PipeTransform {
  transform(allSets: CSet[], type: ESetTypes): CSet[] {
    return allSets.filter((item) => item.type == type);
  }
}

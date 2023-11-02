import { Pipe, PipeTransform } from "@angular/core";
import { CCharacter } from "src/classes/c-character";
import iElementFilter from "src/interfaces/i-element-filter";
import iPathFilter from "src/interfaces/i-path-filter";
import * as _ from "lodash";

@Pipe({
  name: "charFilter",
})
export class CharFilterPipe implements PipeTransform {
  transform(
    rawCharactersList: CCharacter[],
    pathFilter: iPathFilter[],
    elementFilter: iElementFilter[],
    nameFilter: string,
    applyFilter: boolean
  ): CCharacter[] {
    // Необходимость в фильтрации
    let isFilterByPath: boolean = false;
    let isFilterByElement: boolean = false;
    let isFilterByName: boolean = nameFilter == "" ? false : true;

    // Массивы фильтров
    let onPathFilters: iPathFilter[] = [];
    let onElementFilters: iElementFilter[] = [];

    for (let item of pathFilter) {
      if (item.isChosen) {
        isFilterByPath = true;
        onPathFilters = pathFilter.filter((a) => a.isChosen);
        break;
      }
    }

    for (let item of elementFilter) {
      if (item.isChosen) {
        isFilterByElement = true;
        onElementFilters = elementFilter.filter((a) => a.isChosen);
        break;
      }
    }

    let filteredList = rawCharactersList;

    if (isFilterByPath) {
      filteredList = filteredList.filter((item) => {
        let isOk = false;
        for (let onPath of onPathFilters) {
          if (onPath.path == item.path) {
            isOk = true;
            break;
          }
        }
        return isOk;
      });
    }

    if (isFilterByElement) {
      filteredList = filteredList.filter((item) => {
        let isOk = false;
        for (let onElement of onElementFilters) {
          if (onElement.element == item.element) {
            isOk = true;
            break;
          }
        }
        return isOk;
      });
    }

    if (isFilterByName) {
      filteredList = filteredList.filter((a) => a.name.includes(nameFilter));
    }

    return filteredList;
  }
}

import { CLightcone } from "src/classes/c-lightcone";
import { ELcNames } from "src/enums/e-lc-names";
import { EPath } from "src/enums/e-path";

export class CAllLightcones {
  private lightcones: CLightcone[] = [];

  push(newLC: CLightcone) {
    this.lightcones.push(newLC);
  }

  getByPath(path: EPath) {
    return this.lightcones.filter((lc) => lc.path == path);
  }

  find(name: ELcNames) {
    return this.lightcones.find((a) => a.name) ?? new CLightcone();
  }
}

import { EEffectorType } from "src/enums/e-effector-type";
import { EEffectorsNames } from "src/enums/e-effectors-names";
import { IEffectorContainer } from "src/interfaces/i-effector-container";

export class CEffectorsAndValues {
  // Эффекторы по частям
  private partialEffectors: IEffectorContainer[] = [];

  // Суммарный эффектор
  combinedEffectors: { name: string; value: number }[] = [];

  constructor() {
    for (let eType in EEffectorType) {
      let newEffector: IEffectorContainer = { name: eType, effector: [] };
      for (let name in EEffectorsNames) {
        newEffector.effector.push({ name, value: 0 });
      }
      this.partialEffectors.push(newEffector);
    }
  }

  addStatByNameToType(type: EEffectorType, name: string, value: number) {
    this.partialEffectors.find((item) => item.name == type)!.effector.find((item) => item.name == name)!.value += value;
  }

  nulifyAll() {
    for (let eType in EEffectorType) {
      this.nulifyTypeEffector(<EEffectorType>eType);
    }
  }

  nulifyTypeEffector(type: EEffectorType) {
    this.partialEffectors
      .find((item) => item.name == type)!
      .effector.forEach((element) => {
        element.value = 0;
      });
  }

  calculateSumEffector(): IEffectorContainer {
    let newEffector: IEffectorContainer = { name: "finalEffectors", effector: [] };
    let index = 0;
    for (let name in EEffectorsNames) {
      let valueForName = 0;

      for (let effector of this.partialEffectors) {
        valueForName += effector.effector[index].value;
      }

      newEffector.effector.push({ name, value: valueForName });
      index++;
    }

    return newEffector;
  }
}

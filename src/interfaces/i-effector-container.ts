import { EEffectorType } from "src/enums/e-effector-type";

export interface IEffectorContainer {
  name: string;
  effector: { name: string; value: number }[];
}

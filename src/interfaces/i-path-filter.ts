import { EPath } from "src/enums/e-path";

export default interface iPathFilter {
  path: EPath;
  isChosen: boolean;
  img: string;
}

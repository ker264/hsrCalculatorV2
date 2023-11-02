import { EElement } from "src/enums/e-element";

export default interface iElementFilter {
  element: EElement;
  isChosen: boolean;
  img: string;
}

import { Doc } from "../convex/_generated/dataModel";

export type GameDataType = {
  data: Doc<"games">[];
  page: number;
};

import { PhotoVM } from "../../core/model";

export const dedupeById = (arr: PhotoVM[]) => {
  const map = new Map(arr.map((p) => [p.id, p]));
  return Array.from(map.values());
};

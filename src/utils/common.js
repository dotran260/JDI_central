import { trim } from "lodash";

export function trimValueObject(object) {
  const oldData = { ...object };
  for (const [key, value] of Object.entries(oldData)) {
    if (typeof value === "string") {
      oldData[key] = trim(value);
    }
  }
  return oldData;
}

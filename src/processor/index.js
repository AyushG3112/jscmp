import { readFile } from "../filereader";
import compare from "./compare";
import { buildAbsolutePath } from "../utils";

export default function processor(fileA, fileB, options = {}) {
  const dataA = readFile(buildAbsolutePath(fileA), options);
  const dataB = readFile(buildAbsolutePath(fileB), options);
  return compare({ fileA, dataA }, { fileB, dataB }, []);
}

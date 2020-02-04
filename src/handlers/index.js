import DefaultHandler from "./defaultHandler";
import JSONHandler from "./jsonHandler";
import CSVHandler from "./csvHandler";

export default function getHandler(options = {}) {
  switch (options.mode) {
    case "json":
      return new JSONHandler(options);
    case "csv":
      return new CSVHandler(options);
    default:
      return new DefaultHandler(options);
  }
}

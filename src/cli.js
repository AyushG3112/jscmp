require = require("esm")(module /*, options*/);
import argumentParser from "./argumentParser";
import process from "./processor";
import getHandler from "./handlers";

export function cli(args) {
  const cliArgs = argumentParser.build(args);
  const errors = cliArgs.validate();
  if (!errors.length) {
    const result = process(...cliArgs.args.files, cliArgs);
    getHandler(cliArgs).handle(result);
  } else {
    throw new Error(errors[0]);
  }
}

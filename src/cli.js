require = require("esm")(module /*, options*/);
import argumentParser from "./argumentParser";
import process from "./processor";
import getHandler from "./handlers";

export async function cli(args) {
  const cliArgs = argumentParser.build(args);
  const errors = cliArgs.validate();
  if (!errors.length) {
    const result = process(...cliArgs.args.files, cliArgs);
    await (getHandler(cliArgs.args).handle(result));
  } else {
    throw new Error(errors[0]);
  }
}
